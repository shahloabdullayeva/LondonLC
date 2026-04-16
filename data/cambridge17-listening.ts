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
  transferMinutes: 2,
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
          type: "matching", question: "27. Medical terminology",
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
          id: "cam17-l-t1-s3-q28", number: 28, type: "matching",
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
          id: "cam17-l-t1-s3-q29", number: 29, type: "matching",
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
          id: "cam17-l-t1-s3-q30", number: 30, type: "matching",
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
  transferMinutes: 2,
  audioUrl: audioUrl("cam17-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam17-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD ONLY for each answer.`,
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

// ============================================================
// CAMBRIDGE IELTS 17 – LISTENING TEST 3
// Parts: 1) Advice on surfing holidays in Ireland (notes)
//        2) School extended hours childcare (Choose-TWO + MCQ
//           + activity/info matching)
//        3) Holly's work placement tutorial (MCQ + events-management
//           skills matching)
//        4) Bird migration theory (notes)
// ============================================================
export const cambridge17_listening_t3: IELTSTest = {
  id: "cam17-listening-t3",
  title: "Cambridge IELTS 17 – Listening Test 3",
  bookNumber: 17,
  testNumber: 3,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam17-listening-t3.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam17-l-t3-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Advice on surfing holidays

Jack's advice
●  Recommends surfing for 1 _______ holidays in the summer
●  Need to be quite 2 _______

Irish surfing locations
●  County Clare
   –  Lahinch has some good quality 3 _______ and surf schools
   –  There are famous cliffs nearby
●  County Mayo
   –  Good surf school at 4 _______ beach
   –  Surf camp lasts for one 5 _______
   –  Can also explore the local 6 _______ by kayak

Weather
●  Best month to go: 7 _______
●  Average temperature in summer: approx. 8 _______ degrees

Costs
●  Equipment
   –  Wetsuit and surfboard: 9 _______ euros per day
   –  Also advisable to hire 10 _______ for warmth`,
      questions: [
        { id: "cam17-l-t3-s1-q1", number: 1, type: "note_completion", question: "1. Recommends surfing for _______ holidays in the summer", correctAnswer: "family", points: 1 },
        { id: "cam17-l-t3-s1-q2", number: 2, type: "note_completion", question: "2. Need to be quite _______", correctAnswer: "fit", points: 1 },
        { id: "cam17-l-t3-s1-q3", number: 3, type: "note_completion", question: "3. Lahinch has some good quality _______ and surf schools", correctAnswer: "hotels", points: 1 },
        { id: "cam17-l-t3-s1-q4", number: 4, type: "note_completion", question: "4. Good surf school at _______ beach", correctAnswer: "Carrowniskey", points: 1 },
        { id: "cam17-l-t3-s1-q5", number: 5, type: "note_completion", question: "5. Surf camp lasts for one _______", correctAnswer: "week", points: 1 },
        { id: "cam17-l-t3-s1-q6", number: 6, type: "note_completion", question: "6. explore the local _______ by kayak", correctAnswer: "bay", points: 1 },
        { id: "cam17-l-t3-s1-q7", number: 7, type: "note_completion", question: "7. Best month to go: _______", correctAnswer: "September", points: 1 },
        { id: "cam17-l-t3-s1-q8", number: 8, type: "note_completion", question: "8. Average temperature in summer: approx. _______ degrees", correctAnswer: "19/nineteen", points: 1 },
        { id: "cam17-l-t3-s1-q9", number: 9, type: "note_completion", question: "9. Wetsuit and surfboard: _______ euros per day", correctAnswer: "30/thirty", points: 1 },
        { id: "cam17-l-t3-s1-q10", number: 10, type: "note_completion", question: "10. advisable to hire _______ for warmth", correctAnswer: "boots", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam17-l-t3-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13–15: Choose the correct letter, A, B or C.
Questions 16–20: Match each activity with information. Choose FIVE answers from the box (A–G).`,
      passageTitle: "School extended hours childcare service",
      questions: [
        {
          id: "cam17-l-t3-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO facts are given about the school's extended hours childcare service?\n\nA  It started recently.\nB  More children attend after school than before school.\nC  An average of 50 children attend in the mornings.\nD  A child cannot attend both the before and after school sessions.\nE  The maximum number of children who can attend is 70.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  It started recently.", value: "A" },
            { label: "B  More children attend after school than before school.", value: "B" },
            { label: "C  An average of 50 children attend in the mornings.", value: "C" },
            { label: "D  A child cannot attend both the before and after school sessions.", value: "D" },
            { label: "E  The maximum number of children who can attend is 70.", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam17-l-t3-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  It started recently.", value: "A" },
            { label: "B  More children attend after school than before school.", value: "B" },
            { label: "C  An average of 50 children attend in the mornings.", value: "C" },
            { label: "D  A child cannot attend both the before and after school sessions.", value: "D" },
            { label: "E  The maximum number of children who can attend is 70.", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam17-l-t3-s2-q13", number: 13,
          groupLabel: `Questions 13–15: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "13. How much does childcare cost for a complete afternoon session per child?",
          options: [
            { label: "A  £3.50", value: "A" },
            { label: "B  £5.70", value: "B" },
            { label: "C  £7.20", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t3-s2-q14", number: 14, type: "multiple_choice",
          question: "14. What does the manager say about food?",
          options: [
            { label: "A  Children with allergies should bring their own food.", value: "A" },
            { label: "B  Children may bring healthy snacks with them.", value: "B" },
            { label: "C  Children are given a proper meal at 5 p.m.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t3-s2-q15", number: 15, type: "multiple_choice",
          question: "15. What is different about arrangements in the school holidays?",
          options: [
            { label: "A  Children from other schools can attend.", value: "A" },
            { label: "B  Older children can attend.", value: "B" },
            { label: "C  A greater number of children can attend.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t3-s2-q16", number: 16,
          groupLabel: `Questions 16–20: What information is given about each of the following activities on offer? Choose FIVE answers from the box (A–G) and write the correct letter next to each activity.\n\nA  has limited availability\nB  is no longer available\nC  is for over 8s only\nD  requires help from parents\nE  involves an additional fee\nF  is a new activity\nG  was requested by children`,
          type: "matching", question: "16. Spanish",
          options: [
            { label: "A  has limited availability", value: "A" },
            { label: "B  is no longer available", value: "B" },
            { label: "C  is for over 8s only", value: "C" },
            { label: "D  requires help from parents", value: "D" },
            { label: "E  involves an additional fee", value: "E" },
            { label: "F  is a new activity", value: "F" },
            { label: "G  was requested by children", value: "G" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam17-l-t3-s2-q17", number: 17, type: "matching", question: "17. Music",
          options: [
            { label: "A  has limited availability", value: "A" },
            { label: "B  is no longer available", value: "B" },
            { label: "C  is for over 8s only", value: "C" },
            { label: "D  requires help from parents", value: "D" },
            { label: "E  involves an additional fee", value: "E" },
            { label: "F  is a new activity", value: "F" },
            { label: "G  was requested by children", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam17-l-t3-s2-q18", number: 18, type: "matching", question: "18. Painting",
          options: [
            { label: "A  has limited availability", value: "A" },
            { label: "B  is no longer available", value: "B" },
            { label: "C  is for over 8s only", value: "C" },
            { label: "D  requires help from parents", value: "D" },
            { label: "E  involves an additional fee", value: "E" },
            { label: "F  is a new activity", value: "F" },
            { label: "G  was requested by children", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam17-l-t3-s2-q19", number: 19, type: "matching", question: "19. Yoga",
          options: [
            { label: "A  has limited availability", value: "A" },
            { label: "B  is no longer available", value: "B" },
            { label: "C  is for over 8s only", value: "C" },
            { label: "D  requires help from parents", value: "D" },
            { label: "E  involves an additional fee", value: "E" },
            { label: "F  is a new activity", value: "F" },
            { label: "G  was requested by children", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam17-l-t3-s2-q20", number: 20, type: "matching", question: "20. Cooking",
          options: [
            { label: "A  has limited availability", value: "A" },
            { label: "B  is no longer available", value: "B" },
            { label: "C  is for over 8s only", value: "C" },
            { label: "D  requires help from parents", value: "D" },
            { label: "E  involves an additional fee", value: "E" },
            { label: "F  is a new activity", value: "F" },
            { label: "G  was requested by children", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam17-l-t3-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose the correct letter, A, B or C.
Questions 25–30: Match each events-management skill with an important aspect. Choose SIX answers from the box (A–H).`,
      passageTitle: "Holly's Work Placement Tutorial",
      questions: [
        {
          id: "cam17-l-t3-s3-q21", number: 21,
          groupLabel: `Questions 21–24: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. Holly has chosen the Orion Stadium placement because",
          options: [
            { label: "A  it involves children.", value: "A" },
            { label: "B  it is outdoors.", value: "B" },
            { label: "C  it sounds like fun.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t3-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Which aspect of safety does Dr Green emphasise most?",
          options: [
            { label: "A  ensuring children stay in the stadium", value: "A" },
            { label: "B  checking the equipment children will use", value: "B" },
            { label: "C  removing obstacles in changing rooms", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t3-s3-q23", number: 23, type: "multiple_choice",
          question: "23. What does Dr Green say about the spectators?",
          options: [
            { label: "A  They can be hard to manage.", value: "A" },
            { label: "B  They make useful volunteers.", value: "B" },
            { label: "C  They shouldn't take photographs.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t3-s3-q24", number: 24, type: "multiple_choice",
          question: "24. What has affected the schedule in the past?",
          options: [
            { label: "A  bad weather", value: "A" },
            { label: "B  an injury", value: "B" },
            { label: "C  extra time", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t3-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What do Holly and her tutor agree is an important aspect of each of the following events-management skills? Choose SIX answers from the box (A–H).\n\nA  being flexible\nB  focusing on details\nC  having a smart appearance\nD  hiding your emotions\nE  relying on experts\nF  trusting your own views\nG  doing one thing at a time\nH  thinking of the future`,
          type: "matching", question: "25. Communication",
          options: [
            { label: "A  being flexible", value: "A" },
            { label: "B  focusing on details", value: "B" },
            { label: "C  having a smart appearance", value: "C" },
            { label: "D  hiding your emotions", value: "D" },
            { label: "E  relying on experts", value: "E" },
            { label: "F  trusting your own views", value: "F" },
            { label: "G  doing one thing at a time", value: "G" },
            { label: "H  thinking of the future", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t3-s3-q26", number: 26, type: "matching", question: "26. Organisation",
          options: [
            { label: "A  being flexible", value: "A" },
            { label: "B  focusing on details", value: "B" },
            { label: "C  having a smart appearance", value: "C" },
            { label: "D  hiding your emotions", value: "D" },
            { label: "E  relying on experts", value: "E" },
            { label: "F  trusting your own views", value: "F" },
            { label: "G  doing one thing at a time", value: "G" },
            { label: "H  thinking of the future", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t3-s3-q27", number: 27, type: "matching", question: "27. Time management",
          options: [
            { label: "A  being flexible", value: "A" },
            { label: "B  focusing on details", value: "B" },
            { label: "C  having a smart appearance", value: "C" },
            { label: "D  hiding your emotions", value: "D" },
            { label: "E  relying on experts", value: "E" },
            { label: "F  trusting your own views", value: "F" },
            { label: "G  doing one thing at a time", value: "G" },
            { label: "H  thinking of the future", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam17-l-t3-s3-q28", number: 28, type: "matching", question: "28. Creativity",
          options: [
            { label: "A  being flexible", value: "A" },
            { label: "B  focusing on details", value: "B" },
            { label: "C  having a smart appearance", value: "C" },
            { label: "D  hiding your emotions", value: "D" },
            { label: "E  relying on experts", value: "E" },
            { label: "F  trusting your own views", value: "F" },
            { label: "G  doing one thing at a time", value: "G" },
            { label: "H  thinking of the future", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t3-s3-q29", number: 29, type: "matching", question: "29. Leadership",
          options: [
            { label: "A  being flexible", value: "A" },
            { label: "B  focusing on details", value: "B" },
            { label: "C  having a smart appearance", value: "C" },
            { label: "D  hiding your emotions", value: "D" },
            { label: "E  relying on experts", value: "E" },
            { label: "F  trusting your own views", value: "F" },
            { label: "G  doing one thing at a time", value: "G" },
            { label: "H  thinking of the future", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam17-l-t3-s3-q30", number: 30, type: "matching", question: "30. Networking",
          options: [
            { label: "A  being flexible", value: "A" },
            { label: "B  focusing on details", value: "B" },
            { label: "C  having a smart appearance", value: "C" },
            { label: "D  hiding your emotions", value: "D" },
            { label: "E  relying on experts", value: "E" },
            { label: "F  trusting your own views", value: "F" },
            { label: "G  doing one thing at a time", value: "G" },
            { label: "H  thinking of the future", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam17-l-t3-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Bird Migration Theory

Most birds are believed to migrate seasonally.

Hibernation theory
●  It was believed that birds hibernated underwater or buried themselves in 31 _______.
●  This theory was later disproved by experiments on caged birds.

Transmutation theory
●  Aristotle believed birds changed from one species into another in summer and winter.
   –  In autumn he observed that redstarts experience the loss of 32 _______ and thought they then turned into robins.
   –  Aristotle's assumptions were logical because the two species of birds had a similar 33 _______.

17th century
●  Charles Morton popularised the idea that birds fly to the 34 _______ in winter.

Scientific developments
●  In 1822, a stork was killed in Germany which had an African spear in its 35 _______.
   –  previously there had been no 36 _______ that storks migrate to Africa
●  Little was known about the 37 _______ and journeys of migrating birds until the practice of ringing was established.
   –  It was thought large birds carried small birds on some journeys because they were considered incapable of travelling across huge 38 _______.
   –  Ringing depended on what is called the 39 '_______' of dead birds.
●  In 1931, the first 40 _______ to show the migration of European birds was printed.`,
      questions: [
        { id: "cam17-l-t3-s4-q31", number: 31, type: "note_completion", question: "31. buried themselves in _______", correctAnswer: "mud", points: 1 },
        { id: "cam17-l-t3-s4-q32", number: 32, type: "note_completion", question: "32. redstarts experience the loss of _______", correctAnswer: "feathers", points: 1 },
        { id: "cam17-l-t3-s4-q33", number: 33, type: "note_completion", question: "33. the two species of birds had a similar _______", correctAnswer: "shape", points: 1 },
        { id: "cam17-l-t3-s4-q34", number: 34, type: "note_completion", question: "34. birds fly to the _______ in winter", correctAnswer: "moon", points: 1 },
        { id: "cam17-l-t3-s4-q35", number: 35, type: "note_completion", question: "35. an African spear in its _______", correctAnswer: "neck", points: 1 },
        { id: "cam17-l-t3-s4-q36", number: 36, type: "note_completion", question: "36. there had been no _______ that storks migrate to Africa", correctAnswer: "evidence", points: 1 },
        { id: "cam17-l-t3-s4-q37", number: 37, type: "note_completion", question: "37. Little was known about the _______ and journeys of migrating birds", correctAnswer: "destinations", points: 1 },
        { id: "cam17-l-t3-s4-q38", number: 38, type: "note_completion", question: "38. incapable of travelling across huge _______", correctAnswer: "oceans", points: 1 },
        { id: "cam17-l-t3-s4-q39", number: 39, type: "note_completion", question: "39. what is called the '_______' of dead birds", correctAnswer: "recovery", points: 1 },
        { id: "cam17-l-t3-s4-q40", number: 40, type: "note_completion", question: "40. the first _______ to show the migration of European birds", correctAnswer: "atlas", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 17 – LISTENING TEST 4
// Parts: 1) Easy Life Cleaning Services (notes)
//        2) Hotel staff retention (MCQ + hotel/strategy matching A/B/C)
//        3) Thomas's sports background + history of sporting
//           equipment (two Choose-TWO + matching)
//        4) Maple syrup (notes)
// ============================================================
export const cambridge17_listening_t4: IELTSTest = {
  id: "cam17-listening-t4",
  title: "Cambridge IELTS 17 – Listening Test 4",
  bookNumber: 17,
  testNumber: 4,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam17-listening-t4.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam17-l-t4-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD for each answer.`,
      passageText: `Easy Life Cleaning Services

Basic cleaning package offered
●  Cleaning all surfaces
●  Cleaning the 1 _______ throughout the apartment
●  Cleaning shower, sinks, toilet etc.

Additional services agreed

Every week
●  Cleaning the 2 _______
●  Ironing clothes – 3 _______ only

Every month
●  Cleaning all the 4 _______ from the inside
●  Washing down the 5 _______

Other possibilities
●  They can organise a plumber or an 6 _______ if necessary.
●  A special cleaning service is available for customers who are allergic to 7 _______

Information on the cleaners
●  Before being hired, all cleaners have a background check carried out by the 8 _______
●  References are required.
●  All cleaners are given 9 _______ for two weeks.
●  Customers send a 10 _______ after each visit.
●  Usually, each customer has one regular cleaner.`,
      questions: [
        { id: "cam17-l-t4-s1-q1", number: 1, type: "note_completion", question: "1. Cleaning the _______ throughout the apartment", correctAnswer: "floor/floors", points: 1 },
        { id: "cam17-l-t4-s1-q2", number: 2, type: "note_completion", question: "2. Cleaning the _______ (every week)", correctAnswer: "fridge", points: 1 },
        { id: "cam17-l-t4-s1-q3", number: 3, type: "note_completion", question: "3. Ironing clothes – _______ only", correctAnswer: "shirts", points: 1 },
        { id: "cam17-l-t4-s1-q4", number: 4, type: "note_completion", question: "4. Cleaning all the _______ from the inside", correctAnswer: "windows", points: 1 },
        { id: "cam17-l-t4-s1-q5", number: 5, type: "note_completion", question: "5. Washing down the _______", correctAnswer: "balcony", points: 1 },
        { id: "cam17-l-t4-s1-q6", number: 6, type: "note_completion", question: "6. organise a plumber or an _______ if necessary", correctAnswer: "electrician", points: 1 },
        { id: "cam17-l-t4-s1-q7", number: 7, type: "note_completion", question: "7. customers who are allergic to _______", correctAnswer: "dust", points: 1 },
        { id: "cam17-l-t4-s1-q8", number: 8, type: "note_completion", question: "8. background check carried out by the _______", correctAnswer: "police", points: 1 },
        { id: "cam17-l-t4-s1-q9", number: 9, type: "note_completion", question: "9. All cleaners are given _______ for two weeks", correctAnswer: "training", points: 1 },
        { id: "cam17-l-t4-s1-q10", number: 10, type: "note_completion", question: "10. Customers send a _______ after each visit", correctAnswer: "review", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam17-l-t4-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15–20: Match each hotel with a way of reducing staff turnover. Write the correct letter A, B or C (letters may be used more than once).`,
      passageTitle: "Staff retention in hotels",
      questions: [
        {
          id: "cam17-l-t4-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Many hotel managers are unaware that their staff often leave because of",
          options: [
            { label: "A  a lack of training.", value: "A" },
            { label: "B  long hours.", value: "B" },
            { label: "C  low pay.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t4-s2-q12", number: 12, type: "multiple_choice",
          question: "12. What is the impact of high staff turnover on managers?",
          options: [
            { label: "A  an increased workload", value: "A" },
            { label: "B  low morale", value: "B" },
            { label: "C  an inability to meet targets", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t4-s2-q13", number: 13, type: "multiple_choice",
          question: "13. What mistake should managers always avoid?",
          options: [
            { label: "A  failing to treat staff equally", value: "A" },
            { label: "B  reorganising shifts without warning", value: "B" },
            { label: "C  neglecting to have enough staff during busy periods", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t4-s2-q14", number: 14, type: "multiple_choice",
          question: "14. What unexpected benefit did Dunwich Hotel notice after improving staff retention rates?",
          options: [
            { label: "A  a fall in customer complaints", value: "A" },
            { label: "B  an increase in loyalty club membership", value: "B" },
            { label: "C  a rise in spending per customer", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t4-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Which way of reducing staff turnover was used in each of the following hotels? Write the correct letter A, B or C next to each hotel.\n\nA  improving relationships and teamwork\nB  offering incentives and financial benefits\nC  providing career opportunities\n\n(Letters may be used more than once.)`,
          type: "matching", question: "15. The Sun Club",
          options: [
            { label: "A  improving relationships and teamwork", value: "A" },
            { label: "B  offering incentives and financial benefits", value: "B" },
            { label: "C  providing career opportunities", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t4-s2-q16", number: 16, type: "matching", question: "16. The Portland",
          options: [
            { label: "A  improving relationships and teamwork", value: "A" },
            { label: "B  offering incentives and financial benefits", value: "B" },
            { label: "C  providing career opportunities", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t4-s2-q17", number: 17, type: "matching", question: "17. Bluewater Hotels",
          options: [
            { label: "A  improving relationships and teamwork", value: "A" },
            { label: "B  offering incentives and financial benefits", value: "B" },
            { label: "C  providing career opportunities", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t4-s2-q18", number: 18, type: "matching", question: "18. Pentlow Hotels",
          options: [
            { label: "A  improving relationships and teamwork", value: "A" },
            { label: "B  offering incentives and financial benefits", value: "B" },
            { label: "C  providing career opportunities", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t4-s2-q19", number: 19, type: "matching", question: "19. Green Planet",
          options: [
            { label: "A  improving relationships and teamwork", value: "A" },
            { label: "B  offering incentives and financial benefits", value: "B" },
            { label: "C  providing career opportunities", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t4-s2-q20", number: 20, type: "matching", question: "20. The Amesbury",
          options: [
            { label: "A  improving relationships and teamwork", value: "A" },
            { label: "B  offering incentives and financial benefits", value: "B" },
            { label: "C  providing career opportunities", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam17-l-t4-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21 & 22: Choose TWO letters, A–E.
Questions 23 & 24: Choose TWO letters, A–E.
Questions 25–30: Match each item of sporting equipment with a comment. Choose SIX answers from the box (A–H).`,
      passageTitle: "Thomas's sporting background and the history of sporting equipment",
      questions: [
        {
          id: "cam17-l-t4-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO points do Thomas and Jeanne make about Thomas's sporting activities at school?\n\nA  He should have felt more positive about them.\nB  The training was too challenging for him.\nC  He could have worked harder at them.\nD  His parents were disappointed in him.\nE  His fellow students admired him.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  He should have felt more positive about them.", value: "A" },
            { label: "B  The training was too challenging for him.", value: "B" },
            { label: "C  He could have worked harder at them.", value: "C" },
            { label: "D  His parents were disappointed in him.", value: "D" },
            { label: "E  His fellow students admired him.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam17-l-t4-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  He should have felt more positive about them.", value: "A" },
            { label: "B  The training was too challenging for him.", value: "B" },
            { label: "C  He could have worked harder at them.", value: "C" },
            { label: "D  His parents were disappointed in him.", value: "D" },
            { label: "E  His fellow students admired him.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam17-l-t4-s3-q23", number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhich TWO feelings did Thomas experience when he was in Kenya?\n\nA  disbelief\nB  relief\nC  stress\nD  gratitude\nE  homesickness\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  disbelief", value: "A" },
            { label: "B  relief", value: "B" },
            { label: "C  stress", value: "C" },
            { label: "D  gratitude", value: "D" },
            { label: "E  homesickness", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam17-l-t4-s3-q24", number: 24, type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  disbelief", value: "A" },
            { label: "B  relief", value: "B" },
            { label: "C  stress", value: "C" },
            { label: "D  gratitude", value: "D" },
            { label: "E  homesickness", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam17-l-t4-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What comment do the students make about the development of each of the following items of sporting equipment? Choose SIX answers from the box (A–H).\n\nA  It could cause excessive sweating.\nB  The material was being mass produced for another purpose.\nC  People often needed to make their own.\nD  It often had to be replaced.\nE  The material was expensive.\nF  It was unpopular among spectators.\nG  It caused injuries.\nH  No one liked it at first.`,
          type: "matching", question: "25. the table tennis bat",
          options: [
            { label: "A  It could cause excessive sweating.", value: "A" },
            { label: "B  The material was being mass produced for another purpose.", value: "B" },
            { label: "C  People often needed to make their own.", value: "C" },
            { label: "D  It often had to be replaced.", value: "D" },
            { label: "E  The material was expensive.", value: "E" },
            { label: "F  It was unpopular among spectators.", value: "F" },
            { label: "G  It caused injuries.", value: "G" },
            { label: "H  No one liked it at first.", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam17-l-t4-s3-q26", number: 26, type: "matching", question: "26. the cricket helmet",
          options: [
            { label: "A  It could cause excessive sweating.", value: "A" },
            { label: "B  The material was being mass produced for another purpose.", value: "B" },
            { label: "C  People often needed to make their own.", value: "C" },
            { label: "D  It often had to be replaced.", value: "D" },
            { label: "E  The material was expensive.", value: "E" },
            { label: "F  It was unpopular among spectators.", value: "F" },
            { label: "G  It caused injuries.", value: "G" },
            { label: "H  No one liked it at first.", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam17-l-t4-s3-q27", number: 27, type: "matching", question: "27. the cycle helmet",
          options: [
            { label: "A  It could cause excessive sweating.", value: "A" },
            { label: "B  The material was being mass produced for another purpose.", value: "B" },
            { label: "C  People often needed to make their own.", value: "C" },
            { label: "D  It often had to be replaced.", value: "D" },
            { label: "E  The material was expensive.", value: "E" },
            { label: "F  It was unpopular among spectators.", value: "F" },
            { label: "G  It caused injuries.", value: "G" },
            { label: "H  No one liked it at first.", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam17-l-t4-s3-q28", number: 28, type: "matching", question: "28. the golf club",
          options: [
            { label: "A  It could cause excessive sweating.", value: "A" },
            { label: "B  The material was being mass produced for another purpose.", value: "B" },
            { label: "C  People often needed to make their own.", value: "C" },
            { label: "D  It often had to be replaced.", value: "D" },
            { label: "E  The material was expensive.", value: "E" },
            { label: "F  It was unpopular among spectators.", value: "F" },
            { label: "G  It caused injuries.", value: "G" },
            { label: "H  No one liked it at first.", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam17-l-t4-s3-q29", number: 29, type: "matching", question: "29. the hockey stick",
          options: [
            { label: "A  It could cause excessive sweating.", value: "A" },
            { label: "B  The material was being mass produced for another purpose.", value: "B" },
            { label: "C  People often needed to make their own.", value: "C" },
            { label: "D  It often had to be replaced.", value: "D" },
            { label: "E  The material was expensive.", value: "E" },
            { label: "F  It was unpopular among spectators.", value: "F" },
            { label: "G  It caused injuries.", value: "G" },
            { label: "H  No one liked it at first.", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam17-l-t4-s3-q30", number: 30, type: "matching", question: "30. the football",
          options: [
            { label: "A  It could cause excessive sweating.", value: "A" },
            { label: "B  The material was being mass produced for another purpose.", value: "B" },
            { label: "C  People often needed to make their own.", value: "C" },
            { label: "D  It often had to be replaced.", value: "D" },
            { label: "E  The material was expensive.", value: "E" },
            { label: "F  It was unpopular among spectators.", value: "F" },
            { label: "G  It caused injuries.", value: "G" },
            { label: "H  No one liked it at first.", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam17-l-t4-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Maple syrup

What is maple syrup?
●  made from the sap of the maple tree
●  added to food or used in cooking
●  colour described as 31 _______
●  very 32 _______ compared to refined sugar

The maple tree
●  has many species
●  needs sunny days and cool nights
●  maple leaf has been on the Canadian flag since 1964
●  needs moist soil but does not need fertiliser as well
●  best growing conditions and 33 _______ are in Canada and North America

Early maple sugar producers
●  made holes in the tree trunks
●  used hot 34 _______ to heat the sap
●  used tree bark to make containers for collection
●  sweetened food and drink with sugar

Today's maple syrup

The trees
●  Tree trunks may not have the correct 35 _______ until they have been growing for 40 years.
●  The changing temperature and movement of water within the tree produces the sap.

The production
●  A tap drilled into the trunk and a 36 _______ carries the sap into a bucket.
●  Large pans of sap called evaporators are heated by means of a 37 _______.
●  A lot of 38 _______ is produced during the evaporation process.
●  'Sugar sand' is removed because it makes the syrup look 39 _______ and affects the taste.
●  The syrup is ready for use.
●  A huge quantity of sap is needed to make a 40 _______ of maple syrup.`,
      questions: [
        { id: "cam17-l-t4-s4-q31", number: 31, type: "note_completion", question: "31. colour described as _______", correctAnswer: "golden", points: 1 },
        { id: "cam17-l-t4-s4-q32", number: 32, type: "note_completion", question: "32. very _______ compared to refined sugar", correctAnswer: "healthy", points: 1 },
        { id: "cam17-l-t4-s4-q33", number: 33, type: "note_completion", question: "33. best growing conditions and _______ are in Canada and North America", correctAnswer: "climate", points: 1 },
        { id: "cam17-l-t4-s4-q34", number: 34, type: "note_completion", question: "34. used hot _______ to heat the sap", correctAnswer: "rock/rocks", points: 1 },
        { id: "cam17-l-t4-s4-q35", number: 35, type: "note_completion", question: "35. may not have the correct _______ until they have been growing for 40 years", correctAnswer: "diameter", points: 1 },
        { id: "cam17-l-t4-s4-q36", number: 36, type: "note_completion", question: "36. a _______ carries the sap into a bucket", correctAnswer: "tube", points: 1 },
        { id: "cam17-l-t4-s4-q37", number: 37, type: "note_completion", question: "37. evaporators are heated by means of a _______", correctAnswer: "fire", points: 1 },
        { id: "cam17-l-t4-s4-q38", number: 38, type: "note_completion", question: "38. A lot of _______ is produced during the evaporation process", correctAnswer: "steam", points: 1 },
        { id: "cam17-l-t4-s4-q39", number: 39, type: "note_completion", question: "39. makes the syrup look _______ and affects the taste", correctAnswer: "cloudy", points: 1 },
        { id: "cam17-l-t4-s4-q40", number: 40, type: "note_completion", question: "40. to make a _______ of maple syrup", correctAnswer: "litre/liter", points: 1 },
      ],
    },
  ],
};

export const cambridge17ListeningTests: IELTSTest[] = [
  cambridge17_listening_t1,
  cambridge17_listening_t2,
  cambridge17_listening_t3,
  cambridge17_listening_t4,
];
