import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// Build the public Supabase Storage URL for a diagram / map image.
const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

// ============================================================
// CAMBRIDGE IELTS 13 – LISTENING TEST 1
// Parts: 1) Cookery classes (table)
//        2) Traffic changes in Granford (MCQ + A–I map labels)
//        3) Jack & Emma — seed germination experiment (MCQ +
//           A–H flow-chart letters)
//        4) Effects of urban environments on animals (notes)
// ============================================================
export const cambridge13_listening_t1: IELTSTest = {
  id: "cam13-listening-t1",
  title: "Cambridge IELTS 13 – Listening Test 1",
  bookNumber: 13,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam13-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam13-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `COOKERY CLASSES

Cookery Class                | Focus                                    | Other Information
The Food Studio              | how to 1 _______ and cook with          | ●  small classes
                             |   seasonal products                     | ●  also offers 2 _______ classes
                             |                                         | ●  clients who return get a 3 _______ discount

Bond's Cookery School        | food that is 4 _______                  | ●  includes recipes to strengthen your 5 _______
                             |                                         | ●  they have a free 6 _______ every Thursday

The 7 _______ Centre         | mainly 8 _______ food                   | ●  located near the 9 _______
                             |                                         | ●  a special course in skills with a 10 _______ is sometimes available`,
      questions: [
        { id: "cam13-l-t1-s1-q1", number: 1, type: "table_completion", question: "1. how to _______ and cook with seasonal products", correctAnswer: "choose", points: 1 },
        { id: "cam13-l-t1-s1-q2", number: 2, type: "table_completion", question: "2. also offers _______ classes", correctAnswer: "private", points: 1 },
        { id: "cam13-l-t1-s1-q3", number: 3, type: "table_completion", question: "3. clients who return get a _______ discount", correctAnswer: "20/twenty percent/20%", points: 1 },
        { id: "cam13-l-t1-s1-q4", number: 4, type: "table_completion", question: "4. food that is _______", correctAnswer: "healthy", points: 1 },
        { id: "cam13-l-t1-s1-q5", number: 5, type: "table_completion", question: "5. includes recipes to strengthen your _______", correctAnswer: "bones", points: 1 },
        { id: "cam13-l-t1-s1-q6", number: 6, type: "table_completion", question: "6. they have a free _______ every Thursday", correctAnswer: "lecture", points: 1 },
        { id: "cam13-l-t1-s1-q7", number: 7, type: "table_completion", question: "7. The _______ Centre", correctAnswer: "Arretsa", points: 1 },
        { id: "cam13-l-t1-s1-q8", number: 8, type: "table_completion", question: "8. mainly _______ food", correctAnswer: "vegetarian", points: 1 },
        { id: "cam13-l-t1-s1-q9", number: 9, type: "table_completion", question: "9. located near the _______", correctAnswer: "market", points: 1 },
        { id: "cam13-l-t1-s1-q10", number: 10, type: "table_completion", question: "10. a special course in skills with a _______ is sometimes available", correctAnswer: "knife", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam13-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–13: Choose the correct letter, A, B or C.
Questions 14–20: Label the map below. Write the correct letter, A–I, next to each location.`,
      passageTitle: "Traffic changes in Granford",
      diagramUrl: imageUrl("cam13test1map.png"),
      questions: [
        {
          id: "cam13-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11–13: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Why are changes needed to traffic systems in Granford?",
          options: [
            { label: "A  The number of traffic accidents has risen.", value: "A" },
            { label: "B  The amount of traffic on the roads has increased.", value: "B" },
            { label: "C  The types of vehicles on the roads have changed.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t1-s2-q12", number: 12, type: "multiple_choice",
          question: "12. In a survey, local residents particularly complained about",
          options: [
            { label: "A  dangerous driving by parents.", value: "A" },
            { label: "B  pollution from trucks and lorries.", value: "B" },
            { label: "C  inconvenience from parked cars.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t1-s2-q13", number: 13, type: "multiple_choice",
          question: "13. According to the speaker, one problem with the new regulations will be",
          options: [
            { label: "A  raising money to pay for them.", value: "A" },
            { label: "B  finding a way to make people follow them.", value: "B" },
            { label: "C  getting the support of the police.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t1-s2-q14", number: 14,
          groupLabel: `Questions 14–20: Label the map of the proposed traffic changes in Granford above. Write the correct letter, A–I, next to each location.`,
          type: "matching", question: "14. New traffic lights",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam13-l-t1-s2-q15", number: 15, type: "matching", question: "15. Pedestrian crossing",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam13-l-t1-s2-q16", number: 16, type: "matching", question: "16. Parking allowed",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t1-s2-q17", number: 17, type: "matching", question: "17. New 'No Parking' sign",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam13-l-t1-s2-q18", number: 18, type: "matching", question: "18. New disabled parking spaces",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t1-s2-q19", number: 19, type: "matching", question: "19. Widened pavement",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam13-l-t1-s2-q20", number: 20, type: "matching", question: "20. Lorry loading/unloading restrictions",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
          ],
          correctAnswer: "I", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam13-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Choose the correct letter, A, B or C.
Questions 26–30: Complete the flow chart below. Choose FIVE answers from the box and write the correct letter, A–H, next to each stage.`,
      passageTitle: "Jack & Emma — seed germination experiment",
      passageText: `Stages in the experiment (for Q26–30):
A  container    B  soil      C  weight      D  condition
E  height       F  colour    G  types       H  depths

Select seeds of different 26 _______ and sizes.

↓

Measure and record the 27 _______ and size of each one.

↓

Decide on the 28 _______ to be used.

↓

Use a different 29 _______ for each seed and label it.

↓

After about 3 weeks, record the plant's 30 _______.

↓

Investigate the findings.`,
      questions: [
        {
          id: "cam13-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21–25: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. Why is Jack interested in investigating seed germination?",
          options: [
            { label: "A  He may do a module on a related topic later on.", value: "A" },
            { label: "B  He wants to have a career in plant science.", value: "B" },
            { label: "C  He is thinking of choosing this topic for his dissertation.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t1-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Jack and Emma agree the main advantage of their present experiment is that it can be",
          options: [
            { label: "A  described very easily.", value: "A" },
            { label: "B  carried out inside the laboratory.", value: "B" },
            { label: "C  completed in the time available.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t1-s3-q23", number: 23, type: "multiple_choice",
          question: "23. What do they decide to check with their tutor?",
          options: [
            { label: "A  whether their aim is appropriate", value: "A" },
            { label: "B  whether anyone else has chosen this topic", value: "B" },
            { label: "C  whether the assignment contributes to their final grade", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t1-s3-q24", number: 24, type: "multiple_choice",
          question: "24. They agree that Graves' book on seed germination is disappointing because",
          options: [
            { label: "A  it fails to cover recent advances in seed science.", value: "A" },
            { label: "B  the content is irrelevant for them.", value: "B" },
            { label: "C  its focus is very theoretical.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t1-s3-q25", number: 25, type: "multiple_choice",
          question: "25. What does Jack say about the article on seed germination by Lee Hall?",
          options: [
            { label: "A  The diagrams of plant development are useful.", value: "A" },
            { label: "B  The analysis of seed germination statistics is thorough.", value: "B" },
            { label: "C  The findings on seed germination after fires are surprising.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        { id: "cam13-l-t1-s3-q26", number: 26, type: "note_completion", question: "26. Select seeds of different _______ and sizes", correctAnswer: "G/types", points: 1 },
        { id: "cam13-l-t1-s3-q27", number: 27, type: "note_completion", question: "27. Measure and record the _______ and size of each one", correctAnswer: "C/weight", points: 1 },
        { id: "cam13-l-t1-s3-q28", number: 28, type: "note_completion", question: "28. Decide on the _______ to be used", correctAnswer: "H/depths", points: 1 },
        { id: "cam13-l-t1-s3-q29", number: 29, type: "note_completion", question: "29. Use a different _______ for each seed and label it", correctAnswer: "A/container", points: 1 },
        { id: "cam13-l-t1-s3-q30", number: 30, type: "note_completion", question: "30. record the plant's _______", correctAnswer: "E/height", points: 1 },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam13-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Effects of urban environments on animals

Introduction
Recent urban developments represent massive environmental changes. It was previously thought that only a few animals were suitable for city life, e.g.
●  the 31 _______ – because of its general adaptability
●  the pigeon – because walls of city buildings are similar to 32 _______

In fact, many urban animals are adapting with unusual 33 _______

Recent research
●  Emilie Snell-Rood studied small urbanised mammal specimens from museums in Minnesota.
   –  She found the size of their 34 _______ had increased.
   –  She suggests this may be due to the need to locate new sources of 35 _______ and to deal with new dangers.
●  Catarina Miranda focused on the 36 _______ of urban and rural blackbirds.
   –  She found urban birds were often braver, but were afraid of situations that were 37 _______
●  Jonathan Atwell studies how animals respond to urban environments.
   –  He found that some animals respond to 38 _______ by producing lower levels of hormones.
●  Sarah Partan's team found urban squirrels use their 39 _______ to help them communicate.

Long-term possibilities
Species of animals may develop which are unique to cities. However, some changes may not be 40 _______.`,
      questions: [
        { id: "cam13-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. the _______ – because of its general adaptability", correctAnswer: "crow", points: 1 },
        { id: "cam13-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. walls of city buildings are similar to _______", correctAnswer: "cliffs", points: 1 },
        { id: "cam13-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. many urban animals are adapting with unusual _______", correctAnswer: "speed", points: 1 },
        { id: "cam13-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. size of their _______ had increased", correctAnswer: "brain/brains", points: 1 },
        { id: "cam13-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. locate new sources of _______ and deal with dangers", correctAnswer: "food", points: 1 },
        { id: "cam13-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. the _______ of urban and rural blackbirds", correctAnswer: "behaviour/behavior/behaviours/behaviors", points: 1 },
        { id: "cam13-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. afraid of situations that were _______", correctAnswer: "new", points: 1 },
        { id: "cam13-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. animals respond to _______ by producing lower levels of hormones", correctAnswer: "noise", points: 1 },
        { id: "cam13-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. urban squirrels use their _______ to help them communicate", correctAnswer: "tail/tails", points: 1 },
        { id: "cam13-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. some changes may not be _______", correctAnswer: "permanent", points: 1 },
      ],
    },
  ],
};

export const cambridge13ListeningTests: IELTSTest[] = [
  cambridge13_listening_t1,
];
