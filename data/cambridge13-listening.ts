import type { IELTSTest } from "./ielts-tests";

const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_MISSION_CONTROL}/storage/v1/object/public/audio/${name}`;

const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_MISSION_CONTROL}/storage/v1/object/public/images/${name}`;

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

export const cambridge13_listening_t2: IELTSTest = {
  id: "cam13-listening-t2",
  title: "Cambridge IELTS 13 – Listening Test 2",
  bookNumber: 13,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam13-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam13-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `South City Cycling Club

Name of club secretary: Jim Hunter

Membership
●  Full membership costs $260; this covers cycling and 1 _______ all over Australia
●  Recreational membership costs $108
●  Cost of membership includes the club fee and 2 _______
●  The club kit is made by a company called 3 _______

Training rides
●  Chance to improve cycling skills and fitness
●  Level B: speed about 4 _______ kph
●  Weekly sessions
   –  Tuesdays at 5.30 a.m., meet at the 5 _______
   –  Thursdays at 5.30 a.m., meet at the entrance to the 6 _______

Further information
●  Rides are about an hour and a half
●  Members often have 7 _______ together afterwards
●  There is not always a 8 _______ with the group on these rides
●  Check and print the 9 _______ on the website beforehand
●  Bikes must have 10 _______`,
      questions: [
        { id: "cam13-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. this covers cycling and _______ all over Australia", correctAnswer: "races", points: 1 },
        { id: "cam13-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. includes the club fee and _______", correctAnswer: "insurance", points: 1 },
        { id: "cam13-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. The club kit is made by a company called _______", correctAnswer: "Jerriz", points: 1 },
        { id: "cam13-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. Level B: speed about _______ kph", correctAnswer: "25/twenty-five", points: 1 },
        { id: "cam13-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. Tuesdays: meet at the _______", correctAnswer: "stadium", points: 1 },
        { id: "cam13-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. Thursdays: meet at the entrance to the _______", correctAnswer: "park", points: 1 },
        { id: "cam13-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. Members often have _______ together afterwards", correctAnswer: "coffee", points: 1 },
        { id: "cam13-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. not always a _______ with the group on these rides", correctAnswer: "leader", points: 1 },
        { id: "cam13-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. Check and print the _______ on the website beforehand", correctAnswer: "route", points: 1 },
        { id: "cam13-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. Bikes must have _______", correctAnswer: "lights", points: 1 },
      ],
    },
    {
      id: "cam13-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Choose the correct letter, A, B or C.
Questions 17 & 18: Choose TWO letters, A–E.
Questions 19 & 20: Choose TWO letters, A–E.`,
      passageTitle: "Information on company volunteering projects",
      questions: [
        {
          id: "cam13-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11–16: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. How much time for volunteering does the company allow per employee?",
          options: [
            { label: "A  two hours per week", value: "A" },
            { label: "B  one day per month", value: "B" },
            { label: "C  8 hours per year", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t2-s2-q12", number: 12, type: "multiple_choice",
          question: "12. In feedback almost all employees said that volunteering improved their",
          options: [
            { label: "A  chances of promotion.", value: "A" },
            { label: "B  job satisfaction.", value: "B" },
            { label: "C  relationships with colleagues.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t2-s2-q13", number: 13, type: "multiple_choice",
          question: "13. Last year some staff helped unemployed people with their",
          options: [
            { label: "A  literacy skills.", value: "A" },
            { label: "B  job applications.", value: "B" },
            { label: "C  communication skills.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t2-s2-q14", number: 14, type: "multiple_choice",
          question: "14. This year the company will start a new volunteering project with a local",
          options: [
            { label: "A  school.", value: "A" },
            { label: "B  park.", value: "B" },
            { label: "C  charity.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t2-s2-q15", number: 15, type: "multiple_choice",
          question: "15. Where will the Digital Inclusion Day be held?",
          options: [
            { label: "A  at the company's training facility", value: "A" },
            { label: "B  at a college", value: "B" },
            { label: "C  in a community centre", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t2-s2-q16", number: 16, type: "multiple_choice",
          question: "16. What should staff do if they want to take part in the Digital Inclusion Day?",
          options: [
            { label: "A  fill in a form", value: "A" },
            { label: "B  attend a training workshop", value: "B" },
            { label: "C  get permission from their manager", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t2-s2-q17", number: 17,
          groupLabel: `Questions 17 and 18: Choose TWO letters, A–E.\n\nWhat TWO things are mentioned about the participants on the last Digital Inclusion Day?\n\nA  They were all over 70.\nB  They never used their computer.\nC  Their phones were mostly old-fashioned.\nD  They only used their phones for making calls.\nE  They initially showed little interest.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "17. Choose TWO (first answer)",
          options: [
            { label: "A  They were all over 70.", value: "A" },
            { label: "B  They never used their computer.", value: "B" },
            { label: "C  Their phones were mostly old-fashioned.", value: "C" },
            { label: "D  They only used their phones for making calls.", value: "D" },
            { label: "E  They initially showed little interest.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam13-l-t2-s2-q18", number: 18, type: "multiple_choice",
          question: "18. Choose TWO (second answer)",
          options: [
            { label: "A  They were all over 70.", value: "A" },
            { label: "B  They never used their computer.", value: "B" },
            { label: "C  Their phones were mostly old-fashioned.", value: "C" },
            { label: "D  They only used their phones for making calls.", value: "D" },
            { label: "E  They initially showed little interest.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam13-l-t2-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhat TWO activities on the last Digital Inclusion Day did participants describe as useful?\n\nA  learning to use tablets\nB  communicating with family\nC  shopping online\nD  playing online games\nE  sending emails\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  learning to use tablets", value: "A" },
            { label: "B  communicating with family", value: "B" },
            { label: "C  shopping online", value: "C" },
            { label: "D  playing online games", value: "D" },
            { label: "E  sending emails", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam13-l-t2-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  learning to use tablets", value: "A" },
            { label: "B  communicating with family", value: "B" },
            { label: "C  shopping online", value: "C" },
            { label: "D  playing online games", value: "D" },
            { label: "E  sending emails", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
      ],
    },
    {
      id: "cam13-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Choose the correct letter, A, B or C.
Questions 26–30: Match each aspect of Russ's previous presentation with a comment. Choose FIVE answers from the box (A–G).`,
      passageTitle: "Russ & tutor — planning a presentation on nanotechnology",
      questions: [
        {
          id: "cam13-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21–25: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. Russ says that his difficulty in planning the presentation is due to",
          options: [
            { label: "A  his lack of knowledge about the topic.", value: "A" },
            { label: "B  his uncertainty about what he should try to achieve.", value: "B" },
            { label: "C  the short time that he has for preparation.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Russ and his tutor agree that his approach in the presentation will be",
          options: [
            { label: "A  to concentrate on how nanotechnology is used in one field.", value: "A" },
            { label: "B  to follow the chronological development of nanotechnology.", value: "B" },
            { label: "C  to show the range of applications of nanotechnology.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t2-s3-q23", number: 23, type: "multiple_choice",
          question: "23. In connection with slides, the tutor advises Russ to",
          options: [
            { label: "A  talk about things that he can find slides to illustrate.", value: "A" },
            { label: "B  look for slides to illustrate the points he makes.", value: "B" },
            { label: "C  consider omitting slides altogether.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t2-s3-q24", number: 24, type: "multiple_choice",
          question: "24. They both agree that the best way for Russ to start his presentation is",
          options: [
            { label: "A  to encourage the audience to talk.", value: "A" },
            { label: "B  to explain what Russ intends to do.", value: "B" },
            { label: "C  to provide an example.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t2-s3-q25", number: 25, type: "multiple_choice",
          question: "25. What does the tutor advise Russ to do next while preparing his presentation?",
          options: [
            { label: "A  summarise the main point he wants to make", value: "A" },
            { label: "B  read the notes he has already made", value: "B" },
            { label: "C  list the topics he wants to cover", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t2-s3-q26", number: 26,
          groupLabel: `Questions 26–30: What comments do the speakers make about each of the following aspects of Russ's previous presentation? Choose FIVE answers from the box (A–G).\n\nA  lacked a conclusion\nB  useful in the future\nC  not enough\nD  sometimes distracting\nE  showed originality\nF  covered a wide range\nG  not too technical`,
          type: "matching", question: "26. structure",
          options: [
            { label: "A  lacked a conclusion", value: "A" },
            { label: "B  useful in the future", value: "B" },
            { label: "C  not enough", value: "C" },
            { label: "D  sometimes distracting", value: "D" },
            { label: "E  showed originality", value: "E" },
            { label: "F  covered a wide range", value: "F" },
            { label: "G  not too technical", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t2-s3-q27", number: 27, type: "matching", question: "27. eye contact",
          options: [
            { label: "A  lacked a conclusion", value: "A" },
            { label: "B  useful in the future", value: "B" },
            { label: "C  not enough", value: "C" },
            { label: "D  sometimes distracting", value: "D" },
            { label: "E  showed originality", value: "E" },
            { label: "F  covered a wide range", value: "F" },
            { label: "G  not too technical", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t2-s3-q28", number: 28, type: "matching", question: "28. body language",
          options: [
            { label: "A  lacked a conclusion", value: "A" },
            { label: "B  useful in the future", value: "B" },
            { label: "C  not enough", value: "C" },
            { label: "D  sometimes distracting", value: "D" },
            { label: "E  showed originality", value: "E" },
            { label: "F  covered a wide range", value: "F" },
            { label: "G  not too technical", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam13-l-t2-s3-q29", number: 29, type: "matching", question: "29. choice of words",
          options: [
            { label: "A  lacked a conclusion", value: "A" },
            { label: "B  useful in the future", value: "B" },
            { label: "C  not enough", value: "C" },
            { label: "D  sometimes distracting", value: "D" },
            { label: "E  showed originality", value: "E" },
            { label: "F  covered a wide range", value: "F" },
            { label: "G  not too technical", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam13-l-t2-s3-q30", number: 30, type: "matching", question: "30. handouts",
          options: [
            { label: "A  lacked a conclusion", value: "A" },
            { label: "B  useful in the future", value: "B" },
            { label: "C  not enough", value: "C" },
            { label: "D  sometimes distracting", value: "D" },
            { label: "E  showed originality", value: "E" },
            { label: "F  covered a wide range", value: "F" },
            { label: "G  not too technical", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    {
      id: "cam13-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Episodic memory

●  the ability to recall details, e.g. the time and 31 _______ of past events
●  different to semantic memory – the ability to remember general information about the 32 _______, which does not involve recalling 33 _______ information

Forming episodic memories involves three steps:

Encoding
●  involves receiving and processing information
●  the more 34 _______ given to an event, the more successfully it can be encoded
●  to remember a 35 _______, it is useful to have a strategy for encoding such information

Consolidation
●  how memories are strengthened and stored
●  most effective when memories can be added to a 36 _______ of related information
●  the 37 _______ of retrieval affects the strength of memories

Retrieval
●  memory retrieval often depends on using a prompt, e.g. the 38 _______ of an object near to the place where you left your car

Episodic memory impairments
●  these affect people with a wide range of medical conditions
●  games which stimulate the 39 _______ have been found to help people with schizophrenia
●  children with autism may have difficulty forming episodic memories – possibly because their concept of the 40 _______ may be absent
●  memory training may help autistic children develop social skills`,
      questions: [
        { id: "cam13-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. the time and _______ of past events", correctAnswer: "location", points: 1 },
        { id: "cam13-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. general information about the _______", correctAnswer: "world", points: 1 },
        { id: "cam13-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. does not involve recalling _______ information", correctAnswer: "personal", points: 1 },
        { id: "cam13-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. the more _______ given to an event, the more successfully it can be encoded", correctAnswer: "attention", points: 1 },
        { id: "cam13-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. to remember a _______, it is useful to have a strategy for encoding such information", correctAnswer: "name", points: 1 },
        { id: "cam13-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. memories can be added to a _______ of related information", correctAnswer: "network", points: 1 },
        { id: "cam13-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. the _______ of retrieval affects the strength of memories", correctAnswer: "frequency", points: 1 },
        { id: "cam13-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. e.g. the _______ of an object near the place where you left your car", correctAnswer: "colour/color", points: 1 },
        { id: "cam13-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. games which stimulate the _______ have been found to help people with schizophrenia", correctAnswer: "brain", points: 1 },
        { id: "cam13-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. their concept of the _______ may be absent", correctAnswer: "self", points: 1 },
      ],
    },
  ],
};

export const cambridge13_listening_t3: IELTSTest = {
  id: "cam13-listening-t3",
  title: "Cambridge IELTS 13 – Listening Test 3",
  bookNumber: 13,
  testNumber: 3,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam13-listening-t3.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam13-l-t3-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Moving to Banford City

Linda recommends living in suburb of: Dalton

Accommodation
●  Average rent: £ 1 _______ a month

Transport
●  Linda travels to work by 2 _______
●  Limited 3 _______ in city centre
●  Trains to London every 4 _______ minutes
●  Poor train service at 5 _______

Advantages of living in Banford
●  New 6 _______ opened recently
●  7 _______ has excellent reputation
●  Good 8 _______ on Bridge Street

Meet Linda
●  Meet Linda on 9 _______ after 5.30 p.m.
●  In the 10 _______ opposite the station`,
      questions: [
        { id: "cam13-l-t3-s1-q1", number: 1, type: "note_completion", question: "1. Average rent: £ _______ a month", correctAnswer: "850", points: 1 },
        { id: "cam13-l-t3-s1-q2", number: 2, type: "note_completion", question: "2. Linda travels to work by _______", correctAnswer: "bike/bicycle", points: 1 },
        { id: "cam13-l-t3-s1-q3", number: 3, type: "note_completion", question: "3. Limited _______ in city centre", correctAnswer: "parking", points: 1 },
        { id: "cam13-l-t3-s1-q4", number: 4, type: "note_completion", question: "4. Trains to London every _______ minutes", correctAnswer: "30/thirty", points: 1 },
        { id: "cam13-l-t3-s1-q5", number: 5, type: "note_completion", question: "5. Poor train service at _______", correctAnswer: "weekend/weekends", points: 1 },
        { id: "cam13-l-t3-s1-q6", number: 6, type: "note_completion", question: "6. New _______ opened recently", correctAnswer: "cinema", points: 1 },
        { id: "cam13-l-t3-s1-q7", number: 7, type: "note_completion", question: "7. _______ has excellent reputation", correctAnswer: "hospital", points: 1 },
        { id: "cam13-l-t3-s1-q8", number: 8, type: "note_completion", question: "8. Good _______ on Bridge Street", correctAnswer: "dentist", points: 1 },
        { id: "cam13-l-t3-s1-q9", number: 9, type: "note_completion", question: "9. Meet Linda on _______ after 5.30 p.m.", correctAnswer: "Thursday", points: 1 },
        { id: "cam13-l-t3-s1-q10", number: 10, type: "note_completion", question: "10. In the _______ opposite the station", correctAnswer: "café/cafe", points: 1 },
      ],
    },
    {
      id: "cam13-l-t3-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Match each physical activity with its advantage. Choose SIX answers from the box (A–G).
Questions 17 & 18: Choose TWO letters, A–E.
Questions 19 & 20: Choose TWO letters, A–E.`,
      passageTitle: "Physical activities",
      questions: [
        {
          id: "cam13-l-t3-s2-q11", number: 11,
          groupLabel: `Questions 11–16: What advantage does the speaker mention for each of the following physical activities? Choose SIX answers from the box (A–G).\n\nA  not dependent on season\nB  enjoyable\nC  low risk of injury\nD  fitness level unimportant\nE  sociable\nF  fast results\nG  motivating`,
          type: "matching", question: "11. using a gym",
          options: [
            { label: "A  not dependent on season", value: "A" },
            { label: "B  enjoyable", value: "B" },
            { label: "C  low risk of injury", value: "C" },
            { label: "D  fitness level unimportant", value: "D" },
            { label: "E  sociable", value: "E" },
            { label: "F  fast results", value: "F" },
            { label: "G  motivating", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam13-l-t3-s2-q12", number: 12, type: "matching", question: "12. running",
          options: [
            { label: "A  not dependent on season", value: "A" },
            { label: "B  enjoyable", value: "B" },
            { label: "C  low risk of injury", value: "C" },
            { label: "D  fitness level unimportant", value: "D" },
            { label: "E  sociable", value: "E" },
            { label: "F  fast results", value: "F" },
            { label: "G  motivating", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam13-l-t3-s2-q13", number: 13, type: "matching", question: "13. swimming",
          options: [
            { label: "A  not dependent on season", value: "A" },
            { label: "B  enjoyable", value: "B" },
            { label: "C  low risk of injury", value: "C" },
            { label: "D  fitness level unimportant", value: "D" },
            { label: "E  sociable", value: "E" },
            { label: "F  fast results", value: "F" },
            { label: "G  motivating", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t3-s2-q14", number: 14, type: "matching", question: "14. cycling",
          options: [
            { label: "A  not dependent on season", value: "A" },
            { label: "B  enjoyable", value: "B" },
            { label: "C  low risk of injury", value: "C" },
            { label: "D  fitness level unimportant", value: "D" },
            { label: "E  sociable", value: "E" },
            { label: "F  fast results", value: "F" },
            { label: "G  motivating", value: "G" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t3-s2-q15", number: 15, type: "matching", question: "15. doing yoga",
          options: [
            { label: "A  not dependent on season", value: "A" },
            { label: "B  enjoyable", value: "B" },
            { label: "C  low risk of injury", value: "C" },
            { label: "D  fitness level unimportant", value: "D" },
            { label: "E  sociable", value: "E" },
            { label: "F  fast results", value: "F" },
            { label: "G  motivating", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t3-s2-q16", number: 16, type: "matching", question: "16. training with a personal trainer",
          options: [
            { label: "A  not dependent on season", value: "A" },
            { label: "B  enjoyable", value: "B" },
            { label: "C  low risk of injury", value: "C" },
            { label: "D  fitness level unimportant", value: "D" },
            { label: "E  sociable", value: "E" },
            { label: "F  fast results", value: "F" },
            { label: "G  motivating", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam13-l-t3-s2-q17", number: 17,
          groupLabel: `Questions 17 and 18: Choose TWO letters, A–E.\n\nFor which TWO reasons does the speaker say people give up going to the gym?\n\nA  lack of time\nB  loss of confidence\nC  too much effort required\nD  high costs\nE  feeling less successful than others\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "17. Choose TWO (first answer)",
          options: [
            { label: "A  lack of time", value: "A" },
            { label: "B  loss of confidence", value: "B" },
            { label: "C  too much effort required", value: "C" },
            { label: "D  high costs", value: "D" },
            { label: "E  feeling less successful than others", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam13-l-t3-s2-q18", number: 18, type: "multiple_choice",
          question: "18. Choose TWO (second answer)",
          options: [
            { label: "A  lack of time", value: "A" },
            { label: "B  loss of confidence", value: "B" },
            { label: "C  too much effort required", value: "C" },
            { label: "D  high costs", value: "D" },
            { label: "E  feeling less successful than others", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam13-l-t3-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhich TWO pieces of advice does the speaker give for setting goals?\n\nA  write goals down\nB  have achievable aims\nC  set a time limit\nD  give yourself rewards\nE  challenge yourself\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  write goals down", value: "A" },
            { label: "B  have achievable aims", value: "B" },
            { label: "C  set a time limit", value: "C" },
            { label: "D  give yourself rewards", value: "D" },
            { label: "E  challenge yourself", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam13-l-t3-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  write goals down", value: "A" },
            { label: "B  have achievable aims", value: "B" },
            { label: "C  set a time limit", value: "C" },
            { label: "D  give yourself rewards", value: "D" },
            { label: "E  challenge yourself", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
      ],
    },
    {
      id: "cam13-l-t3-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose the correct letter, A, B or C.
Questions 25–30: Match each natural dye with a problem. Choose SIX answers from the box (A–H).`,
      passageTitle: "Jim — project on natural dyes",
      questions: [
        {
          id: "cam13-l-t3-s3-q21", number: 21,
          groupLabel: `Questions 21–24: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What first inspired Jim to choose this project?",
          options: [
            { label: "A  textiles displayed in an exhibition", value: "A" },
            { label: "B  a book about a botanic garden", value: "B" },
            { label: "C  carpets he saw on holiday", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t3-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Jim eventually decided to do a practical investigation which involved",
          options: [
            { label: "A  using a range of dyes with different fibres.", value: "A" },
            { label: "B  applying different dyes to one type of fibre.", value: "B" },
            { label: "C  testing one dye and a range of fibres.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t3-s3-q23", number: 23, type: "multiple_choice",
          question: "23. When doing his experiments, Jim was surprised by",
          options: [
            { label: "A  how much natural material was needed to make the dye.", value: "A" },
            { label: "B  the fact that dyes were widely available on the internet.", value: "B" },
            { label: "C  the time that he had to leave the fabric in the dye.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t3-s3-q24", number: 24, type: "multiple_choice",
          question: "24. What problem did Jim have with using tartrazine as a fabric dye?",
          options: [
            { label: "A  It caused a slight allergic reaction.", value: "A" },
            { label: "B  It was not a permanent dye on cotton.", value: "B" },
            { label: "C  It was ineffective when used on nylon.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t3-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What problem is identified with each of the following natural dyes? Choose SIX answers from the box (A–H).\n\nA  It is expensive.\nB  The colour is too strong.\nC  The colour is not long-lasting.\nD  It is very poisonous.\nE  It can damage the fabric.\nF  The colour may be unexpected.\nG  It is unsuitable for some fabrics.\nH  It is not generally available.`,
          type: "matching", question: "25. turmeric",
          options: [
            { label: "A  It is expensive.", value: "A" },
            { label: "B  The colour is too strong.", value: "B" },
            { label: "C  The colour is not long-lasting.", value: "C" },
            { label: "D  It is very poisonous.", value: "D" },
            { label: "E  It can damage the fabric.", value: "E" },
            { label: "F  The colour may be unexpected.", value: "F" },
            { label: "G  It is unsuitable for some fabrics.", value: "G" },
            { label: "H  It is not generally available.", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t3-s3-q26", number: 26, type: "matching", question: "26. beetroot",
          options: [
            { label: "A  It is expensive.", value: "A" },
            { label: "B  The colour is too strong.", value: "B" },
            { label: "C  The colour is not long-lasting.", value: "C" },
            { label: "D  It is very poisonous.", value: "D" },
            { label: "E  It can damage the fabric.", value: "E" },
            { label: "F  The colour may be unexpected.", value: "F" },
            { label: "G  It is unsuitable for some fabrics.", value: "G" },
            { label: "H  It is not generally available.", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam13-l-t3-s3-q27", number: 27, type: "matching", question: "27. Tyrian purple",
          options: [
            { label: "A  It is expensive.", value: "A" },
            { label: "B  The colour is too strong.", value: "B" },
            { label: "C  The colour is not long-lasting.", value: "C" },
            { label: "D  It is very poisonous.", value: "D" },
            { label: "E  It can damage the fabric.", value: "E" },
            { label: "F  The colour may be unexpected.", value: "F" },
            { label: "G  It is unsuitable for some fabrics.", value: "G" },
            { label: "H  It is not generally available.", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam13-l-t3-s3-q28", number: 28, type: "matching", question: "28. logwood",
          options: [
            { label: "A  It is expensive.", value: "A" },
            { label: "B  The colour is too strong.", value: "B" },
            { label: "C  The colour is not long-lasting.", value: "C" },
            { label: "D  It is very poisonous.", value: "D" },
            { label: "E  It can damage the fabric.", value: "E" },
            { label: "F  The colour may be unexpected.", value: "F" },
            { label: "G  It is unsuitable for some fabrics.", value: "G" },
            { label: "H  It is not generally available.", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam13-l-t3-s3-q29", number: 29, type: "matching", question: "29. cochineal",
          options: [
            { label: "A  It is expensive.", value: "A" },
            { label: "B  The colour is too strong.", value: "B" },
            { label: "C  The colour is not long-lasting.", value: "C" },
            { label: "D  It is very poisonous.", value: "D" },
            { label: "E  It can damage the fabric.", value: "E" },
            { label: "F  The colour may be unexpected.", value: "F" },
            { label: "G  It is unsuitable for some fabrics.", value: "G" },
            { label: "H  It is not generally available.", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t3-s3-q30", number: 30, type: "matching", question: "30. metal oxide",
          options: [
            { label: "A  It is expensive.", value: "A" },
            { label: "B  The colour is too strong.", value: "B" },
            { label: "C  The colour is not long-lasting.", value: "C" },
            { label: "D  It is very poisonous.", value: "D" },
            { label: "E  It can damage the fabric.", value: "E" },
            { label: "F  The colour may be unexpected.", value: "F" },
            { label: "G  It is unsuitable for some fabrics.", value: "G" },
            { label: "H  It is not generally available.", value: "H" },
          ],
          correctAnswer: "E", points: 1,
        },
      ],
    },
    {
      id: "cam13-l-t3-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `The sleepy lizard (tiliqua rugosa)

Description
●  They are common in Western and South Australia
●  They are brown, but recognisable by their blue 31 _______
●  They are relatively large
●  Their diet consists mainly of 32 _______
●  Their main predators are large birds and 33 _______

Navigation study
●  One study found that lizards can use the 34 _______ to help them navigate

Observations in the wild
●  Observations show that these lizards keep the same 35 _______ for several years

What people want
●  Possible reasons:
   –  to improve the survival of their young
      (but little 36 _______ has been noted between parents and children)
   –  to provide 37 _______ for female lizards

Tracking study
●  A study was carried out using GPS systems attached to the 38 _______ of the lizards
●  This provided information on the lizards' location and even the number of 39 _______ taken
●  It appeared that the lizards were trying to avoid one another
●  This may be in order to reduce chances of 40 _______`,
      questions: [
        { id: "cam13-l-t3-s4-q31", number: 31, type: "note_completion", question: "31. recognisable by their blue _______", correctAnswer: "tongue/tongues", points: 1 },
        { id: "cam13-l-t3-s4-q32", number: 32, type: "note_completion", question: "32. Their diet consists mainly of _______", correctAnswer: "plants", points: 1 },
        { id: "cam13-l-t3-s4-q33", number: 33, type: "note_completion", question: "33. main predators are large birds and _______", correctAnswer: "snakes", points: 1 },
        { id: "cam13-l-t3-s4-q34", number: 34, type: "note_completion", question: "34. lizards can use the _______ to help them navigate", correctAnswer: "sky", points: 1 },
        { id: "cam13-l-t3-s4-q35", number: 35, type: "note_completion", question: "35. these lizards keep the same _______ for several years", correctAnswer: "partner/partners", points: 1 },
        { id: "cam13-l-t3-s4-q36", number: 36, type: "note_completion", question: "36. little _______ has been noted between parents and children", correctAnswer: "contact", points: 1 },
        { id: "cam13-l-t3-s4-q37", number: 37, type: "note_completion", question: "37. to provide _______ for female lizards", correctAnswer: "protection", points: 1 },
        { id: "cam13-l-t3-s4-q38", number: 38, type: "note_completion", question: "38. GPS systems attached to the _______ of the lizards", correctAnswer: "tail/tails", points: 1 },
        { id: "cam13-l-t3-s4-q39", number: 39, type: "note_completion", question: "39. even the number of _______ taken", correctAnswer: "steps", points: 1 },
        { id: "cam13-l-t3-s4-q40", number: 40, type: "note_completion", question: "40. to reduce chances of _______", correctAnswer: "injury/injuries", points: 1 },
      ],
    },
  ],
};

export const cambridge13_listening_t4: IELTSTest = {
  id: "cam13-listening-t4",
  title: "Cambridge IELTS 13 – Listening Test 4",
  bookNumber: 13,
  testNumber: 4,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam13-listening-t4.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    {
      id: "cam13-l-t4-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Alex's Training

Alex completed his training in 2014

About the applicant:
●  At first, Alex did his training in the 1 _______ department.
●  Alex didn't have a qualification from school in 2 _______.
●  Alex thinks he should have done the diploma in 3 _______ skills.
●  Age of other trainees: the youngest was 4 _______.

Benefits of doing training at JPNW:
●  Lots of opportunities because of the size of the organisation.
●  Trainees receive the same amount of 5 _______ as permanent staff.
●  The training experience increases people's confidence a lot.
●  Trainees go to 6 _______ one day per month.
●  The company is in a convenient 7 _______.

Advice for interview:
●  Don't wear 8 _______.
●  Don't be 9 _______.
●  Make sure you 10 _______.`,
      questions: [
        { id: "cam13-l-t4-s1-q1", number: 1, type: "note_completion", question: "1. Alex did his training in the _______ department", correctAnswer: "Finance", points: 1 },
        { id: "cam13-l-t4-s1-q2", number: 2, type: "note_completion", question: "2. didn't have a qualification from school in _______", correctAnswer: "Maths/Math/Mathematics", points: 1 },
        { id: "cam13-l-t4-s1-q3", number: 3, type: "note_completion", question: "3. should have done the diploma in _______ skills", correctAnswer: "business", points: 1 },
        { id: "cam13-l-t4-s1-q4", number: 4, type: "note_completion", question: "4. youngest was _______", correctAnswer: "17/seventeen", points: 1 },
        { id: "cam13-l-t4-s1-q5", number: 5, type: "note_completion", question: "5. same amount of _______ as permanent staff", correctAnswer: "holiday/holidays/vacation/vacations", points: 1 },
        { id: "cam13-l-t4-s1-q6", number: 6, type: "note_completion", question: "6. Trainees go to _______ one day per month", correctAnswer: "college", points: 1 },
        { id: "cam13-l-t4-s1-q7", number: 7, type: "note_completion", question: "7. The company is in a convenient _______", correctAnswer: "location", points: 1 },
        { id: "cam13-l-t4-s1-q8", number: 8, type: "note_completion", question: "8. Don't wear _______", correctAnswer: "jeans", points: 1 },
        { id: "cam13-l-t4-s1-q9", number: 9, type: "note_completion", question: "9. Don't be _______", correctAnswer: "late", points: 1 },
        { id: "cam13-l-t4-s1-q10", number: 10, type: "note_completion", question: "10. Make sure you _______", correctAnswer: "smile", points: 1 },
      ],
    },
    {
      id: "cam13-l-t4-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Choose the correct letter, A, B or C.
Questions 17–20: Match each mountain trail with information. Choose FOUR answers from the box (A–F).`,
      passageTitle: "The Snow Centre — Annie",
      questions: [
        {
          id: "cam13-l-t4-s2-q11", number: 11,
          groupLabel: `Questions 11–16: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Annie recommends that when cross-country skiing, the visitors should",
          options: [
            { label: "A  get away from the regular trails.", value: "A" },
            { label: "B  stop to enjoy views of the scenery.", value: "B" },
            { label: "C  go at a slow speed at the beginning.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t4-s2-q12", number: 12, type: "multiple_choice",
          question: "12. What does Annie tell the group about this afternoon's dog-sled trip?",
          options: [
            { label: "A  Those who want to can take part in a race.", value: "A" },
            { label: "B  Anyone has the chance to drive a team of dogs.", value: "B" },
            { label: "C  One group member will be chosen to lead the trail.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t4-s2-q13", number: 13, type: "multiple_choice",
          question: "13. What does Annie say about the team relay event?",
          options: [
            { label: "A  All participants receive a medal.", value: "A" },
            { label: "B  The course is 4 km long.", value: "B" },
            { label: "C  Each team is led by a teacher.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t4-s2-q14", number: 14, type: "multiple_choice",
          question: "14. On the snow-shoe trip, the visitors will",
          options: [
            { label: "A  visit an old gold mine.", value: "A" },
            { label: "B  learn about unusual flowers.", value: "B" },
            { label: "C  climb to the top of a mountain.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t4-s2-q15", number: 15, type: "multiple_choice",
          question: "15. The cost of accommodation in the mountain hut includes",
          options: [
            { label: "A  a supply of drinking water.", value: "A" },
            { label: "B  transport of visitors' luggage.", value: "B" },
            { label: "C  cooked meals.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t4-s2-q16", number: 16, type: "multiple_choice",
          question: "16. If there is a storm while the visitors are in the hut, they should",
          options: [
            { label: "A  contact the bus driver.", value: "A" },
            { label: "B  wait until the weather improves.", value: "B" },
            { label: "C  use the emergency locator beacon.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t4-s2-q17", number: 17,
          groupLabel: `Questions 17–20: What information does Annie give about skiing on each of the following mountain trails? Choose FOUR answers from the box (A–F).\n\nA  It has a good place to stop and rest.\nB  It is suitable for all abilities.\nC  It involves crossing a river.\nD  It demands a lot of skill.\nE  It may be closed in bad weather.\nF  It has some very narrow sections.`,
          type: "matching", question: "17. Highland Trail",
          options: [
            { label: "A  It has a good place to stop and rest.", value: "A" },
            { label: "B  It is suitable for all abilities.", value: "B" },
            { label: "C  It involves crossing a river.", value: "C" },
            { label: "D  It demands a lot of skill.", value: "D" },
            { label: "E  It may be closed in bad weather.", value: "E" },
            { label: "F  It has some very narrow sections.", value: "F" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t4-s2-q18", number: 18, type: "matching", question: "18. Pine Trail",
          options: [
            { label: "A  It has a good place to stop and rest.", value: "A" },
            { label: "B  It is suitable for all abilities.", value: "B" },
            { label: "C  It involves crossing a river.", value: "C" },
            { label: "D  It demands a lot of skill.", value: "D" },
            { label: "E  It may be closed in bad weather.", value: "E" },
            { label: "F  It has some very narrow sections.", value: "F" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam13-l-t4-s2-q19", number: 19, type: "matching", question: "19. Stony Trail",
          options: [
            { label: "A  It has a good place to stop and rest.", value: "A" },
            { label: "B  It is suitable for all abilities.", value: "B" },
            { label: "C  It involves crossing a river.", value: "C" },
            { label: "D  It demands a lot of skill.", value: "D" },
            { label: "E  It may be closed in bad weather.", value: "E" },
            { label: "F  It has some very narrow sections.", value: "F" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t4-s2-q20", number: 20, type: "matching", question: "20. Loser's Trail",
          options: [
            { label: "A  It has a good place to stop and rest.", value: "A" },
            { label: "B  It is suitable for all abilities.", value: "B" },
            { label: "C  It involves crossing a river.", value: "C" },
            { label: "D  It demands a lot of skill.", value: "D" },
            { label: "E  It may be closed in bad weather.", value: "E" },
            { label: "F  It has some very narrow sections.", value: "F" },
          ],
          correctAnswer: "E", points: 1,
        },
      ],
    },
    {
      id: "cam13-l-t4-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–26: Choose the correct letter, A, B or C.
Questions 27 & 28: Choose TWO letters, A–E.
Questions 29 & 30: Choose TWO letters, A–E.`,
      passageTitle: "Jack & Alice — labels giving nutritional information on food packaging",
      questions: [
        {
          id: "cam13-l-t4-s3-q21", number: 21,
          groupLabel: `Questions 21–26: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. What was Jack's attitude to nutritional food labels before this project?",
          options: [
            { label: "A  He didn't read everything on them.", value: "A" },
            { label: "B  He didn't think they were important.", value: "B" },
            { label: "C  He thought they were too complicated.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t4-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Alice says that before doing this project,",
          options: [
            { label: "A  she was unaware of what certain foods contained.", value: "A" },
            { label: "B  she was too lazy to read food labels.", value: "B" },
            { label: "C  she was only interested in the number of calories.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t4-s3-q23", number: 23, type: "multiple_choice",
          question: "23. When discussing supermarket brands of pizza, Jack agrees with Alice that",
          options: [
            { label: "A  the list of ingredients is shocking.", value: "A" },
            { label: "B  he will hesitate before buying pizza again.", value: "B" },
            { label: "C  the nutritional label is misleading.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t4-s3-q24", number: 24, type: "multiple_choice",
          question: "24. Jack prefers the daily value system to other labelling systems because it is",
          options: [
            { label: "A  more accessible.", value: "A" },
            { label: "B  more logical.", value: "B" },
            { label: "C  more comprehensive.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam13-l-t4-s3-q25", number: 25, type: "multiple_choice",
          question: "25. What surprised both students about one flavour of crisps?",
          options: [
            { label: "A  The percentage of artificial additives given was incorrect.", value: "A" },
            { label: "B  The products did not contain any meat.", value: "B" },
            { label: "C  The labels did not list all the ingredients.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam13-l-t4-s3-q26", number: 26, type: "multiple_choice",
          question: "26. What do the students think about research into the impact of nutritional food labelling?",
          options: [
            { label: "A  It did not produce clear results.", value: "A" },
            { label: "B  It focused on the wrong people.", value: "B" },
            { label: "C  It made unrealistic recommendations.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam13-l-t4-s3-q27", number: 27,
          groupLabel: `Questions 27 and 28: Choose TWO letters, A–E.\n\nWhich TWO things surprised the students about the traffic-light system for nutritional labels?\n\nA  its widespread use\nB  the fact that it is voluntary for supermarkets\nC  how little research was done before its introduction\nD  its unpopularity with food manufacturers\nE  the way that certain colours are used\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "27. Choose TWO (first answer)",
          options: [
            { label: "A  its widespread use", value: "A" },
            { label: "B  the fact that it is voluntary for supermarkets", value: "B" },
            { label: "C  how little research was done before its introduction", value: "C" },
            { label: "D  its unpopularity with food manufacturers", value: "D" },
            { label: "E  the way that certain colours are used", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam13-l-t4-s3-q28", number: 28, type: "multiple_choice",
          question: "28. Choose TWO (second answer)",
          options: [
            { label: "A  its widespread use", value: "A" },
            { label: "B  the fact that it is voluntary for supermarkets", value: "B" },
            { label: "C  how little research was done before its introduction", value: "C" },
            { label: "D  its unpopularity with food manufacturers", value: "D" },
            { label: "E  the way that certain colours are used", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam13-l-t4-s3-q29", number: 29,
          groupLabel: `Questions 29 and 30: Choose TWO letters, A–E.\n\nWhich TWO things are true about the participants in the study on the traffic-light system?\n\nA  They had low literacy levels.\nB  They were regular consumers of packaged food.\nC  They were selected randomly.\nD  They were from all socio-economic groups.\nE  They were interviewed face-to-face.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "29. Choose TWO (first answer)",
          options: [
            { label: "A  They had low literacy levels.", value: "A" },
            { label: "B  They were regular consumers of packaged food.", value: "B" },
            { label: "C  They were selected randomly.", value: "C" },
            { label: "D  They were from all socio-economic groups.", value: "D" },
            { label: "E  They were interviewed face-to-face.", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
        {
          id: "cam13-l-t4-s3-q30", number: 30, type: "multiple_choice",
          question: "30. Choose TWO (second answer)",
          options: [
            { label: "A  They had low literacy levels.", value: "A" },
            { label: "B  They were regular consumers of packaged food.", value: "B" },
            { label: "C  They were selected randomly.", value: "C" },
            { label: "D  They were from all socio-economic groups.", value: "D" },
            { label: "E  They were interviewed face-to-face.", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
      ],
    },
    {
      id: "cam13-l-t4-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `The history of coffee

Coffee in the Arab world
●  There was small-scale trade in wild coffee from Ethiopia.
●  1522: Coffee was approved in the Ottoman court as a type of medicine.
●  1623: In Constantinople, the ruler ordered the 31 _______ of every coffee house.

Coffee arrives in Europe (17th century)
●  Coffee shops were compared to 32 _______.
●  They played an important part in social and 33 _______ changes.

Coffee and European colonization
●  European powers established coffee plantations in their colonies.
●  Types of coffee were often named according to the 34 _______ they came from.
●  In Brazil and the Caribbean, most cultivation depended on 35 _______.
●  In Java, coffee was used as a form of 36 _______.
●  Coffee became almost as important as 37 _______.
●  The move towards the consumption of 38 _______ in Britain did not also take place in the USA.

Coffee in the 19th century
●  Prices dropped because of improvements in 39 _______.
●  Industrial workers found coffee helped them to work at 40 _______.`,
      questions: [
        { id: "cam13-l-t4-s4-q31", number: 31, type: "note_completion", question: "31. the ruler ordered the _______ of every coffee house", correctAnswer: "destruction", points: 1 },
        { id: "cam13-l-t4-s4-q32", number: 32, type: "note_completion", question: "32. Coffee shops were compared to _______", correctAnswer: "universities/university", points: 1 },
        { id: "cam13-l-t4-s4-q33", number: 33, type: "note_completion", question: "33. social and _______ changes", correctAnswer: "political", points: 1 },
        { id: "cam13-l-t4-s4-q34", number: 34, type: "note_completion", question: "34. named according to the _______ they came from", correctAnswer: "port/ports", points: 1 },
        { id: "cam13-l-t4-s4-q35", number: 35, type: "note_completion", question: "35. most cultivation depended on _______", correctAnswer: "slaves/slavery", points: 1 },
        { id: "cam13-l-t4-s4-q36", number: 36, type: "note_completion", question: "36. In Java, coffee was used as a form of _______", correctAnswer: "taxation", points: 1 },
        { id: "cam13-l-t4-s4-q37", number: 37, type: "note_completion", question: "37. Coffee became almost as important as _______", correctAnswer: "sugar", points: 1 },
        { id: "cam13-l-t4-s4-q38", number: 38, type: "note_completion", question: "38. move towards the consumption of _______ in Britain", correctAnswer: "tea", points: 1 },
        { id: "cam13-l-t4-s4-q39", number: 39, type: "note_completion", question: "39. because of improvements in _______", correctAnswer: "transportation", points: 1 },
        { id: "cam13-l-t4-s4-q40", number: 40, type: "note_completion", question: "40. helped them to work at _______", correctAnswer: "night", points: 1 },
      ],
    },
  ],
};

export const cambridge13ListeningTests: IELTSTest[] = [
  cambridge13_listening_t1,
  cambridge13_listening_t2,
  cambridge13_listening_t3,
  cambridge13_listening_t4,
];
