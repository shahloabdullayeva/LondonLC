import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

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

export const cambridge18ListeningTests: IELTSTest[] = [cambridge18_listening_t1];
