import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// Build the public Supabase Storage URL for a diagram / map image.
const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

// ============================================================
// CAMBRIDGE IELTS 18 – LISTENING TEST 1
// Parts: 1) Transport survey (note completion)
//        2) ACE volunteer orientation (MCQ + Choose-TWO + matching)
//        3) Fashion design careers (MCQ + two Choose-TWO)
//        4) Elephant translocation (note completion)
// ============================================================
export const cambridge18_listening_t1: IELTSTest = {
  id: "cam18-listening-t1",
  title: "Cambridge IELTS 18 – Listening Test 1",
  bookNumber: 18,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 10,
  audioUrl: audioUrl("cam18-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam18-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Transport survey

Name: Sadie Jones
Year of birth: 1991
Postcode: 1 _______

Travelling by bus
Date of bus journey: 2 _______
Reason for trip: shopping and visit to the 3 _______
Travelled by bus because cost of 4 _______ too high
Got on bus at 5 _______ Street
Complaints about bus service:
  –  bus today was 6 _______
  –  frequency of buses in the 7 _______

Travelling by car
Goes to the 8 _______ by car

Travelling by bicycle
Dislikes travelling by bike in the city centre because of the 9 _______
Doesn't own a bike because of a lack of 10 _______`,
      questions: [
        { id: "cam18-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Postcode: _______", correctAnswer: "DW30 7YZ/DW307YZ", points: 1 },
        { id: "cam18-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. Date of bus journey: _______", correctAnswer: "24 April/24th April", points: 1 },
        { id: "cam18-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. shopping and visit to the _______", correctAnswer: "dentist", points: 1 },
        { id: "cam18-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. cost of _______ too high", correctAnswer: "parking", points: 1 },
        { id: "cam18-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. Got on bus at _______ Street", correctAnswer: "Claxby", points: 1 },
        { id: "cam18-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. bus today was _______", correctAnswer: "late", points: 1 },
        { id: "cam18-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. frequency of buses in the _______", correctAnswer: "evening", points: 1 },
        { id: "cam18-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. Goes to the _______ by car", correctAnswer: "supermarket", points: 1 },
        { id: "cam18-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. Dislikes travelling by bike in the city centre because of the _______", correctAnswer: "pollution", points: 1 },
        { id: "cam18-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. Doesn't own a bike because of a lack of _______", correctAnswer: "storage", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam18-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–13: Choose the correct letter, A, B or C.
Questions 14 & 15: Choose TWO letters, A–E.
Questions 16–20: Match each area of voluntary work with a helpful skill. Choose from A–G.`,
      passageTitle: "Becoming a volunteer for ACE",
      passageText: `Helpful things volunteers might offer (for Q16–20):
A  experience on stage
B  original, new ideas
C  parenting skills
D  an understanding of food and diet
E  retail experience
F  a good memory
G  a good level of fitness`,
      questions: [
        {
          id: "cam18-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11–13: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Why does the speaker apologise about the seats?",
          options: [
            { label: "A  They are too small.", value: "A" },
            { label: "B  There are not enough of them.", value: "B" },
            { label: "C  Some of them are very close together.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam18-l-t1-s2-q12", number: 12, type: "multiple_choice",
          question: "12. What does the speaker say about the age of volunteers?",
          options: [
            { label: "A  The age of volunteers is less important than other factors.", value: "A" },
            { label: "B  Young volunteers are less reliable than older ones.", value: "B" },
            { label: "C  Most volunteers are about 60 years old.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam18-l-t1-s2-q13", number: 13, type: "multiple_choice",
          question: "13. What does the speaker say about training?",
          options: [
            { label: "A  It is continuous.", value: "A" },
            { label: "B  It is conducted by a manager.", value: "B" },
            { label: "C  It takes place online.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam18-l-t1-s2-q14", number: 14,
          groupLabel: `Questions 14 and 15: Choose TWO letters, A–E.\n\nWhich TWO issues does the speaker ask the audience to consider before they apply to be volunteers?\n\nA  their financial situation\nB  their level of commitment\nC  their work experience\nD  their ambition\nE  their availability\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "14. Choose TWO (first answer)",
          options: [
            { label: "A  their financial situation", value: "A" },
            { label: "B  their level of commitment", value: "B" },
            { label: "C  their work experience", value: "C" },
            { label: "D  their ambition", value: "D" },
            { label: "E  their availability", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam18-l-t1-s2-q15", number: 15, type: "multiple_choice",
          question: "15. Choose TWO (second answer)",
          options: [
            { label: "A  their financial situation", value: "A" },
            { label: "B  their level of commitment", value: "B" },
            { label: "C  their work experience", value: "C" },
            { label: "D  their ambition", value: "D" },
            { label: "E  their availability", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam18-l-t1-s2-q16", number: 16,
          groupLabel: `Questions 16–20: What does the speaker suggest would be helpful for each of the following areas of voluntary work? Choose FIVE answers from the box (A–G) and write the correct letter next to each area.\n\nA  experience on stage\nB  original, new ideas\nC  parenting skills\nD  an understanding of food and diet\nE  retail experience\nF  a good memory\nG  a good level of fitness`,
          type: "multiple_choice", question: "16. Fundraising",
          options: [
            { label: "A  experience on stage", value: "A" },
            { label: "B  original, new ideas", value: "B" },
            { label: "C  parenting skills", value: "C" },
            { label: "D  an understanding of food and diet", value: "D" },
            { label: "E  retail experience", value: "E" },
            { label: "F  a good memory", value: "F" },
            { label: "G  a good level of fitness", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam18-l-t1-s2-q17", number: 17, type: "multiple_choice",
          question: "17. Litter collection",
          options: [
            { label: "A  experience on stage", value: "A" },
            { label: "B  original, new ideas", value: "B" },
            { label: "C  parenting skills", value: "C" },
            { label: "D  an understanding of food and diet", value: "D" },
            { label: "E  retail experience", value: "E" },
            { label: "F  a good memory", value: "F" },
            { label: "G  a good level of fitness", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam18-l-t1-s2-q18", number: 18, type: "multiple_choice",
          question: "18. 'Playmates'",
          options: [
            { label: "A  experience on stage", value: "A" },
            { label: "B  original, new ideas", value: "B" },
            { label: "C  parenting skills", value: "C" },
            { label: "D  an understanding of food and diet", value: "D" },
            { label: "E  retail experience", value: "E" },
            { label: "F  a good memory", value: "F" },
            { label: "G  a good level of fitness", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam18-l-t1-s2-q19", number: 19, type: "multiple_choice",
          question: "19. Story club",
          options: [
            { label: "A  experience on stage", value: "A" },
            { label: "B  original, new ideas", value: "B" },
            { label: "C  parenting skills", value: "C" },
            { label: "D  an understanding of food and diet", value: "D" },
            { label: "E  retail experience", value: "E" },
            { label: "F  a good memory", value: "F" },
            { label: "G  a good level of fitness", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam18-l-t1-s2-q20", number: 20, type: "multiple_choice",
          question: "20. First aid",
          options: [
            { label: "A  experience on stage", value: "A" },
            { label: "B  original, new ideas", value: "B" },
            { label: "C  parenting skills", value: "C" },
            { label: "D  an understanding of food and diet", value: "D" },
            { label: "E  retail experience", value: "E" },
            { label: "F  a good memory", value: "F" },
            { label: "G  a good level of fitness", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam18-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Choose the correct letter, A, B or C.
Questions 27 & 28: Choose TWO letters, A–E.
Questions 29 & 30: Choose TWO letters, A–E.`,
      passageTitle: "Talk on jobs in fashion design",
      questions: [
        {
          id: "cam18-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21–26: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What problem did Chantal have at the start of the talk?",
          options: [
            { label: "A  Her view of the speaker was blocked.", value: "A" },
            { label: "B  She was unable to find an empty seat.", value: "B" },
            { label: "C  The students next to her were talking.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam18-l-t1-s3-q22", number: 22, type: "multiple_choice",
          question: "22. What were Hugo and Chantal surprised to hear about the job market?",
          options: [
            { label: "A  It has become more competitive than it used to be.", value: "A" },
            { label: "B  There is more variety in it than they had realised.", value: "B" },
            { label: "C  Some areas of it are more exciting than others.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam18-l-t1-s3-q23", number: 23, type: "multiple_choice",
          question: "23. Hugo and Chantal agree that the speaker's message was",
          options: [
            { label: "A  unfair to them at times.", value: "A" },
            { label: "B  hard for them to follow.", value: "B" },
            { label: "C  critical of the industry.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam18-l-t1-s3-q24", number: 24, type: "multiple_choice",
          question: "24. What do Hugo and Chantal criticise about their school careers advice?",
          options: [
            { label: "A  when they received the advice", value: "A" },
            { label: "B  how much advice was given", value: "B" },
            { label: "C  who gave the advice", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam18-l-t1-s3-q25", number: 25, type: "multiple_choice",
          question: "25. When discussing their future, Hugo and Chantal disagree on",
          options: [
            { label: "A  which is the best career in fashion.", value: "A" },
            { label: "B  when to choose a career in fashion.", value: "B" },
            { label: "C  why they would like a career in fashion.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam18-l-t1-s3-q26", number: 26, type: "multiple_choice",
          question: "26. How does Hugo feel about being an unpaid assistant?",
          options: [
            { label: "A  He is realistic about the practice.", value: "A" },
            { label: "B  He feels the practice is dishonest.", value: "B" },
            { label: "C  He thinks others want to change the practice.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam18-l-t1-s3-q27", number: 27,
          groupLabel: `Questions 27 and 28: Choose TWO letters, A–E.\n\nWhich TWO mistakes did the speaker admit she made in her first job?\n\nA  being dishonest to her employer\nB  paying too much attention to how she looked\nC  expecting to become well known\nD  trying to earn a lot of money\nE  openly disliking her client\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "27. Choose TWO (first answer)",
          options: [
            { label: "A  being dishonest to her employer", value: "A" },
            { label: "B  paying too much attention to how she looked", value: "B" },
            { label: "C  expecting to become well known", value: "C" },
            { label: "D  trying to earn a lot of money", value: "D" },
            { label: "E  openly disliking her client", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam18-l-t1-s3-q28", number: 28, type: "multiple_choice",
          question: "28. Choose TWO (second answer)",
          options: [
            { label: "A  being dishonest to her employer", value: "A" },
            { label: "B  paying too much attention to how she looked", value: "B" },
            { label: "C  expecting to become well known", value: "C" },
            { label: "D  trying to earn a lot of money", value: "D" },
            { label: "E  openly disliking her client", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam18-l-t1-s3-q29", number: 29,
          groupLabel: `Questions 29 and 30: Choose TWO letters, A–E.\n\nWhich TWO pieces of retail information do Hugo and Chantal agree would be useful?\n\nA  the reasons people return fashion items\nB  how much time people have to shop for clothes\nC  fashion designs people want but can't find\nD  the best time of year for fashion buying\nE  the most popular fashion sizes\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "29. Choose TWO (first answer)",
          options: [
            { label: "A  the reasons people return fashion items", value: "A" },
            { label: "B  how much time people have to shop for clothes", value: "B" },
            { label: "C  fashion designs people want but can't find", value: "C" },
            { label: "D  the best time of year for fashion buying", value: "D" },
            { label: "E  the most popular fashion sizes", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
        {
          id: "cam18-l-t1-s3-q30", number: 30, type: "multiple_choice",
          question: "30. Choose TWO (second answer)",
          options: [
            { label: "A  the reasons people return fashion items", value: "A" },
            { label: "B  how much time people have to shop for clothes", value: "B" },
            { label: "C  fashion designs people want but can't find", value: "C" },
            { label: "D  the best time of year for fashion buying", value: "D" },
            { label: "E  the most popular fashion sizes", value: "E" },
          ],
          correctAnswer: "A/C", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam18-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Elephant translocation

Reasons for overpopulation at Majete National Park
●  strict enforcement of anti-poaching laws
●  successful breeding

Problems caused by elephant overpopulation
●  greater competition, causing hunger for elephants
●  damage to 31 _______ in the park

The translocation process
●  a suitable group of elephants from the same 32 _______ was selected
●  vets and park staff made use of 33 _______ to help guide the elephants into an open plain
●  elephants were immobilised with tranquilisers
   –  this process had to be completed quickly to reduce 34 _______
   –  elephants had to be turned on their 35 _______ to avoid damage to their lungs
   –  elephants' 36 _______ had to be monitored constantly
   –  tracking devices were fitted to the matriarchs
   –  data including the size of their tusks and 37 _______ was taken
●  elephants were taken by truck to their new reserve

Advantages of translocation at Nkhotakota Wildlife Park
●  38 _______ opportunities
●  a reduction in the number of poachers and 39 _______
●  an example of conservation that other parks can follow
●  an increase in 40 _______ as a contributor to GDP`,
      questions: [
        { id: "cam18-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. damage to _______ in the park", correctAnswer: "fences", points: 1 },
        { id: "cam18-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. elephants from the same _______ was selected", correctAnswer: "family", points: 1 },
        { id: "cam18-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. made use of _______ to help guide the elephants", correctAnswer: "helicopters", points: 1 },
        { id: "cam18-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. had to be completed quickly to reduce _______", correctAnswer: "stress", points: 1 },
        { id: "cam18-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. had to be turned on their _______ to avoid damage to their lungs", correctAnswer: "sides", points: 1 },
        { id: "cam18-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. elephants' _______ had to be monitored constantly", correctAnswer: "breathing", points: 1 },
        { id: "cam18-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. the size of their tusks and _______ was taken", correctAnswer: "feet", points: 1 },
        { id: "cam18-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. _______ opportunities", correctAnswer: "employment", points: 1 },
        { id: "cam18-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. a reduction in the number of poachers and _______", correctAnswer: "weapons", points: 1 },
        { id: "cam18-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. an increase in _______ as a contributor to GDP", correctAnswer: "tourism", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 18 – LISTENING TEST 2
// Parts: 1) Milo's Restaurants (notes + table)
//        2) Housing development (Choose-TWO + map)
//        3) Laki eruption 1783 (MCQ + Choose-TWO + matching)
//        4) Pockets (notes)
// ============================================================
export const cambridge18_listening_t2: IELTSTest = {
  id: "cam18-listening-t2",
  title: "Cambridge IELTS 18 – Listening Test 2",
  bookNumber: 18,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 10,
  audioUrl: audioUrl("cam18-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam18-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–5: Complete the notes below. Write ONE WORD ONLY for each answer.
Questions 6–10: Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Working at Milo's Restaurants

Benefits
●  1 _______ provided for all staff
●  2 _______ during weekdays at all Milo's Restaurants
●  3 _______ provided after midnight

Person specification
●  must be prepared to work well in a team
●  must care about maintaining a high standard of 4 _______
●  must have a qualification in 5 _______

Locations

6 _______ Street — Breakfast supervisor
  Responsibilities: Checking portions, etc. are correct; Making sure 7 _______ is clean
  Pay: Starting salary £ 8 _______ per hour; Start work at 5.30 a.m.

City Road — Junior chef
  Responsibilities: Supporting senior chefs; Maintaining stock and organising 9 _______
  Pay: Annual salary £23,000; No work on a 10 _______ once a month`,
      questions: [
        { id: "cam18-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. _______ provided for all staff", correctAnswer: "training", points: 1 },
        { id: "cam18-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. _______ during weekdays at all Milo's Restaurants", correctAnswer: "discount", points: 1 },
        { id: "cam18-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. _______ provided after midnight", correctAnswer: "taxi", points: 1 },
        { id: "cam18-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. maintaining a high standard of _______", correctAnswer: "service", points: 1 },
        { id: "cam18-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. must have a qualification in _______", correctAnswer: "English", points: 1 },
        { id: "cam18-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. _______ Street", correctAnswer: "Wivenhoe", points: 1 },
        { id: "cam18-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. Making sure _______ is clean", correctAnswer: "equipment", points: 1 },
        { id: "cam18-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. Starting salary £ _______ per hour", correctAnswer: "9.75", points: 1 },
        { id: "cam18-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. Maintaining stock and organising _______", correctAnswer: "deliveries", points: 1 },
        { id: "cam18-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. No work on a _______ once a month", correctAnswer: "Sunday", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam18-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      diagramUrl: imageUrl("cam18-listening-t2-map.png"),
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13 & 14: Choose TWO letters, A–E.
Questions 15–20: Label the map. Write the correct letter (A–I) next to each feature.`,
      passageTitle: "Housing development",
      questions: [
        {
          id: "cam18-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhat are the TWO main reasons why this site has been chosen for the housing development?\n\nA  It has suitable geographical features.\nB  There is easy access to local facilities.\nC  It has good connections with the airport.\nD  The land is of little agricultural value.\nE  It will be convenient for workers.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  It has suitable geographical features.", value: "A" },
            { label: "B  There is easy access to local facilities.", value: "B" },
            { label: "C  It has good connections with the airport.", value: "C" },
            { label: "D  The land is of little agricultural value.", value: "D" },
            { label: "E  It will be convenient for workers.", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam18-l-t2-s2-q12", number: 12, type: "multiple_choice", question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  It has suitable geographical features.", value: "A" },
            { label: "B  There is easy access to local facilities.", value: "B" },
            { label: "C  It has good connections with the airport.", value: "C" },
            { label: "D  The land is of little agricultural value.", value: "D" },
            { label: "E  It will be convenient for workers.", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam18-l-t2-s2-q13", number: 13,
          groupLabel: `Questions 13 and 14: Choose TWO letters, A–E.\n\nWhich TWO aspects of the planned housing development have people given positive feedback about?\n\nA  the facilities for cyclists\nB  the impact on the environment\nC  the encouragement of good relations between residents\nD  the low cost of all the accommodation\nE  the rural location\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "13. Choose TWO (first answer)",
          options: [
            { label: "A  the facilities for cyclists", value: "A" },
            { label: "B  the impact on the environment", value: "B" },
            { label: "C  the encouragement of good relations between residents", value: "C" },
            { label: "D  the low cost of all the accommodation", value: "D" },
            { label: "E  the rural location", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam18-l-t2-s2-q14", number: 14, type: "multiple_choice", question: "14. Choose TWO (second answer)",
          options: [
            { label: "A  the facilities for cyclists", value: "A" },
            { label: "B  the impact on the environment", value: "B" },
            { label: "C  the encouragement of good relations between residents", value: "C" },
            { label: "D  the low cost of all the accommodation", value: "D" },
            { label: "E  the rural location", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam18-l-t2-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Label the map below. Choose the correct letter, A–I, next to each feature.`,
          type: "multiple_choice", question: "15. School",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam18-l-t2-s2-q16", number: 16, type: "multiple_choice", question: "16. Sports centre",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam18-l-t2-s2-q17", number: 17, type: "multiple_choice", question: "17. Clinic",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam18-l-t2-s2-q18", number: 18, type: "multiple_choice", question: "18. Community centre",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam18-l-t2-s2-q19", number: 19, type: "multiple_choice", question: "19. Supermarket",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam18-l-t2-s2-q20", number: 20, type: "multiple_choice", question: "20. Playground",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
            { label: "I", value: "I" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam18-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose the correct letter, A, B or C.
Questions 25 & 26: Choose TWO letters, A–E.
Questions 27–30: Match each country to a comment. Choose from A–F.`,
      passageTitle: "The Laki eruption (1783)",
      passageText: `Comments (for Q27–30):
A  This country suffered the most severe loss of life.
B  The impact on agriculture was predictable.
C  There was a significant increase in deaths of young people.
D  Animals suffered from a sickness.
E  This country saw the highest rise in food prices in the world.
F  It caused a particularly harsh winter.`,
      questions: [
        {
          id: "cam18-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21–24: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. Why do the students think the Laki eruption of 1783 is so important?",
          options: [
            { label: "A  It was the most severe eruption in modern times.", value: "A" },
            { label: "B  It led to the formal study of volcanoes.", value: "B" },
            { label: "C  It had a profound effect on society.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam18-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. What surprised Adam about observations made at the time?",
          options: [
            { label: "A  the number of places producing them", value: "A" },
            { label: "B  the contradictions in them", value: "B" },
            { label: "C  the lack of scientific data to support them", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam18-l-t2-s3-q23", number: 23, type: "multiple_choice",
          question: "23. According to Michelle, what did the contemporary sources say about the Laki haze?",
          options: [
            { label: "A  People thought it was similar to ordinary fog.", value: "A" },
            { label: "B  It was associated with health issues.", value: "B" },
            { label: "C  It completely blocked out the sun for weeks.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam18-l-t2-s3-q24", number: 24, type: "multiple_choice",
          question: "24. Adam corrects Michelle when she claims that Benjamin Franklin",
          options: [
            { label: "A  came to the wrong conclusion about the cause of the haze.", value: "A" },
            { label: "B  was the first to identify the reason for the haze.", value: "B" },
            { label: "C  supported the opinions of other observers about the haze.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam18-l-t2-s3-q25", number: 25,
          groupLabel: `Questions 25 and 26: Choose TWO letters, A–E.\n\nWhich TWO issues following the Laki eruption surprised the students?\n\nA  how widespread the effects were\nB  how long-lasting the effects were\nC  the number of deaths it caused\nD  the speed at which the volcanic ash cloud spread\nE  how people ignored the warning signs\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "25. Choose TWO (first answer)",
          options: [
            { label: "A  how widespread the effects were", value: "A" },
            { label: "B  how long-lasting the effects were", value: "B" },
            { label: "C  the number of deaths it caused", value: "C" },
            { label: "D  the speed at which the volcanic ash cloud spread", value: "D" },
            { label: "E  how people ignored the warning signs", value: "E" },
          ],
          correctAnswer: "A/B", points: 1,
        },
        {
          id: "cam18-l-t2-s3-q26", number: 26, type: "multiple_choice", question: "26. Choose TWO (second answer)",
          options: [
            { label: "A  how widespread the effects were", value: "A" },
            { label: "B  how long-lasting the effects were", value: "B" },
            { label: "C  the number of deaths it caused", value: "C" },
            { label: "D  the speed at which the volcanic ash cloud spread", value: "D" },
            { label: "E  how people ignored the warning signs", value: "E" },
          ],
          correctAnswer: "A/B", points: 1,
        },
        {
          id: "cam18-l-t2-s3-q27", number: 27,
          groupLabel: `Questions 27–30: What comment do the students make about the impact of the Laki eruption on the following countries? Choose FOUR answers from the box (A–F) and write the correct letter next to each country.\n\nA  This country suffered the most severe loss of life.\nB  The impact on agriculture was predictable.\nC  There was a significant increase in deaths of young people.\nD  Animals suffered from a sickness.\nE  This country saw the highest rise in food prices in the world.\nF  It caused a particularly harsh winter.`,
          type: "multiple_choice", question: "27. Iceland",
          options: [
            { label: "A  This country suffered the most severe loss of life.", value: "A" },
            { label: "B  The impact on agriculture was predictable.", value: "B" },
            { label: "C  There was a significant increase in deaths of young people.", value: "C" },
            { label: "D  Animals suffered from a sickness.", value: "D" },
            { label: "E  This country saw the highest rise in food prices in the world.", value: "E" },
            { label: "F  It caused a particularly harsh winter.", value: "F" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam18-l-t2-s3-q28", number: 28, type: "multiple_choice", question: "28. Egypt",
          options: [
            { label: "A  This country suffered the most severe loss of life.", value: "A" },
            { label: "B  The impact on agriculture was predictable.", value: "B" },
            { label: "C  There was a significant increase in deaths of young people.", value: "C" },
            { label: "D  Animals suffered from a sickness.", value: "D" },
            { label: "E  This country saw the highest rise in food prices in the world.", value: "E" },
            { label: "F  It caused a particularly harsh winter.", value: "F" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam18-l-t2-s3-q29", number: 29, type: "multiple_choice", question: "29. UK",
          options: [
            { label: "A  This country suffered the most severe loss of life.", value: "A" },
            { label: "B  The impact on agriculture was predictable.", value: "B" },
            { label: "C  There was a significant increase in deaths of young people.", value: "C" },
            { label: "D  Animals suffered from a sickness.", value: "D" },
            { label: "E  This country saw the highest rise in food prices in the world.", value: "E" },
            { label: "F  It caused a particularly harsh winter.", value: "F" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam18-l-t2-s3-q30", number: 30, type: "multiple_choice", question: "30. USA",
          options: [
            { label: "A  This country suffered the most severe loss of life.", value: "A" },
            { label: "B  The impact on agriculture was predictable.", value: "B" },
            { label: "C  There was a significant increase in deaths of young people.", value: "C" },
            { label: "D  Animals suffered from a sickness.", value: "D" },
            { label: "E  This country saw the highest rise in food prices in the world.", value: "E" },
            { label: "F  It caused a particularly harsh winter.", value: "F" },
          ],
          correctAnswer: "F", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam18-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Pockets

Reason for choice of subject
●  They are 31 _______ but can be overlooked by consumers and designers.

Pockets in men's clothes
●  Men started to wear 32 _______ in the 18th century.
●  A 33 _______ sewed pockets into the lining of the garments.
●  The wearer could use the pockets for small items.
●  Bigger pockets might be made for men who belonged to a certain type of 34 _______

Pockets in women's clothes
●  Women's pockets were less 35 _______ than men's.
●  Women were very concerned about pickpockets.
●  Pockets were produced in pairs using 36 _______ to link them together.
●  Pockets hung from the women's 37 _______ under skirts and petticoats.
●  Items such as 38 _______ could be reached through a gap in the material.
●  Pockets, of various sizes, stayed inside clothing for many decades.
●  When dresses changed shape, hidden pockets had a negative effect on the 39 _______ of women.
●  Bags called 'pouches' became popular, before women carried a 40 _______`,
      questions: [
        { id: "cam18-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. They are _______ but can be overlooked", correctAnswer: "convenient", points: 1 },
        { id: "cam18-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. Men started to wear _______ in the 18th century", correctAnswer: "suits", points: 1 },
        { id: "cam18-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. A _______ sewed pockets into the lining of the garments", correctAnswer: "tailor", points: 1 },
        { id: "cam18-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. men who belonged to a certain type of _______", correctAnswer: "profession", points: 1 },
        { id: "cam18-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. Women's pockets were less _______ than men's", correctAnswer: "visible", points: 1 },
        { id: "cam18-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. Pockets were produced in pairs using _______ to link them together", correctAnswer: "string/strings", points: 1 },
        { id: "cam18-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. Pockets hung from the women's _______ under skirts and petticoats", correctAnswer: "waist/waists", points: 1 },
        { id: "cam18-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. Items such as _______ could be reached", correctAnswer: "perfume", points: 1 },
        { id: "cam18-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. a negative effect on the _______ of women", correctAnswer: "image", points: 1 },
        { id: "cam18-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. before women carried a _______", correctAnswer: "handbag", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 18 – LISTENING TEST 3
// Parts: 1) Wayside Camera Club membership (form + table)
//        2) Picking wild mushrooms (Choose-TWO x2 + MCQ)
//        3) Luddites / future of work (Choose-TWO x2 + matching)
//        4) Space Traffic Management (notes)
// ============================================================
export const cambridge18_listening_t3: IELTSTest = {
  id: "cam18-listening-t3",
  title: "Cambridge IELTS 18 – Listening Test 3",
  bookNumber: 18,
  testNumber: 3,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 10,
  audioUrl: audioUrl("cam18-listening-t3.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam18-l-t3-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–4: Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.
Questions 5–10: Complete the table below. Write NO MORE THAN TWO WORDS for each answer.`,
      passageText: `Wayside Camera Club — membership form

Name: Dan Green
Email address: dan1068@market.com
Home address: 52 1 _______ Street, Peacetown
Heard about us: from a 2 _______
Reasons for joining: to enter competitions to 3 _______
Type of membership: 4 _______ membership (£30)

Photography competitions

Title: 5 '_______'
  Instructions: A scene in the home
  Feedback: The picture's composition was not good.

Title: 'Beautiful Sunsets'
  Instructions: Scene must show some 6 _______
  Feedback: The 7 _______ was wrong.

Title: 8 '_______'
  Instructions: Scene must show 9 _______
  Feedback: The photograph was too 10 _______.`,
      questions: [
        { id: "cam18-l-t3-s1-q1", number: 1, type: "note_completion", question: "1. 52 _______ Street, Peacetown", correctAnswer: "Marrowfield", points: 1 },
        { id: "cam18-l-t3-s1-q2", number: 2, type: "note_completion", question: "2. Heard about us: from a _______", correctAnswer: "relative", points: 1 },
        { id: "cam18-l-t3-s1-q3", number: 3, type: "note_completion", question: "3. to enter competitions to _______", correctAnswer: "socialise/socialize", points: 1 },
        { id: "cam18-l-t3-s1-q4", number: 4, type: "note_completion", question: "4. _______ membership (£30)", correctAnswer: "full", points: 1 },
        { id: "cam18-l-t3-s1-q5", number: 5, type: "note_completion", question: "5. Title: '_______'", correctAnswer: "Domestic Life", points: 1 },
        { id: "cam18-l-t3-s1-q6", number: 6, type: "note_completion", question: "6. Scene must show some _______", correctAnswer: "clouds", points: 1 },
        { id: "cam18-l-t3-s1-q7", number: 7, type: "note_completion", question: "7. The _______ was wrong", correctAnswer: "timing", points: 1 },
        { id: "cam18-l-t3-s1-q8", number: 8, type: "note_completion", question: "8. Title: '_______'", correctAnswer: "Animal Magic", points: 1 },
        { id: "cam18-l-t3-s1-q9", number: 9, type: "note_completion", question: "9. Scene must show _______", correctAnswer: "animal movement/movement", points: 1 },
        { id: "cam18-l-t3-s1-q10", number: 10, type: "note_completion", question: "10. The photograph was too _______", correctAnswer: "dark", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam18-l-t3-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13 & 14: Choose TWO letters, A–E.
Questions 15–20: Choose the correct letter, A, B or C.`,
      passageTitle: "Picking wild mushrooms",
      questions: [
        {
          id: "cam18-l-t3-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO warnings does Dan give about picking mushrooms?\n\nA  Don't pick more than one variety of mushroom at a time.\nB  Don't pick mushrooms near busy roads.\nC  Don't eat mushrooms given to you.\nD  Don't eat mushrooms while picking them.\nE  Don't pick old mushrooms.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  Don't pick more than one variety of mushroom at a time.", value: "A" },
            { label: "B  Don't pick mushrooms near busy roads.", value: "B" },
            { label: "C  Don't eat mushrooms given to you.", value: "C" },
            { label: "D  Don't eat mushrooms while picking them.", value: "D" },
            { label: "E  Don't pick old mushrooms.", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam18-l-t3-s2-q12", number: 12, type: "multiple_choice", question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  Don't pick more than one variety of mushroom at a time.", value: "A" },
            { label: "B  Don't pick mushrooms near busy roads.", value: "B" },
            { label: "C  Don't eat mushrooms given to you.", value: "C" },
            { label: "D  Don't eat mushrooms while picking them.", value: "D" },
            { label: "E  Don't pick old mushrooms.", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam18-l-t3-s2-q13", number: 13,
          groupLabel: `Questions 13 and 14: Choose TWO letters, A–E.\n\nWhich TWO ideas about wild mushrooms does Dan say are correct?\n\nA  Mushrooms should always be peeled before eating.\nB  Mushrooms eaten by animals may be unsafe.\nC  Cooking destroys toxins in mushrooms.\nD  Brightly coloured mushrooms can be edible.\nE  All poisonous mushrooms have a bad smell.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "13. Choose TWO (first answer)",
          options: [
            { label: "A  Mushrooms should always be peeled before eating.", value: "A" },
            { label: "B  Mushrooms eaten by animals may be unsafe.", value: "B" },
            { label: "C  Cooking destroys toxins in mushrooms.", value: "C" },
            { label: "D  Brightly coloured mushrooms can be edible.", value: "D" },
            { label: "E  All poisonous mushrooms have a bad smell.", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam18-l-t3-s2-q14", number: 14, type: "multiple_choice", question: "14. Choose TWO (second answer)",
          options: [
            { label: "A  Mushrooms should always be peeled before eating.", value: "A" },
            { label: "B  Mushrooms eaten by animals may be unsafe.", value: "B" },
            { label: "C  Cooking destroys toxins in mushrooms.", value: "C" },
            { label: "D  Brightly coloured mushrooms can be edible.", value: "D" },
            { label: "E  All poisonous mushrooms have a bad smell.", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam18-l-t3-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "15. What advice does Dan give about picking mushrooms in parks?",
          options: [
            { label: "A  Choose wooded areas.", value: "A" },
            { label: "B  Don't disturb wildlife.", value: "B" },
            { label: "C  Get there early.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam18-l-t3-s2-q16", number: 16, type: "multiple_choice",
          question: "16. Dan says it is a good idea for beginners to",
          options: [
            { label: "A  use a mushroom app.", value: "A" },
            { label: "B  join a group.", value: "B" },
            { label: "C  take a reference book.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam18-l-t3-s2-q17", number: 17, type: "multiple_choice",
          question: "17. What does Dan say is important for conservation?",
          options: [
            { label: "A  selecting only fully grown mushrooms", value: "A" },
            { label: "B  picking a limited amount of mushrooms", value: "B" },
            { label: "C  avoiding areas where rare mushroom species grow", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam18-l-t3-s2-q18", number: 18, type: "multiple_choice",
          question: "18. According to Dan, some varieties of wild mushrooms are in decline because there is",
          options: [
            { label: "A  a huge demand for them from restaurants.", value: "A" },
            { label: "B  a lack of rain in this part of the country.", value: "B" },
            { label: "C  a rise in building developments locally.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam18-l-t3-s2-q19", number: 19, type: "multiple_choice",
          question: "19. Dan says that when storing mushrooms, people should",
          options: [
            { label: "A  keep them in the fridge for no more than two days.", value: "A" },
            { label: "B  keep them in a brown bag in a dark room.", value: "B" },
            { label: "C  leave them for a period after washing them.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam18-l-t3-s2-q20", number: 20, type: "multiple_choice",
          question: "20. What does Dan say about trying new varieties of mushrooms?",
          options: [
            { label: "A  Experiment with different recipes.", value: "A" },
            { label: "B  Expect some to have a strong taste.", value: "B" },
            { label: "C  Cook them for a long time.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam18-l-t3-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21 & 22: Choose TWO letters, A–E.
Questions 23 & 24: Choose TWO letters, A–E.
Questions 25–30: Match each job to a comment. Choose from A–G.`,
      passageText: `Two students discussing the Luddites and the future of work.

Comments (for Q25–30):
A  These jobs are likely to be at risk.
B  Their role has become more interesting in recent years.
C  The number of people working in this sector has fallen dramatically.
D  This job will require more qualifications.
E  Higher disposable income has led to a huge increase in jobs.
F  There is likely to be a significant rise in demand for this service.
G  Both employment and productivity have risen.`,
      questions: [
        {
          id: "cam18-l-t3-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO opinions about the Luddites do the students express?\n\nA  Their actions were ineffective.\nB  They are still influential today.\nC  They have received unfair criticism.\nD  They were proved right.\nE  Their attitude is understandable.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  Their actions were ineffective.", value: "A" },
            { label: "B  They are still influential today.", value: "B" },
            { label: "C  They have received unfair criticism.", value: "C" },
            { label: "D  They were proved right.", value: "D" },
            { label: "E  Their attitude is understandable.", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam18-l-t3-s3-q22", number: 22, type: "multiple_choice", question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  Their actions were ineffective.", value: "A" },
            { label: "B  They are still influential today.", value: "B" },
            { label: "C  They have received unfair criticism.", value: "C" },
            { label: "D  They were proved right.", value: "D" },
            { label: "E  Their attitude is understandable.", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam18-l-t3-s3-q23", number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhich TWO predictions about the future of work are the students doubtful about?\n\nA  Work will be more rewarding.\nB  Unemployment will fall.\nC  People will want to delay retiring.\nD  Working hours will be shorter.\nE  People will change jobs more frequently.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  Work will be more rewarding.", value: "A" },
            { label: "B  Unemployment will fall.", value: "B" },
            { label: "C  People will want to delay retiring.", value: "C" },
            { label: "D  Working hours will be shorter.", value: "D" },
            { label: "E  People will change jobs more frequently.", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam18-l-t3-s3-q24", number: 24, type: "multiple_choice", question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  Work will be more rewarding.", value: "A" },
            { label: "B  Unemployment will fall.", value: "B" },
            { label: "C  People will want to delay retiring.", value: "C" },
            { label: "D  Working hours will be shorter.", value: "D" },
            { label: "E  People will change jobs more frequently.", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam18-l-t3-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What comment do the students make about each of the following jobs? Choose SIX answers from the box (A–G) and write the correct letter next to each job.\n\nA  These jobs are likely to be at risk.\nB  Their role has become more interesting in recent years.\nC  The number of people working in this sector has fallen dramatically.\nD  This job will require more qualifications.\nE  Higher disposable income has led to a huge increase in jobs.\nF  There is likely to be a significant rise in demand for this service.\nG  Both employment and productivity have risen.`,
          type: "multiple_choice", question: "25. Accountants",
          options: [
            { label: "A  These jobs are likely to be at risk.", value: "A" },
            { label: "B  Their role has become more interesting in recent years.", value: "B" },
            { label: "C  The number of people working in this sector has fallen dramatically.", value: "C" },
            { label: "D  This job will require more qualifications.", value: "D" },
            { label: "E  Higher disposable income has led to a huge increase in jobs.", value: "E" },
            { label: "F  There is likely to be a significant rise in demand for this service.", value: "F" },
            { label: "G  Both employment and productivity have risen.", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam18-l-t3-s3-q26", number: 26, type: "multiple_choice", question: "26. Hairdressers",
          options: [
            { label: "A  These jobs are likely to be at risk.", value: "A" },
            { label: "B  Their role has become more interesting in recent years.", value: "B" },
            { label: "C  The number of people working in this sector has fallen dramatically.", value: "C" },
            { label: "D  This job will require more qualifications.", value: "D" },
            { label: "E  Higher disposable income has led to a huge increase in jobs.", value: "E" },
            { label: "F  There is likely to be a significant rise in demand for this service.", value: "F" },
            { label: "G  Both employment and productivity have risen.", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam18-l-t3-s3-q27", number: 27, type: "multiple_choice", question: "27. Administrative staff",
          options: [
            { label: "A  These jobs are likely to be at risk.", value: "A" },
            { label: "B  Their role has become more interesting in recent years.", value: "B" },
            { label: "C  The number of people working in this sector has fallen dramatically.", value: "C" },
            { label: "D  This job will require more qualifications.", value: "D" },
            { label: "E  Higher disposable income has led to a huge increase in jobs.", value: "E" },
            { label: "F  There is likely to be a significant rise in demand for this service.", value: "F" },
            { label: "G  Both employment and productivity have risen.", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam18-l-t3-s3-q28", number: 28, type: "multiple_choice", question: "28. Agricultural workers",
          options: [
            { label: "A  These jobs are likely to be at risk.", value: "A" },
            { label: "B  Their role has become more interesting in recent years.", value: "B" },
            { label: "C  The number of people working in this sector has fallen dramatically.", value: "C" },
            { label: "D  This job will require more qualifications.", value: "D" },
            { label: "E  Higher disposable income has led to a huge increase in jobs.", value: "E" },
            { label: "F  There is likely to be a significant rise in demand for this service.", value: "F" },
            { label: "G  Both employment and productivity have risen.", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam18-l-t3-s3-q29", number: 29, type: "multiple_choice", question: "29. Care workers",
          options: [
            { label: "A  These jobs are likely to be at risk.", value: "A" },
            { label: "B  Their role has become more interesting in recent years.", value: "B" },
            { label: "C  The number of people working in this sector has fallen dramatically.", value: "C" },
            { label: "D  This job will require more qualifications.", value: "D" },
            { label: "E  Higher disposable income has led to a huge increase in jobs.", value: "E" },
            { label: "F  There is likely to be a significant rise in demand for this service.", value: "F" },
            { label: "G  Both employment and productivity have risen.", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam18-l-t3-s3-q30", number: 30, type: "multiple_choice", question: "30. Bank clerks",
          options: [
            { label: "A  These jobs are likely to be at risk.", value: "A" },
            { label: "B  Their role has become more interesting in recent years.", value: "B" },
            { label: "C  The number of people working in this sector has fallen dramatically.", value: "C" },
            { label: "D  This job will require more qualifications.", value: "D" },
            { label: "E  Higher disposable income has led to a huge increase in jobs.", value: "E" },
            { label: "F  There is likely to be a significant rise in demand for this service.", value: "F" },
            { label: "G  Both employment and productivity have risen.", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam18-l-t3-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Space Traffic Management

A Space Traffic Management system
●  is a concept similar to Air Traffic Control, but for satellites rather than planes.
●  would aim to set up legal and 31 _______ ways of improving safety.
●  does not actually exist at present.

Problems in developing effective Space Traffic Management
●  Satellites are now quite 32 _______ and therefore more widespread (e.g. there are constellations made up of 33 _______ of satellites).
●  At present, satellites are not required to transmit information to help with their 34 _______.
●  There are few systems for 35 _______ satellites.
●  Small pieces of debris may be difficult to identify.
●  Operators may be unwilling to share details of satellites used for 36 _______ or commercial reasons.
●  It may be hard to collect details of the object's 37 _______ at a given time.
●  Scientists can only make a 38 _______ about where the satellite will go.

Solutions
●  Common standards should be agreed on for the presentation of information.
●  The information should be combined in one 39 _______.
●  A coordinated system must be designed to create 40 _______ in its users.`,
      questions: [
        { id: "cam18-l-t3-s4-q31", number: 31, type: "note_completion", question: "31. legal and _______ ways of improving safety", correctAnswer: "technical", points: 1 },
        { id: "cam18-l-t3-s4-q32", number: 32, type: "note_completion", question: "32. Satellites are now quite _______", correctAnswer: "cheap", points: 1 },
        { id: "cam18-l-t3-s4-q33", number: 33, type: "note_completion", question: "33. constellations made up of _______ of satellites", correctAnswer: "thousands", points: 1 },
        { id: "cam18-l-t3-s4-q34", number: 34, type: "note_completion", question: "34. help with their _______", correctAnswer: "identification", points: 1 },
        { id: "cam18-l-t3-s4-q35", number: 35, type: "note_completion", question: "35. few systems for _______ satellites", correctAnswer: "tracking", points: 1 },
        { id: "cam18-l-t3-s4-q36", number: 36, type: "note_completion", question: "36. used for _______ or commercial reasons", correctAnswer: "military", points: 1 },
        { id: "cam18-l-t3-s4-q37", number: 37, type: "note_completion", question: "37. details of the object's _______ at a given time", correctAnswer: "location", points: 1 },
        { id: "cam18-l-t3-s4-q38", number: 38, type: "note_completion", question: "38. Scientists can only make a _______", correctAnswer: "prediction", points: 1 },
        { id: "cam18-l-t3-s4-q39", number: 39, type: "note_completion", question: "39. combined in one _______", correctAnswer: "database", points: 1 },
        { id: "cam18-l-t3-s4-q40", number: 40, type: "note_completion", question: "40. designed to create _______ in its users", correctAnswer: "trust", points: 1 },
      ],
    },
  ],
};

export const cambridge18ListeningTests: IELTSTest[] = [
  cambridge18_listening_t1,
  cambridge18_listening_t2,
  cambridge18_listening_t3,
];
