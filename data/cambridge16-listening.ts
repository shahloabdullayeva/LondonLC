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

export const cambridge16ListeningTests: IELTSTest[] = [
  cambridge16_listening_t1,
];
