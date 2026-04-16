import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// Build the public Supabase Storage URL for a diagram / map image.
const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

// ============================================================
// CAMBRIDGE IELTS 19 – LISTENING TEST 1
// Parts: 1) Hinchingbrooke Country Park (note completion)
//        2) Stanthorpe Twinning Association (MCQ + map labelling)
//        3) Food trends discussion (choose 2 + matching)
//        4) Céide Fields (note completion)
//
// Answer keys are pending — correctAnswer fields below are placeholders
// ("?") until the user sends the key.
// ============================================================
export const cambridge19_listening_t1: IELTSTest = {
  id: "cam19-listening-t1",
  title: "Cambridge IELTS 19 – Listening Test 1",
  bookNumber: 19,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam19-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam19-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Hinchingbrooke Country Park

The park
●  Area: 1 _______ hectares
●  Habitats: wetland, grassland and woodland
●  Wetland: lakes, ponds and a 2 _______
●  Wildlife includes birds, insects and animals

Subjects studied in educational visits include
●  Science: Children look at 3 _______ about plants, etc.
●  Geography: includes learning to use a 4 _______ and compass
●  History: changes in land use
●  Leisure and tourism: mostly concentrates on the park's 5 _______
●  Music: Children make 6 _______ with natural materials, and experiment with rhythm and speed.

Benefits of outdoor educational visits
●  They give children a feeling of 7 _______ that they may not have elsewhere.
●  Children learn new 8 _______ and gain self-confidence.

Practical issues
●  Cost per child: £ 9 _______
●  Adults, such as 10 _______, free`,
      questions: [
        { id: "cam19-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Area: _______ hectares", correctAnswer: "69/sixty-nine", points: 1 },
        { id: "cam19-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. Wetland: lakes, ponds and a _______", correctAnswer: "stream", points: 1 },
        { id: "cam19-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. Children look at _______ about plants, etc.", correctAnswer: "data", points: 1 },
        { id: "cam19-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. learning to use a _______ and compass", correctAnswer: "map", points: 1 },
        { id: "cam19-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. mostly concentrates on the park's _______", correctAnswer: "visitors", points: 1 },
        { id: "cam19-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. Children make _______ with natural materials", correctAnswer: "sounds", points: 1 },
        { id: "cam19-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. a feeling of _______ that they may not have elsewhere", correctAnswer: "freedom", points: 1 },
        { id: "cam19-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. Children learn new _______ and gain self-confidence", correctAnswer: "skills", points: 1 },
        { id: "cam19-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. Cost per child: £ _______", correctAnswer: "4.95", points: 1 },
        { id: "cam19-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. Adults, such as _______, free", correctAnswer: "leaders", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam19-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      diagramUrl: imageUrl("cam19test1map.png"),
      instructions: `Questions 11–15: Choose the correct letter, A, B or C.
Questions 16–20: Label the map. Write the correct letter (A–H) next to each feature.`,
      passageTitle: "Stanthorpe Twinning Association",
      questions: [
        {
          id: "cam19-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11–15: Choose the correct letter, A, B or C.\n\nStanthorpe Twinning Association`,
          type: "multiple_choice",
          question: "11. During the visit to Malatte, in France, members especially enjoyed",
          options: [
            { label: "A  going to a theme park.", value: "A" },
            { label: "B  experiencing a river trip.", value: "B" },
            { label: "C  visiting a cheese factory.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q12", number: 12,
          type: "multiple_choice",
          question: "12. What will happen in Stanthorpe to mark the 25th anniversary of the Twinning Association?",
          options: [
            { label: "A  A tree will be planted.", value: "A" },
            { label: "B  A garden seat will be bought.", value: "B" },
            { label: "C  A footbridge will be built.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q13", number: 13,
          type: "multiple_choice",
          question: "13. Which event raised most funds this year?",
          options: [
            { label: "A  the film show", value: "A" },
            { label: "B  the pancake evening", value: "B" },
            { label: "C  the cookery demonstration", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q14", number: 14,
          type: "multiple_choice",
          question: "14. For the first evening with the French visitors host families are advised to",
          options: [
            { label: "A  take them for a walk round the town.", value: "A" },
            { label: "B  go to a local restaurant.", value: "B" },
            { label: "C  have a meal at home.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q15", number: 15,
          type: "multiple_choice",
          question: "15. On Saturday evening there will be the chance to",
          options: [
            { label: "A  listen to a concert.", value: "A" },
            { label: "B  watch a match.", value: "B" },
            { label: "C  take part in a competition.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q16", number: 16,
          groupLabel: `Questions 16–20: Label the map. Write the correct letter (A–H) next to each feature.`,
          type: "multiple_choice",
          question: "16. Farm shop",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q17", number: 17,
          type: "multiple_choice",
          question: "17. Disabled entry",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q18", number: 18,
          type: "multiple_choice",
          question: "18. Adventure playground",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q19", number: 19,
          type: "multiple_choice",
          question: "19. Kitchen gardens",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam19-l-t1-s2-q20", number: 20,
          type: "multiple_choice",
          question: "20. The Temple of the Four Winds",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" }, { label: "D", value: "D" },
            { label: "E", value: "E" }, { label: "F", value: "F" }, { label: "G", value: "G" }, { label: "H", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam19-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose TWO letters, A–E.
Questions 25–30: What is the students' opinion about each food trend? Choose from A–H.`,
      passageText: `Discussion about Colin's bread reuse project, sensor food labels, and food trends.

Opinions (for Q25–30):
A  This is only relevant to young people.
B  This may have disappointing results.
C  This already seems to be widespread.
D  Retailers should do more to encourage this.
E  More financial support is needed for this.
F  Most people know little about this.
G  There should be stricter regulations about this.
H  This could be dangerous.`,
      questions: [
        {
          id: "cam19-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO things did Colin find most satisfying about his bread reuse project?\n\nA  receiving support from local restaurants\nB  finding a good way to prevent waste\nC  overcoming problems in a basic process\nD  experimenting with designs and colours\nE  learning how to apply 3-D printing\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  receiving support from local restaurants", value: "A" },
            { label: "B  finding a good way to prevent waste", value: "B" },
            { label: "C  overcoming problems in a basic process", value: "C" },
            { label: "D  experimenting with designs and colours", value: "D" },
            { label: "E  learning how to apply 3-D printing", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q22", number: 22,
          type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  receiving support from local restaurants", value: "A" },
            { label: "B  finding a good way to prevent waste", value: "B" },
            { label: "C  overcoming problems in a basic process", value: "C" },
            { label: "D  experimenting with designs and colours", value: "D" },
            { label: "E  learning how to apply 3-D printing", value: "E" },
          ],
          correctAnswer: "B/D", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q23", number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhich TWO ways do the students agree that touch-sensitive sensors for food labels could be developed in future?\n\nA  for use on medical products\nB  to show that food is no longer fit to eat\nC  for use with drinks as well as foods\nD  to provide applications for blind people\nE  to indicate the weight of certain foods\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  for use on medical products", value: "A" },
            { label: "B  to show that food is no longer fit to eat", value: "B" },
            { label: "C  for use with drinks as well as foods", value: "C" },
            { label: "D  to provide applications for blind people", value: "D" },
            { label: "E  to indicate the weight of certain foods", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q24", number: 24,
          type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  for use on medical products", value: "A" },
            { label: "B  to show that food is no longer fit to eat", value: "B" },
            { label: "C  for use with drinks as well as foods", value: "C" },
            { label: "D  to provide applications for blind people", value: "D" },
            { label: "E  to indicate the weight of certain foods", value: "E" },
          ],
          correctAnswer: "A/E", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q25", number: 25,
          groupLabel: `Questions 25–30: What is the students' opinion about each of the following food trends? Choose SIX answers from the box (A–H) and write the correct letter next to each trend.\n\nA  This is only relevant to young people.\nB  This may have disappointing results.\nC  This already seems to be widespread.\nD  Retailers should do more to encourage this.\nE  More financial support is needed for this.\nF  Most people know little about this.\nG  There should be stricter regulations about this.\nH  This could be dangerous.`,
          type: "multiple_choice",
          question: "25. Use of local products",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q26", number: 26,
          type: "multiple_choice",
          question: "26. Reduction in unnecessary packaging",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q27", number: 27,
          type: "multiple_choice",
          question: "27. Gluten-free and lactose-free food",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q28", number: 28,
          type: "multiple_choice",
          question: "28. Use of branded products related to celebrity chefs",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q29", number: 29,
          type: "multiple_choice",
          question: "29. Development of 'ghost kitchens' for takeaway food",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam19-l-t1-s3-q30", number: 30,
          type: "multiple_choice",
          question: "30. Use of mushrooms for common health concerns",
          options: [
            { label: "A  This is only relevant to young people.", value: "A" },
            { label: "B  This may have disappointing results.", value: "B" },
            { label: "C  This already seems to be widespread.", value: "C" },
            { label: "D  Retailers should do more to encourage this.", value: "D" },
            { label: "E  More financial support is needed for this.", value: "E" },
            { label: "F  Most people know little about this.", value: "F" },
            { label: "G  There should be stricter regulations about this.", value: "G" },
            { label: "H  This could be dangerous.", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam19-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Céide Fields
— an important Neolithic archaeological site in the northwest of Ireland

Discovery
●  In the 1930s, a local teacher realised that stones beneath the bog surface were once 31 _______.
●  His 32 _______ became an archaeologist and undertook an investigation of the site:
   –  a traditional method used by local people to dig for 33 _______ was used to identify where stones were located
   –  carbon dating later proved the site was Neolithic.
●  Items are well preserved in the bog because of a lack of 34 _______.

Neolithic farmers
●  Houses were 35 _______ in shape and had a hole in the roof.
●  Neolithic innovations include:
   –  cooking indoors
   –  pots used for storage and to make 36 _______.
●  Each field at Céide was large enough to support a big 37 _______.
●  The fields were probably used to restrict the grazing of animals — no evidence of structures to house them during 38 _______.

Reasons for the decline in farming
●  a decline in 39 _______ quality
●  an increase in 40 _______`,
      questions: [
        { id: "cam19-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. stones beneath the bog surface were once _______", correctAnswer: "walls", points: 1 },
        { id: "cam19-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. His _______ became an archaeologist", correctAnswer: "son", points: 1 },
        { id: "cam19-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. a traditional method used to dig for _______", correctAnswer: "fuel", points: 1 },
        { id: "cam19-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. well preserved in the bog because of a lack of _______", correctAnswer: "oxygen", points: 1 },
        { id: "cam19-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. Houses were _______ in shape", correctAnswer: "rectangular", points: 1 },
        { id: "cam19-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. pots used for storage and to make _______", correctAnswer: "lamps", points: 1 },
        { id: "cam19-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. large enough to support a big _______", correctAnswer: "family", points: 1 },
        { id: "cam19-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. no evidence of structures to house them during _______", correctAnswer: "winter", points: 1 },
        { id: "cam19-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. a decline in _______ quality", correctAnswer: "soil", points: 1 },
        { id: "cam19-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. an increase in _______", correctAnswer: "rain", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 19 – LISTENING TEST 2
// Parts: 1) Guitar Group (form + table completion)
//        2) Lifeboat volunteer (MCQ + two Choose-TWO pairs)
//        3) Recycling footwear (MCQ + matching + MCQ)
//        4) Tardigrades (note completion)
// ============================================================
export const cambridge19_listening_t2: IELTSTest = {
  id: "cam19-listening-t2",
  title: "Cambridge IELTS 19 – Listening Test 2",
  bookNumber: 19,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam19-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam19-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–6: Complete the form below. Write ONE WORD AND/OR A NUMBER for each answer.
Questions 7–10: Complete the table below. Write ONE WORD ONLY for each answer.`,
      passageText: `Guitar Group

Coordinator: Gary 1 _______
Level: 2 _______
Place: the 3 _______
       4 _______ Street
       First floor, Room T347
Time: Thursday morning at 5 _______
Recommended website: 'The perfect 6 _______'

A typical 45-minute guitar lesson

5 minutes — tuning guitars
  using an app or by 7 _______

10 minutes — strumming chords using our thumbs
  keeping time while the teacher is 8 _______

15 minutes — playing songs
  often listening to a 9 _______ of a song

10 minutes — playing single notes and simple tunes
  playing together, then 10 _______

5 minutes — noting things to practise at home`,
      questions: [
        { id: "cam19-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. Coordinator: Gary _______", correctAnswer: "Mathieson", points: 1 },
        { id: "cam19-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. Level: _______", correctAnswer: "beginners", points: 1 },
        { id: "cam19-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. Place: the _______", correctAnswer: "college", points: 1 },
        { id: "cam19-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. _______ Street", correctAnswer: "New", points: 1 },
        { id: "cam19-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. Thursday morning at _______", correctAnswer: "11/eleven", points: 1 },
        { id: "cam19-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. Recommended website: 'The perfect _______'", correctAnswer: "instrument", points: 1 },
        { id: "cam19-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. using an app or by _______", correctAnswer: "ear", points: 1 },
        { id: "cam19-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. keeping time while the teacher is _______", correctAnswer: "clapping", points: 1 },
        { id: "cam19-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. often listening to a _______ of a song", correctAnswer: "recording", points: 1 },
        { id: "cam19-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. playing together, then _______", correctAnswer: "alone", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam19-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Choose the correct letter, A, B or C.
Questions 17 & 18: Choose TWO letters, A–E.
Questions 19 & 20: Choose TWO letters, A–E.`,
      passageTitle: "Working as a lifeboat volunteer",
      questions: [
        {
          id: "cam19-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11–16: Choose the correct letter, A, B or C.\n\nWorking as a lifeboat volunteer`,
          type: "multiple_choice",
          question: "11. What made David leave London and move to Northsea?",
          options: [
            { label: "A  He was eager to develop a hobby.", value: "A" },
            { label: "B  He wanted to work shorter hours.", value: "B" },
            { label: "C  He found his job in website design unsatisfying.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t2-s2-q12", number: 12, type: "multiple_choice",
          question: "12. The Lifeboat Institution in Northsea was built with money provided by",
          options: [
            { label: "A  a local organisation.", value: "A" },
            { label: "B  a local resident.", value: "B" },
            { label: "C  the local council.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t2-s2-q13", number: 13, type: "multiple_choice",
          question: "13. In his health assessment, the doctor was concerned about the fact that David",
          options: [
            { label: "A  might be colour blind.", value: "A" },
            { label: "B  was rather short-sighted.", value: "B" },
            { label: "C  had undergone eye surgery.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t2-s2-q14", number: 14, type: "multiple_choice",
          question: "14. After arriving at the lifeboat station, they aim to launch the boat within",
          options: [
            { label: "A  five minutes.", value: "A" },
            { label: "B  six to eight minutes.", value: "B" },
            { label: "C  eight and a half minutes.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t2-s2-q15", number: 15, type: "multiple_choice",
          question: "15. As a 'helmsman', David has the responsibility of deciding",
          options: [
            { label: "A  who will be the members of his crew.", value: "A" },
            { label: "B  what equipment it will be necessary to take.", value: "B" },
            { label: "C  if the lifeboat should be launched.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t2-s2-q16", number: 16, type: "multiple_choice",
          question: "16. As well as going out on the lifeboat, David",
          options: [
            { label: "A  gives talks on safety at sea.", value: "A" },
            { label: "B  helps with fundraising.", value: "B" },
            { label: "C  recruits new volunteers.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t2-s2-q17", number: 17,
          groupLabel: `Questions 17 and 18: Choose TWO letters, A–E.\n\nWhich TWO things does David say about the lifeboat volunteer training?\n\nA  The residential course developed his leadership skills.\nB  The training in use of ropes and knots was quite brief.\nC  The training exercises have built up his mental strength.\nD  The casualty care activities were particularly challenging for him.\nE  The wave tank activities provided practice in survival techniques.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "17. Choose TWO (first answer)",
          options: [
            { label: "A  The residential course developed his leadership skills.", value: "A" },
            { label: "B  The training in use of ropes and knots was quite brief.", value: "B" },
            { label: "C  The training exercises have built up his mental strength.", value: "C" },
            { label: "D  The casualty care activities were particularly challenging for him.", value: "D" },
            { label: "E  The wave tank activities provided practice in survival techniques.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam19-l-t2-s2-q18", number: 18, type: "multiple_choice",
          question: "18. Choose TWO (second answer)",
          options: [
            { label: "A  The residential course developed his leadership skills.", value: "A" },
            { label: "B  The training in use of ropes and knots was quite brief.", value: "B" },
            { label: "C  The training exercises have built up his mental strength.", value: "C" },
            { label: "D  The casualty care activities were particularly challenging for him.", value: "D" },
            { label: "E  The wave tank activities provided practice in survival techniques.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam19-l-t2-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhich TWO things does David find most motivating about the work he does?\n\nA  working as part of a team\nB  experiences when working in winter\nC  being thanked by those he has helped\nD  the fact that it keeps him fit\nE  the chance to develop new equipment\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  working as part of a team", value: "A" },
            { label: "B  experiences when working in winter", value: "B" },
            { label: "C  being thanked by those he has helped", value: "C" },
            { label: "D  the fact that it keeps him fit", value: "D" },
            { label: "E  the chance to develop new equipment", value: "E" },
          ],
          correctAnswer: "A/B", points: 1,
        },
        {
          id: "cam19-l-t2-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  working as part of a team", value: "A" },
            { label: "B  experiences when working in winter", value: "B" },
            { label: "C  being thanked by those he has helped", value: "C" },
            { label: "D  the fact that it keeps him fit", value: "D" },
            { label: "E  the chance to develop new equipment", value: "E" },
          ],
          correctAnswer: "A/B", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam19-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose the correct letter, A, B or C.
Questions 25–28: Match each footwear to a reason for rejection. Choose from A–F.
Questions 29 & 30: Choose the correct letter, A, B or C.`,
      passageText: `Bella and Don discussing their recycling footwear project.

Reasons for rejection (for Q25–28):
A  one shoe was missing
B  the colour of one shoe had faded
C  one shoe had a hole in it
D  the shoes were brand new
E  the shoes were too dirty
F  the stitching on the shoes was broken`,
      questions: [
        {
          id: "cam19-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21–24: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "21. At first, Don thought the topic of recycling footwear might be too",
          options: [
            { label: "A  limited in scope.", value: "A" },
            { label: "B  hard to research.", value: "B" },
            { label: "C  boring for listeners.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. When discussing trainers, Bella and Don disagree about",
          options: [
            { label: "A  how popular they are among young people.", value: "A" },
            { label: "B  how suitable they are for school.", value: "B" },
            { label: "C  how quickly they wear out.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t2-s3-q23", number: 23, type: "multiple_choice",
          question: "23. Bella says that she sometimes recycles shoes because",
          options: [
            { label: "A  they no longer fit.", value: "A" },
            { label: "B  she no longer likes them.", value: "B" },
            { label: "C  they are no longer in fashion.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t2-s3-q24", number: 24, type: "multiple_choice",
          question: "24. What did the article say that confused Don?",
          options: [
            { label: "A  Public consumption of footwear has risen.", value: "A" },
            { label: "B  Less footwear is recycled now than in the past.", value: "B" },
            { label: "C  People dispose of more footwear than they used to.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t2-s3-q25", number: 25,
          groupLabel: `Questions 25–28: What reasons did the recycling manager give for rejecting footwear? Choose FOUR answers from the box (A–F) and write the correct letter next to each item.\n\nA  one shoe was missing\nB  the colour of one shoe had faded\nC  one shoe had a hole in it\nD  the shoes were brand new\nE  the shoes were too dirty\nF  the stitching on the shoes was broken`,
          type: "multiple_choice",
          question: "25. the high-heeled shoes",
          options: [
            { label: "A  one shoe was missing", value: "A" },
            { label: "B  the colour of one shoe had faded", value: "B" },
            { label: "C  one shoe had a hole in it", value: "C" },
            { label: "D  the shoes were brand new", value: "D" },
            { label: "E  the shoes were too dirty", value: "E" },
            { label: "F  the stitching on the shoes was broken", value: "F" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam19-l-t2-s3-q26", number: 26, type: "multiple_choice",
          question: "26. the ankle boots",
          options: [
            { label: "A  one shoe was missing", value: "A" },
            { label: "B  the colour of one shoe had faded", value: "B" },
            { label: "C  one shoe had a hole in it", value: "C" },
            { label: "D  the shoes were brand new", value: "D" },
            { label: "E  the shoes were too dirty", value: "E" },
            { label: "F  the stitching on the shoes was broken", value: "F" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t2-s3-q27", number: 27, type: "multiple_choice",
          question: "27. the baby shoes",
          options: [
            { label: "A  one shoe was missing", value: "A" },
            { label: "B  the colour of one shoe had faded", value: "B" },
            { label: "C  one shoe had a hole in it", value: "C" },
            { label: "D  the shoes were brand new", value: "D" },
            { label: "E  the shoes were too dirty", value: "E" },
            { label: "F  the stitching on the shoes was broken", value: "F" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t2-s3-q28", number: 28, type: "multiple_choice",
          question: "28. the trainers",
          options: [
            { label: "A  one shoe was missing", value: "A" },
            { label: "B  the colour of one shoe had faded", value: "B" },
            { label: "C  one shoe had a hole in it", value: "C" },
            { label: "D  the shoes were brand new", value: "D" },
            { label: "E  the shoes were too dirty", value: "E" },
            { label: "F  the stitching on the shoes was broken", value: "F" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t2-s3-q29", number: 29,
          groupLabel: `Questions 29 and 30: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "29. Why did the project to make 'new' shoes out of old shoes fail?",
          options: [
            { label: "A  People believed the 'new' pairs of shoes were unhygienic.", value: "A" },
            { label: "B  There were not enough good parts to use in the old shoes.", value: "B" },
            { label: "C  The shoes in the 'new' pairs were not completely alike.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t2-s3-q30", number: 30, type: "multiple_choice",
          question: "30. Bella and Don agree that they can present their topic",
          options: [
            { label: "A  from a new angle.", value: "A" },
            { label: "B  with relevant images.", value: "B" },
            { label: "C  in a straightforward way.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam19-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Tardigrades
●  more than 1,000 species, 0.05–1.2 millimetres long
●  also known as water 'bears' (due to how they 31 _______) and 'moss piglets'

Physical appearance
●  a 32 _______ round body and four pairs of legs
●  claws or 33 _______ for gripping
●  absence of respiratory organs
●  body filled with a liquid that carries both 34 _______ and blood
●  mouth shaped like a 35 _______ with teeth called stylets

Habitat
●  often found at the bottom of a lake or on plants
●  very resilient and can exist in very low or high 36 _______

Cryptobiosis
●  In dry conditions, they roll into a ball called a 'tun'.
●  They stay alive with a much lower metabolism than usual.
●  A type of 37 _______ ensures their DNA is not damaged.
●  Research is underway to find out how many days they can stay alive in 38 _______.

Feeding
●  consume liquids, e.g., those found in moss or 39 _______
●  may eat other tardigrades

Conservation status
●  They are not considered to be 40 _______.`,
      questions: [
        { id: "cam19-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. due to how they _______", correctAnswer: "move", points: 1 },
        { id: "cam19-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. a _______ round body and four pairs of legs", correctAnswer: "short", points: 1 },
        { id: "cam19-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. claws or _______ for gripping", correctAnswer: "discs", points: 1 },
        { id: "cam19-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. liquid that carries both _______ and blood", correctAnswer: "oxygen", points: 1 },
        { id: "cam19-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. mouth shaped like a _______ with teeth called stylets", correctAnswer: "tube", points: 1 },
        { id: "cam19-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. very resilient and can exist in very low or high _______", correctAnswer: "temperatures", points: 1 },
        { id: "cam19-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. A type of _______ ensures their DNA is not damaged", correctAnswer: "protein", points: 1 },
        { id: "cam19-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. how many days they can stay alive in _______", correctAnswer: "space", points: 1 },
        { id: "cam19-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. those found in moss or _______", correctAnswer: "seaweed", points: 1 },
        { id: "cam19-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. They are not considered to be _______", correctAnswer: "endangered", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 19 – LISTENING TEST 3
// Parts: 1) Local food shops (notes + table completion)
//        2) Festival workshops (matching + two Choose-TWO)
//        3) Year 12 science experiment (MCQ + flow-chart matching)
//        4) Microplastics (note completion)
// ============================================================
export const cambridge19_listening_t3: IELTSTest = {
  id: "cam19-listening-t3",
  title: "Cambridge IELTS 19 – Listening Test 3",
  bookNumber: 19,
  testNumber: 3,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam19-listening-t3.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam19-l-t3-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Local food shops

Where to go
●  Kite Place – near the 1 _______

Fish market
●  cross the 2 _______ and turn right
●  best to go before 3 _______ pm, earlier than closing time

Organic shop
●  called 4 '_______'
●  below a restaurant in the large, grey building
●  look for the large 5 _______ outside

Supermarket
●  take a 6 _______ minibus, number 289

Shopping

Fish market
  To buy: a dozen prawns
  Other ideas: a handful of 7 _______ (type of seaweed)

Organic shop
  To buy: beans and a 8 _______ for dessert
  Other ideas: spices and 9 _______

Bakery
  To buy: a brown loaf
  Other ideas: a 10 _______ tart`,
      questions: [
        { id: "cam19-l-t3-s1-q1", number: 1, type: "note_completion", question: "1. Kite Place – near the _______", correctAnswer: "harbour/harbor", points: 1 },
        { id: "cam19-l-t3-s1-q2", number: 2, type: "note_completion", question: "2. cross the _______ and turn right", correctAnswer: "bridge", points: 1 },
        { id: "cam19-l-t3-s1-q3", number: 3, type: "note_completion", question: "3. best to go before _______ pm", correctAnswer: "3.30/three thirty/half three/half 3", points: 1 },
        { id: "cam19-l-t3-s1-q4", number: 4, type: "note_completion", question: "4. called '_______'", correctAnswer: "Rose", points: 1 },
        { id: "cam19-l-t3-s1-q5", number: 5, type: "note_completion", question: "5. look for the large _______ outside", correctAnswer: "sign", points: 1 },
        { id: "cam19-l-t3-s1-q6", number: 6, type: "note_completion", question: "6. take a _______ minibus, number 289", correctAnswer: "purple", points: 1 },
        { id: "cam19-l-t3-s1-q7", number: 7, type: "note_completion", question: "7. a handful of _______ (type of seaweed)", correctAnswer: "samphire", points: 1 },
        { id: "cam19-l-t3-s1-q8", number: 8, type: "note_completion", question: "8. beans and a _______ for dessert", correctAnswer: "melon", points: 1 },
        { id: "cam19-l-t3-s1-q9", number: 9, type: "note_completion", question: "9. spices and _______", correctAnswer: "coconut", points: 1 },
        { id: "cam19-l-t3-s1-q10", number: 10, type: "note_completion", question: "10. a _______ tart", correctAnswer: "strawberry", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam19-l-t3-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–16: Match each festival workshop to the information about it. Choose from the box (A–H).
Questions 17 & 18: Choose TWO letters, A–E.
Questions 19 & 20: Choose TWO letters, A–E.`,
      passageText: `Festival workshops — information options

A  involves painting and drawing
B  will be led by a prize-winning author
C  is aimed at children with a disability
D  involves a drama activity
E  focuses on new relationships
F  is aimed at a specific age group
G  explores an unhappy feeling
H  raises awareness of a particular culture`,
      questions: [
        {
          id: "cam19-l-t3-s2-q11", number: 11,
          groupLabel: `Questions 11–16: What information is given about each of the following festival workshops? Choose SIX answers from the box (A–H) and write the correct letter next to each workshop.\n\nA  involves painting and drawing\nB  will be led by a prize-winning author\nC  is aimed at children with a disability\nD  involves a drama activity\nE  focuses on new relationships\nF  is aimed at a specific age group\nG  explores an unhappy feeling\nH  raises awareness of a particular culture`,
          type: "multiple_choice",
          question: "11. Superheroes",
          options: [
            { label: "A  involves painting and drawing", value: "A" },
            { label: "B  will be led by a prize-winning author", value: "B" },
            { label: "C  is aimed at children with a disability", value: "C" },
            { label: "D  involves a drama activity", value: "D" },
            { label: "E  focuses on new relationships", value: "E" },
            { label: "F  is aimed at a specific age group", value: "F" },
            { label: "G  explores an unhappy feeling", value: "G" },
            { label: "H  raises awareness of a particular culture", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t3-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Just do it",
          options: [
            { label: "A  involves painting and drawing", value: "A" },
            { label: "B  will be led by a prize-winning author", value: "B" },
            { label: "C  is aimed at children with a disability", value: "C" },
            { label: "D  involves a drama activity", value: "D" },
            { label: "E  focuses on new relationships", value: "E" },
            { label: "F  is aimed at a specific age group", value: "F" },
            { label: "G  explores an unhappy feeling", value: "G" },
            { label: "H  raises awareness of a particular culture", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam19-l-t3-s2-q13", number: 13, type: "multiple_choice",
          question: "13. Count on me",
          options: [
            { label: "A  involves painting and drawing", value: "A" },
            { label: "B  will be led by a prize-winning author", value: "B" },
            { label: "C  is aimed at children with a disability", value: "C" },
            { label: "D  involves a drama activity", value: "D" },
            { label: "E  focuses on new relationships", value: "E" },
            { label: "F  is aimed at a specific age group", value: "F" },
            { label: "G  explores an unhappy feeling", value: "G" },
            { label: "H  raises awareness of a particular culture", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam19-l-t3-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Speak up",
          options: [
            { label: "A  involves painting and drawing", value: "A" },
            { label: "B  will be led by a prize-winning author", value: "B" },
            { label: "C  is aimed at children with a disability", value: "C" },
            { label: "D  involves a drama activity", value: "D" },
            { label: "E  focuses on new relationships", value: "E" },
            { label: "F  is aimed at a specific age group", value: "F" },
            { label: "G  explores an unhappy feeling", value: "G" },
            { label: "H  raises awareness of a particular culture", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam19-l-t3-s2-q15", number: 15, type: "multiple_choice",
          question: "15. Jump for joy",
          options: [
            { label: "A  involves painting and drawing", value: "A" },
            { label: "B  will be led by a prize-winning author", value: "B" },
            { label: "C  is aimed at children with a disability", value: "C" },
            { label: "D  involves a drama activity", value: "D" },
            { label: "E  focuses on new relationships", value: "E" },
            { label: "F  is aimed at a specific age group", value: "F" },
            { label: "G  explores an unhappy feeling", value: "G" },
            { label: "H  raises awareness of a particular culture", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t3-s2-q16", number: 16, type: "multiple_choice",
          question: "16. Sticks and stones",
          options: [
            { label: "A  involves painting and drawing", value: "A" },
            { label: "B  will be led by a prize-winning author", value: "B" },
            { label: "C  is aimed at children with a disability", value: "C" },
            { label: "D  involves a drama activity", value: "D" },
            { label: "E  focuses on new relationships", value: "E" },
            { label: "F  is aimed at a specific age group", value: "F" },
            { label: "G  explores an unhappy feeling", value: "G" },
            { label: "H  raises awareness of a particular culture", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam19-l-t3-s2-q17", number: 17,
          groupLabel: `Questions 17 and 18: Choose TWO letters, A–E.\n\nWhich TWO reasons does the speaker give for recommending Alive and Kicking?\n\nA  It will appeal to both boys and girls.\nB  The author is well known.\nC  It has colourful illustrations.\nD  It is funny.\nE  It deals with an important topic.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "17. Choose TWO (first answer)",
          options: [
            { label: "A  It will appeal to both boys and girls.", value: "A" },
            { label: "B  The author is well known.", value: "B" },
            { label: "C  It has colourful illustrations.", value: "C" },
            { label: "D  It is funny.", value: "D" },
            { label: "E  It deals with an important topic.", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
        {
          id: "cam19-l-t3-s2-q18", number: 18, type: "multiple_choice",
          question: "18. Choose TWO (second answer)",
          options: [
            { label: "A  It will appeal to both boys and girls.", value: "A" },
            { label: "B  The author is well known.", value: "B" },
            { label: "C  It has colourful illustrations.", value: "C" },
            { label: "D  It is funny.", value: "D" },
            { label: "E  It deals with an important topic.", value: "E" },
          ],
          correctAnswer: "D/E", points: 1,
        },
        {
          id: "cam19-l-t3-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhich TWO pieces of advice does the speaker give to parents about reading?\n\nA  Encourage children to write down new vocabulary.\nB  Allow children to listen to audio books.\nC  Get recommendations from librarians.\nD  Give children a choice about what they read.\nE  Only read aloud to children until they can read independently.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice",
          question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  Encourage children to write down new vocabulary.", value: "A" },
            { label: "B  Allow children to listen to audio books.", value: "B" },
            { label: "C  Get recommendations from librarians.", value: "C" },
            { label: "D  Give children a choice about what they read.", value: "D" },
            { label: "E  Only read aloud to children until they can read independently.", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam19-l-t3-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  Encourage children to write down new vocabulary.", value: "A" },
            { label: "B  Allow children to listen to audio books.", value: "B" },
            { label: "C  Get recommendations from librarians.", value: "C" },
            { label: "D  Give children a choice about what they read.", value: "D" },
            { label: "E  Only read aloud to children until they can read independently.", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam19-l-t3-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Choose the correct letter, A, B or C.
Questions 26–30: Flow-chart completion. Choose FIVE answers from the box (A–H).`,
      passageText: `Science experiment for Year 12 students — Clare and Jake discussing.

Flow-chart options (for Q26–30):
A  size
B  escape
C  age
D  water
E  cereal
F  calculations
G  changes
H  colour

Choose mice which are all the same 26 _______.
  ↓
Divide the mice into two groups, each with a different 27 _______.
  ↓
Put each group in a separate cage.
Feed group A commercial mouse food.
Feed group B the same, but also sugar contained in 28 _______.
  ↓
Take measurements using an electronic scale.
Place them in a weighing chamber to prevent 29 _______.
  ↓
Do all necessary 30 _______.`,
      questions: [
        {
          id: "cam19-l-t3-s3-q21", number: 21,
          groupLabel: `Questions 21–25: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "21. How does Clare feel about the students in her Year 12 science class?",
          options: [
            { label: "A  worried that they are not making progress", value: "A" },
            { label: "B  challenged by their poor behaviour in class", value: "B" },
            { label: "C  frustrated at their lack of interest in the subject", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t3-s3-q22", number: 22, type: "multiple_choice",
          question: "22. How does Jake react to Clare's suggestion about an experiment based on children's diet?",
          options: [
            { label: "A  He is concerned that the results might not be meaningful.", value: "A" },
            { label: "B  He feels some of the data might be difficult to obtain.", value: "B" },
            { label: "C  He suspects that the conclusions might be upsetting.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t3-s3-q23", number: 23, type: "multiple_choice",
          question: "23. What problem do they agree may be involved in an experiment involving animals?",
          options: [
            { label: "A  Any results may not apply to humans.", value: "A" },
            { label: "B  It may be complicated to get permission.", value: "B" },
            { label: "C  Students may not be happy about animal experiments.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t3-s3-q24", number: 24, type: "multiple_choice",
          question: "24. What question do they decide the experiment should address?",
          options: [
            { label: "A  Are mice capable of controlling their food intake?", value: "A" },
            { label: "B  Does an increase in sugar lead to health problems?", value: "B" },
            { label: "C  How much do supplements of different kinds affect health?", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t3-s3-q25", number: 25, type: "multiple_choice",
          question: "25. Clare might also consider doing another experiment involving",
          options: [
            { label: "A  other types of food supplement.", value: "A" },
            { label: "B  different genetic strains of mice.", value: "B" },
            { label: "C  varying amounts of exercise.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t3-s3-q26", number: 26,
          groupLabel: `Questions 26–30: Complete the flowchart below. Choose FIVE answers from the box (A–H) and write the correct letter next to each step.\n\nA  size\nB  escape\nC  age\nD  water\nE  cereal\nF  calculations\nG  changes\nH  colour`,
          type: "multiple_choice",
          question: "26. Choose mice which are all the same _______",
          options: [
            { label: "A  size", value: "A" }, { label: "B  escape", value: "B" }, { label: "C  age", value: "C" }, { label: "D  water", value: "D" },
            { label: "E  cereal", value: "E" }, { label: "F  calculations", value: "F" }, { label: "G  changes", value: "G" }, { label: "H  colour", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t3-s3-q27", number: 27, type: "multiple_choice",
          question: "27. Divide the mice into two groups, each with a different _______",
          options: [
            { label: "A  size", value: "A" }, { label: "B  escape", value: "B" }, { label: "C  age", value: "C" }, { label: "D  water", value: "D" },
            { label: "E  cereal", value: "E" }, { label: "F  calculations", value: "F" }, { label: "G  changes", value: "G" }, { label: "H  colour", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam19-l-t3-s3-q28", number: 28, type: "multiple_choice",
          question: "28. Feed group B the same, but also sugar contained in _______",
          options: [
            { label: "A  size", value: "A" }, { label: "B  escape", value: "B" }, { label: "C  age", value: "C" }, { label: "D  water", value: "D" },
            { label: "E  cereal", value: "E" }, { label: "F  calculations", value: "F" }, { label: "G  changes", value: "G" }, { label: "H  colour", value: "H" },
          ],
          correctAnswer: "E", points: 1,
        },
        {
          id: "cam19-l-t3-s3-q29", number: 29, type: "multiple_choice",
          question: "29. Place them in a weighing chamber to prevent _______",
          options: [
            { label: "A  size", value: "A" }, { label: "B  escape", value: "B" }, { label: "C  age", value: "C" }, { label: "D  water", value: "D" },
            { label: "E  cereal", value: "E" }, { label: "F  calculations", value: "F" }, { label: "G  changes", value: "G" }, { label: "H  colour", value: "H" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t3-s3-q30", number: 30, type: "multiple_choice",
          question: "30. Do all necessary _______",
          options: [
            { label: "A  size", value: "A" }, { label: "B  escape", value: "B" }, { label: "C  age", value: "C" }, { label: "D  water", value: "D" },
            { label: "E  cereal", value: "E" }, { label: "F  calculations", value: "F" }, { label: "G  changes", value: "G" }, { label: "H  colour", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam19-l-t3-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Microplastics

Where microplastics come from
●  fibres from some 31 _______ during washing
●  the breakdown of large pieces of plastic
●  waste from industry
●  the action of vehicle tyres on roads

Effects of microplastics
●  They cause injuries to the 32 _______ of wildlife and affect their digestive systems.
●  They enter the food chain, e.g., in bottled and tap water, 33 _______ and seafood.
●  They may not affect human health, but they are already banned in skin cleaning products and 34 _______ in some countries.
●  Microplastics enter the soil through the air, rain and 35 _______.

Microplastics in the soil – a study by Anglia Ruskin University
●  Earthworms are important because they add 36 _______ to the soil.
●  The study aimed to find whether microplastics in earthworms affect the 37 _______ of plants.
●  The study found that microplastics caused:
   –  38 _______ loss in earthworms
   –  fewer seeds to germinate
   –  a rise in the level of 39 _______ in the soil.
●  The study concluded:
   –  soil should be seen as an important natural process.
   –  changes to soil damage both ecosystems and 40 _______.`,
      questions: [
        { id: "cam19-l-t3-s4-q31", number: 31, type: "note_completion", question: "31. fibres from some _______ during washing", correctAnswer: "clothing", points: 1 },
        { id: "cam19-l-t3-s4-q32", number: 32, type: "note_completion", question: "32. injuries to the _______ of wildlife", correctAnswer: "mouths", points: 1 },
        { id: "cam19-l-t3-s4-q33", number: 33, type: "note_completion", question: "33. in bottled and tap water, _______ and seafood", correctAnswer: "salt", points: 1 },
        { id: "cam19-l-t3-s4-q34", number: 34, type: "note_completion", question: "34. banned in skin cleaning products and _______ in some countries", correctAnswer: "toothpaste", points: 1 },
        { id: "cam19-l-t3-s4-q35", number: 35, type: "note_completion", question: "35. Microplastics enter the soil through the air, rain and _______", correctAnswer: "fertilisers/fertilizers", points: 1 },
        { id: "cam19-l-t3-s4-q36", number: 36, type: "note_completion", question: "36. Earthworms add _______ to the soil", correctAnswer: "nutrients", points: 1 },
        { id: "cam19-l-t3-s4-q37", number: 37, type: "note_completion", question: "37. affect the _______ of plants", correctAnswer: "growth", points: 1 },
        { id: "cam19-l-t3-s4-q38", number: 38, type: "note_completion", question: "38. _______ loss in earthworms", correctAnswer: "weight", points: 1 },
        { id: "cam19-l-t3-s4-q39", number: 39, type: "note_completion", question: "39. a rise in the level of _______ in the soil", correctAnswer: "acid", points: 1 },
        { id: "cam19-l-t3-s4-q40", number: 40, type: "note_completion", question: "40. changes to soil damage both ecosystems and _______", correctAnswer: "society", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 19 – LISTENING TEST 4
// Parts: 1) First day at work (form + table)
//        2) Running club (Choose-TWO + matching + MCQ)
//        3) Books with grandfather (MCQ + matching)
//        4) Tree planting reforestation (notes)
// ============================================================
export const cambridge19_listening_t4: IELTSTest = {
  id: "cam19-listening-t4",
  title: "Cambridge IELTS 19 – Listening Test 4",
  bookNumber: 19,
  testNumber: 4,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam19-listening-t4.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam19-l-t4-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `First day at work

●  Name of supervisor: 1 _______
●  Where to leave coat and bag: use 2 _______ in staffroom
●  See Tiffany in HR:
   –  to give 3 _______ number
   –  to collect 4 _______
●  Location of HR office: on 5 _______ floor
●  Supervisor's mobile number: 6 _______

Responsibilities

Bakery section
  Task 1: Check sell-by dates
  Task 2: Change price labels
  Notes: Use 7 _______ labels

Sushi takeaway counter
  Task 1: Re-stock with 8 _______ boxes if needed
  Task 2: Wipe preparation area and clean the sink
  Notes: Do not clean any knives

Meat and fish counters
  Task 1: Clean the serving area, including the weighing scales
  Task 2: Collect 9 _______ for the fish from the cold-room
  Notes: Must wear special 10 _______`,
      questions: [
        { id: "cam19-l-t4-s1-q1", number: 1, type: "note_completion", question: "1. Name of supervisor: _______", correctAnswer: "Kaeden", points: 1 },
        { id: "cam19-l-t4-s1-q2", number: 2, type: "note_completion", question: "2. use _______ in staffroom", correctAnswer: "locker/lockers", points: 1 },
        { id: "cam19-l-t4-s1-q3", number: 3, type: "note_completion", question: "3. to give _______ number", correctAnswer: "passport", points: 1 },
        { id: "cam19-l-t4-s1-q4", number: 4, type: "note_completion", question: "4. to collect _______", correctAnswer: "uniform", points: 1 },
        { id: "cam19-l-t4-s1-q5", number: 5, type: "note_completion", question: "5. on _______ floor", correctAnswer: "third/3rd", points: 1 },
        { id: "cam19-l-t4-s1-q6", number: 6, type: "note_completion", question: "6. Supervisor's mobile number: _______", correctAnswer: "0412 665 903/0412665903", points: 1 },
        { id: "cam19-l-t4-s1-q7", number: 7, type: "note_completion", question: "7. Use _______ labels", correctAnswer: "yellow", points: 1 },
        { id: "cam19-l-t4-s1-q8", number: 8, type: "note_completion", question: "8. Re-stock with _______ boxes if needed", correctAnswer: "plastic", points: 1 },
        { id: "cam19-l-t4-s1-q9", number: 9, type: "note_completion", question: "9. Collect _______ for the fish from the cold-room", correctAnswer: "ice", points: 1 },
        { id: "cam19-l-t4-s1-q10", number: 10, type: "note_completion", question: "10. Must wear special _______", correctAnswer: "gloves", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam19-l-t4-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11 & 12: Choose TWO letters, A–E.
Questions 13 & 14: Choose TWO letters, A–E.
Questions 15–18: Match each club member to a reason. Choose A, B or C.
Questions 19 & 20: Choose the correct letter, A, B or C.`,
      passageTitle: "Compton Park Runners Club",
      questions: [
        {
          id: "cam19-l-t4-s2-q11", number: 11,
          groupLabel: `Questions 11 and 12: Choose TWO letters, A–E.\n\nWhich TWO problems with some training programmes for new runners does Liz mention?\n\nA  There is a risk of serious injury.\nB  They are unsuitable for certain age groups.\nC  They are unsuitable for people with health issues.\nD  It is difficult to stay motivated.\nE  There is a lack of individual support.\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "11. Choose TWO (first answer)",
          options: [
            { label: "A  There is a risk of serious injury.", value: "A" },
            { label: "B  They are unsuitable for certain age groups.", value: "B" },
            { label: "C  They are unsuitable for people with health issues.", value: "C" },
            { label: "D  It is difficult to stay motivated.", value: "D" },
            { label: "E  There is a lack of individual support.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam19-l-t4-s2-q12", number: 12, type: "multiple_choice", question: "12. Choose TWO (second answer)",
          options: [
            { label: "A  There is a risk of serious injury.", value: "A" },
            { label: "B  They are unsuitable for certain age groups.", value: "B" },
            { label: "C  They are unsuitable for people with health issues.", value: "C" },
            { label: "D  It is difficult to stay motivated.", value: "D" },
            { label: "E  There is a lack of individual support.", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam19-l-t4-s2-q13", number: 13,
          groupLabel: `Questions 13 and 14: Choose TWO letters, A–E.\n\nWhich TWO tips does Liz recommend for new runners?\n\nA  doing two runs a week\nB  running in the evening\nC  going on runs with a friend\nD  listening to music during runs\nE  running very slowly\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "13. Choose TWO (first answer)",
          options: [
            { label: "A  doing two runs a week", value: "A" },
            { label: "B  running in the evening", value: "B" },
            { label: "C  going on runs with a friend", value: "C" },
            { label: "D  listening to music during runs", value: "D" },
            { label: "E  running very slowly", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam19-l-t4-s2-q14", number: 14, type: "multiple_choice", question: "14. Choose TWO (second answer)",
          options: [
            { label: "A  doing two runs a week", value: "A" },
            { label: "B  running in the evening", value: "B" },
            { label: "C  going on runs with a friend", value: "C" },
            { label: "D  listening to music during runs", value: "D" },
            { label: "E  running very slowly", value: "E" },
          ],
          correctAnswer: "A/D", points: 1,
        },
        {
          id: "cam19-l-t4-s2-q15", number: 15,
          groupLabel: `Questions 15–18: What reason prevented each of the following members of the Compton Park Runners Club from joining until recently? Write the correct answer (A, B or C) next to each member.\n\nA  a lack of confidence\nB  a dislike of running\nC  a lack of time`,
          type: "multiple_choice", question: "15. Ceri",
          options: [
            { label: "A  a lack of confidence", value: "A" },
            { label: "B  a dislike of running", value: "B" },
            { label: "C  a lack of time", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t4-s2-q16", number: 16, type: "multiple_choice", question: "16. James",
          options: [
            { label: "A  a lack of confidence", value: "A" },
            { label: "B  a dislike of running", value: "B" },
            { label: "C  a lack of time", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t4-s2-q17", number: 17, type: "multiple_choice", question: "17. Leo",
          options: [
            { label: "A  a lack of confidence", value: "A" },
            { label: "B  a dislike of running", value: "B" },
            { label: "C  a lack of time", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t4-s2-q18", number: 18, type: "multiple_choice", question: "18. Mark",
          options: [
            { label: "A  a lack of confidence", value: "A" },
            { label: "B  a dislike of running", value: "B" },
            { label: "C  a lack of time", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t4-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "19. What does Liz say about running her first marathon?",
          options: [
            { label: "A  It had always been her ambition.", value: "A" },
            { label: "B  Her husband persuaded her to do it.", value: "B" },
            { label: "C  She nearly gave up before the end.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t4-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Liz says new runners should sign up for a race",
          options: [
            { label: "A  every six months.", value: "A" },
            { label: "B  within a few weeks of taking up running.", value: "B" },
            { label: "C  after completing several practice runs.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam19-l-t4-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–25: Choose the correct letter, A, B or C.
Questions 26–30: Match each type of book to a location in Jane's grandfather's shop. Choose from A–G.`,
      passageText: `Jane and Kieran discussing Jane's grandfather's bookshop.

Location of books (for Q26–30):
A  near the entrance
B  in the attic
C  at the back of the shop
D  on a high shelf
E  near the stairs
F  in a specially designed space
G  within the café`,
      questions: [
        {
          id: "cam19-l-t4-s3-q21", number: 21,
          groupLabel: `Questions 21–25: Choose the correct letter, A, B or C.`,
          type: "multiple_choice",
          question: "21. Kieran thinks the packing advice given by Jane's grandfather is",
          options: [
            { label: "A  common sense.", value: "A" },
            { label: "B  hard to follow.", value: "B" },
            { label: "C  over-protective.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t4-s3-q22", number: 22, type: "multiple_choice",
          question: "22. How does Jane feel about the books her grandfather has given her?",
          options: [
            { label: "A  They are not worth keeping.", value: "A" },
            { label: "B  They should go to a collector.", value: "B" },
            { label: "C  They have sentimental value for her.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t4-s3-q23", number: 23, type: "multiple_choice",
          question: "23. Jane and Kieran agree that hardback books should be",
          options: [
            { label: "A  put out on display.", value: "A" },
            { label: "B  given as gifts to visitors.", value: "B" },
            { label: "C  more attractively designed.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t4-s3-q24", number: 24, type: "multiple_choice",
          question: "24. While talking about taking a book from a shelf, Jane",
          options: [
            { label: "A  describes the mistakes other people make doing it.", value: "A" },
            { label: "B  reflects on a significant childhood experience.", value: "B" },
            { label: "C  explains why some books are easier to remove than others.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam19-l-t4-s3-q25", number: 25, type: "multiple_choice",
          question: "25. What do Jane and Kieran suggest about new books?",
          options: [
            { label: "A  Their parents liked buying them as presents.", value: "A" },
            { label: "B  They would like to buy more of them.", value: "B" },
            { label: "C  Not everyone can afford them.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t4-s3-q26", number: 26,
          groupLabel: `Questions 26–30: Where does Jane's grandfather keep each of the following types of books in his shop? Choose FIVE answers from the box (A–G) and write the correct letter next to each type.\n\nA  near the entrance\nB  in the attic\nC  at the back of the shop\nD  on a high shelf\nE  near the stairs\nF  in a specially designed space\nG  within the café`,
          type: "multiple_choice", question: "26. rare books",
          options: [
            { label: "A  near the entrance", value: "A" }, { label: "B  in the attic", value: "B" },
            { label: "C  at the back of the shop", value: "C" }, { label: "D  on a high shelf", value: "D" },
            { label: "E  near the stairs", value: "E" }, { label: "F  in a specially designed space", value: "F" },
            { label: "G  within the café", value: "G" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam19-l-t4-s3-q27", number: 27, type: "multiple_choice", question: "27. children's books",
          options: [
            { label: "A  near the entrance", value: "A" }, { label: "B  in the attic", value: "B" },
            { label: "C  at the back of the shop", value: "C" }, { label: "D  on a high shelf", value: "D" },
            { label: "E  near the stairs", value: "E" }, { label: "F  in a specially designed space", value: "F" },
            { label: "G  within the café", value: "G" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam19-l-t4-s3-q28", number: 28, type: "multiple_choice", question: "28. unwanted books",
          options: [
            { label: "A  near the entrance", value: "A" }, { label: "B  in the attic", value: "B" },
            { label: "C  at the back of the shop", value: "C" }, { label: "D  on a high shelf", value: "D" },
            { label: "E  near the stairs", value: "E" }, { label: "F  in a specially designed space", value: "F" },
            { label: "G  within the café", value: "G" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam19-l-t4-s3-q29", number: 29, type: "multiple_choice", question: "29. requested books",
          options: [
            { label: "A  near the entrance", value: "A" }, { label: "B  in the attic", value: "B" },
            { label: "C  at the back of the shop", value: "C" }, { label: "D  on a high shelf", value: "D" },
            { label: "E  near the stairs", value: "E" }, { label: "F  in a specially designed space", value: "F" },
            { label: "G  within the café", value: "G" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam19-l-t4-s3-q30", number: 30, type: "multiple_choice", question: "30. coursebooks",
          options: [
            { label: "A  near the entrance", value: "A" }, { label: "B  in the attic", value: "B" },
            { label: "C  at the back of the shop", value: "C" }, { label: "D  on a high shelf", value: "D" },
            { label: "E  near the stairs", value: "E" }, { label: "F  in a specially designed space", value: "F" },
            { label: "G  within the café", value: "G" },
          ],
          correctAnswer: "G", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam19-l-t4-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Tree planting

Reforestation projects should:
●  include a range of tree species
●  not include invasive species because of possible 31 _______ with native species.
●  aim to capture carbon, protect the environment and provide sustainable sources of 32 _______ for local people
●  use tree seeds with a high genetic diversity to increase resistance to 33 _______ and climate change
●  plant trees on previously forested land which is in a bad condition, not select land which is being used for 34 _______

Large-scale reforestation projects
●  Base planning decisions on information from accurate 35 _______.
●  Drones are useful for identifying areas in Brazil which are endangered by keeping 36 _______ and illegal logging.

Lampang Province, Northern Thailand
●  A forest was restored in an area damaged by mining.
●  A variety of native fig trees were planted, which are important for
   –  supporting many wildlife species
   –  increasing the 37 _______ of recovery by attracting animals and birds, e.g., 38 _______ were soon attracted to the area.

Involving local communities
●  Destruction of mangrove forests in Madagascar made it difficult for people to make a living from 39 _______.
●  The mangrove reforestation project:
   –  provided employment for local people
   –  restored a healthy ecosystem
   –  protects against the higher risk of 40 _______.`,
      questions: [
        { id: "cam19-l-t4-s4-q31", number: 31, type: "note_completion", question: "31. possible _______ with native species", correctAnswer: "competition", points: 1 },
        { id: "cam19-l-t4-s4-q32", number: 32, type: "note_completion", question: "32. sustainable sources of _______ for local people", correctAnswer: "food", points: 1 },
        { id: "cam19-l-t4-s4-q33", number: 33, type: "note_completion", question: "33. increase resistance to _______ and climate change", correctAnswer: "disease", points: 1 },
        { id: "cam19-l-t4-s4-q34", number: 34, type: "note_completion", question: "34. not select land which is being used for _______", correctAnswer: "agriculture", points: 1 },
        { id: "cam19-l-t4-s4-q35", number: 35, type: "note_completion", question: "35. information from accurate _______", correctAnswer: "maps", points: 1 },
        { id: "cam19-l-t4-s4-q36", number: 36, type: "note_completion", question: "36. endangered by keeping _______ and illegal logging", correctAnswer: "cattle", points: 1 },
        { id: "cam19-l-t4-s4-q37", number: 37, type: "note_completion", question: "37. increasing the _______ of recovery", correctAnswer: "speed", points: 1 },
        { id: "cam19-l-t4-s4-q38", number: 38, type: "note_completion", question: "38. _______ were soon attracted to the area", correctAnswer: "monkeys", points: 1 },
        { id: "cam19-l-t4-s4-q39", number: 39, type: "note_completion", question: "39. difficult for people to make a living from _______", correctAnswer: "fishing", points: 1 },
        { id: "cam19-l-t4-s4-q40", number: 40, type: "note_completion", question: "40. higher risk of _______", correctAnswer: "flooding", points: 1 },
      ],
    },
  ],
};

export const cambridge19ListeningTests: IELTSTest[] = [
  cambridge19_listening_t1,
  cambridge19_listening_t2,
  cambridge19_listening_t3,
  cambridge19_listening_t4,
];
