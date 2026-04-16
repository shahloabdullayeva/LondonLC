import type { IELTSTest } from "./ielts-tests";

// Build the public Supabase Storage URL for a listening audio file.
const audioUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/audio/${name}`;

// Build the public Supabase Storage URL for a diagram / map image.
const imageUrl = (name: string) =>
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${name}`;

// ============================================================
// CAMBRIDGE IELTS 16 – LISTENING TEST 1
// Parts: 1) Children's Engineering Workshops (notes)
//        2) Stevenson's site tour (MCQ + map labelling A–J)
//        3) Jess & Tom — art projects (two Choose-TWO + matching
//           pictures to personal meanings)
//        4) Stoicism (notes)
// ============================================================
export const cambridge16_listening_t1: IELTSTest = {
  id: "cam16-listening-t1",
  title: "Cambridge IELTS 16 – Listening Test 1",
  bookNumber: 16,
  testNumber: 1,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam16-listening-t1.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam16-l-t1-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Children's Engineering Workshops

Tiny Engineers (ages 4–5)
Activities
●  Create a cover for an 1 _______ so they can drop it from a height without breaking it.
●  Take part in a competition to build the tallest 2 _______.
●  Make a 3 _______ powered by a balloon.

Junior Engineers (ages 6–8)
Activities:
●  Build model cars, trucks and 4 _______ and learn how to program them so they can move.
●  Take part in a competition to build the longest 5 _______ using card and wood.
●  Create a short 6 _______ with special software.
●  Build, 7 _______ and program a humanoid robot.

Cost for a five-week block: £50
Held on 8 _______ from 10 a.m. to 11 a.m.

Location
Building 10A, 9 _______ Industrial Estate, Grasford
Plenty of 10 _______ is available.`,
      questions: [
        { id: "cam16-l-t1-s1-q1", number: 1, type: "note_completion", question: "1. Create a cover for an _______ so they can drop it", correctAnswer: "egg", points: 1 },
        { id: "cam16-l-t1-s1-q2", number: 2, type: "note_completion", question: "2. Competition to build the tallest _______", correctAnswer: "tower", points: 1 },
        { id: "cam16-l-t1-s1-q3", number: 3, type: "note_completion", question: "3. Make a _______ powered by a balloon", correctAnswer: "car", points: 1 },
        { id: "cam16-l-t1-s1-q4", number: 4, type: "note_completion", question: "4. Build model cars, trucks and _______", correctAnswer: "animals", points: 1 },
        { id: "cam16-l-t1-s1-q5", number: 5, type: "note_completion", question: "5. Competition to build the longest _______", correctAnswer: "bridge", points: 1 },
        { id: "cam16-l-t1-s1-q6", number: 6, type: "note_completion", question: "6. Create a short _______ with special software", correctAnswer: "movie/film", points: 1 },
        { id: "cam16-l-t1-s1-q7", number: 7, type: "note_completion", question: "7. Build, _______ and program a humanoid robot", correctAnswer: "decorate", points: 1 },
        { id: "cam16-l-t1-s1-q8", number: 8, type: "note_completion", question: "8. Held on _______ from 10 a.m. to 11 a.m.", correctAnswer: "Wednesdays", points: 1 },
        { id: "cam16-l-t1-s1-q9", number: 9, type: "note_completion", question: "9. _______ Industrial Estate, Grasford", correctAnswer: "Fradstone", points: 1 },
        { id: "cam16-l-t1-s1-q10", number: 10, type: "note_completion", question: "10. Plenty of _______ is available", correctAnswer: "parking", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam16-l-t1-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–14: Choose the correct letter, A, B or C.
Questions 15–20: Label the map below. Write the correct letter, A–J, next to each location.`,
      passageTitle: "Stevenson's site tour",
      // When you upload the site plan to Supabase storage, change
      // this to imageUrl("cam16-listening-t1-stevensons-map.png").
      diagramUrl: imageUrl("cam16-listening-t1-stevensons-map.png"),
      questions: [
        {
          id: "cam16-l-t1-s2-q11", number: 11,
          groupLabel: `Questions 11–14: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Stevenson's was founded in",
          options: [
            { label: "A  1923.", value: "A" },
            { label: "B  1924.", value: "B" },
            { label: "C  1926.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam16-l-t1-s2-q12", number: 12, type: "multiple_choice",
          question: "12. Originally, Stevenson's manufactured goods for",
          options: [
            { label: "A  the healthcare industry.", value: "A" },
            { label: "B  the automotive industry.", value: "B" },
            { label: "C  the machine tools industry.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam16-l-t1-s2-q13", number: 13, type: "multiple_choice",
          question: "13. What does the speaker say about the company premises?",
          options: [
            { label: "A  The company has recently moved.", value: "A" },
            { label: "B  The company has no plans to move.", value: "B" },
            { label: "C  The company is going to move shortly.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam16-l-t1-s2-q14", number: 14, type: "multiple_choice",
          question: "14. The programme for the work experience group includes",
          options: [
            { label: "A  time to do research.", value: "A" },
            { label: "B  meetings with a teacher.", value: "B" },
            { label: "C  talks by staff.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam16-l-t1-s2-q15", number: 15,
          groupLabel: `Questions 15–20: Label the map of Stevenson's site above. Write the correct letter, A–J, next to each location.`,
          type: "matching", question: "15. coffee room",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
            { label: "J", value: "J" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam16-l-t1-s2-q16", number: 16, type: "matching", question: "16. warehouse",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
            { label: "J", value: "J" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam16-l-t1-s2-q17", number: 17, type: "matching", question: "17. staff canteen",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
            { label: "J", value: "J" },
          ],
          correctAnswer: "G", points: 1,
        },
        {
          id: "cam16-l-t1-s2-q18", number: 18, type: "matching", question: "18. meeting room",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
            { label: "J", value: "J" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam16-l-t1-s2-q19", number: 19, type: "matching", question: "19. human resources",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
            { label: "J", value: "J" },
          ],
          correctAnswer: "I", points: 1,
        },
        {
          id: "cam16-l-t1-s2-q20", number: 20, type: "matching", question: "20. boardroom",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" }, { label: "H", value: "H" }, { label: "I", value: "I" },
            { label: "J", value: "J" },
          ],
          correctAnswer: "A", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam16-l-t1-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21 & 22: Choose TWO letters, A–E.
Questions 23 & 24: Choose TWO letters, A–E.
Questions 25–30: Match each picture with the personal meaning the students give to it. Choose SIX answers from the box (A–H).`,
      passageTitle: "Art projects — Jess and Tom",
      questions: [
        {
          id: "cam16-l-t1-s3-q21", number: 21,
          groupLabel: `Questions 21 and 22: Choose TWO letters, A–E.\n\nWhich TWO parts of the introductory stage to their art projects do Jess and Tom agree were useful?\n\nA  the Bird Park visit\nB  the workshop sessions\nC  the Natural History Museum visit\nD  the projects done in previous years\nE  the handouts with research sources\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "21. Choose TWO (first answer)",
          options: [
            { label: "A  the Bird Park visit", value: "A" },
            { label: "B  the workshop sessions", value: "B" },
            { label: "C  the Natural History Museum visit", value: "C" },
            { label: "D  the projects done in previous years", value: "D" },
            { label: "E  the handouts with research sources", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam16-l-t1-s3-q22", number: 22, type: "multiple_choice",
          question: "22. Choose TWO (second answer)",
          options: [
            { label: "A  the Bird Park visit", value: "A" },
            { label: "B  the workshop sessions", value: "B" },
            { label: "C  the Natural History Museum visit", value: "C" },
            { label: "D  the projects done in previous years", value: "D" },
            { label: "E  the handouts with research sources", value: "E" },
          ],
          correctAnswer: "C/E", points: 1,
        },
        {
          id: "cam16-l-t1-s3-q23", number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nIn which TWO ways do both Jess and Tom decide to change their proposals?\n\nA  by giving a rationale for their action plans\nB  by being less specific about the outcome\nC  by adding a video diary presentation\nD  by providing a timeline and a mind map\nE  by making their notes more evaluative\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  by giving a rationale for their action plans", value: "A" },
            { label: "B  by being less specific about the outcome", value: "B" },
            { label: "C  by adding a video diary presentation", value: "C" },
            { label: "D  by providing a timeline and a mind map", value: "D" },
            { label: "E  by making their notes more evaluative", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam16-l-t1-s3-q24", number: 24, type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  by giving a rationale for their action plans", value: "A" },
            { label: "B  by being less specific about the outcome", value: "B" },
            { label: "C  by adding a video diary presentation", value: "C" },
            { label: "D  by providing a timeline and a mind map", value: "D" },
            { label: "E  by making their notes more evaluative", value: "E" },
          ],
          correctAnswer: "B/E", points: 1,
        },
        {
          id: "cam16-l-t1-s3-q25", number: 25,
          groupLabel: `Questions 25–30: Which personal meaning do the students decide to give to each of the following pictures? Choose SIX answers from the box (A–H).\n\nA  a childhood memory\nB  hope for the future\nC  fast movement\nD  a potential threat\nE  the power of colour\nF  the continuity of life\nG  protection of nature\nH  a confused attitude to nature`,
          type: "matching", question: "25. Falcon (Landseer)",
          options: [
            { label: "A  a childhood memory", value: "A" },
            { label: "B  hope for the future", value: "B" },
            { label: "C  fast movement", value: "C" },
            { label: "D  a potential threat", value: "D" },
            { label: "E  the power of colour", value: "E" },
            { label: "F  the continuity of life", value: "F" },
            { label: "G  protection of nature", value: "G" },
            { label: "H  a confused attitude to nature", value: "H" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam16-l-t1-s3-q26", number: 26, type: "matching", question: "26. Fish hawk (Audubon)",
          options: [
            { label: "A  a childhood memory", value: "A" },
            { label: "B  hope for the future", value: "B" },
            { label: "C  fast movement", value: "C" },
            { label: "D  a potential threat", value: "D" },
            { label: "E  the power of colour", value: "E" },
            { label: "F  the continuity of life", value: "F" },
            { label: "G  protection of nature", value: "G" },
            { label: "H  a confused attitude to nature", value: "H" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam16-l-t1-s3-q27", number: 27, type: "matching", question: "27. Kingfisher (van Gogh)",
          options: [
            { label: "A  a childhood memory", value: "A" },
            { label: "B  hope for the future", value: "B" },
            { label: "C  fast movement", value: "C" },
            { label: "D  a potential threat", value: "D" },
            { label: "E  the power of colour", value: "E" },
            { label: "F  the continuity of life", value: "F" },
            { label: "G  protection of nature", value: "G" },
            { label: "H  a confused attitude to nature", value: "H" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam16-l-t1-s3-q28", number: 28, type: "matching", question: "28. Portrait of William Wells",
          options: [
            { label: "A  a childhood memory", value: "A" },
            { label: "B  hope for the future", value: "B" },
            { label: "C  fast movement", value: "C" },
            { label: "D  a potential threat", value: "D" },
            { label: "E  the power of colour", value: "E" },
            { label: "F  the continuity of life", value: "F" },
            { label: "G  protection of nature", value: "G" },
            { label: "H  a confused attitude to nature", value: "H" },
          ],
          correctAnswer: "H", points: 1,
        },
        {
          id: "cam16-l-t1-s3-q29", number: 29, type: "matching", question: "29. Vairumati (Gauguin)",
          options: [
            { label: "A  a childhood memory", value: "A" },
            { label: "B  hope for the future", value: "B" },
            { label: "C  fast movement", value: "C" },
            { label: "D  a potential threat", value: "D" },
            { label: "E  the power of colour", value: "E" },
            { label: "F  the continuity of life", value: "F" },
            { label: "G  protection of nature", value: "G" },
            { label: "H  a confused attitude to nature", value: "H" },
          ],
          correctAnswer: "F", points: 1,
        },
        {
          id: "cam16-l-t1-s3-q30", number: 30, type: "matching", question: "30. Portrait of Giovanni de Medici",
          options: [
            { label: "A  a childhood memory", value: "A" },
            { label: "B  hope for the future", value: "B" },
            { label: "C  fast movement", value: "C" },
            { label: "D  a potential threat", value: "D" },
            { label: "E  the power of colour", value: "E" },
            { label: "F  the continuity of life", value: "F" },
            { label: "G  protection of nature", value: "G" },
            { label: "H  a confused attitude to nature", value: "H" },
          ],
          correctAnswer: "G", points: 1,
        },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam16-l-t1-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Stoicism

Stoicism is still relevant today because of its 31 _______ appeal.

Ancient Stoics
●  Stoicism was founded over 2,000 years ago in Greece.
●  The Stoics' ideas are surprisingly well known, despite not being intended for 32 _______.

Stoic principles
●  Happiness could be achieved by leading a virtuous life.
●  Controlling emotions was essential.
●  Epictetus said that external events cannot be controlled but the 33 _______ people make in response can be controlled.
●  A Stoic is someone who has a different view on experiences which others would consider as 34 _______.

The influence of Stoicism
●  George Washington organised a 35 _______ about Cato to motivate his men.
●  The French artist Delacroix was a Stoic.
●  Adam Smith's ideas on 36 _______ were influenced by Stoicism.
●  Some of today's political leaders are inspired by the Stoics.
●  Cognitive Behaviour Therapy (CBT)
   –  the treatment for 37 _______ is based on ideas from Stoicism
   –  people learn to base their thinking on 38 _______.
●  In business, people benefit from Stoicism by identifying obstacles as 39 _______.

Relevance of Stoicism
●  It requires a lot of 40 _______ but Stoicism can help people to lead a good life.
●  It teaches people that having a strong character is more important than anything else.`,
      questions: [
        { id: "cam16-l-t1-s4-q31", number: 31, type: "note_completion", question: "31. still relevant today because of its _______ appeal", correctAnswer: "practical", points: 1 },
        { id: "cam16-l-t1-s4-q32", number: 32, type: "note_completion", question: "32. not being intended for _______", correctAnswer: "publication", points: 1 },
        { id: "cam16-l-t1-s4-q33", number: 33, type: "note_completion", question: "33. the _______ people make in response can be controlled", correctAnswer: "choices", points: 1 },
        { id: "cam16-l-t1-s4-q34", number: 34, type: "note_completion", question: "34. experiences which others would consider as _______", correctAnswer: "negative", points: 1 },
        { id: "cam16-l-t1-s4-q35", number: 35, type: "note_completion", question: "35. George Washington organised a _______ about Cato", correctAnswer: "play", points: 1 },
        { id: "cam16-l-t1-s4-q36", number: 36, type: "note_completion", question: "36. Adam Smith's ideas on _______ were influenced by Stoicism", correctAnswer: "capitalism", points: 1 },
        { id: "cam16-l-t1-s4-q37", number: 37, type: "note_completion", question: "37. the treatment for _______ is based on ideas from Stoicism", correctAnswer: "depression", points: 1 },
        { id: "cam16-l-t1-s4-q38", number: 38, type: "note_completion", question: "38. people learn to base their thinking on _______", correctAnswer: "logic", points: 1 },
        { id: "cam16-l-t1-s4-q39", number: 39, type: "note_completion", question: "39. identifying obstacles as _______", correctAnswer: "opportunity", points: 1 },
        { id: "cam16-l-t1-s4-q40", number: 40, type: "note_completion", question: "40. It requires a lot of _______ but Stoicism can help", correctAnswer: "practice/practise", points: 1 },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 16 – LISTENING TEST 2
// Parts: 1) Copying photos to digital format (notes)
//        2) Minster Park / Dartfield House school (MCQ +
//           serving-point matching + Choose-TWO)
//        3) Sleep & dreams assignment (MCQ + flow-chart notes)
//        4) Health benefits of dance (notes)
// ============================================================
export const cambridge16_listening_t2: IELTSTest = {
  id: "cam16-listening-t2",
  title: "Cambridge IELTS 16 – Listening Test 2",
  bookNumber: 16,
  testNumber: 2,
  type: "listening",
  level: "academic",
  durationMinutes: 30,
  transferMinutes: 2,
  audioUrl: audioUrl("cam16-listening-t2.mp3"),
  audioDurationSeconds: 1800,
  sections: [
    // ── PART 1 ─────────────────────────────────────────────
    {
      id: "cam16-l-t2-s1",
      sectionNumber: 1,
      title: "Part 1",
      instructions: `Questions 1–10: Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.`,
      passageText: `Copying photos to digital format

Name of company: Picturerep

Requirements
●  Maximum size of photos is 30 cm, minimum size 4 cm.
●  Photos must not be in a 1 _______ or an album.

Cost
●  The cost for 360 photos is £ 2 _______ (including one disk).
●  Before the complete order is sent, 3 _______ is required.

Services included in the price
●  Photos can be placed in a folder, e.g. with the name 4 _______.
●  The 5 _______ and contrast can be improved if necessary.
●  Photos which are very fragile will be scanned by 6 _______.

Special restore service (costs extra)
●  It may be possible to remove an object from a photo, or change the 7 _______.
●  A photo which is not correctly in 8 _______ cannot be fixed.

Other information
●  Orders are completed within 9 _______.
●  Send the photos in a box (not 10 _______).`,
      questions: [
        { id: "cam16-l-t2-s1-q1", number: 1, type: "note_completion", question: "1. Photos must not be in a _______ or an album", correctAnswer: "frame", points: 1 },
        { id: "cam16-l-t2-s1-q2", number: 2, type: "note_completion", question: "2. The cost for 360 photos is £ _______", correctAnswer: "195", points: 1 },
        { id: "cam16-l-t2-s1-q3", number: 3, type: "note_completion", question: "3. Before the complete order is sent, _______ is required", correctAnswer: "payment", points: 1 },
        { id: "cam16-l-t2-s1-q4", number: 4, type: "note_completion", question: "4. placed in a folder, e.g. with the name _______", correctAnswer: "Grandparents", points: 1 },
        { id: "cam16-l-t2-s1-q5", number: 5, type: "note_completion", question: "5. The _______ and contrast can be improved", correctAnswer: "colour/color", points: 1 },
        { id: "cam16-l-t2-s1-q6", number: 6, type: "note_completion", question: "6. Photos which are very fragile will be scanned by _______", correctAnswer: "hand", points: 1 },
        { id: "cam16-l-t2-s1-q7", number: 7, type: "note_completion", question: "7. remove an object from a photo, or change the _______", correctAnswer: "background", points: 1 },
        { id: "cam16-l-t2-s1-q8", number: 8, type: "note_completion", question: "8. not correctly in _______ cannot be fixed", correctAnswer: "focus", points: 1 },
        { id: "cam16-l-t2-s1-q9", number: 9, type: "note_completion", question: "9. Orders are completed within _______", correctAnswer: "ten days/10 days", points: 1 },
        { id: "cam16-l-t2-s1-q10", number: 10, type: "note_completion", question: "10. Send the photos in a box (not _______)", correctAnswer: "plastic", points: 1 },
      ],
    },
    // ── PART 2 ─────────────────────────────────────────────
    {
      id: "cam16-l-t2-s2",
      sectionNumber: 2,
      title: "Part 2",
      instructions: `Questions 11–15: Choose the correct letter, A, B or C.
Questions 16–18: Match each serving point with a comment. Choose THREE answers from the box (A–D).
Questions 19 & 20: Choose TWO letters, A–E.`,
      passageTitle: "Minster Park — Dartfield House school",
      questions: [
        {
          id: "cam16-l-t2-s2-q11", number: 11,
          groupLabel: `Questions 11–15: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "11. Dartfield House school used to be",
          options: [
            { label: "A  a tourist information centre.", value: "A" },
            { label: "B  a private home.", value: "B" },
            { label: "C  a local council building.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam16-l-t2-s2-q12", number: 12, type: "multiple_choice",
          question: "12. What is planned with regard to the lower school?",
          options: [
            { label: "A  All buildings on the main site will be improved.", value: "A" },
            { label: "B  The lower school site will be used for new homes.", value: "B" },
            { label: "C  Additional school buildings will be constructed on the lower school site.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam16-l-t2-s2-q13", number: 13, type: "multiple_choice",
          question: "13. The catering has been changed because of",
          options: [
            { label: "A  long queuing times.", value: "A" },
            { label: "B  changes to the school timetable.", value: "B" },
            { label: "C  dissatisfaction with the menus.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam16-l-t2-s2-q14", number: 14, type: "multiple_choice",
          question: "14. Parents are asked to",
          options: [
            { label: "A  help their children to decide in advance which serving point to use.", value: "A" },
            { label: "B  make sure their children have enough money for food.", value: "B" },
            { label: "C  advise their children on healthy food to eat.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam16-l-t2-s2-q15", number: 15, type: "multiple_choice",
          question: "15. What does the speaker say about the existing canteen?",
          options: [
            { label: "A  Food will still be served there.", value: "A" },
            { label: "B  Only staff will have access to it.", value: "B" },
            { label: "C  Pupils can take their food into it.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam16-l-t2-s2-q16", number: 16,
          groupLabel: `Questions 16–18: What comment does the speaker make about each of the following serving points in the Food Hall? Choose THREE answers from the box (A–D).\n\nA  pupils help to plan menus\nB  only vegetarian food\nC  different food every week\nD  daily change in menu`,
          type: "matching", question: "16. World Adventures",
          options: [
            { label: "A  pupils help to plan menus", value: "A" },
            { label: "B  only vegetarian food", value: "B" },
            { label: "C  different food every week", value: "C" },
            { label: "D  daily change in menu", value: "D" },
          ],
          correctAnswer: "D", points: 1,
        },
        {
          id: "cam16-l-t2-s2-q17", number: 17, type: "matching", question: "17. Street Life",
          options: [
            { label: "A  pupils help to plan menus", value: "A" },
            { label: "B  only vegetarian food", value: "B" },
            { label: "C  different food every week", value: "C" },
            { label: "D  daily change in menu", value: "D" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam16-l-t2-s2-q18", number: 18, type: "matching", question: "18. Speedy Italian",
          options: [
            { label: "A  pupils help to plan menus", value: "A" },
            { label: "B  only vegetarian food", value: "B" },
            { label: "C  different food every week", value: "C" },
            { label: "D  daily change in menu", value: "D" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam16-l-t2-s2-q19", number: 19,
          groupLabel: `Questions 19 and 20: Choose TWO letters, A–E.\n\nWhich TWO optional after-school lessons are new?\n\nA  swimming\nB  piano\nC  acting\nD  cycling\nE  theatre sound and lighting\n\n(Answers are accepted in either order.)`,
          type: "multiple_choice", question: "19. Choose TWO (first answer)",
          options: [
            { label: "A  swimming", value: "A" },
            { label: "B  piano", value: "B" },
            { label: "C  acting", value: "C" },
            { label: "D  cycling", value: "D" },
            { label: "E  theatre sound and lighting", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
        {
          id: "cam16-l-t2-s2-q20", number: 20, type: "multiple_choice",
          question: "20. Choose TWO (second answer)",
          options: [
            { label: "A  swimming", value: "A" },
            { label: "B  piano", value: "B" },
            { label: "C  acting", value: "C" },
            { label: "D  cycling", value: "D" },
            { label: "E  theatre sound and lighting", value: "E" },
          ],
          correctAnswer: "B/C", points: 1,
        },
      ],
    },
    // ── PART 3 ─────────────────────────────────────────────
    {
      id: "cam16-l-t2-s3",
      sectionNumber: 3,
      title: "Part 3",
      instructions: `Questions 21–24: Choose the correct letter, A, B or C.
Questions 25–30: Complete the flow chart below. Write ONE WORD ONLY for each answer.`,
      passageTitle: "Luke & Susie — assignment on sleep and dreams",
      passageText: `Assignment plan

Decide on research question:
Is there a relationship between hours of sleep and number of dreams?

Decide on sample:
Twelve students from the 25 _______ department

Decide on methodology:
Self-reporting

Decide on procedure:
Answers on 26 _______

Check ethical guidelines for working with 27 _______
Ensure that risk is assessed and 28 _______ is kept to a minimum

Analyse the results
Calculate the correlation and make a 29 _______

30 _______ the research`,
      questions: [
        {
          id: "cam16-l-t2-s3-q21", number: 21,
          groupLabel: `Questions 21–24: Choose the correct letter, A, B or C.`,
          type: "multiple_choice", question: "21. Luke read that one reason why we often forget dreams is that",
          options: [
            { label: "A  our memories cannot cope with too much information.", value: "A" },
            { label: "B  we might otherwise be confused about what is real.", value: "B" },
            { label: "C  we do not think they are important.", value: "C" },
          ],
          correctAnswer: "B", points: 1,
        },
        {
          id: "cam16-l-t2-s3-q22", number: 22, type: "multiple_choice",
          question: "22. What do Luke and Susie agree about dreams predicting the future?",
          options: [
            { label: "A  It may just be due to chance.", value: "A" },
            { label: "B  It only happens with certain types of event.", value: "B" },
            { label: "C  It happens more often than some people think.", value: "C" },
          ],
          correctAnswer: "A", points: 1,
        },
        {
          id: "cam16-l-t2-s3-q23", number: 23, type: "multiple_choice",
          question: "23. Susie says that a study on pre-school children having a short nap in the day",
          options: [
            { label: "A  had controversial results.", value: "A" },
            { label: "B  used faulty research methodology.", value: "B" },
            { label: "C  failed to reach any clear conclusions.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        {
          id: "cam16-l-t2-s3-q24", number: 24, type: "multiple_choice",
          question: "24. In their last assignment, both students had problems with",
          options: [
            { label: "A  statistical analysis.", value: "A" },
            { label: "B  making an action plan.", value: "B" },
            { label: "C  self-assessment.", value: "C" },
          ],
          correctAnswer: "C", points: 1,
        },
        { id: "cam16-l-t2-s3-q25", number: 25, type: "note_completion", question: "25. Twelve students from the _______ department", correctAnswer: "history", points: 1 },
        { id: "cam16-l-t2-s3-q26", number: 26, type: "note_completion", question: "26. Answers on _______", correctAnswer: "paper", points: 1 },
        { id: "cam16-l-t2-s3-q27", number: 27, type: "note_completion", question: "27. guidelines for working with _______", correctAnswer: "humans/people", points: 1 },
        { id: "cam16-l-t2-s3-q28", number: 28, type: "note_completion", question: "28. risk is assessed and _______ is kept to a minimum", correctAnswer: "stress", points: 1 },
        { id: "cam16-l-t2-s3-q29", number: 29, type: "note_completion", question: "29. Calculate the correlation and make a _______", correctAnswer: "graph", points: 1 },
        { id: "cam16-l-t2-s3-q30", number: 30, type: "note_completion", question: "30. _______ the research", correctAnswer: "evaluate", points: 1 },
      ],
    },
    // ── PART 4 ─────────────────────────────────────────────
    {
      id: "cam16-l-t2-s4",
      sectionNumber: 4,
      title: "Part 4",
      instructions: `Questions 31–40: Complete the notes below. Write ONE WORD ONLY for each answer.`,
      passageText: `Health benefits of dance

Recent findings:
●  All forms of dance produce various hormones associated with feelings of happiness.
●  Dancing with others has a more positive impact than dancing alone.
●  An experiment on university students suggested that dance increases 31 _______.
●  For those with mental illness, dance could be used as a form of 32 _______.

Benefits of dance for older people:
●  accessible for people with low levels of 33 _______
●  reduces the risk of heart disease
●  better 34 _______ reduces the risk of accidents
●  improves 35 _______ function by making it work faster
●  improves participants' general well-being
●  gives people more 36 _______ to take exercise
●  can lessen the feeling of 37 _______, very common in older people

Benefits of Zumba:
●  A study at The University of Wisconsin showed that doing Zumba for 40 minutes uses up as many 38 _______ as other quite intense forms of exercise.
●  The American Journal of Health Behavior study showed that:
   –  women suffering from 39 _______ benefited from doing Zumba.
   –  Zumba became a 40 _______ for the participants.`,
      questions: [
        { id: "cam16-l-t2-s4-q31", number: 31, type: "note_completion", question: "31. dance increases _______", correctAnswer: "creativity", points: 1 },
        { id: "cam16-l-t2-s4-q32", number: 32, type: "note_completion", question: "32. dance could be used as a form of _______", correctAnswer: "therapy", points: 1 },
        { id: "cam16-l-t2-s4-q33", number: 33, type: "note_completion", question: "33. people with low levels of _______", correctAnswer: "fitness", points: 1 },
        { id: "cam16-l-t2-s4-q34", number: 34, type: "note_completion", question: "34. better _______ reduces the risk of accidents", correctAnswer: "balance", points: 1 },
        { id: "cam16-l-t2-s4-q35", number: 35, type: "note_completion", question: "35. improves _______ function by making it work faster", correctAnswer: "brain", points: 1 },
        { id: "cam16-l-t2-s4-q36", number: 36, type: "note_completion", question: "36. gives people more _______ to take exercise", correctAnswer: "motivation", points: 1 },
        { id: "cam16-l-t2-s4-q37", number: 37, type: "note_completion", question: "37. lessen the feeling of _______, very common in older people", correctAnswer: "isolation", points: 1 },
        { id: "cam16-l-t2-s4-q38", number: 38, type: "note_completion", question: "38. uses up as many _______ as other intense forms of exercise", correctAnswer: "calories", points: 1 },
        { id: "cam16-l-t2-s4-q39", number: 39, type: "note_completion", question: "39. women suffering from _______ benefited from doing Zumba", correctAnswer: "obesity", points: 1 },
        { id: "cam16-l-t2-s4-q40", number: 40, type: "note_completion", question: "40. Zumba became a _______ for the participants", correctAnswer: "habit", points: 1 },
      ],
    },
  ],
};

export const cambridge16ListeningTests: IELTSTest[] = [
  cambridge16_listening_t1,
  cambridge16_listening_t2,
];
