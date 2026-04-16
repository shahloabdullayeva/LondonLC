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

// ============================================================
// CAMBRIDGE IELTS 11 – LISTENING TEST 2
// Parts: 1) Enquiry about joining Youth Council — Roger Brown
//        2) New staff at theatre (three Choose-TWO + A–G plan
//           labelling of the ground floor)
//        3) Rocky Bay field trip (MCQ + two Choose-TWO on splash
//           zone and error reasons)
//        4) Designing the Taylor Concert Hall (notes)
// ============================================================
export const cambridge11_listening_t2: IELTSTest = {
  id: "cam11-listening-t2",
  title: "Cambridge IELTS 11 – Listening Test 2",
  bookNumber: 11,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam11-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam11-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Enquiry about joining Youth Council

Name: Roger Brown
Age: 18
Currently staying in a 1 _______ during the week
Postal address: 17, 2 _______ Street, Stamford, Lincs
Postcode: 3 _______
Occupation: student and part-time job as a 4 _______
Studying 5 _______ (major subject) and history (minor subject)
Hobbies: does a lot of 6 _______, and is interested in the 7 _______
On Youth Council, wants to work with young people who are 8 _______
Will come to talk to the Elections Officer next Monday at 9 _______ p.m.
Mobile number: 10 _______`,
      questions: [
        { id: "cam11-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. Currently staying in a _______ during the week", correctAnswer: "hostel", points: 1 },
        { id: "cam11-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. 17, _______ Street, Stamford, Lincs", correctAnswer: "Buckleigh", points: 1 },
        { id: "cam11-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. Postcode: _______", correctAnswer: "PE9 7QT", points: 1 },
        { id: "cam11-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. part-time job as a _______", correctAnswer: "waiter", points: 1 },
        { id: "cam11-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. Studying _______ (major subject)", correctAnswer: "politics", points: 1 },
        { id: "cam11-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. does a lot of _______", correctAnswer: "cycling", points: 1 },
        { id: "cam11-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. is interested in the _______", correctAnswer: "cinema", points: 1 },
        { id: "cam11-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. wants to work with young people who are _______", correctAnswer: "disabled", points: 1 },
        { id: "cam11-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. next Monday at _______ p.m.", correctAnswer: "4.30/half past four", points: 1 },
        { id: "cam11-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. Mobile number: _______", correctAnswer: "07788 136711", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam11-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13 & 14: Choose TWO letters, A–E.
Questions 15 & 16: Choose TWO letters, A–E.
Questions 17–20: Label the ground-floor plan of the theatre below. Write the correct letter, A–G, next to each area.`,
      passageTitle: "New staff at theatre",
      diagramUrl: imageUrl("cam11test2map.png"),
      questions: [
        {
          id: "cam11-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO changes have been made so far during the refurbishment of the theatre?\n\nA  Some rooms now have a different use.\nB  A different type of seating has been installed.\nC  An elevator has been installed.\nD  The outside of the building has been repaired.\nE  Extra seats have been added.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  Some rooms now have a different use.", value: "A" },
            { label: "B  A different type of seating has been installed.", value: "B" },
            { label: "C  An elevator has been installed.", value: "C" },
            { label: "D  The outside of the building has been repaired.", value: "D" },
            { label: "E  Extra seats have been added.", value: "E" },
          ],
          correctAnswer: "A/B", points: 1,
        },
        {
          id: "cam11-l-t2-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  Some rooms now have a different use.", value: "A" },
            { label: "B  A different type of seating has been installed.", value: "B" },
            { label: "C  An elevator has been installed.", value: "C" },
            { label: "D  The outside of the building has been repaired.", value: "D" },
            { label: "E  Extra seats have been added.", value: "E" },
          ],
          correctAnswer: "A/B", points: 1,
        },
        {
          id: "cam11-l-t2-s2-q13", number: 13,
          groupLabel: `Questions 13 and 14: Choose TWO letters, A–E.\n\nWhich TWO facilities does the theatre currently offer to the public?\n\nA  rooms for hire\nB  backstage tours\nC  hire of costumes\nD  a bookshop\nE  a café\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "13. Choose TWO (first answer)",
          options: [
            { label: "A  rooms for hire", value: "A" },
            { label: "B  backstage tours", value: "B" },
            { label: "C  hire of costumes", value: "C" },
            { label: "D  a bookshop", value: "D" },
            { label: "E  a café", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam11-l-t2-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Choose TWO (second answer)",
          options: [
            { label: "A  rooms for hire", value: "A" },
            { label: "B  backstage tours", value: "B" },
            { label: "C  hire of costumes", value: "C" },
            { label: "D  a bookshop", value: "D" },
            { label: "E  a café", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam11-l-t2-s2-q15", number: 15,
          groupLabel: `Questions 15 and 16: Choose TWO letters, A–E.\n\nWhich TWO workshops does the theatre currently offer?\n\nA  sound\nB  acting\nC  making puppets\nD  make-up\nE  lighting\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "15. Choose TWO (first answer)",
          options: [
            { label: "A  sound", value: "A" },
            { label: "B  acting", value: "B" },
            { label: "C  making puppets", value: "C" },
            { label: "D  make-up", value: "D" },
            { label: "E  lighting", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam11-l-t2-s2-q16", number: 16, type: "multiple_choice",
          question: "16. Choose TWO (second answer)",
          options: [
            { label: "A  sound", value: "A" },
            { label: "B  acting", value: "B" },
            { label: "C  making puppets", value: "C" },
            { label: "D  make-up", value: "D" },
            { label: "E  lighting", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam11-l-t2-s2-q17", number: 17,
          groupLabel: `Questions 17–20: Label the ground-floor plan of the theatre above. Write the correct letter, A–G, next to each area.`,
          type: "matching", question: "17. box office",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam11-l-t2-s2-q18", number: 18, type: "matching", question: "18. theatre manager's office",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam11-l-t2-s2-q19", number: 19, type: "matching", question: "19. lighting box",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam11-l-t2-s2-q20", number: 20, type: "matching", question: "20. artistic director's offices",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam11-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Choose the correct letter, A, B or C.
Questions 27 & 28: Choose TWO letters, A–E.
Questions 29 & 30: Choose TWO letters, A–E.`,
      passageTitle: "Helen & Colin — Rocky Bay field trip",
      questions: [
        {
          id: "cam11-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21–26: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What do the students agree should be included in their aims?",
          options: [
            { label: "A  factors affecting where organisms live", value: "A" },
            { label: "B  the need to preserve endangered species", value: "B" },
            { label: "C  techniques for classifying different organisms", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam11-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. What equipment did they forget to take on the field trip?",
          options: [
            { label: "A  string", value: "A" },
            { label: "B  a compass", value: "B" },
            { label: "C  a ruler", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam11-l-t2-s3-q23", number: 23, type: "multiple_choice",
          question: "23. In Helen's procedure section, Colin suggests a change in",
          options: [
            { label: "A  the order in which information is given.", value: "A" },
            { label: "B  the way the information is divided up.", value: "B" },
            { label: "C  the amount of information provided.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam11-l-t2-s3-q24", number: 24, type: "multiple_choice",
          question: "24. What do they say about the method they used to measure wave speed?",
          options: [
            { label: "A  It provided accurate results.", value: "A" },
            { label: "B  It was simple to carry out.", value: "B" },
            { label: "C  It required special equipment.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam11-l-t2-s3-q25", number: 25, type: "multiple_choice",
          question: "25. What mistake did Helen make when first drawing the map?",
          options: [
            { label: "A  She chose the wrong scale.", value: "A" },
            { label: "B  She stood in the wrong place.", value: "B" },
            { label: "C  She did it at the wrong time.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam11-l-t2-s3-q26", number: 26, type: "multiple_choice",
          question: "26. What do they decide to do next with their map?",
          options: [
            { label: "A  scan it onto a computer", value: "A" },
            { label: "B  check it using photographs", value: "B" },
            { label: "C  add information from the internet", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam11-l-t2-s3-q27", number: 27,
          groupLabel: `Questions 27 and 28: Choose TWO letters, A–E.\n\nWhich TWO problems affecting organisms in the splash zone are mentioned?\n\nA  lack of water\nB  strong winds\nC  lack of food\nD  high temperatures\nE  large waves\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "27. Choose TWO (first answer)",
          options: [
            { label: "A  lack of water", value: "A" },
            { label: "B  strong winds", value: "B" },
            { label: "C  lack of food", value: "C" },
            { label: "D  high temperatures", value: "D" },
            { label: "E  large waves", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam11-l-t2-s3-q28", number: 28, type: "multiple_choice",
          question: "28. Choose TWO (second answer)",
          options: [
            { label: "A  lack of water", value: "A" },
            { label: "B  strong winds", value: "B" },
            { label: "C  lack of food", value: "C" },
            { label: "D  high temperatures", value: "D" },
            { label: "E  large waves", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam11-l-t2-s3-q29", number: 29,
          groupLabel: `Questions 29 and 30: Choose TWO letters, A–E.\n\nWhich TWO reasons for possible error will they include in their report?\n\nA  inaccurate records of the habitat of organisms\nB  influence on behaviour of organisms by observer\nC  incorrect identification of some organisms\nD  making generalisations from a small sample\nE  missing some organisms when counting\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "29. Choose TWO (first answer)",
          options: [
            { label: "A  inaccurate records of the habitat of organisms", value: "A" },
            { label: "B  influence on behaviour of organisms by observer", value: "B" },
            { label: "C  incorrect identification of some organisms", value: "C" },
            { label: "D  making generalisations from a small sample", value: "D" },
            { label: "E  missing some organisms when counting", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam11-l-t2-s3-q30", number: 30, type: "multiple_choice",
          question: "30. Choose TWO (second answer)",
          options: [
            { label: "A  inaccurate records of the habitat of organisms", value: "A" },
            { label: "B  influence on behaviour of organisms by observer", value: "B" },
            { label: "C  incorrect identification of some organisms", value: "C" },
            { label: "D  making generalisations from a small sample", value: "D" },
            { label: "E  missing some organisms when counting", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam11-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `DESIGNING A PUBLIC BUILDING: THE TAYLOR CONCERT HALL

Introduction
The designer of a public building may need to consider the building's
●  function
●  physical and 31 _______ context
●  symbolic meaning

Location and concept of the Concert Hall
●  On the site of a disused 32 _______
●  Beside a 33 _______
●  The design is based on the concept of a mystery

Building design
●  It's approached by a 34 _______ for pedestrians
●  The building is the shape of a 35 _______
●  One exterior wall acts as a large 36 _______
●  In the auditorium:
   –  the floor is built on huge pads made of 37 _______
   –  the walls are made of local wood and are 38 _______ in shape
   –  ceiling panels and 39 _______ on walls allow adjustment of acoustics

Evaluation
Some critics say the 40 _______ style of the building is inappropriate`,
      questions: [
        { id: "cam11-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. physical and _______ context", correctAnswer: "social", points: 1 },
        { id: "cam11-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. On the site of a disused _______", correctAnswer: "factory", points: 1 },
        { id: "cam11-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. Beside a _______", correctAnswer: "canal", points: 1 },
        { id: "cam11-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. approached by a _______ for pedestrians", correctAnswer: "bridge", points: 1 },
        { id: "cam11-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. shape of a _______", correctAnswer: "box", points: 1 },
        { id: "cam11-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. One exterior wall acts as a large _______", correctAnswer: "screen", points: 1 },
        { id: "cam11-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. huge pads made of _______", correctAnswer: "rubber", points: 1 },
        { id: "cam11-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. walls are _______ in shape", correctAnswer: "curved", points: 1 },
        { id: "cam11-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. ceiling panels and _______ on walls", correctAnswer: "curtains", points: 1 },
        { id: "cam11-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. the _______ style of the building is inappropriate", correctAnswer: "international", points: 1 },
      ],
    },
  ],
};

export const cambridge11ListeningTests: IELTSTest[] = [
  cambridge11_listening_t1,
  cambridge11_listening_t2,
];
