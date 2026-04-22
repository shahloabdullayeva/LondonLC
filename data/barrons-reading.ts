import type { IELTSTest } from "./ielts-tests";

// ============================================================
// BARRON'S IELTS – PRACTICE TEST 1  (Academic Reading)
// ============================================================
const barrons_reading_t1: IELTSTest = {
  id: "barrons-reading-academic-t1",
  title: "Barron's IELTS – Practice Test 1",
  bookNumber: 100,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ──────────────────────────────────────────────
    {
      id: "barrons-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Odonata",
      passageText: `Odonata is the order of insects that includes dragonflies and damselflies. To the human eye, their shining colors and delicate-looking wings make them beautiful creatures to behold. In the natural world, however, they are fearsome predators. Dragonflies and damselflies get their name from the powerful serrated jaws they use to tear apart their prey. The word odonata means “toothed jaw.”

Dragonflies and damselflies are often confused with each other because they are very similar. Close observation reveals the differences between them. The most obvious difference is the way they hold their wings while at rest. Dragonflies hold their wings out to the side while damselflies fold their wings back. Dragonflies have very large eyes that seem to cover the entire face because they are so close together that they touch each other. Damselflies’ eyes are smaller, and there is a space between them. Dragonflies are larger and stronger animals than damselflies and fly longer distances. Thus, they can be found in woods and fields away from the water. Damselflies are not such strong fliers and are most often seen around the edges of ponds and streams since they do not normally fly far from the water.

The largest odonata living today are the Hawaiian endemic dragonfly and the Central American damselfly, each of these species having a wingspan of 19 centimeters. The smallest is the libellulid dragonfly, native to east Asia, with a wingspan of just 20 millimeters. Fossils have been discovered that prove that dragonflies have been in existence for over 300 million years. The largest dragonfly fossil ever found belongs to the now-extinct meganeura monyi, which lived 300 million years ago and had a wingspan of 75 centimeters. This giant was a fearsome predator indeed, which feasted on small amphibians as well as on other insects.

Dragonflies and damselflies both lay their eggs on or just below the surface of the water in a pond or stream. Some species lay their eggs on the stem of an aquatic plant. The babies emerge from the eggs in the form of nymphs. They live underwater, breathing through gills and preying upon water insects, tadpoles, small fish, and even other nymphs. They hunt by hiding in the shadows at the bottom of a pond or stream, waiting for prey animals to swim by. They have a special lip that they can extend far forward in order to grab their prey when it comes close. Depending on the species, they live this way for several months or even several years. As the nymph grows, it sheds its skin several times. Finally, it leaves the water and sheds its skin one last time. The adult emerges, ready to live the next few weeks or months on land and in the air. The adults do not live for more than four months, and many species live as adults for only a few weeks.

The exceptional visual abilities and flying skills of dragonflies and damselflies make them very adept hunters. Their special eyes give them a nearly 360-degree field of vision, and they can detect even the smallest movement or flash of light caused by other flying insects. They have two sets of wings that can move independently of each other. This gives them great maneuverability in the air, which is important to these creatures because they catch their prey while flying. They can hover, make sharp turns, and fly backward. Some species of dragonflies can fly 60 kilometers an hour or more. Their prey consists of flying insects such as mosquitoes, deerflies, smaller dragonflies, and butterflies and moths. One species of dragonfly takes spiders out of their webs.

Bloodthirsty predators that they are, dragonflies and damselflies are prey for other animals in their turn. The nymphs are eaten by fish, frogs, toads, and other aquatic creatures. In the adult stage, they are hunted by birds, frogs, and larger dragonflies and damselflies. They might also be caught in a spider’s web. What goes around comes around.`,
      instructions:
        "Questions 1-6: Which facts are true of dragonflies (A), damselflies (B), or both (C)?\n\nQuestions 7-13: Complete the notes. Choose answers from the options A-K.",
      questions: [
        // ── Q1–6: Dragonflies / Damselflies / Both ─────────────
        {
          id: "barrons-ra-t1-s1-q1",
          number: 1,
          type: "multiple_choice",
          groupLabel:
            "Which of the facts below are true of dragonflies, damselflies, or both?\n\nA  Dragonflies only\nB  Damselflies only\nC  Both dragonflies and damselflies",
          question: "They have sawlike jaws.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q2",
          number: 2,
          type: "multiple_choice",
          question: "They hold their wings on their backs while resting.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q3",
          number: 3,
          type: "multiple_choice",
          question: "Their eyes have a gap between them.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q4",
          number: 4,
          type: "multiple_choice",
          question:
            "They can be seen in fields at a distance from ponds and streams.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q5",
          number: 5,
          type: "multiple_choice",
          question: "The largest species has a wingspan of 19 centimeters.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q6",
          number: 6,
          type: "multiple_choice",
          question: "The largest fossil has a wingspan of 75 centimeters.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q7–13: Complete the notes ───────────────────────────
        {
          id: "barrons-ra-t1-s1-q7",
          number: 7,
          type: "multiple_choice",
          groupLabel:
            "Complete the notes about the life cycle of odonata. Choose from options A-K.\n\nA  in the air\nB  with their lips\nC  tadpoles\nD  fliers\nE  near the water’s surface\nF  nymphs\nG  at the bottom of a pond\nH  months or years\nI  weeks or months\nJ  swimmers\nK  with their wings\n\nThe eggs are laid (7)___. The young, called (8)___, live underwater for a few (9)___. They eat small water animals, catching their food (10)___. When almost fully grown, they leave the water. The adults live for only a few (11)___. They are skillful (12)___ and catch their prey (13)___.",
          question: "The eggs are laid ___.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
            { label: "K", value: "K" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q8",
          number: 8,
          type: "multiple_choice",
          question: "The young, called ___, live underwater.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
            { label: "K", value: "K" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q9",
          number: 9,
          type: "multiple_choice",
          question: "They live underwater for a few ___.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
            { label: "K", value: "K" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q10",
          number: 10,
          type: "multiple_choice",
          question: "They eat small water animals, catching their food ___.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
            { label: "K", value: "K" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q11",
          number: 11,
          type: "multiple_choice",
          question: "The adults live for only a few ___.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
            { label: "K", value: "K" },
          ],
          correctAnswer: "I",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q12",
          number: 12,
          type: "multiple_choice",
          question: "They are skillful ___.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
            { label: "K", value: "K" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s1-q13",
          number: 13,
          type: "multiple_choice",
          question: "They catch their prey ___.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
            { label: "I", value: "I" },
            { label: "J", value: "J" },
            { label: "K", value: "K" },
          ],
          correctAnswer: "A",
          points: 1,
        },
      ],
    },
    // Passages 2 and 3 will be added below
  ],
};

export const barronsReadingTests: IELTSTest[] = [barrons_reading_t1];
