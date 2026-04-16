import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// ============================================================
// CAMBRIDGE IELTS 12 – LISTENING TEST 1
// Parts: 1) Family Excursions — lake cruise, farm visit,
//           cycling trips (notes)
//        2) Talk to new kitchen assistants (MCQ + Choose-TWO
//           + staff → responsibility matching A–F)
//        3) Trudie & Stewart — paper on public libraries
//           (MCQ + study-question notes)
//        4) Four business values (notes)
// ============================================================
export const cambridge12_listening_t1: IELTSTest = {
  id: "cam12-listening-t1",
  title: "Cambridge IELTS 12 – Listening Test 1",
  bookNumber: 12,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam12-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam12-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `FAMILY EXCURSIONS

Cruise on a lake
●  Travel on an old steamship
●  Can take photos of the 1 _______ that surround the lake

Farm visit
●  Children can help feed the sheep
●  Visit can include a 40-minute ride on a 2 _______
●  Visitors can walk in the farm's 3 _______ by the lake
●  4 _______ is available at extra cost

Cycling trips
●  Cyclists explore the Back Road
●  A 5 _______ is provided
●  Only suitable for cyclists who have some 6 _______
   –  Bikes can be hired from 7 _______ (near the Cruise Ship Terminal)
●  Cyclists need:
   –  a repair kit
   –  food and drink
   –  a 8 _______ (can be hired)
●  There are no 9 _______ or accommodation in the area

Cost
●  Total cost for whole family of cruise and farm visit: $ 10 _______`,
      questions: [
        { id: "cam12-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Can take photos of the _______ that surround the lake", correctAnswer: "mountains", points: 1 },
        { id: "cam12-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. a 40-minute ride on a _______", correctAnswer: "horse", points: 1 },
        { id: "cam12-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. walk in the farm's _______ by the lake", correctAnswer: "garden/gardens", points: 1 },
        { id: "cam12-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. _______ is available at extra cost", correctAnswer: "lunch", points: 1 },
        { id: "cam12-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. A _______ is provided", correctAnswer: "map", points: 1 },
        { id: "cam12-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. Only suitable for cyclists who have some _______", correctAnswer: "experience", points: 1 },
        { id: "cam12-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. Bikes can be hired from _______", correctAnswer: "Ratchesons", points: 1 },
        { id: "cam12-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. a _______ (can be hired)", correctAnswer: "helmet", points: 1 },
        { id: "cam12-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. There are no _______ or accommodation in the area", correctAnswer: "shops", points: 1 },
        { id: "cam12-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. Total cost for whole family: $ _______", correctAnswer: "267", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam12-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15 & 16: Choose TWO letters, A–E.
Questions 17–20: Match each member of restaurant staff with a responsibility. Choose FOUR answers from the box (A–F).`,
      passageTitle: "Talk to new kitchen assistants",
      questions: [
        {
          id: "cam12-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. According to the manager, what do most people like about the job of kitchen assistant?",
          options: [
            { label: "A  the variety of work", value: "A" },
            { label: "B  the friendly atmosphere", value: "B" },
            { label: "C  the opportunities for promotion", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q12", number: 12, type: "multiple_choice",
          question: "12. The manager is concerned about some of the new staff's",
          options: [
            { label: "A  jewellery.", value: "A" },
            { label: "B  hair styles.", value: "B" },
            { label: "C  shoes.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q13", number: 13, type: "multiple_choice",
          question: "13. The manager says that the day is likely to be busy for kitchen staff because",
          options: [
            { label: "A  it is a public holiday.", value: "A" },
            { label: "B  the head chef is absent.", value: "B" },
            { label: "C  the restaurant is almost fully booked.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Only kitchen staff who are 18 or older are allowed to use",
          options: [
            { label: "A  the waste disposal unit.", value: "A" },
            { label: "B  the electric mixer.", value: "B" },
            { label: "C  the meat slicer.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q15", number: 15,
          groupLabel: `Questions 15 and 16: Choose TWO letters, A–E.\n\nAccording to the manager, which TWO things can make the job of kitchen assistant stressful?\n\nA  They have to follow orders immediately.\nB  The kitchen gets very hot.\nC  They may not be able to take a break.\nD  They have to do overtime.\nE  The work is physically demanding.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "15. Choose TWO (first answer)",
          options: [
            { label: "A  They have to follow orders immediately.", value: "A" },
            { label: "B  The kitchen gets very hot.", value: "B" },
            { label: "C  They may not be able to take a break.", value: "C" },
            { label: "D  They have to do overtime.", value: "D" },
            { label: "E  The work is physically demanding.", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q16", number: 16, type: "multiple_choice",
          question: "16. Choose TWO (second answer)",
          options: [
            { label: "A  They have to follow orders immediately.", value: "A" },
            { label: "B  The kitchen gets very hot.", value: "B" },
            { label: "C  They may not be able to take a break.", value: "C" },
            { label: "D  They have to do overtime.", value: "D" },
            { label: "E  The work is physically demanding.", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q17", number: 17,
          groupLabel: `Questions 17–20: What is the responsibility of each of the following restaurant staff? Choose FOUR answers from the box (A–F).\n\nA  training courses\nB  food stocks\nC  first aid\nD  breakages\nE  staff discounts\nF  timetables`,
          type: "matching", question: "17. Joy Parkins",
          options: [
            { label: "A  training courses", value: "A" },
            { label: "B  food stocks", value: "B" },
            { label: "C  first aid", value: "C" },
            { label: "D  breakages", value: "D" },
            { label: "E  staff discounts", value: "E" },
            { label: "F  timetables", value: "F" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q18", number: 18, type: "matching", question: "18. David Field",
          options: [
            { label: "A  training courses", value: "A" },
            { label: "B  food stocks", value: "B" },
            { label: "C  first aid", value: "C" },
            { label: "D  breakages", value: "D" },
            { label: "E  staff discounts", value: "E" },
            { label: "F  timetables", value: "F" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q19", number: 19, type: "matching", question: "19. Dexter Wills",
          options: [
            { label: "A  training courses", value: "A" },
            { label: "B  food stocks", value: "B" },
            { label: "C  first aid", value: "C" },
            { label: "D  breakages", value: "D" },
            { label: "E  staff discounts", value: "E" },
            { label: "F  timetables", value: "F" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam12-l-t1-s2-q20", number: 20, type: "matching", question: "20. Mike Smith",
          options: [
            { label: "A  training courses", value: "A" },
            { label: "B  food stocks", value: "B" },
            { label: "C  first aid", value: "C" },
            { label: "D  breakages", value: "D" },
            { label: "E  staff discounts", value: "E" },
            { label: "F  timetables", value: "F" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam12-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–23: Choose the correct letter, A, B or C.
Questions 24–30: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageTitle: "Trudie & Stewart — paper on public libraries",
      passageText: `Study of local library: possible questions

●  whether it has a 24 _______ of its own
●  its policy regarding noise of various kinds
●  how it's affected by laws regarding all aspects of 25 _______
●  how the design needs to take the 26 _______ of customers into account
●  what 27 _______ is required in case of accidents
●  why a famous person's 28 _______ is located in the library
●  whether it has a 29 _______ of local organisations
●  how it's different from a library in a 30 _______`,
      questions: [
        {
          id: "cam12-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21–23: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What will be the main topic of Trudie and Stewart's paper?",
          options: [
            { label: "A  how public library services are organised in different countries", value: "A" },
            { label: "B  how changes in society are reflected in public libraries", value: "B" },
            { label: "C  how the funding of public libraries has changed", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam12-l-t1-s3-q22", number: 22, type: "multiple_choice",
          question: "22. They agree that one disadvantage of free digitalised books is that",
          options: [
            { label: "A  they may take a long time to read.", value: "A" },
            { label: "B  they can be difficult to read.", value: "B" },
            { label: "C  they are generally old.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam12-l-t1-s3-q23", number: 23, type: "multiple_choice",
          question: "23. Stewart expects that in the future libraries will",
          options: [
            { label: "A  maintain their traditional function.", value: "A" },
            { label: "B  become centres for local communities.", value: "B" },
            { label: "C  no longer contain any books.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        { id: "cam12-l-t1-s3-q24", number: 24, type: "note_completion", question: "24. whether it has a _______ of its own", correctAnswer: "budget", points: 1 },
        { id: "cam12-l-t1-s3-q25", number: 25, type: "note_completion", question: "25. laws regarding all aspects of _______", correctAnswer: "employment", points: 1 },
        { id: "cam12-l-t1-s3-q26", number: 26, type: "note_completion", question: "26. take the _______ of customers into account", correctAnswer: "safety", points: 1 },
        { id: "cam12-l-t1-s3-q27", number: 27, type: "note_completion", question: "27. what _______ is required in case of accidents", correctAnswer: "insurance", points: 1 },
        { id: "cam12-l-t1-s3-q28", number: 28, type: "note_completion", question: "28. a famous person's _______ is located in the library", correctAnswer: "diary", points: 1 },
        { id: "cam12-l-t1-s3-q29", number: 29, type: "note_completion", question: "29. whether it has a _______ of local organisations", correctAnswer: "database", points: 1 },
        { id: "cam12-l-t1-s3-q30", number: 30, type: "note_completion", question: "30. how it's different from a library in a _______", correctAnswer: "museum", points: 1 },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam12-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write NO MORE THAN TWO WORDS for each answer.`,
      passageText: `Four business values

Many business values can result in 31 _______.
Senior managers need to understand and deal with the potential 32 _______ that may result.

Collaboration
●  During a training course, the speaker was in a team that had to build a 33 _______.
●  Other teams experienced 34 _______ from trying to collaborate.
●  The speaker's team won because they reduced collaboration.
●  Sales of a 35 _______ were poor because of collaboration.

Industriousness
●  Hard work may be a bad use of various company 36 _______.
●  The word 'lazy' in this context refers to people who avoid doing tasks that are 37 _______.

Creativity
●  An advertising campaign for a 38 _______ was memorable but failed to boost sales.
●  Creativity should be used as a response to a particular 39 _______.

Excellence
●  According to one study, on average, pioneers had a 40 _______ that was far higher than that of followers.
●  Companies that always aim at excellence may miss opportunities.`,
      questions: [
        { id: "cam12-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. Many business values can result in _______", correctAnswer: "damage", points: 1 },
        { id: "cam12-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. deal with the potential _______ that may result", correctAnswer: "side effects", points: 1 },
        { id: "cam12-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. a team that had to build a _______", correctAnswer: "bridge", points: 1 },
        { id: "cam12-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. Other teams experienced _______ from trying to collaborate", correctAnswer: "confusion", points: 1 },
        { id: "cam12-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. Sales of a _______ were poor because of collaboration", correctAnswer: "smartphone", points: 1 },
        { id: "cam12-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. bad use of various company _______", correctAnswer: "resources", points: 1 },
        { id: "cam12-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. avoid doing tasks that are _______", correctAnswer: "unnecessary/not necessary", points: 1 },
        { id: "cam12-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. An advertising campaign for a _______ was memorable", correctAnswer: "chocolate bar", points: 1 },
        { id: "cam12-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. Creativity should be used as a response to a particular _______", correctAnswer: "problem", points: 1 },
        { id: "cam12-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. pioneers had a _______ that was far higher than followers", correctAnswer: "market share", points: 1 },
      ],
    },
  ],
};

export const cambridge12ListeningTests: IELTSTest[] = [
  cambridge12_listening_t1,
];
