import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// ============================================================
// CAMBRIDGE IELTS 17 – LISTENING TEST 1
// Parts: 1) Buckworth Conservation Group (note completion)
//        2) Boat trip round Tasmania (MCQ + three Choose-TWO)
//        3) Work experience for vet science students (MCQ + matching)
//        4) Labyrinths (note completion)
// ============================================================
export const cambridge17_listening_t1: IELTSTest = {
  id: "cam17-listening-t1",
  title: "Cambridge IELTS 17 – Listening Test 1",
  bookNumber: 17,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 10,
  audioUrl: audioUrl("cam17-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam17-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Buckworth Conservation Group

Regular activities

Beach
●  making sure the beach does not have 1 _______ on it
●  no 2 _______

Nature reserve
●  maintaining paths
●  nesting boxes for birds installed
●  next task is taking action to attract 3 _______ to the place
●  identifying types of 4 _______
●  building a new 5 _______

Forthcoming events

Saturday
●  meet at Dunsmore Beach car park
●  walk across the sands and reach the 6 _______
●  take a picnic
●  wear appropriate 7 _______

Woodwork session
●  suitable for 8 _______ to participate in
●  making 9 _______ out of wood
●  17th, from 10 a.m. to 3 p.m.
●  cost of session (no camping): 10 £ _______`,
      questions: [
        { id: "cam17-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. making sure the beach does not have _______ on it", correctAnswer: "litter", points: 1 },
        { id: "cam17-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. no _______", correctAnswer: "dogs", points: 1 },
        { id: "cam17-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. taking action to attract _______ to the place", correctAnswer: "insects", points: 1 },
        { id: "cam17-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. identifying types of _______", correctAnswer: "butterflies", points: 1 },
        { id: "cam17-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. building a new _______", correctAnswer: "wall", points: 1 },
        { id: "cam17-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. walk across the sands and reach the _______", correctAnswer: "island", points: 1 },
        { id: "cam17-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. wear appropriate _______", correctAnswer: "boots", points: 1 },
        { id: "cam17-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. suitable for _______ to participate in", correctAnswer: "beginners", points: 1 },
        { id: "cam17-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. making _______ out of wood", correctAnswer: "spoons", points: 1 },
        { id: "cam17-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. cost of session (no camping): £ _______", correctAnswer: "35/thirty five/thirty-five", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam17-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15 & 16: Choose TWO letters, A–E.
Questions 17 & 18: Choose TWO letters, A–E.
Questions 19 & 20: Choose TWO letters, A–E.`,
      passageTitle: "Boat trip round Tasmania",
      questions: [
        {
          id: "cam17-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. What is the maximum number of people who can stand on each side of the boat?",
          options: [
            { label: "A  9", value: "A" },
            { label: "B  15", value: "B" },
            { label: "C  18", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t1-s2-q12", number: 12, type: "multiple_choice",
          question: "12. What colour are the tour boats?",
          options: [
            { label: "A  dark red", value: "A" },
            { label: "B  jet black", value: "B" },
            { label: "C  light green", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t1-s2-q13", number: 13, type: "multiple_choice",
          question: "13. Which lunchbox is suitable for someone who doesn't eat meat or fish?",
          options: [
            { label: "A  Lunchbox 1", value: "A" },
            { label: "B  Lunchbox 2", value: "B" },
            { label: "C  Lunchbox 3", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t1-s2-q14", number: 14, type: "multiple_choice",
          question: "14. What should people do with their litter?",
          options: [
            { label: "A  take it home", value: "A" },
            { label: "B  hand it to a member of staff", value: "B" },
            { label: "C  put it in the bins provided on the boat", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t1-s2-q15", number: 15,
          groupLabel: `Questions 15 and 16: Choose TWO letters, A–E.\n\nWhich TWO features of the lighthouse does Lou mention?\n\nA  why it was built\nB  who built it\nC  how long it took to build\nD  who staffed it\nE  what it was built with\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "15. Choose TWO (first answer)",
          options: [
            { label: "A  why it was built", value: "A" },
            { label: "B  who built it", value: "B" },
            { label: "C  how long it took to build", value: "C" },
            { label: "D  who staffed it", value: "D" },
            { label: "E  what it was built with", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam17-l-t1-s2-q16", number: 16, type: "multiple_choice",
          question: "16. Choose TWO (second answer)",
          options: [
            { label: "A  why it was built", value: "A" },
            { label: "B  who built it", value: "B" },
            { label: "C  how long it took to build", value: "C" },
            { label: "D  who staffed it", value: "D" },
            { label: "E  what it was built with", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam17-l-t1-s2-q17", number: 17,
          groupLabel: `Questions 17 and 18: Choose TWO letters, A–E.\n\nWhich TWO types of creature might come close to the boat?\n\nA  sea eagles\nB  fur seals\nC  dolphins\nD  whales\nE  penguins\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "17. Choose TWO (first answer)",
          options: [
            { label: "A  sea eagles", value: "A" },
            { label: "B  fur seals", value: "B" },
            { label: "C  dolphins", value: "C" },
            { label: "D  whales", value: "D" },
            { label: "E  penguins", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam17-l-t1-s2-q18", number: 18, type: "multiple_choice",
          question: "18. Choose TWO (second answer)",
          options: [
            { label: "A  sea eagles", value: "A" },
            { label: "B  fur seals", value: "B" },
            { label: "C  dolphins", value: "C" },
            { label: "D  whales", value: "D" },
            { label: "E  penguins", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam17-l-t1-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhich TWO points does Lou make about the caves?\n\nA  Only large tourist boats can visit them.\nB  The entrances to them are often blocked.\nC  It is too dangerous for individuals to go near them.\nD  Someone will explain what is inside them.\nE  They cannot be reached on foot.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  Only large tourist boats can visit them.", value: "A" },
            { label: "B  The entrances to them are often blocked.", value: "B" },
            { label: "C  It is too dangerous for individuals to go near them.", value: "C" },
            { label: "D  Someone will explain what is inside them.", value: "D" },
            { label: "E  They cannot be reached on foot.", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
        {
          id: "cam17-l-t1-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  Only large tourist boats can visit them.", value: "A" },
            { label: "B  The entrances to them are often blocked.", value: "B" },
            { label: "C  It is too dangerous for individuals to go near them.", value: "C" },
            { label: "D  Someone will explain what is inside them.", value: "D" },
            { label: "E  They cannot be reached on foot.", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam17-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Choose the correct letter, A, B or C.
Questions 27–30: Match each module with an opinion. Choose FOUR answers from the box (A–F).`,
      passageTitle: "Work experience for veterinary science students",
      passageText: `Opinions (for Q27–30):
A  Tim found this easier than expected.
B  Tim thought this was not very clearly organised.
C  Diana may do some further study on this.
D  They both found the reading required for this was difficult.
E  Tim was shocked at something he learned on this module.
F  They were both surprised how little is known about some aspects of this.`,
      questions: [
        {
          id: "cam17-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21–26: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What problem did both Diana and Tim have when arranging their work experience?",
          options: [
            { label: "A  make initial contact with suitable farms", value: "A" },
            { label: "B  organising transport to and from the farm", value: "B" },
            { label: "C  finding a placement for the required length of time", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t1-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Tim was pleased to be able to help",
          options: [
            { label: "A  a lamb that had a broken leg.", value: "A" },
            { label: "B  a sheep that was having difficulty giving birth.", value: "B" },
            { label: "C  a newly born lamb that was having trouble feeding.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t1-s3-q23", number: 23, type: "multiple_choice",
          question: "23. Diana says the sheep on her farm",
          options: [
            { label: "A  were of various different varieties.", value: "A" },
            { label: "B  were mainly reared for their meat.", value: "B" },
            { label: "C  had better quality wool than sheep on the hills.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t1-s3-q24", number: 24, type: "multiple_choice",
          question: "24. What did the students learn about adding supplements to chicken feed?",
          options: [
            { label: "A  These should only be given if specially needed.", value: "A" },
            { label: "B  It is worth paying extra for the most effective ones.", value: "B" },
            { label: "C  The amount given at one time should be limited.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t1-s3-q25", number: 25, type: "multiple_choice",
          question: "25. What happened when Diana was working with dairy cows?",
          options: [
            { label: "A  She identified some cows incorrectly.", value: "A" },
            { label: "B  She accidentally threw some milk away.", value: "B" },
            { label: "C  She made a mistake when storing milk.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t1-s3-q26", number: 26, type: "multiple_choice",
          question: "26. What did both farmers mention about vets and farming?",
          options: [
            { label: "A  Vets are failing to cope with some aspects of animal health.", value: "A" },
            { label: "B  There needs to be a fundamental change in the training of vets.", value: "B" },
            { label: "C  Some jobs could be done by the farmer rather than by a vet.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t1-s3-q27", number: 27,
          groupLabel: `Questions 27–30: What opinion do the students give about each of the following modules on their veterinary science course? Choose FOUR answers from the box (A–F) and write the correct letter next to each module.\n\nA  Tim found this easier than expected.\nB  Tim thought this was not very clearly organised.\nC  Diana may do some further study on this.\nD  They both found the reading required for this was difficult.\nE  Tim was shocked at something he learned on this module.\nF  They were both surprised how little is known about some aspects of this.`,
          type: "multiple_choice", question: "27. Medical terminology",
          options: [
            { label: "A  Tim found this easier than expected.", value: "A" },
            { label: "B  Tim thought this was not very clearly organised.", value: "B" },
            { label: "C  Diana may do some further study on this.", value: "C" },
            { label: "D  They both found the reading required for this was difficult.", value: "D" },
            { label: "E  Tim was shocked at something he learned on this module.", value: "E" },
            { label: "F  They were both surprised how little is known about some aspects of this.", value: "F" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t1-s3-q28", number: 28, type: "multiple_choice",
          question: "28. Diet and nutrition",
          options: [
            { label: "A  Tim found this easier than expected.", value: "A" },
            { label: "B  Tim thought this was not very clearly organised.", value: "B" },
            { label: "C  Diana may do some further study on this.", value: "C" },
            { label: "D  They both found the reading required for this was difficult.", value: "D" },
            { label: "E  Tim was shocked at something he learned on this module.", value: "E" },
            { label: "F  They were both surprised how little is known about some aspects of this.", value: "F" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam17-l-t1-s3-q29", number: 29, type: "multiple_choice",
          question: "29. Animal disease",
          options: [
            { label: "A  Tim found this easier than expected.", value: "A" },
            { label: "B  Tim thought this was not very clearly organised.", value: "B" },
            { label: "C  Diana may do some further study on this.", value: "C" },
            { label: "D  They both found the reading required for this was difficult.", value: "D" },
            { label: "E  Tim was shocked at something he learned on this module.", value: "E" },
            { label: "F  They were both surprised how little is known about some aspects of this.", value: "F" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam17-l-t1-s3-q30", number: 30, type: "multiple_choice",
          question: "30. Wildlife medication",
          options: [
            { label: "A  Tim found this easier than expected.", value: "A" },
            { label: "B  Tim thought this was not very clearly organised.", value: "B" },
            { label: "C  Diana may do some further study on this.", value: "C" },
            { label: "D  They both found the reading required for this was difficult.", value: "D" },
            { label: "E  Tim was shocked at something he learned on this module.", value: "E" },
            { label: "F  They were both surprised how little is known about some aspects of this.", value: "F" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam17-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Labyrinths

Definition
●  a winding spiral path leading to a central area

Labyrinths compared with mazes
●  Mazes are a type of 31 _______
   –  32 _______ is needed to navigate through a maze
   –  the word 'maze' is derived from a word meaning a feeling of 33 _______
●  Labyrinths represent a journey through life
   –  they have frequently been used in 34 _______ and prayer

Early examples of the labyrinth spiral
●  Ancient carvings on 35 _______ have been found across many cultures
●  The Pima, a Native American tribe, wove the symbol on baskets
●  Ancient Greeks used the symbol on 36 _______

Walking labyrinths
●  The largest surviving example of a turf labyrinth once had a big 37 _______ at its centre

Labyrinths nowadays
●  Believed to have a beneficial impact on mental and physical health, e.g. walking a maze can reduce a person's 38 _______ rate
●  Used in medical and health and fitness settings and also prisons
●  Popular with patients, visitors and staff in hospitals
   –  patients who can't walk can use 'finger labyrinths' made from 39 _______
   –  research has shown that Alzheimer's sufferers experience less 40 _______`,
      questions: [
        { id: "cam17-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. Mazes are a type of _______", correctAnswer: "puzzle", points: 1 },
        { id: "cam17-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. _______ is needed to navigate through a maze", correctAnswer: "logic", points: 1 },
        { id: "cam17-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. a word meaning a feeling of _______", correctAnswer: "confusion", points: 1 },
        { id: "cam17-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. frequently been used in _______ and prayer", correctAnswer: "meditation", points: 1 },
        { id: "cam17-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. Ancient carvings on _______ have been found", correctAnswer: "stone", points: 1 },
        { id: "cam17-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. Ancient Greeks used the symbol on _______", correctAnswer: "coins", points: 1 },
        { id: "cam17-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. once had a big _______ at its centre", correctAnswer: "tree", points: 1 },
        { id: "cam17-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. walking a maze can reduce a person's _______ rate", correctAnswer: "breathing", points: 1 },
        { id: "cam17-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. 'finger labyrinths' made from _______", correctAnswer: "paper", points: 1 },
        { id: "cam17-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. Alzheimer's sufferers experience less _______", correctAnswer: "anxiety", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 17 – LISTENING TEST 2
// Parts: 1) Voluntary work in Southoe village (notes + table)
//        2) Oniton Hall (MCQ + activity/location matching)
//        3) Romeo and Juliet review (Choose-TWO + matching + MCQ)
//        4) Icelandic language & digital tech (notes)
// ============================================================
export const cambridge17_listening_t2: IELTSTest = {
  id: "cam17-listening-t2",
  title: "Cambridge IELTS 17 – Listening Test 2",
  bookNumber: 17,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 10,
  audioUrl: audioUrl("cam17-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam17-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–7: Complete the notes below. Write ONE WORD ONLY for each answer.
Questions 8–10: Complete the table below. Write ONE WORD ONLY for each answer.`,
      passageText: `Opportunities for voluntary work in Southoe village

Library
●  Help with 1 _______ books (times to be arranged)
●  Help needed to keep 2 _______ of books up to date
●  Library is in the 3 _______ Room in the village hall

Lunch club
●  Help by providing 4 _______
●  Help with hobbies such as 5 _______

Help for individuals needed next week
●  Taking Mrs Carroll to 6 _______
●  Work in the 7 _______ at Mr Selsbury's house

Village social events
Date        | Event                    | Location         | Help needed
19 Oct      | 8 _______                | Village hall     | providing refreshments
18 Nov      | dance                    | Village hall     | checking 9 _______
31 Dec      | New Year's Eve party     | Mountfort Hotel  | designing the 10 _______`,
      questions: [
        { id: "cam17-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. Help with _______ books", correctAnswer: "collecting", points: 1 },
        { id: "cam17-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. keep _______ of books up to date", correctAnswer: "records", points: 1 },
        { id: "cam17-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. Library is in the _______ Room", correctAnswer: "West", points: 1 },
        { id: "cam17-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. Help by providing _______", correctAnswer: "transport", points: 1 },
        { id: "cam17-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. Help with hobbies such as _______", correctAnswer: "art", points: 1 },
        { id: "cam17-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. Taking Mrs Carroll to _______", correctAnswer: "hospital", points: 1 },
        { id: "cam17-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. Work in the _______ at Mr Selsbury's house", correctAnswer: "garden", points: 1 },
        { id: "cam17-l-t2-s1-q8", number: 8, type: "table_completion", question: "8. 19 Oct event: _______", correctAnswer: "quiz", points: 1 },
        { id: "cam17-l-t2-s1-q9", number: 9, type: "table_completion", question: "9. 18 Nov dance — help needed: checking _______", correctAnswer: "tickets", points: 1 },
        { id: "cam17-l-t2-s1-q10", number: 10, type: "table_completion", question: "10. 31 Dec party — help needed: designing the _______", correctAnswer: "poster", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam17-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15–20: Match each location on the farm with an activity. Choose SIX answers from the box (A–H).`,
      passageTitle: "Oniton Hall",
      passageText: `Activities (for Q15–20):
A  shopping
B  watching cows being milked
C  seeing old farming equipment
D  eating and drinking
E  starting a trip
F  seeing rare breeds of animals
G  helping to look after animals
H  using farming tools`,
      questions: [
        {
          id: "cam17-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Many past owners made changes to",
          options: [
            { label: "A  the gardens.", value: "A" },
            { label: "B  the house.", value: "B" },
            { label: "C  the farm.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t2-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Sir Edward Downes built Oniton Hall because he wanted",
          options: [
            { label: "A  a place for discussing politics.", value: "A" },
            { label: "B  a place to display his wealth.", value: "B" },
            { label: "C  a place for artists and writers.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t2-s2-q13", number: 13, type: "multiple_choice",
          question: "13. Visitors can learn about the work of servants in the past from",
          options: [
            { label: "A  audio guides.", value: "A" },
            { label: "B  photographs.", value: "B" },
            { label: "C  people in costume.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t2-s2-q14", number: 14, type: "multiple_choice",
          question: "14. What is new for children at Oniton Hall?",
          options: [
            { label: "A  clothes for dressing up", value: "A" },
            { label: "B  mini tractors", value: "B" },
            { label: "C  the adventure playground", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t2-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Which activity is offered at each of the following locations on the farm? Choose SIX answers from the box (A–H) and write the correct letter next to each location.\n\nA  shopping\nB  watching cows being milked\nC  seeing old farming equipment\nD  eating and drinking\nE  starting a trip\nF  seeing rare breeds of animals\nG  helping to look after animals\nH  using farming tools`,
          type: "matching", question: "15. dairy",
          options: [
            { label: "A  shopping", value: "A" },
            { label: "B  watching cows being milked", value: "B" },
            { label: "C  seeing old farming equipment", value: "C" },
            { label: "D  eating and drinking", value: "D" },
            { label: "E  starting a trip", value: "E" },
            { label: "F  seeing rare breeds of animals", value: "F" },
            { label: "G  helping to look after animals", value: "G" },
            { label: "H  using farming tools", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam17-l-t2-s2-q16", number: 16, type: "matching", question: "16. large barn",
          options: [
            { label: "A  shopping", value: "A" },
            { label: "B  watching cows being milked", value: "B" },
            { label: "C  seeing old farming equipment", value: "C" },
            { label: "D  eating and drinking", value: "D" },
            { label: "E  starting a trip", value: "E" },
            { label: "F  seeing rare breeds of animals", value: "F" },
            { label: "G  helping to look after animals", value: "G" },
            { label: "H  using farming tools", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t2-s2-q17", number: 17, type: "matching", question: "17. small barn",
          options: [
            { label: "A  shopping", value: "A" },
            { label: "B  watching cows being milked", value: "B" },
            { label: "C  seeing old farming equipment", value: "C" },
            { label: "D  eating and drinking", value: "D" },
            { label: "E  starting a trip", value: "E" },
            { label: "F  seeing rare breeds of animals", value: "F" },
            { label: "G  helping to look after animals", value: "G" },
            { label: "H  using farming tools", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam17-l-t2-s2-q18", number: 18, type: "matching", question: "18. stables",
          options: [
            { label: "A  shopping", value: "A" },
            { label: "B  watching cows being milked", value: "B" },
            { label: "C  seeing old farming equipment", value: "C" },
            { label: "D  eating and drinking", value: "D" },
            { label: "E  starting a trip", value: "E" },
            { label: "F  seeing rare breeds of animals", value: "F" },
            { label: "G  helping to look after animals", value: "G" },
            { label: "H  using farming tools", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t2-s2-q19", number: 19, type: "matching", question: "19. shed",
          options: [
            { label: "A  shopping", value: "A" },
            { label: "B  watching cows being milked", value: "B" },
            { label: "C  seeing old farming equipment", value: "C" },
            { label: "D  eating and drinking", value: "D" },
            { label: "E  starting a trip", value: "E" },
            { label: "F  seeing rare breeds of animals", value: "F" },
            { label: "G  helping to look after animals", value: "G" },
            { label: "H  using farming tools", value: "H" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam17-l-t2-s2-q20", number: 20, type: "matching", question: "20. parkland",
          options: [
            { label: "A  shopping", value: "A" },
            { label: "B  watching cows being milked", value: "B" },
            { label: "C  seeing old farming equipment", value: "C" },
            { label: "D  eating and drinking", value: "D" },
            { label: "E  starting a trip", value: "E" },
            { label: "F  seeing rare breeds of animals", value: "F" },
            { label: "G  helping to look after animals", value: "G" },
            { label: "H  using farming tools", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam17-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21 & 22: Choose TWO letters, A–E.
Questions 23–27: Match each aspect of the production with an opinion. Choose FIVE answers from the box (A–G).
Questions 28–30: Choose the correct letter, A, B or C.`,
      passageTitle: "Review of The Emporium's Romeo and Juliet",
      passageText: `Opinions (for Q23–27):
A  They both expected this to be more traditional.
B  They both thought this was original.
C  They agree this created the right atmosphere.
D  They agree this was a major strength.
E  They were both disappointed by this.
F  They disagree about why this was an issue.
G  They disagree about how this could be improved.`,
      questions: [
        {
          id: "cam17-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO things do the students agree they need to include in their review of Romeo and Juliet?\n\nA  analysis of the text\nB  a summary of the plot\nC  a description of the theatre\nD  a personal reaction\nE  a reference to particular scenes\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  analysis of the text", value: "A" },
            { label: "B  a summary of the plot", value: "B" },
            { label: "C  a description of the theatre", value: "C" },
            { label: "D  a personal reaction", value: "D" },
            { label: "E  a reference to particular scenes", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
        {
          id: "cam17-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  analysis of the text", value: "A" },
            { label: "B  a summary of the plot", value: "B" },
            { label: "C  a description of the theatre", value: "C" },
            { label: "D  a personal reaction", value: "D" },
            { label: "E  a reference to particular scenes", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
        {
          id: "cam17-l-t2-s3-q23", number: 23,
          groupLabel: `Questions 23–27: Which opinion do the speakers give about each of the following aspects of The Emporium's production of Romeo and Juliet? Choose FIVE answers from the box (A–G).\n\nA  They both expected this to be more traditional.\nB  They both thought this was original.\nC  They agree this created the right atmosphere.\nD  They agree this was a major strength.\nE  They were both disappointed by this.\nF  They disagree about why this was an issue.\nG  They disagree about how this could be improved.`,
          type: "matching", question: "23. the set",
          options: [
            { label: "A  They both expected this to be more traditional.", value: "A" },
            { label: "B  They both thought this was original.", value: "B" },
            { label: "C  They agree this created the right atmosphere.", value: "C" },
            { label: "D  They agree this was a major strength.", value: "D" },
            { label: "E  They were both disappointed by this.", value: "E" },
            { label: "F  They disagree about why this was an issue.", value: "F" },
            { label: "G  They disagree about how this could be improved.", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam17-l-t2-s3-q24", number: 24, type: "matching", question: "24. the lighting",
          options: [
            { label: "A  They both expected this to be more traditional.", value: "A" },
            { label: "B  They both thought this was original.", value: "B" },
            { label: "C  They agree this created the right atmosphere.", value: "C" },
            { label: "D  They agree this was a major strength.", value: "D" },
            { label: "E  They were both disappointed by this.", value: "E" },
            { label: "F  They disagree about why this was an issue.", value: "F" },
            { label: "G  They disagree about how this could be improved.", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t2-s3-q25", number: 25, type: "matching", question: "25. the costume design",
          options: [
            { label: "A  They both expected this to be more traditional.", value: "A" },
            { label: "B  They both thought this was original.", value: "B" },
            { label: "C  They agree this created the right atmosphere.", value: "C" },
            { label: "D  They agree this was a major strength.", value: "D" },
            { label: "E  They were both disappointed by this.", value: "E" },
            { label: "F  They disagree about why this was an issue.", value: "F" },
            { label: "G  They disagree about how this could be improved.", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t2-s3-q26", number: 26, type: "matching", question: "26. the music",
          options: [
            { label: "A  They both expected this to be more traditional.", value: "A" },
            { label: "B  They both thought this was original.", value: "B" },
            { label: "C  They agree this created the right atmosphere.", value: "C" },
            { label: "D  They agree this was a major strength.", value: "D" },
            { label: "E  They were both disappointed by this.", value: "E" },
            { label: "F  They disagree about why this was an issue.", value: "F" },
            { label: "G  They disagree about how this could be improved.", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam17-l-t2-s3-q27", number: 27, type: "matching", question: "27. the actors' delivery",
          options: [
            { label: "A  They both expected this to be more traditional.", value: "A" },
            { label: "B  They both thought this was original.", value: "B" },
            { label: "C  They agree this created the right atmosphere.", value: "C" },
            { label: "D  They agree this was a major strength.", value: "D" },
            { label: "E  They were both disappointed by this.", value: "E" },
            { label: "F  They disagree about why this was an issue.", value: "F" },
            { label: "G  They disagree about how this could be improved.", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam17-l-t2-s3-q28", number: 28,
          groupLabel: `Questions 28–30: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "28. The students think the story of Romeo and Juliet is still relevant for young people today because",
          options: [
            { label: "A  it illustrates how easily conflict can start.", value: "A" },
            { label: "B  it deals with problems that families experience.", value: "B" },
            { label: "C  it teaches them about relationships.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t2-s3-q29", number: 29, type: "multiple_choice",
          question: "29. The students found watching Romeo and Juliet in another language",
          options: [
            { label: "A  frustrating.", value: "A" },
            { label: "B  demanding.", value: "B" },
            { label: "C  moving.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t2-s3-q30", number: 30, type: "multiple_choice",
          question: "30. Why do the students think Shakespeare's plays have such international appeal?",
          options: [
            { label: "A  The stories are exciting.", value: "A" },
            { label: "B  There are recognisable characters.", value: "B" },
            { label: "C  They can be interpreted in many ways.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam17-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `The impact of digital technology on the Icelandic language

The Icelandic language
●  has approximately 31 _______ speakers
●  has a 32 _______ that is still growing
●  has not changed a lot over the last thousand years
●  has its own words for computer-based concepts, such as web browser and 33 _______

Young speakers
●  are big users of digital technology, such as 34 _______
●  are becoming 35 _______ very quickly
●  are having discussions using only English while they are in the 36 _______ at school
●  are better able to identify the content of a 37 _______ in English than Icelandic

Technology and internet companies
●  write very little in Icelandic because of the small number of speakers and because of how complicated its 38 _______ is

The Icelandic government
●  has set up a fund to support the production of more digital content in the language
●  believes that Icelandic has a secure future
●  is worried that young Icelanders may lose their 39 _______ as Icelanders
●  is worried about the consequences of children not being 40 _______ in either Icelandic or English`,
      questions: [
        { id: "cam17-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. approximately _______ speakers", correctAnswer: "321,000/321000", points: 1 },
        { id: "cam17-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. has a _______ that is still growing", correctAnswer: "vocabulary", points: 1 },
        { id: "cam17-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. words for concepts such as web browser and _______", correctAnswer: "podcast", points: 1 },
        { id: "cam17-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. big users of digital technology, such as _______", correctAnswer: "smartphones", points: 1 },
        { id: "cam17-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. are becoming _______ very quickly", correctAnswer: "bilingual", points: 1 },
        { id: "cam17-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. while they are in the _______ at school", correctAnswer: "playground", points: 1 },
        { id: "cam17-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. identify the content of a _______ in English", correctAnswer: "picture", points: 1 },
        { id: "cam17-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. how complicated its _______ is", correctAnswer: "grammar", points: 1 },
        { id: "cam17-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. may lose their _______ as Icelanders", correctAnswer: "identity", points: 1 },
        { id: "cam17-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. children not being _______ in either Icelandic or English", correctAnswer: "fluent", points: 1 },
      ],
    },
  ],
};

export const cambridge17ListeningTests: IELTSTest[] = [
  cambridge17_listening_t1,
  cambridge17_listening_t2,
];
