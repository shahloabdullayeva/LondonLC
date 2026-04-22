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
    // ── PASSAGE 2 ──────────────────────────────────────────────
    {
      id: "barrons-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "History of Fire Fighting and Prevention",
      passageText: `More than two thousand years ago, Roman emperor Augustus organized a group of watchmen whose job was mainly to look out for fires and sound an alarm in the event of one. For many centuries that followed, fire equipment was limited to buckets of water that got passed from person to person. The ax was later found to be a useful tool both for removing fuel in large fires and for opening holes to allow smoke and flames to escape from burning buildings. Watchmen also learned to create firebreaks with long hooked poles and ropes in order to pull down structures that provided fuel for a fire. In 1066, in order to reduce the risk of fire in thatched-roof houses, King William the Conqueror made a ruling: Citizens had to extinguish their cooking fires at night. His term couvre-feu, meaning "cover fire," is the origin of the modern day term curfew, which no longer carries a literal translation.

The event that had the largest influence in the history of fire fighting was the Great Fire of London in 1666. The devastating blaze originated at the King's Bakery near the London Bridge. At the onset, Lord Mayor Bludworth showed little concern for the fire, assuming it would extinguish itself before he could organize a group of men to attend to it. However, the summer of 1666 had been uncharacteristically hot and dry, and the wooden houses nearby caught fire quickly. Within a short time, the wind had carried the fire across the city, burning down over 300 houses in its path. Although the procedure of pulling down buildings to prevent a fire from spreading was standard in Britain, the mayor grew concerned over the cost it would involve to rebuild the city and ordered that the surrounding structures be left intact. By the time the king ordered the destruction of buildings in the fire's path, the fire was too large to control. It was not until the Duke of York ordered the Paper House to be destroyed in order to create a crucial firebreak that the London fire finally began to lose its fuel.

When it became clear that four-fifths of the city had been destroyed by the fire, drastic measures were taken in London to create a system of organized fire prevention. At the hands of architects such as Christopher Wren, most of London was rebuilt using stone and brick, materials that were far less flammable than wood and straw. Because of the long history of fires in London, those who could afford to build new homes and businesses began to seek insurance for their properties. As insurance became a profitable business, companies soon realized the monetary benefits of hiring men to extinguish fires. In the early years of insurance companies, all insured properties were marked with an insurance company's name or logo. If a fire broke out and a building did not contain the insurance mark, the fire brigades were called away and the building was left to burn.

The British insurance companies were largely responsible for employing people to develop new technology for extinguishing fires. The first fire engines were simple tubs on wheels that were pulled to the location of the fire, with water being supplied by a bucket brigade. Eventually, a hand pump was designed to push the water out of the tub into a hose with a nozzle. The pump allowed for a steady stream of water to shoot through a hose directly at the fire source. Before long, companies began to utilize water pipes made from hollowed tree trunks that were built under the roadway. By digging down into the road, firemen could insert a hole into the tree-trunk pipe and access the water to feed into the pump.

Fire fighting became a competitive business, as companies fought to be the first to arrive at a scene to access the water pipes. After a series of fires destroyed parts of London, fire-fighting companies were forced to reconsider their intentions. By the eighteenth century, fire brigades began to join forces, and in 1833 the Sun Insurance Company along with ten other London companies created the London Fire Engine Establishment. In 1865, the government became involved, bringing standards to both fire prevention and fire fighting and establishing London's Metropolitan Fire Brigade. Though the firemen were well paid, they were constantly on duty and thus obliged to call their fire station home for both themselves and their families.

New technology for fighting fires continued to develop in both Europe and the New World. Leather hoses with couplings that joined the lengths together were hand-sewn in the Netherlands and used until the late 1800s, when rubber hoses became available. The technology for steam engine fire trucks was available in Britain and America in 1829, but most brigades were hesitant to use them until the 1850s. It was the public that eventually forced the brigades into putting the more efficient equipment to use. In the early 1900s, when the internal-combustion engine was developed, the trucks became motorized. This was a timely advancement in fire-fighting history, as World War I put added pressure on brigades throughout the world.`,
      instructions:
        "Questions 14-20: Complete the chart. Use NO MORE THAN THREE WORDS.\n\nQuestions 21-23: Choose the correct letter A-C.\n\nQuestions 24-26: Do the statements agree with the passage? Write YES, NO, or NOT GIVEN.",
      questions: [
        // ── Q14–20: Fill in the blanks ────────────────────────────
        {
          id: "barrons-ra-t1-s2-q14",
          number: 14,
          type: "fill_blank",
          groupLabel:
            "Complete the cause-and-effect chart. Use NO MORE THAN THREE WORDS from the text.\n\nCause → Effect\nMen used poles and ropes to pull down buildings near a fire → The fire did not have (14)___\nThatched-roof houses burn down easily → The King ordered people to (15)___ their fires nightly\nAt the time of the Great Fire, the weather was (16)___ → The fire spread quickly\nThe Mayor thought it would be too expensive to (17)___ → He told people not to pull down buildings\nThe Great Fire destroyed most of London → People built new buildings out of (18)___\nThere had been many (19)___ in London over time → People started to buy insurance\nInsurance companies did not want to pay for rebuilding → Insurance companies hired men to (20)___",
          question: "The fire did not have ___",
          correctAnswer: "fuel",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q15",
          number: 15,
          type: "fill_blank",
          question: "The King ordered people to ___ their fires nightly",
          correctAnswer: "extinguish",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q16",
          number: 16,
          type: "fill_blank",
          question: "The weather was ___",
          correctAnswer: "hot and dry",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q17",
          number: 17,
          type: "fill_blank",
          question: "It would be too expensive to ___",
          correctAnswer: "rebuild the city",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q18",
          number: 18,
          type: "fill_blank",
          question: "People built new buildings out of ___",
          correctAnswer: "stone and brick",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q19",
          number: 19,
          type: "fill_blank",
          question: "There had been many ___ in London over time",
          correctAnswer: "fires",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q20",
          number: 20,
          type: "fill_blank",
          question: "Insurance companies hired men to ___",
          correctAnswer: "extinguish fires",
          points: 1,
        },
        // ── Q21–23: Multiple choice ───────────────────────────────
        {
          id: "barrons-ra-t1-s2-q21",
          number: 21,
          type: "multiple_choice",
          question: "The first fire engines",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q22",
          number: 22,
          type: "multiple_choice",
          question: "In 1865,",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q23",
          number: 23,
          type: "multiple_choice",
          question: "Firemen who worked for the Metropolitan Fire Brigade",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q24–26: Yes / No / Not Given ──────────────────────────
        {
          id: "barrons-ra-t1-s2-q24",
          number: 24,
          type: "true_false_ng",
          question: "Leather hoses for fire fighting were made by machine.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q25",
          number: 25,
          type: "true_false_ng",
          question: "Steam engine fire trucks were used until the early 1900s.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s2-q26",
          number: 26,
          type: "true_false_ng",
          question:
            "Fires caused a great deal of damage in London during World War I.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ──────────────────────────────────────────────
    {
      id: "barrons-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The Luddites",
      passageText: `The term Luddite is used to refer to a person who is opposed to new technology. The word derives from the name Ned Ludd, a man who may or may not have actually existed. The original Luddites were textile workers in early nineteenth-century England who protested changes brought on by the industrial revolution. These weavers made lace and stockings by hand, carrying out their craft independently in their homes according to traditional methods. In the 1800s, automated power looms and stocking frames were introduced, radically changing the traditional work system. Weavers' work was moved from individual homes to factories; individuals could not afford to buy the new machines for themselves. The new machines were not difficult to run. They could be operated by unskilled workers and turned out an inferior product, but they produced large quantities cheaply, which was the aim of the new factory owners. The makers of finely crafted, handmade textiles could not compete with the new machines. Instead of continuing their tradition as skilled, independent workers, they would have to go to work in factories for low wages.

The industrial revolution was happening everywhere. In the textile-producing towns of England, workers focused on the new weaving machines as the source of their troubles. The height of Luddite activity occurred in the years 1811-1812. Groups of men, often in disguise, would arrive at a factory and make demands for higher wages and better working conditions. If these demands were not met, the group retaliated by smashing the factory machines. These groups often claimed that they were working under the command of General Ned Ludd, and thus came to be called Luddites.

Who was Ned Ludd? Rumors about this mysterious person abounded. He came to be associated with that traditional champion of the poor, Robin Hood. The original Luddite activity was centered around Nottingham, and many said that Ned Ludd hid out in nearby Sherwood Forest, just as the legendary Robin Hood had. According to another tradition, Ned Ludd was a weaver who had accidentally broken two stocking frames, and from that, came to be the one blamed any time an expensive piece of weaving equipment was damaged. Whoever Ned Ludd may or may not have been, riots protesting the new factories were carried out in his name throughout England's textile-producing region.

Workers' families suffered as wages fell and food prices rose. There were food riots in several towns, and Luddite activity spread. In the winter of 1812, the Frame-Breaking Act was passed, making the destruction of factory equipment a crime punishable by death. The government sent thousands of troops into areas affected by the riots. In the spring of that year, several factory owners were killed during Luddite riots, and a number of textile workers died as well. Following one of the largest incidents, when rioters set fire to a mill in Westhoughton, four rioters, including a young boy, were executed. In another incident that spring, a group of over a thousand workers attacked a mill in Lancashire with sticks and rocks. When they were beaten back by armed guards protecting the mill, they moved to the mill owner's house and burned it down. The wave of violence resulted in a crackdown by the government. Suspected Luddites were arrested and imprisoned, and many of them were hanged.

By the summer of 1812, Luddite activity had begun to die down, although there continued to be sporadic incidents over the next several years. In 1816, a bad harvest and economic downturn led to a small revival of rioting. In June of that year, workers attacked two mills, smashing equipment and causing thousands of dollars worth of damage. Government troops were brought in to stop the violence. In the end, six of the rioters were executed for their participation. However, rioting never again reached the levels it had in 1811 and 1812.

The Luddites were short-lived, but they left an impressive mark. They were responsible for destroying close to one thousand weaving machines during the height of their activity in 1811-1812, as well as burning down several factories. Beyond the physical damage, however, they left their mark in people's minds. The famed English novelist Charlotte Bronte set her novel Shirley in Yorkshire at the time of the riots. This novel is still widely read today. In our present time of rapid technological change, people who are concerned about the pace of technological advance often call themselves Neo-Luddites. Although the responses to it may differ, concern about the changes brought on by technology continues.`,
      instructions:
        "Questions 27-32: Match each cause with its effect. Choose from A-J.\n\nQuestions 33-40: Do the following statements agree with the information? Write TRUE, FALSE, or NOT GIVEN.",
      questions: [
        // ── Q27–32: Cause / Effect matching ─────────────────────
        {
          id: "barrons-ra-t1-s3-q27",
          number: 27,
          type: "multiple_choice",
          groupLabel:
            "Match each cause in the left column with its effect. Choose from options A-J.\n\nA  Troops were sent into the area.\nB  Weavers stopped working at home and went to work in factories.\nC  Rioters often wore disguises.\nD  Workers destroyed factory equipment.\nE  Many rioters were hanged.\nF  Charlotte Bronte wrote a novel about the Luddites.\nG  Prices went up, and salaries went down.\nH  Factory owners did not need to hire skilled weavers.\nI  Luddite rioting started again.\nJ  People compared Ned Ludd to Robin Hood.",
          question: "The new weaving machines were expensive to buy.",
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
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "The new weaving machines were easy to operate.",
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
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "Workers' demands for better pay and conditions were not met.",
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
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "Rioting spread to many towns.",
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
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q31",
          number: 31,
          type: "multiple_choice",
          question:
            "A law was passed against destroying factory equipment.",
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
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q32",
          number: 32,
          type: "multiple_choice",
          question: "Economic conditions worsened in 1816.",
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
          ],
          correctAnswer: "I",
          points: 1,
        },
        // ── Q33–40: True / False / Not Given ────────────────────
        {
          id: "barrons-ra-t1-s3-q33",
          number: 33,
          type: "true_false_ng",
          question: "A Luddite is a person who resists new technology.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q34",
          number: 34,
          type: "true_false_ng",
          question:
            "Before the nineteenth century, weavers made lace by hand.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q35",
          number: 35,
          type: "true_false_ng",
          question:
            "Factory owners as well as workers died as a result of Luddite rioting.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q36",
          number: 36,
          type: "true_false_ng",
          question:
            "The Luddite movement did not spread beyond England.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q37",
          number: 37,
          type: "true_false_ng",
          question:
            "Nobody knows for certain who Ned Ludd was.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q38",
          number: 38,
          type: "true_false_ng",
          question:
            "Worker protests during the economic downturn of 1816 were nonviolent.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "Luddite activity lasted for many years.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "barrons-ra-t1-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "Neo-Luddites do not use computers.",
          options: [
            { label: "TRUE", value: "TRUE" },
            { label: "FALSE", value: "FALSE" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
      ],
    },
  ],
};

export const barronsReadingTests: IELTSTest[] = [barrons_reading_t1];
