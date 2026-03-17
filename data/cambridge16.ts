import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 16 – TEST 1  (Academic Reading)
// Passages: Why we need to protect polar bears /
//           The Step Pyramid of Djoser /
//           The future of work
// ============================================================
export const cambridge16_reading_t1: IELTSTest = {
  id: "cam16-reading-academic-t1",
  title: "Cambridge IELTS 16 – Test 1",
  bookNumber: 16,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Why we need to protect polar bears",
      passageText: `Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach -40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.

A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth. Liu and his colleagues found the polar bears had a gene known as APoB, which reduces levels of low-density lipoproteins (LDLs) – a form of 'bad' cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.

The genome of the polar bear may also provide the solution for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Bone tissue is constantly being remodelled, meaning that bone is added or removed, depending on nutrient availability and the stress that the bone is under. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.

Physiologists Alanda Lennox and Allen Goodship found an explanation for this paradox in 2008. They discovered that pregnant bears were able to increase the density of their bones before they started to build their dens. In addition, six months later, when they finally emerged from the den with their cubs, there was no evidence of significant loss of bone density. Hibernating brown bears do not have this capacity and must therefore resort to major bone reformation in the following spring. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.

The medical benefits of the polar bear for humanity certainly have their importance in our conservation efforts, but these should not be the only factors taken into consideration. We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem-solving abilities. A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach. Problem-solving ability has also been witnessed in wild polar bears, although not as obviously as with GoGo. A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.

In other studies, such as one by Alison Ames in 2008, polar bears showed deliberate and focused manipulation. For example, Ames observed bears putting objects in piles and then knocking them over in what appeared to be a game. The study demonstrates that bears are capable of agile and thought-out behaviours. These examples suggest bears have greater creativity and problem-solving abilities than previously thought.

As for emotions, while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow – seemingly out of frustration – when they have just missed out on a kill. Moreover, polar bears can form unusual relationships with other species, including playing with the dogs used to pull sleds in the Arctic. Remarkably, one hand-raised polar bear called Agee has formed a close relationship with her owner Mark Dumas to the point where they even swim together. This is even more astonishing since polar bears are known to actively hunt humans in the wild.

If climate change were to lead to their extinction, this would mean not only the loss of potential breakthroughs in human medicine, but more importantly, the disappearance of an intelligent, majestic animal.`,
      instructions: `Questions 1–7: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 8–13: Complete the table below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q1–7: True/False/Not Given ────────────────────────────
        {
          id: "cam16-ra-t1-s1-q1",
          number: 1,
          groupLabel: "Questions 1–7: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n1  Polar bears suffer from various health problems due to the build-up of fat under their skin.\n2  The study done by Liu and his colleagues compared different groups of polar bears.\n3  Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.\n4  Polar bears are able to control their levels of 'bad' cholesterol by genetic means.\n5  Female polar bears are able to survive for about six months without food.\n6  It was found that the bones of female polar bears were very weak when they came out of their dens in spring.\n7  The polar bear's mechanism for increasing bone density could also be used by people one day.",
          type: "true_false_ng",
          question: "1. Polar bears suffer from various health problems due to the build-up of fat under their skin.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. The study done by Liu and his colleagues compared different groups of polar bears.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. Polar bears are able to control their levels of 'bad' cholesterol by genetic means.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. Female polar bears are able to survive for about six months without food.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. It was found that the bones of female polar bears were very weak when they came out of their dens in spring.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "7. The polar bear's mechanism for increasing bone density could also be used by people one day.",
          correctAnswer: "TRUE",
          points: 1,
        },
        // ── Q8–13: Table completion ───────────────────────────────
        {
          id: "cam16-ra-t1-s1-q8",
          number: 8,
          groupLabel: "Questions 8–13: Complete the table below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nReasons why polar bears should be protected\nPeople think of bears as unintelligent and 8 ………………. .\nHowever, this may not be correct. For example:\n● In Tennoji Zoo, a bear has been seen using a branch as a 9 ………………. . This allowed him to knock down some 10 ………………. .\n● A wild polar bear worked out a method of reaching a platform where a 11 ………………. was located.\n● Polar bears have displayed behaviour such as conscious manipulation of objects and activity similar to a 12 ………………. .\nBears may also display emotions. For example:\n● They may make movements suggesting 13 ………………. if disappointed when hunting.\n● They may form relationships with other species.",
          type: "table_completion",
          question: "8. People think of bears as unintelligent and _______",
          correctAnswer: "violent",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q9",
          number: 9,
          type: "table_completion",
          question: "9. A bear has been seen using a branch as a _______",
          correctAnswer: "tool",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q10",
          number: 10,
          type: "table_completion",
          question: "10. The branch allowed him to knock down some _______",
          correctAnswer: "meat",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q11",
          number: 11,
          type: "table_completion",
          question: "11. A wild polar bear worked out a method of reaching a platform where a _______ was located",
          correctAnswer: "photographer",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q12",
          number: 12,
          type: "table_completion",
          question: "12. Polar bears have displayed activity similar to a _______",
          correctAnswer: "game",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s1-q13",
          number: 13,
          type: "table_completion",
          question: "13. They may make movements suggesting _______ if disappointed when hunting",
          correctAnswer: "frustration",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The Step Pyramid of Djoser",
      passageText: `A
The pyramids are the most famous monuments of ancient Egypt and still hold enormous interest for people in the present day. These grand, impressive tributes to the memory of the Egyptian kings have become linked with the country even though other cultures, such as the Chinese and Mayan, also built pyramids. The evolution of the pyramid form has been written and argued about for centuries. However, there is no question that, as far as Egypt is concerned, it began with one monument to one king designed by one brilliant architect: the Step Pyramid of Djoser at Saqqara.

B
Djoser was the first king of the Third Dynasty of Egypt and the first to build in stone. Prior to Djoser's reign, tombs were rectangular monuments made of dried clay brick, which covered underground passages where the deceased person was buried. For reasons which remain unclear, Djoser's main official, whose name was Imhotep, conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another, progressively making them smaller, to form the shape now known as the Step Pyramid. Djoser is thought to have reigned for 19 years, but some historians and scholars attribute a much longer time for his rule, owing to the number and size of the monuments he built.

C
The Step Pyramid has been thoroughly examined and investigated over the last century, and it is now known that the building process went through many different stages. Historian Marc Van de Mieroop comments on this, writing 'Much experimentation was involved, which is especially clear in the construction of the pyramid in the center of the complex. It had several plans … before it became the first Step Pyramid in history, piling six levels on top of one another … The weight of the enormous mass was a challenge for the builders, who placed the stones at an inward incline in order to prevent the monument breaking up.'

D
When finally completed, the Step Pyramid rose 62 meters high and was the tallest structure of its time. The complex in which it was built was the size of a city in ancient Egypt and included a temple, courtyards, shrines, and living quarters for the priests. It covered a region of 16 hectares and was surrounded by a wall 10.5 meters high. The wall had 13 false doors cut into it with only one true entrance cut into the south-east corner; the entire wall was then ringed by a trench 750 meters long and 40 meters wide. The false doors and the trench were incorporated into the complex to discourage unwanted visitors. If someone wished to enter, he or she would have needed to know in advance how to find the location of the true opening in the wall. Djoser was so proud of his accomplishment that he broke the tradition of having only his own name on the monument and had Imhotep's name carved on it as well.

E
The burial chamber of the tomb, where the king's body was laid to rest, was dug beneath the base of the pyramid, surrounded by a vast maze of long tunnels that had rooms off them to discourage robbers. One of the most mysterious discoveries found inside the pyramid was a large number of stone vessels. Over 40,000 of these vessels, of various forms and shapes, were discovered in storerooms off the pyramid's underground passages. They are inscribed with the names of rulers from the First and Second Dynasties of Egypt and made from different kinds of stone. There is no agreement among scholars and archaeologists on why the vessels were placed in the tomb of Djoser or what they were supposed to represent. The archaeologist Jean-Philippe Lauer, who excavated most of the pyramid and complex, believes they were originally stored and then give a 'proper burial' by Djoser in his pyramid to honor his predecessors. There are other historians, however, who claim the vessels were dumped into the shafts as yet another attempt to prevent grave robbers from getting to the king's burial chamber.

F
Unfortunately, all of the precautions and intricate design of the underground network did not prevent ancient robbers from finding a way in. Djoser's grave goods, and even his body, were stolen at some point in the past and all archaeologists found were a small number of his valuables overlooked by the thieves. There was enough left throughout the pyramid and its complex, however, to astonish and amaze the archaeologists who excavated it.

G
Egyptologist Miroslav Verner writes, 'Few monuments hold a place in human history as significant as that of the Step Pyramid in Saqqara … It can be said without exaggeration that this pyramid complex constitutes a milestone in the evolution of monumental stone architecture in Egypt and in the world as a whole.' The Step Pyramid was a revolutionary advance in architecture and became the archetype which all the other great pyramid builders of Egypt would follow.`,
      instructions: `Questions 14–20: Reading Passage 2 has seven paragraphs, A–G.
Choose the correct heading for each paragraph from the list of headings below.

List of Headings
i    The areas and artefacts within the pyramid itself
ii   A difficult task for those involved
iii  A king who saved his people
iv   A single certainty among other less definite facts
v    An overview of the external buildings and areas
vi   A pyramid design that others copied
vii  An idea for changing the design of burial structures
viii An incredible experience despite the few remains
ix   The answers to some unexpected questions

Questions 21–24: Complete the notes below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 25–26: Choose TWO letters, A–E.`,
      questions: [
        // ── Q14–20: Heading matching ──────────────────────────────
        {
          id: "cam16-ra-t1-s2-q14",
          number: 14,
          groupLabel: "Questions 14–20: Reading Passage 2 has seven paragraphs, A–G.\nChoose the correct heading for each paragraph from the list of headings below.\n\nList of Headings\ni    The areas and artefacts within the pyramid itself\nii   A difficult task for those involved\niii  A king who saved his people\niv   A single certainty among other less definite facts\nv    An overview of the external buildings and areas\nvi   A pyramid design that others copied\nvii  An idea for changing the design of burial structures\nviii An incredible experience despite the few remains\nix   The answers to some unexpected questions",
          type: "matching",
          question: "14. Paragraph A",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "iv",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. Paragraph B",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "vii",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. Paragraph C",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "ii",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. Paragraph D",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "v",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "18. Paragraph E",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "i",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q19",
          number: 19,
          type: "matching",
          question: "19. Paragraph F",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "viii",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q20",
          number: 20,
          type: "matching",
          question: "20. Paragraph G",
          options: [
            { label: "i", value: "i" },
            { label: "ii", value: "ii" },
            { label: "iii", value: "iii" },
            { label: "iv", value: "iv" },
            { label: "v", value: "v" },
            { label: "vi", value: "vi" },
            { label: "vii", value: "vii" },
            { label: "viii", value: "viii" },
            { label: "ix", value: "ix" },
          ],
          correctAnswer: "vi",
          points: 1,
        },
        // ── Q21–24: Notes completion ──────────────────────────────
        {
          id: "cam16-ra-t1-s2-q21",
          number: 21,
          groupLabel: "Questions 21–24: Complete the notes below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe Step Pyramid of Djoser\nThe complex that includes the Step Pyramid and its surroundings is considered to be as big as an Egyptian 21 ………………….. of the past. The area outside the pyramid included accommodation that was occupied by 22 ………………….., along with many other buildings and features.\nA wall ran around the outside of the complex and a number of false entrances were built into this. In addition, a long 23 ………………….. encircled the wall. As a result, any visitors who had not been invited were cleverly prevented from entering the pyramid grounds unless they knew the 24 ………………….. of the real entrance.",
          type: "note_completion",
          question: "21. The complex is considered to be as big as an Egyptian _______ of the past",
          correctAnswer: "city",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q22",
          number: 22,
          type: "note_completion",
          question: "22. The area outside the pyramid included accommodation occupied by _______",
          correctAnswer: "priests",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q23",
          number: 23,
          type: "note_completion",
          question: "23. A long _______ encircled the wall",
          correctAnswer: "trench",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q24",
          number: 24,
          type: "note_completion",
          question: "24. Uninvited visitors needed to know the _______ of the real entrance",
          correctAnswer: "location",
          points: 1,
        },
        // ── Q25–26: Choose TWO points about King Djoser ───────────
        {
          id: "cam16-ra-t1-s2-q25",
          number: 25,
          groupLabel: "Questions 25–26: Choose TWO letters, A–E.\nWhich TWO of the following points does the writer make about King Djoser?\n\nA  Initially he had to be persuaded to build in stone rather than clay.\nB  There is disagreement concerning the length of his reign.\nC  He failed to appreciate Imhotep's part in the design of the Step Pyramid.\nD  A few of his possessions were still in his tomb when archaeologists found it.\nE  He criticised the design and construction of other pyramids in Egypt.",
          type: "multiple_choice",
          question: "25. Which TWO points does the writer make about King Djoser? (Choose TWO — this is the first answer)",
          options: [
            { label: "A  Initially he had to be persuaded to build in stone rather than clay.", value: "A" },
            { label: "B  There is disagreement concerning the length of his reign.", value: "B" },
            { label: "C  He failed to appreciate Imhotep's part in the design of the Step Pyramid.", value: "C" },
            { label: "D  A few of his possessions were still in his tomb when archaeologists found it.", value: "D" },
            { label: "E  He criticised the design and construction of other pyramids in Egypt.", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. Which TWO points does the writer make about King Djoser? (Choose TWO — this is the second answer)",
          options: [
            { label: "A  Initially he had to be persuaded to build in stone rather than clay.", value: "A" },
            { label: "B  There is disagreement concerning the length of his reign.", value: "B" },
            { label: "C  He failed to appreciate Imhotep's part in the design of the Step Pyramid.", value: "C" },
            { label: "D  A few of his possessions were still in his tomb when archaeologists found it.", value: "D" },
            { label: "E  He criticised the design and construction of other pyramids in Egypt.", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The future of work",
      passageText: `According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or 'embodied artificial intelligence' (AI) – is one aspect of the disruptive effects of technology on the labour market. 'Disembodied AI', like the algorithms running in our smartphones, is another.

Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the 'algorithmication' of jobs that are dependent on data rather than on production – the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.

'In many cases, they can outperform humans,' says Pachidi. 'Organisations are attracted to using algorithms because they want to make choices based on what they consider is "perfect information", as well as to reduce costs and enhance productivity.'

'But these enhancements are not without consequences,' says Pachidi. 'If routine cognitive tasks are taken over by AI, how do professions develop their future experts?' she asks. 'One way of learning about a job is "legitimate peripheral participation" – a novice stands next to experts and learns by observation. If this isn't happening, then you need to find new ways to learn.'

Another issue is the extent to which the technology influences or even controls the workforce. For over two years, Pachidi monitored a telecommunications company. 'The way telecoms salespeople work is through personal and frequent contact with clients, using the benefit of experience to assess a situation and reach a decision. However, the company had started using a(n) … algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.'

The algorithm – usually built by external designers – often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short-sighted view begins to creep into working practices whereby workers learn through the 'algorithm's eyes' and become dependent on its instructions. Alternative explorations – where experimentation and human instinct lead to progress and new ideas – are effectively discouraged.

Pachidi and colleagues even observed people developing strategies to make the algorithm work to their own advantage. 'We are seeing cases where workers feed the algorithm with false data to reach their targets,' she reports.

It's scenarios like these that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. In the meantime, says Pachidi, 'We need to make sure we fully understand the dilemmas that this new world raises regarding expertise, occupational boundaries and control.'

Economist Professor Hamish Low believes that the future of work will involve major transitions across the whole life course for everyone: 'The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past,' says Low. Instead, he envisages a multistage employment life: one where retraining happens across the life course, and where multiple jobs and no job happen by choice at different stages.

On the subject of job losses, Low believes the predictions are founded on a fallacy: 'It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are being carried out by robots, that doesn't mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect there to be 150 jobs.'

Dr Ewan McGaughey, at Cambridge's Centre for Business Research and King's College London, agrees that 'apocalyptic' views about the future of work are misguided. 'It's the laws that restrict the supply of capital to the job market, not the advent of new technologies that causes unemployment.'

His recently published research answers the question of whether automation, AI and robotics will mean a 'jobless future' by looking at the causes of unemployment. 'History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.'

He adds: 'If there is going to be change to jobs as a result of AI and robotics then I'd like to see governments seizing the opportunity to improve policy to enforce good job security. We can "reprogramme" the law to prepare for a fairer future of work and leisure.' McGaughey's findings are a call to arms to leaders of organisations, governments and banks to pre-empt the coming changes with bold new policies that guarantee full employment, fair incomes and a thriving economic democracy.

'The promises of these new technologies are astounding. They deliver humankind the capacity to live in a way that nobody could have once imagined,' he adds. 'Just as the industrial revolution brought people past subsistence agriculture, and the corporate revolution enabled mass production, a third revolution has been pronounced. But it will not only be one of technology. The next revolution will be social.'`,
      instructions: `Questions 27–30: Choose the correct letter, A, B, C or D.

Questions 31–34: Complete the summary using the list of words, A–G, below.

Questions 35–40: Match each statement with the correct person, A, B or C.`,
      questions: [
        // ── Q27–30: Multiple choice ───────────────────────────────
        {
          id: "cam16-ra-t1-s3-q27",
          number: 27,
          groupLabel: "Questions 27–30: Choose the correct letter, A, B, C or D.\n\n27. The first paragraph tells us about\nA  the kinds of jobs that will be most affected by the growth of AI.\nB  the extent to which AI will alter the nature of the work that people do.\nC  the proportion of the world's labour force who will have jobs in AI in the future.\nD  the difference between ways that embodied and disembodied AI will impact on workers.",
          type: "multiple_choice",
          question: "27. The first paragraph tells us about\nA  the kinds of jobs that will be most affected by the growth of AI.\nB  the extent to which AI will alter the nature of the work that people do.\nC  the proportion of the world's labour force who will have jobs in AI in the future.\nD  the difference between ways that embodied and disembodied AI will impact on workers.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q28",
          number: 28,
          groupLabel: "28. According to the second paragraph, what is Stella Pachidi's view of the 'knowledge economy'?\nA  It is having an influence on the number of jobs available.\nB  It is changing people's attitudes towards their occupations.\nC  It is the main reason why the production sector is declining.\nD  It is a key factor driving current developments in the workplace.",
          type: "multiple_choice",
          question: "28. According to the second paragraph, what is Stella Pachidi's view of the 'knowledge economy'?\nA  It is having an influence on the number of jobs available.\nB  It is changing people's attitudes towards their occupations.\nC  It is the main reason why the production sector is declining.\nD  It is a key factor driving current developments in the workplace.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q29",
          number: 29,
          groupLabel: "29. What did Pachidi observe at the telecommunications company?\nA  staff disagreeing with the recommendations of AI\nB  staff feeling resentful about the intrusion of AI in their work\nC  staff making sure that AI produces the results that they want\nD  staff allowing AI to carry out tasks they ought to do themselves",
          type: "multiple_choice",
          question: "29. What did Pachidi observe at the telecommunications company?\nA  staff disagreeing with the recommendations of AI\nB  staff feeling resentful about the intrusion of AI in their work\nC  staff making sure that AI produces the results that they want\nD  staff allowing AI to carry out tasks they ought to do themselves",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q30",
          number: 30,
          groupLabel: "30. In his recently published research, Ewan McGaughey\nA  challenges the idea that redundancy is a negative thing.\nB  shows the profound effect of mass unemployment on society.\nC  highlights some differences between past and future job losses.\nD  illustrates how changes in the job market can be successfully handled.",
          type: "multiple_choice",
          question: "30. In his recently published research, Ewan McGaughey\nA  challenges the idea that redundancy is a negative thing.\nB  shows the profound effect of mass unemployment on society.\nC  highlights some differences between past and future job losses.\nD  illustrates how changes in the job market can be successfully handled.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q31–34: Summary completion with word list ─────────────
        {
          id: "cam16-ra-t1-s3-q31",
          number: 31,
          groupLabel: "Questions 31–34: Complete the summary using the list of words, A–G, below.\nWrite the correct letter, A–G, in boxes 31–34 on your answer sheet.\n\nThe 'algorithmication' of jobs\nStella Pachidi of Cambridge Judge Business School has been focusing on the 'algorithmication' of jobs which rely not on production but on 31 …………………. .\nWhile monitoring a telecommunications company, Pachidi observed a growing 32 …………………. on the recommendations made by AI, as workers begin to learn through the 'algorithm's eyes'. Meanwhile, staff are deterred from experimenting and using their own 33 …………………., and are therefore prevented from achieving innovation.\nTo avoid the kind of situations which Pachidi observed, researchers are trying to make AI's decision-making process easier to comprehend, and to increase users' 34 …………………. with regard to the technology.\n\nA  pressure    B  satisfaction    C  intuition\nD  promotion   E  reliance       F  confidence\nG  information",
          type: "matching",
          question: "31. Jobs which rely not on production but on _______",
          options: [
            { label: "A  pressure", value: "A" },
            { label: "B  satisfaction", value: "B" },
            { label: "C  intuition", value: "C" },
            { label: "D  promotion", value: "D" },
            { label: "E  reliance", value: "E" },
            { label: "F  confidence", value: "F" },
            { label: "G  information", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q32",
          number: 32,
          type: "matching",
          question: "32. A growing _______ on the recommendations made by AI",
          options: [
            { label: "A  pressure", value: "A" },
            { label: "B  satisfaction", value: "B" },
            { label: "C  intuition", value: "C" },
            { label: "D  promotion", value: "D" },
            { label: "E  reliance", value: "E" },
            { label: "F  confidence", value: "F" },
            { label: "G  information", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q33",
          number: 33,
          type: "matching",
          question: "33. Staff are deterred from using their own _______",
          options: [
            { label: "A  pressure", value: "A" },
            { label: "B  satisfaction", value: "B" },
            { label: "C  intuition", value: "C" },
            { label: "D  promotion", value: "D" },
            { label: "E  reliance", value: "E" },
            { label: "F  confidence", value: "F" },
            { label: "G  information", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q34",
          number: 34,
          type: "matching",
          question: "34. Researchers aim to increase users' _______ with regard to the technology",
          options: [
            { label: "A  pressure", value: "A" },
            { label: "B  satisfaction", value: "B" },
            { label: "C  intuition", value: "C" },
            { label: "D  promotion", value: "D" },
            { label: "E  reliance", value: "E" },
            { label: "F  confidence", value: "F" },
            { label: "G  information", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        // ── Q35–40: People matching ───────────────────────────────
        {
          id: "cam16-ra-t1-s3-q35",
          number: 35,
          groupLabel: "Questions 35–40: Look at the following statements (Questions 35–40) and the list of people below.\nMatch each statement with the correct person, A, B or C.\nWrite the correct letter, A, B or C, in boxes 35–40 on your answer sheet.\nNB You may use any letter more than once.\n\nList of people\nA  Stella Pachidi\nB  Hamish Low\nC  Ewan McGaughey",
          type: "matching",
          question: "35. Greater levels of automation will not result in lower employment.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q36",
          number: 36,
          type: "matching",
          question: "36. There are several reasons why AI is appealing to businesses.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q37",
          number: 37,
          type: "matching",
          question: "37. AI's potential to transform people's lives has parallels with major cultural shifts which occurred in previous eras.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q38",
          number: 38,
          type: "matching",
          question: "38. It is important to be aware of the range of problems that AI causes.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q39",
          number: 39,
          type: "matching",
          question: "39. People are going to follow a less conventional career path than in the past.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t1-s3-q40",
          number: 40,
          type: "matching",
          question: "40. Authorities should take measures to ensure that there will be adequately paid work for everyone.",
          options: [
            { label: "A  Stella Pachidi", value: "A" },
            { label: "B  Hamish Low", value: "B" },
            { label: "C  Ewan McGaughey", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 16 – TEST 2  (Academic Reading)
// Passages: The White Horse of Uffington /
//           I contain multitudes /
//           How to make wise decisions
// ============================================================
export const cambridge16_reading_t2: IELTSTest = {
  id: "cam16-reading-academic-t2",
  title: "Cambridge IELTS 16 – Test 2",
  bookNumber: 16,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The White Horse of Uffington",
      passageText: `The cutting of huge figures or 'geoglyphs' into the earth of English hillsides has taken place for more than 3,000 years. There are 56 hill figures scattered around England, with the vast majority on the chalk downlands of the country's southern counties. The figures include giants, horses, crosses and regimental badges. Although the majority of these geoglyphs date within the last 300 years or so, there are one or two that are much older.

The most famous of these figures is perhaps also the most mysterious – the Uffington White Horse in Oxfordshire. The White Horse has recently been re-dated and shown to be even older than its previously assigned ancient pre-Roman Iron Age date. More controversial is the date of the enigmatic Long Man of Wilmington in Sussex. While many historians are convinced the figure is prehistoric, others believe that it was the work of an artistic monk from a nearby priory and was created between the 11th and 15th centuries.

The method of cutting these huge figures was simply to remove the overlying grass to reveal the gleaming white chalk below. However, the grass would soon grow over the geoglyph again unless it was regularly cleaned or scoured by a fairly large team of people. One reason that the vast majority of hill figures have disappeared is that when the traditions associated with the figures faded, people no longer bothered or remembered to clear away the grass to expose the chalk outline. Furthermore, over hundreds of years the outlines would sometimes change due to people not always cutting in exactly the same place, thus creating a different shape to the original geoglyph. That fact that any ancient hill figures survive at all in England today is testament to the strength and continuity of local customs and beliefs which, in one case at least, must stretch back over millennia.

The Uffington White Horse is a unique, stylised representation of a horse consisting of a long, sleek back, thin disjointed legs, a streaming tail, and a bird-like beaked head. The elegant creature almost melts into the landscape. The horse is situated 2.5 km from Uffington village on a steep close to the Late Bronze Age (c. 7th century BCE) hillfort of Uffington Castle and below the Ridgeway, a long-distance Neolithic track.

The Uffington Horse is also surrounded by Bronze Age burial mounds. It is not far from the Bronze Age cemetery of Lambourn Seven Barrows, which consists of more than 30 well-preserved burial mounds. The carving has been placed in such a way as to make it extremely difficult to see from close quarters, and like many geoglyphs is best appreciated from the air. Nevertheless, there are certain areas of the Vale of the White Horse, the valley containing and named after the enigmatic creature, from which an adequate impression may be gained. Indeed on a clear day the carving can be seen from up to 30 km away.

The earliest evidence of a horse at Uffington is from the 1070s CE when 'White Horse Hill' is mentioned in documents from the nearby Abbey of Abingdon, and the first reference to the horse itself is soon after, in 1190 CE. However, the carving is believed to date back much further than that. Due to the similarity of the Uffington White Horse to the stylised depictions of horses on 1st century BCE coins, it had been thought that the creature must also date to that period.

However, in 1995 Optically Stimulated Luminescence (OSL) testing was carried out by the Oxford Archaeological Unit on soil from two of the lower layers of the horse's body, and from another cut near the base. The result was a date for the horse's construction somewhere between 1400 and 600 BCE – in other words, it had a Late Bronze Age or Early Iron Age origin.

The latter end of this date range would tie the carving of the horse in with occupation of the nearby Uffington hillfort, indicating that it may represent a tribal emblem making the land of the inhabitants of the hillfort. Alternatively, the carving may have been carried out during a Bronze or Iron Age ritual. Some researchers see the horse as representing the Celtic horse goddess Epona, who was worshipped as a protector of horses, and for her associations with fertility. However, the cult of Epona was not imported from Gaul (France) until around the first century CE. This date is at least six centuries after the Uffington Horse was probably carved. Nevertheless, the horse had great ritual and economic significance during the Bronze and Iron Ages, as attested by its depictions on jewellery and other metal objects. It is possible that the carving represents a goddess in native mythology, such as Rhiannon, described in later Welsh mythology as a beautiful woman dressed in gold and riding a white horse.

The fact that geoglyphs can disappear easily, along with their associated rituals and meaning, indicates that they were never intended to be anything more than temporary gestures. But this does not lessen their importance. These giant carvings are a fascinating glimpse into the minds of their creators and how they viewed the landscape in which they lived.`,
      instructions: `Questions 1–8: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 9–13: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q1–8: True/False/Not Given ────────────────────────────
        {
          id: "cam16-ra-t2-s1-q1",
          number: 1,
          groupLabel: "Questions 1–8: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n1  Most geoglyphs in England are located in a particular area of the country.\n2  There are more geoglyphs in the shape of a horse than any other creature.\n3  A recent dating of the Uffington White Horse indicates that people were mistaken about its age.\n4  Historians have come to an agreement about the origins of the Long Man of Wilmington.\n5  Geoglyphs were created by people placing white chalk on the hillside.\n6  Many geoglyphs in England are no longer visible.\n7  The shape of some geoglyphs has been altered over time.\n8  The fame of the Uffington White Horse is due to its size.",
          type: "true_false_ng",
          question: "1. Most geoglyphs in England are located in a particular area of the country.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. There are more geoglyphs in the shape of a horse than any other creature.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. A recent dating of the Uffington White Horse indicates that people were mistaken about its age.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. Historians have come to an agreement about the origins of the Long Man of Wilmington.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. Geoglyphs were created by people placing white chalk on the hillside.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. Many geoglyphs in England are no longer visible.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "7. The shape of some geoglyphs has been altered over time.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q8",
          number: 8,
          type: "true_false_ng",
          question: "8. The fame of the Uffington White Horse is due to its size.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        // ── Q9–13: Summary completion ─────────────────────────────
        {
          id: "cam16-ra-t2-s1-q9",
          number: 9,
          groupLabel: "Questions 9–13: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nThe Uffington White Horse\n\nThe location of the Uffington White Horse:\n● a distance of 2.5 km from Uffington village\n● near an ancient road known as the 9 …………………\n● close to an ancient cemetery that has a number of burial mounds\n\nDating the Uffington White Horse:\n● first reference to White Horse Hill appears in 10 ………………… from the 1070s\n● horses shown on coins from the period 100 BCE – 1 BCE are similar in appearance\n● according to analysis of the surrounding 11 …………………, the Horse is Late Bronze Age / Early Iron Age\n\nPossible reasons for creation of the Uffington White Horse:\n● an emblem to indicate land ownership\n● formed part of an ancient ritual\n● was a representation of goddess Epona – associated with protection of horses and 12…………………\n● was a representation of a Welsh goddess called 13 …………………",
          type: "summary_completion",
          question: "9. near an ancient road known as the _______",
          correctAnswer: "Ridgeway",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q10",
          number: 10,
          type: "summary_completion",
          question: "10. first reference to White Horse Hill appears in _______ from the 1070s",
          correctAnswer: "documents",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q11",
          number: 11,
          type: "summary_completion",
          question: "11. according to analysis of the surrounding _______, the Horse is Late Bronze Age / Early Iron Age",
          correctAnswer: "soil",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q12",
          number: 12,
          type: "summary_completion",
          question: "12. was a representation of goddess Epona – associated with protection of horses and _______",
          correctAnswer: "fertility",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s1-q13",
          number: 13,
          type: "summary_completion",
          question: "13. was a representation of a Welsh goddess called _______",
          correctAnswer: "Rhiannon",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "I contain multitudes",
      passageText: `Microbes, most of them bacteria, have populated this planet since long before animal life developed and they will outlive us. Invisible to the naked eye, they are ubiquitous. They inhabit the soil, air, rocks and water and are present within every form of life, from seaweed and coral to dogs and humans. And, as Yong explains in his utterly absorbing and hugely important book we mess with them at our peril.

Every species has its own colony of microbes, called a 'microbiome', and these microbes vary not only between species but also between individuals and within different parts of each individual. What is amazing is that while the number of human cells in the average person is about 30 trillion, the number of microbial ones is higher – about 39 trillion. At best, Yong informs us, we are only 50 per cent human. Indeed, some scientists even suggest we should think of each species and its microbes as a single unit, dubbed a 'holobiont'.

In each human there are microbes that live only in the stomach, the mouth or the armpit and by and large they do so peacefully. So 'bad' microbes are just microbes out of context. Microbes that sit contentedly in the human gut (where there are more microbes than there are stars in the galaxy) can become deadly if they find their way into the bloodstream. These communities are constantly changing too. The right hand shares just one sixth of its microbes with the left hand. And, of course, we are surrounded by microbes. Every time we eat, we swallow a million microbes in each gram of food; we are continually swapping microbes with other humans, pets and the world at large.

It's a fascinating topic and Yong, a young British science journalist, is an extraordinarily adept guide. Writing with lightness and panache, he has a knack of explaining complex science in terms that are both easy to understand and totally enthralling. Yong is on a mission. Leading us gently by the hand, he takes us into the world of microbes – a bizarre, alien planet – in a bid to persuade us to love them as much as he does. By the end, we do.

For most of human history we had no idea that microbes existed. The first man to see these extraordinarily potent creatures was a Dutch lens-maker called Antony van Leeuwenhoek in the 1670s. Using microscopes of his own design that could magnify up to 270 times, he examined a drop of water from a nearby lake and found it teeming with tiny creatures he called 'animalcules'. It wasn't until nearly two hundred years later that the research of French biologist Louis Pasteur indicated that some microbes caused disease. It was Pasteur's 'germ theory' that gave bacteria the poor image that endures today.

Yong's book is in many ways a plea for microbial tolerance, pointing out that while fewer than one hundred species of bacteria bring disease, many thousands more play a vital role in maintaining our health. The book also acknowledges that our attitude towards bacteria is not a simple one. We tend to see the dangers posed by bacteria, yet at the same time we are sold yoghurts and drinks that supposedly nurture 'friendly' bacteria. In reality, says Yong, bacteria should not be viewed as either friends or foes, villains or heroes. Instead we should realise we have a symbiotic relationship, that can be mutually beneficial or mutually destructive.

What then do these millions of organisms do? The answer is pretty much everything. New research is now unravelling the ways in which bacteria aid digestion, regulate our immune systems, eliminate toxins, produce vitamins, affect our behaviour and even combat obesity. 'They actually help us become who we are,' says Yong. But we are facing a growing problem. Our obsession with hygiene, our overuse of antibiotics and our unhealthy, low-fibre diets are disrupting the bacterial balance and may be responsible for soaring rates of allergies and immune problems, such as inflammatory bowel disease (IBD).

The most recent research actually turns accepted norms upside down. For example, there are studies indicating that the excessive use of household detergents and antibacterial products actually destroys the microbes that normally keep the more dangerous germs at bay. Other studies show that keeping a dog as a pet gives children early exposure to a diverse range of bacteria, which may help protect them against allergies later.

The readers of Yong's book must be prepared for a decidedly unglamorous world. Among the less appealing case studies is one about a fungus that is wiping out entire populations of frogs and that can be halted by a rare microbial bacterium. Another is about squid that carry luminescent bacteria that protect them against predators. However, if you can overcome your distaste for some of the investigations, the reasons for Yong's enthusiasm become clear. The microbial world is a place of wonder. Already, in an attempt to stop mosquitoes spreading dengue fever – a disease that infects 400 million people a year – mosquitoes are being loaded with a bacterium to block the disease. In the future, our ability to manipulate microbes means we could construct buildings with useful microbes built into their walls to fight off infections. Just imagine a neonatal hospital ward coated in a specially mixed cocktail of microbes so that babies get the best start in life.`,
      instructions: `Questions 14–16: Choose the correct letter, A, B, C or D.

Questions 17–20: Complete the summary using the list of words, A–H, below.

Questions 21–26: Do the following statements agree with the claims of the writer in Reading Passage 2?
Write YES, NO, or NOT GIVEN.`,
      questions: [
        // ── Q14–16: Multiple choice ───────────────────────────────
        {
          id: "cam16-ra-t2-s2-q14",
          number: 14,
          groupLabel: "Questions 14–16: Choose the correct letter, A, B, C or D.\n\n14. What point does the writer make about microbes in the first paragraph?\nA  They adapt quickly to their environment.\nB  The risk they pose has been exaggerated.\nC  They are more plentiful in animal life than plant life.\nD  They will continue to exist for longer than the human race.",
          type: "multiple_choice",
          question: "14. What point does the writer make about microbes in the first paragraph?\nA  They adapt quickly to their environment.\nB  The risk they pose has been exaggerated.\nC  They are more plentiful in animal life than plant life.\nD  They will continue to exist for longer than the human race.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q15",
          number: 15,
          groupLabel: "15. In the second paragraph, the writer is impressed by the fact that\nA  each species tends to have vastly different microbes.\nB  some parts of the body contain relatively few microbes.\nC  the average individual has more microbial cells than human ones.\nD  scientists have limited understanding of how microbial cells behave.",
          type: "multiple_choice",
          question: "15. In the second paragraph, the writer is impressed by the fact that\nA  each species tends to have vastly different microbes.\nB  some parts of the body contain relatively few microbes.\nC  the average individual has more microbial cells than human ones.\nD  scientists have limited understanding of how microbial cells behave.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q16",
          number: 16,
          groupLabel: "16. What is the writer doing in the fifth paragraph?\nA  explaining how a discovery was made\nB  comparing scientists' theories about microbes\nC  describing confusion among scientists\nD  giving details of how microbes cause disease",
          type: "multiple_choice",
          question: "16. What is the writer doing in the fifth paragraph?\nA  explaining how a discovery was made\nB  comparing scientists' theories about microbes\nC  describing confusion among scientists\nD  giving details of how microbes cause disease",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q17–20: Summary completion with word list ─────────────
        {
          id: "cam16-ra-t2-s2-q17",
          number: 17,
          groupLabel: "Questions 17–20: Complete the summary using the list of words, A–H, below.\nWrite the correct letter, A–H, in boxes 17–20 on your answer sheet.\n\nWe should be more tolerant of microbes\nYong's book argues that we should be more tolerant of microbes. Many have a beneficial effect, and only a relatively small number lead to 17 ………………… . And although it is misleading to think of microbes as 'friendly', we should also stop thinking of them as the enemy. In fact, we should accept that our relationship with microbes is one based on 18 ………………… .\nNew research shows that microbes have numerous benefits for humans. Amongst other things, they aid digestion, remove poisons, produce vitamins and may even help reduce obesity. However, there is a growing problem. Our poor 19 …………………, our overuse of antibiotics, and our excessive focus on 20 ………………… are upsetting the bacterial balance and may be contributing to the huge increase in allergies and immune system problems.\n\nA  solution    B  partnership    C  destruction\nD  exaggeration    E  cleanliness    F  regulations\nG  illness    H  nutrition",
          type: "matching",
          question: "17. Only a relatively small number lead to _______",
          options: [
            { label: "A  solution", value: "A" },
            { label: "B  partnership", value: "B" },
            { label: "C  destruction", value: "C" },
            { label: "D  exaggeration", value: "D" },
            { label: "E  cleanliness", value: "E" },
            { label: "F  regulations", value: "F" },
            { label: "G  illness", value: "G" },
            { label: "H  nutrition", value: "H" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q18",
          number: 18,
          type: "matching",
          question: "18. Our relationship with microbes is one based on _______",
          options: [
            { label: "A  solution", value: "A" },
            { label: "B  partnership", value: "B" },
            { label: "C  destruction", value: "C" },
            { label: "D  exaggeration", value: "D" },
            { label: "E  cleanliness", value: "E" },
            { label: "F  regulations", value: "F" },
            { label: "G  illness", value: "G" },
            { label: "H  nutrition", value: "H" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q19",
          number: 19,
          type: "matching",
          question: "19. Our poor _______ is upsetting the bacterial balance",
          options: [
            { label: "A  solution", value: "A" },
            { label: "B  partnership", value: "B" },
            { label: "C  destruction", value: "C" },
            { label: "D  exaggeration", value: "D" },
            { label: "E  cleanliness", value: "E" },
            { label: "F  regulations", value: "F" },
            { label: "G  illness", value: "G" },
            { label: "H  nutrition", value: "H" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q20",
          number: 20,
          type: "matching",
          question: "20. Our excessive focus on _______ is upsetting the bacterial balance",
          options: [
            { label: "A  solution", value: "A" },
            { label: "B  partnership", value: "B" },
            { label: "C  destruction", value: "C" },
            { label: "D  exaggeration", value: "D" },
            { label: "E  cleanliness", value: "E" },
            { label: "F  regulations", value: "F" },
            { label: "G  illness", value: "G" },
            { label: "H  nutrition", value: "H" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        // ── Q21–26: Yes/No/Not Given ──────────────────────────────
        {
          id: "cam16-ra-t2-s2-q21",
          number: 21,
          groupLabel: "Questions 21–26: Do the following statements agree with the claims of the writer in Reading Passage 2?\nWrite YES, NO, or NOT GIVEN.\n\n21  It is possible that using antibacterial products in the home fails to have the desired effect.\n22  It is a good idea to ensure that children come into contact with as few bacteria as possible.\n23  Yong's book contains more case studies than are necessary.\n24  The case study about bacteria that prevent squid from being attacked may have limited appeal.\n25  Efforts to control dengue fever have been surprisingly successful.\n26  Microbes that reduce the risk of infection have already been put inside the walls of some hospital wards.",
          type: "true_false_ng",
          question: "21. It is possible that using antibacterial products in the home fails to have the desired effect.",
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q22",
          number: 22,
          type: "true_false_ng",
          question: "22. It is a good idea to ensure that children come into contact with as few bacteria as possible.",
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q23",
          number: 23,
          type: "true_false_ng",
          question: "23. Yong's book contains more case studies than are necessary.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q24",
          number: 24,
          type: "true_false_ng",
          question: "24. The case study about bacteria that prevent squid from being attacked may have limited appeal.",
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q25",
          number: 25,
          type: "true_false_ng",
          question: "25. Efforts to control dengue fever have been surprisingly successful.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s2-q26",
          number: 26,
          type: "true_false_ng",
          question: "26. Microbes that reduce the risk of infection have already been put inside the walls of some hospital wards.",
          correctAnswer: "NO",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "How to make wise decisions",
      passageText: `Across cultures, wisdom has been considered one of the most revered human qualities. Although the truly wise may seem few and far between, empirical research examining wisdom suggests that it isn't an exceptional trait possessed by a small handful of bearded philosophers after all – in fact, the latest studies suggest that most of us have the ability to make wise decisions, given the right context.

'It appears that experiential, situational, and cultural factors are even more powerful in shaping wisdom than previously imagined,' says Associate Professor Igor Grossmann of the University of Waterloo in Ontario, Canada. 'Recent empirical findings from cognitive, developmental, social, and personality psychology cumulatively suggest that people's ability to reason wisely varies dramatically across experiential and situational contexts. Understanding the role of such contextual factors offers unique insights into understanding wisdom in daily life, as well as how it can be enhanced and taught.'

It seems that it's not so much that some people simply possess wisdom and others lack it, but that our ability to reason wisely depends on a variety of external factors. 'It is impossible to characterize thought processes attributed to wisdom without considering the role of contextual factors,' explains Grossmann. 'In other words, wisdom is not solely an "inner quality" but rather unfolds as a function of situations people happen to be in. Some situations are more likely to promote wisdom than others.'

Coming up with a definition of wisdom is challenging, but Grossmann and his colleagues have identified four key characteristics as part of a framework of wise reasoning. One is intellectual humility or recognition of the limits of our own knowledge, and another is appreciation of perspectives wider than the issue at hand. Sensitivity to the possibility of change in social relations is also key, along with compromise or integration of different attitudes and beliefs.

Grossmann and his colleagues have also found that one of the most reliable ways to support wisdom in our own day-to-day decisions is to look at scenarios from a third-party perspective, as though giving advice to a friend. Research suggests that when adopting a first-person viewpoint we focus on 'the focal features of the environment' and when we adopt a third-person, 'observer' viewpoint we reason more broadly and focus more on interpersonal and moral ideals such as justice and impartiality. Looking at problems from this more expansive viewpoint appears to foster cognitive processes related to wise decisions.

What are we to do, then, when confronted with situations like a disagreement with a spouse or negotiating a contract at work, that require us to take a personal stake? Grossmann argues that even when we aren't able to change the situation, we can still evaluate these experiences from different perspectives.

For example, in one experiment that took place during the peak of a recent economic recession, graduating college seniors were asked to reflect on their job prospects. The students were instructed to imagine their career either 'as if you were a distant observer' or 'before your own eyes as if you were right there'. Participants in the group assigned to the 'distant observer' role displayed more wisdom-related reasoning (intellectual humility and recognition of change) than did participants in the control group.

In another study, couples in long-term romantic relationships were instructed to visualize an unresolved relationship conflict either through the eyes of an outsider or from their own perspective. Participants then discussed the incident with their partner for 10 minutes, after which they wrote down their thoughts about it. Couples in the 'other's eyes' condition were significantly more likely to rely on wise reasoning – recognizing others' perspectives and searching for a compromise – compared to the couples in the egocentric condition.

'Ego-decentering promotes greater focus on others and enables a bigger picture, conceptual view of the experience, affording recognition of intellectual humility and change,' says Grossmann.

We might associate wisdom with intelligence or particular personality traits, but research shows only a small positive relationship between wise thinking and crystallized intelligence and the personality traits of openness and agreeableness. 'It is remarkable how much people can vary in their wisdom from one situation to the next, and how much stronger such contextual effects are for understanding the relationship between wise judgment and its social and affective outcomes as compared to the generalized "traits",' Grossmann explains. 'That is, knowing how wisely a person behaves in a given situation is more informative for understanding their emotions or likelihood to forgive [or] retaliate as compared to knowing whether the person may be wise "in general".'`,
      instructions: `Questions 27–30: Choose the correct letter, A, B, C or D.

Questions 31–35: Complete the summary using the list of words, A–J, below.

Questions 36–40: Do the following statements agree with the information given in Reading Passage 3?
Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        // ── Q27–30: Multiple choice ───────────────────────────────
        {
          id: "cam16-ra-t2-s3-q27",
          number: 27,
          groupLabel: "Questions 27–30: Choose the correct letter, A, B, C or D.\n\n27. What point does the writer make in the first paragraph?\nA  Wisdom appears to be unique to the human race.\nB  A basic assumption about wisdom may be wrong.\nC  Concepts of wisdom may depend on the society we belong to.\nD  There is still much to be discovered about the nature of wisdom.",
          type: "multiple_choice",
          question: "27. What point does the writer make in the first paragraph?\nA  Wisdom appears to be unique to the human race.\nB  A basic assumption about wisdom may be wrong.\nC  Concepts of wisdom may depend on the society we belong to.\nD  There is still much to be discovered about the nature of wisdom.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q28",
          number: 28,
          groupLabel: "28. What does Igor Grossmann suggest about the ability to make wise decisions?\nA  It can vary greatly from one person to another.\nB  Earlier research into it was based on unreliable data.\nC  The importance of certain influences on it was underestimated.\nD  Various branches of psychology define it according to their own criteria.",
          type: "multiple_choice",
          question: "28. What does Igor Grossmann suggest about the ability to make wise decisions?\nA  It can vary greatly from one person to another.\nB  Earlier research into it was based on unreliable data.\nC  The importance of certain influences on it was underestimated.\nD  Various branches of psychology define it according to their own criteria.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q29",
          number: 29,
          groupLabel: "29. According to the third paragraph, Grossmann claims that the level of wisdom an individual shows\nA  can be greater than they think it is.\nB  will be different in different circumstances.\nC  may be determined by particular aspects of their personality.\nD  should develop over time as a result of their life experiences.",
          type: "multiple_choice",
          question: "29. According to the third paragraph, Grossmann claims that the level of wisdom an individual shows\nA  can be greater than they think it is.\nB  will be different in different circumstances.\nC  may be determined by particular aspects of their personality.\nD  should develop over time as a result of their life experiences.",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q30",
          number: 30,
          groupLabel: "30. What is described in the fifth paragraph?\nA  a difficulty encountered when attempting to reason wisely\nB  an example of the type of person who is likely to reason wisely\nC  a controversial view about the benefits of reasoning wisely\nD  a recommended strategy that can help people to reason wisely",
          type: "multiple_choice",
          question: "30. What is described in the fifth paragraph?\nA  a difficulty encountered when attempting to reason wisely\nB  an example of the type of person who is likely to reason wisely\nC  a controversial view about the benefits of reasoning wisely\nD  a recommended strategy that can help people to reason wisely",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        // ── Q31–35: Summary completion with word list ─────────────
        {
          id: "cam16-ra-t2-s3-q31",
          number: 31,
          groupLabel: "Questions 31–35: Complete the summary using the list of words, A–J, below.\nWrite the correct letter, A–J, in boxes 31–35 on your answer sheet.\n\nThe characteristics of wise reasoning\nIgor Grossmann and colleagues have established four characteristics which enable us to make wise decisions. It is important to have a certain degree of 31 ………………….. regarding the extent of our knowledge, and to take into account 32 ………………….. which may not be the same as our own. We should also be able to take a broad 33 ………………….. of any situation. Another key characteristic is being aware of the likelihood of alterations in the way that people relate to each other.\nGrossmann also believes that it is better to regard scenarios with 34 ………………….. . By avoiding the first-person perspective, we focus more on 35 ………………….. and on other moral ideals, which in turn leads to wiser decision-making.\n\nA  opinions    B  confidence    C  view\nD  modesty    E  problems    F  objectivity\nG  fairness    H  experiences    I  range\nJ  reasons",
          type: "matching",
          question: "31. It is important to have a certain degree of _______ regarding the extent of our knowledge",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q32",
          number: 32,
          type: "matching",
          question: "32. Take into account _______ which may not be the same as our own",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q33",
          number: 33,
          type: "matching",
          question: "33. We should be able to take a broad _______ of any situation",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q34",
          number: 34,
          type: "matching",
          question: "34. It is better to regard scenarios with _______",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q35",
          number: 35,
          type: "matching",
          question: "35. By avoiding the first-person perspective, we focus more on _______",
          options: [
            { label: "A  opinions", value: "A" },
            { label: "B  confidence", value: "B" },
            { label: "C  view", value: "C" },
            { label: "D  modesty", value: "D" },
            { label: "E  problems", value: "E" },
            { label: "F  objectivity", value: "F" },
            { label: "G  fairness", value: "G" },
            { label: "H  experiences", value: "H" },
            { label: "I  range", value: "I" },
            { label: "J  reasons", value: "J" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        // ── Q36–40: True/False/Not Given ──────────────────────────
        {
          id: "cam16-ra-t2-s3-q36",
          number: 36,
          groupLabel: "Questions 36–40: Do the following statements agree with the information given in Reading Passage 3?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n36  Students participating in the job prospects experiment could choose one of two perspectives to take.\n37  Participants in the couples experiment were aware that they were taking part in a study about wise reasoning.\n38  In the couples experiment, the length of the couples' relationships had an impact on the results.\n39  In both experiments, the participants who looked at the situation from a more detached viewpoint tended to make wiser decisions.\n40  Grossmann believes that a person's wisdom is determined by their intelligence to only a very limited extent.",
          type: "true_false_ng",
          question: "36. Students participating in the job prospects experiment could choose one of two perspectives to take.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "37. Participants in the couples experiment were aware that they were taking part in a study about wise reasoning.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "38. In the couples experiment, the length of the couples' relationships had an impact on the results.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. In both experiments, the participants who looked at the situation from a more detached viewpoint tended to make wiser decisions.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t2-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. Grossmann believes that a person's wisdom is determined by their intelligence to only a very limited extent.",
          correctAnswer: "TRUE",
          points: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CAMBRIDGE IELTS 16 – TEST 3  (Academic Reading)
// Passages: Roman shipbuilding and navigation /
//           Climate change reveals ancient artefacts in Norway's glaciers /
//           Plant 'thermometer' triggers springtime growth
// ============================================================
export const cambridge16_reading_t3: IELTSTest = {
  id: "cam16-reading-academic-t3",
  title: "Cambridge IELTS 16 – Test 3",
  bookNumber: 16,
  testNumber: 3,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t3-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "Roman shipbuilding and navigation",
      passageText: `Shipbuilding today is based on science and ships are built using computers and sophisticated tools. Shipbuilding in ancient Rome, however, was more of an art relying on estimation, inherited techniques and personal experience. The Romans were not traditionally sailors but mostly land-based people, who learned to build ships from the people that they conquered, namely the Greeks and the Egyptians.

There are a few surviving written documents that give descriptions and representations of ancient Roman ships, including the sails and rigging. Excavated vessels also provide some clues about ancient shipbuilding techniques. Studies of these have taught us that ancient Roman shipbuilders built the outer hull first, then proceeded with the frame and the rest of the ship. Planks used to build the outer hull were initially sewn together. Starting from the 6th century BCE, they were fixed using a method called mortise and tenon, whereby one plank locked into another without the need for stitching. Then in the first centuries of the current era, Mediterranean shipbuilders shifted to another shipbuilding method, still in use today, which consisted of building the frame first and then proceeding with the hull and the other components of the ship. This method was more systematic and dramatically shortened ship construction times. The ancient Romans built large merchant ships and warships whose size and technology were unequalled until the 16th century CE.

Warships were built to be lightweight and very speedy. They had to be able to sail near the coast which is why they had no ballast or excess load and were built with a long, narrow hull. They did not sink when damaged and often would lie crippled on the sea's surface following naval battles. They had a bronze battering ram, which was used to pierce the timber hulls or break the oars of enemy vessels. Warships used both wind (sails) and human power (oarsmen) and were therefore very fast. Eventually, Rome's navy became the largest and most powerful in the Mediterranean, and the Romans had control over what they therefore called Mare Nostrum meaning 'our sea'.

There were many kinds of warship. The 'trireme' was the dominant warship from the 7th to 4th century BCE. It had rowers in the top, middle and lower levels, and approximately 50 rowers in each bank. The rowers at the bottom had the most uncomfortable position as they were under the other rowers and were exposed to the water entering through the oar-holes. It is worth noting that contrary to popular perception, rowers were not slaves but mostly Roman citizens enrolled in the military. The trireme was superseded by larger ships with even more rowers.

Merchant ships were built to transport lots of cargo over long distances and at a reasonable cost. They had a wider hull, double planking and a solid interior for added stability. Unlike warships, their V-shaped hull was deep underwater, meaning that they could not sail too close to the coast. They usually had two huge side rudders located off the stern and controlled by a small tiller bar connected to a system of cables. They had from one to three masts with large square sails and a small triangular sail at the bow. Just like warships, merchant ships used oarsmen, but coordinating the hundreds of rowers in both types of ship was not an easy task. In order to assist them, music would be played on an instrument, and oars would then keep time with this.

The cargo on merchant ships included raw materials (e.g. iron bars, copper, marble and granite), and agricultural products (e.g. grain from Egypt's Nile valley). During the Empire, Rome was a huge city by ancient standards of about one million inhabitants. Goods from all over the world would come to the city through the port of Pozzuoli situated west of the bay of Naples in Italy and through the gigantic port of Ostia situated at the mouth of the Tiber River. Large merchant ships would approach the destination port and, just like today, be intercepted by a number of towboats that would drag them to the quay.

The time of travel along the many sailing routes could vary widely. Navigation in ancient Rome did not rely on sophisticated instruments such as compasses but on experience, local knowledge and observation of natural phenomena. In conditions of good visibility, seamen in the Mediterranean often had the mainland or islands in sight, which greatly facilitated navigation. They sailed by noting their position relative to a succession of recognisable landmarks. When weather conditions were not good or where land was no longer visible, Roman mariners estimated directions from the pole star or, with less accuracy, from the Sun at noon. They also estimated directions relative to the wind and swell. Overall, shipping in ancient Roman times resembled shipping today with large vessels regularly crossing the seas and bringing supplies from their Empire.`,
      instructions: `Questions 1–5: Do the following statements agree with the information given in Reading Passage 1?
Write TRUE, FALSE, or NOT GIVEN.

Questions 6–13: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        // ── Q1–5: True/False/Not Given ────────────────────────────
        {
          id: "cam16-ra-t3-s1-q1",
          number: 1,
          groupLabel: "Questions 1–5: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n1  The Romans' shipbuilding skills were passed on to the Greeks and the Egyptians.\n2  Skilled craftsmen were needed for the mortise and tenon method of fixing planks.\n3  The later practice used by Mediterranean shipbuilders involved building the hull before the frame.\n4  The Romans called the Mediterranean Sea Mare Nostrum because they dominated its use.\n5  Most rowers on ships were people from the Roman army.",
          type: "true_false_ng",
          question: "1. The Romans' shipbuilding skills were passed on to the Greeks and the Egyptians.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. Skilled craftsmen were needed for the mortise and tenon method of fixing planks.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. The later practice used by Mediterranean shipbuilders involved building the hull before the frame.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. The Romans called the Mediterranean Sea Mare Nostrum because they dominated its use.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. Most rowers on ships were people from the Roman army.",
          correctAnswer: "TRUE",
          points: 1,
        },
        // ── Q6–13: Summary completion ─────────────────────────────
        {
          id: "cam16-ra-t3-s1-q6",
          number: 6,
          groupLabel: "Questions 6–13: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nWarships and merchant ships\nWarships were designed so that they were 6 ………………… and moved quickly. They often remained afloat after battles and were able to sail close to land as they lacked any additional weight. A battering ram made of 7 ………………… was included in the design for attacking and damaging the timber and oars of enemy ships. Warships, such as the 'trireme', had rowers on three different 8 ………………… .\nUnlike warships, merchant ships had a broad 9 ………………… that lay far below the surface of the sea. Merchant ships were steered through the water with the help of large rudders and a tiller bar. They had both square and 10 ………………… sails. On merchant ships and warships, 11 ………………… was used to ensure rowers moved their oars in and out of the water at the same time.\nQuantities of agricultural goods such as 12 ………………… were transported by merchant ships to two main ports in Italy. The ships were pulled to the shore by 13 ………………… . When the weather was clear and they could see islands or land, sailors used landmarks that they knew to help them navigate their route.",
          type: "summary_completion",
          question: "6. Warships were designed so that they were _______",
          correctAnswer: "lightweight",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q7",
          number: 7,
          type: "summary_completion",
          question: "7. A battering ram made of _______ was included in the design",
          correctAnswer: "bronze",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q8",
          number: 8,
          type: "summary_completion",
          question: "8. Warships had rowers on three different _______",
          correctAnswer: "levels",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q9",
          number: 9,
          type: "summary_completion",
          question: "9. Merchant ships had a broad _______ that lay far below the surface of the sea",
          correctAnswer: "hull",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q10",
          number: 10,
          type: "summary_completion",
          question: "10. Merchant ships had both square and _______ sails",
          correctAnswer: "triangular",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q11",
          number: 11,
          type: "summary_completion",
          question: "11. _______ was used to ensure rowers moved their oars at the same time",
          correctAnswer: "music",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q12",
          number: 12,
          type: "summary_completion",
          question: "12. Agricultural goods such as _______ were transported by merchant ships",
          correctAnswer: "grain",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s1-q13",
          number: 13,
          type: "summary_completion",
          question: "13. The ships were pulled to the shore by _______",
          correctAnswer: "towboats",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t3-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Climate change reveals ancient artefacts in Norway's glaciers",
      passageText: `A
Well above the treeline in Norway's highest mountains, ancient fields of ice are shrinking as Earth's climate warms. As the ice has vanished, it has been giving up the treasures it has preserved in cold storage for the last 6,000 years – items such as ancient arrows and skis from Viking Age traders. And those artefacts have provided archaeologists with some surprising insights into how ancient Norwegians made their livings.

B
Organic materials like textiles and hides are relatively rare finds at archaeological sites. This is because unless they're protected from the microorganisms that cause decay, they tend not to last long. Extreme cold is one reliable way to keep artefacts relatively fresh for a few thousand years, but once thawed out, these materials experience degradation relatively swiftly.
With climate change shrinking ice cover around the world, glacial archaeologists need to race the clock to find newly revealed artefacts, preserve them, and study them. If something fragile dries and is windblown it might very soon be lost to science, or an arrow might be exposed and then covered again by the next snow and remain well-preserved. The unpredictability means that glacial archaeologists have to be systematic in their approach to fieldwork.

C
Over a nine-year period, a team of archaeologists, which included Lars Pilø of Oppland County Council, Norway, and James Barrett of the McDonald Institute for Archaeological Research, surveyed patches of ice in Oppland, an area of south-central Norway that is home to some of the country's highest mountains. Reindeer once congregated on these ice patches in the later summer months to escape biting insects, and from the late Stone Age, hunters followed. In addition, trade routes threaded through the mountain passes of Oppland, linking settlements in Norway to the rest of Europe.
The slow but steady movement of glaciers tends to destroy anything at their bases, so the team focused on stationary patches of ice, mostly above 1,400 metres. That ice is found amid fields of frost-weathered boulders, fallen rocks, and exposed bedrock that for nine months of the year is buried beneath snow.
'Fieldwork is hard work – hiking with all our equipment, often camping on permafrost – but very rewarding. You're rescuing the archaeology, bringing the melting ice to wider attention, discovering a unique environmental history and really connecting with the natural environment,' says Barrett.

D
At the edges of the contracting ice patches, archaeologists found more than 2,000 artefacts, which formed a material record that ran from 4,000 BCE to the beginnings of the Renaissance in the 14th century. Many of the artefacts are associated with hunting. Hunters would have easily misplaced arrows and they often discarded broken bows rather than take them all the way home. Other items could have been used by hunters traversing the high mountain passes of Oppland: all-purpose items like tools, skis, and horse tack.

E
Barrett's team radiocarbon-dated 153 of the artefacts and compared those dates to the timing of major environmental changes in the region – such as periods of cooling or warming – and major social and economic shifts – such as the growth of farming settlements and the spread of international trade networks leading up to the Viking Age. They found that some periods had produced lots of artefacts, which indicates that people had been pretty active in the mountains during those times. But there were few or no signs of activity during other periods.

F
What was surprising, according to Barrett, was the timing of these periods. Oppland's mountains present daunting terrain and in periods of extreme cold, glaciers could block the higher mountain passes and make travel in the upper reaches of the mountains extremely difficult. Archaeologists assumed people would stick to lower elevations during a time like the Late Antique Little Ice Age, a short period of deeper-than-usual cold from about 536-600 CE. But it turned out that hunters kept regularly venturing into the mountains even when the climate turned cold, based on the amount of stuff they had apparently dropped there.
'Remarkably, though, the finds from the ice may have continued through this period, perhaps suggesting that the importance of mountain hunting increased to supplement failing agricultural harvests in times of low temperatures,' says Barrett. A colder turn in the Scandinavian climate would likely have meant widespread crop failures, so more people would have depended on hunting to make up for those losses.

G
Many of the artefacts Barrett's team recovered date from the beginning of the Viking Age, the 700s through to the 900s CE. Trade networks connecting Scandinavia with Europe and the Middle East were expanding around this time. Although we usually think of ships when we think of Scandinavian expansion, these recent discoveries show that plenty of goods travelled on overland routes, like the mountain passes of Oppland. And growing Norwegian towns, along with export markets, would have created a booming demand for hides to fight off the cold, as well as antlers to make useful things like combs. Business must have been good for hunters.

H
Norway's mountains are probably still hiding a lot of history – and prehistory – in remote ice patches. When Barrett's team looked at the dates for their sample of 153 artefacts, they noticed a gap with almost no artefacts from about 3,800 to 2,200 BCE. In fact, archaeological finds from that period are rare all over Norway. The researchers say that could be because many of those artefacts have already disintegrated or are still frozen in the ice. That means archaeologists could be extracting some of those artefacts from retreating ice in years to come.`,
      instructions: `Questions 14–19: Which section contains the following information?
Write the correct letter, A–H.

Questions 20–22: Complete the summary below.
Choose ONE WORD ONLY from the passage for each answer.

Questions 23–24: Choose TWO letters, A–E.
Questions 25–26: Choose TWO letters, A–E.`,
      questions: [
        // ── Q14–19: Section matching ──────────────────────────────
        {
          id: "cam16-ra-t3-s2-q14",
          number: 14,
          groupLabel: "Questions 14–19: Reading Passage 2 has eight sections, A–H.\nWhich section contains the following information?\nWrite the correct letter, A–H, in boxes 14–19 on your answer sheet.",
          type: "matching",
          question: "14. an explanation for weapons being left behind in the mountains",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q15",
          number: 15,
          type: "matching",
          question: "15. a reference to the physical difficulties involved in an archaeological expedition",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q16",
          number: 16,
          type: "matching",
          question: "16. an explanation of why less food may have been available",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q17",
          number: 17,
          type: "matching",
          question: "17. a reference to the possibility of future archaeological discoveries",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q18",
          number: 18,
          type: "matching",
          question: "18. examples of items that would have been traded",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q19",
          number: 19,
          type: "matching",
          question: "19. a reference to the pressure archaeologists are under to work quickly",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        // ── Q20–22: Summary completion ─────────────────────────────
        {
          id: "cam16-ra-t3-s2-q20",
          number: 20,
          groupLabel: "Questions 20–22: Complete the summary below.\nChoose ONE WORD ONLY from the passage for each answer.\n\nInteresting finds at an archaeological site\nOrganic materials such as animal skins and textiles are not discovered very often at archaeological sites. They have little protection against 20 …………………, which means that they decay relatively quickly. But this is not always the case. If temperatures are low enough, fragile artefacts can be preserved for thousands of years.\nA team of archaeologists have been working in the mountains in Oppland in Norway to recover artefacts revealed by shrinking ice cover. In the past, there were trade routes through these mountains and 21 ………………… gathered there in the summer months to avoid being attacked by 22 ………………… on lower ground. The people who used these mountains left things behind and it is those objects that are of interest to archaeologists.",
          type: "summary_completion",
          question: "20. They have little protection against _______",
          correctAnswer: "microorganisms",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q21",
          number: 21,
          type: "summary_completion",
          question: "21. _______ gathered there in the summer months",
          correctAnswer: "reindeer",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q22",
          number: 22,
          type: "summary_completion",
          question: "22. to avoid being attacked by _______ on lower ground",
          correctAnswer: "insects",
          points: 1,
        },
        // ── Q23–24: Choose TWO – discoveries ──────────────────────
        {
          id: "cam16-ra-t3-s2-q23",
          number: 23,
          groupLabel: "Questions 23–24: Choose TWO letters, A–E.\nWhich TWO of the following statements does the writer make about the discoveries of Barrett's team?\n\nA  Artefacts found in the higher mountain passes were limited to skiing equipment.\nB  Hunters went into the mountains even during periods of extreme cold.\nC  The number of artefacts from certain time periods was relatively low.\nD  Radiocarbon dating of artefacts produced some unreliable results.\nE  More artefacts were found in Oppland than at any other mountain site.",
          type: "multiple_choice",
          question: "23. Which TWO statements does the writer make about the discoveries of Barrett's team? (Choose TWO — this is the first answer)\nA  Artefacts found in the higher mountain passes were limited to skiing equipment.\nB  Hunters went into the mountains even during periods of extreme cold.\nC  The number of artefacts from certain time periods was relatively low.\nD  Radiocarbon dating of artefacts produced some unreliable results.\nE  More artefacts were found in Oppland than at any other mountain site.",
          options: [
            { label: "A  Artefacts found in the higher mountain passes were limited to skiing equipment.", value: "A" },
            { label: "B  Hunters went into the mountains even during periods of extreme cold.", value: "B" },
            { label: "C  The number of artefacts from certain time periods was relatively low.", value: "C" },
            { label: "D  Radiocarbon dating of artefacts produced some unreliable results.", value: "D" },
            { label: "E  More artefacts were found in Oppland than at any other mountain site.", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q24",
          number: 24,
          type: "multiple_choice",
          question: "24. Which TWO statements does the writer make about the discoveries of Barrett's team? (Choose TWO — this is the second answer)\nA  Artefacts found in the higher mountain passes were limited to skiing equipment.\nB  Hunters went into the mountains even during periods of extreme cold.\nC  The number of artefacts from certain time periods was relatively low.\nD  Radiocarbon dating of artefacts produced some unreliable results.\nE  More artefacts were found in Oppland than at any other mountain site.",
          options: [
            { label: "A  Artefacts found in the higher mountain passes were limited to skiing equipment.", value: "A" },
            { label: "B  Hunters went into the mountains even during periods of extreme cold.", value: "B" },
            { label: "C  The number of artefacts from certain time periods was relatively low.", value: "C" },
            { label: "D  Radiocarbon dating of artefacts produced some unreliable results.", value: "D" },
            { label: "E  More artefacts were found in Oppland than at any other mountain site.", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        // ── Q25–26: Choose TWO – Viking Age ───────────────────────
        {
          id: "cam16-ra-t3-s2-q25",
          number: 25,
          groupLabel: "Questions 25–26: Choose TWO letters, A–E.\nWhich TWO of the following statements does the writer make about the Viking Age?\n\nA  Hunters at this time benefited from an increased demand for goods.\nB  The beginning of the period saw the greatest growth in the wealth of Vikings.\nC  Vikings did not rely on ships alone to transport goods.\nD  Norwegian towns at this time attracted traders from around the world.\nE  Vikings were primarily interested in their trading links with the Middle East.",
          type: "multiple_choice",
          question: "25. Which TWO statements does the writer make about the Viking Age? (Choose TWO — this is the first answer)\nA  Hunters at this time benefited from an increased demand for goods.\nB  The beginning of the period saw the greatest growth in the wealth of Vikings.\nC  Vikings did not rely on ships alone to transport goods.\nD  Norwegian towns at this time attracted traders from around the world.\nE  Vikings were primarily interested in their trading links with the Middle East.",
          options: [
            { label: "A  Hunters at this time benefited from an increased demand for goods.", value: "A" },
            { label: "B  The beginning of the period saw the greatest growth in the wealth of Vikings.", value: "B" },
            { label: "C  Vikings did not rely on ships alone to transport goods.", value: "C" },
            { label: "D  Norwegian towns at this time attracted traders from around the world.", value: "D" },
            { label: "E  Vikings were primarily interested in their trading links with the Middle East.", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. Which TWO statements does the writer make about the Viking Age? (Choose TWO — this is the second answer)\nA  Hunters at this time benefited from an increased demand for goods.\nB  The beginning of the period saw the greatest growth in the wealth of Vikings.\nC  Vikings did not rely on ships alone to transport goods.\nD  Norwegian towns at this time attracted traders from around the world.\nE  Vikings were primarily interested in their trading links with the Middle East.",
          options: [
            { label: "A  Hunters at this time benefited from an increased demand for goods.", value: "A" },
            { label: "B  The beginning of the period saw the greatest growth in the wealth of Vikings.", value: "B" },
            { label: "C  Vikings did not rely on ships alone to transport goods.", value: "C" },
            { label: "D  Norwegian towns at this time attracted traders from around the world.", value: "D" },
            { label: "E  Vikings were primarily interested in their trading links with the Middle East.", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam16-ra-t3-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "Plant 'thermometer' triggers springtime growth by measuring night-time heat",
      passageText: `A
An international team of scientists led by the University of Cambridge has discovered that the 'thermometer' molecule in plants enables them to develop according to seasonal temperature changes. Researchers have revealed that molecules called phytochromes – used by plants to detect light during the day – actually change their function in darkness to become cellular temperature gauges that measure the heat of the night.
The new findings, published in the journal Science, show that phytochromes control genetic switches in response to temperature as well as light to dictate plant development.

B
At night, these molecules change states, and the pace at which they change is 'directly proportional to temperature', say scientists, who compare phytochromes to mercury in a thermometer. The warmer it is, the faster the molecular change – stimulating plant growth.

C
Farmers and gardeners have known for hundreds of years how responsive plants are to temperature: warm winters cause many trees and flowers to bud early, something humans have long used to predict weather and harvest times for the coming year. The latest research pinpoints for the first time a molecular mechanism in plants that reacts to temperature – often triggering the buds of spring we long to see at the end of winter.

D
With weather and temperatures set to become ever more unpredictable due to climate change, researchers say the discovery that this light-sensing molecule also functions as the internal thermometer in plant cells could help us breed tougher crops. 'It is estimated that agricultural yields will need to double by 2050, but climate change is a major threat to achieving this. Key crops such as wheat and rice are sensitive to high temperatures. Thermal stress reduces crop yields by around 10% for every one degree increase in temperature,' says lead researcher Dr Philip Wigge from Cambridge's Sainsbury Laboratory. 'Discovering the molecules that allow plants to sense temperature has the potential to accelerate the breeding of crops resilient to thermal stress and climate change.'

E
In their active state, phytochrome molecules bind themselves to DNA to restrict plant growth. During the day, sunlight activates the molecules, slowing down growth. If a plant finds itself in shade, phytochromes are quickly inactivated – enabling it to grow faster to find sunlight again. This is how plants compete to escape each other's shade. 'Light-driven changes to phytochrome activity occur very fast, in less than a second,' says Wigge.
At night, however, it's a different story. Instead of a rapid deactivation following sundown, the molecules gradually change from their active to inactive state. This is called 'dark reversion'. 'Just as mercury rises in a thermometer, the rate at which phytochromes revert to their inactive state during the night is a direct measure of temperature,' says Wigge.

F
'The lower the temperature, the slower the rate at which phytochromes revert to inactivity, so the molecules spend more time in their active, growth-suppressing state. This is why plants are slower to grow in winter. Warm temperatures accelerate dark reversion, so that phytochromes rapidly reach an inactive state and detach themselves from the plant's DNA – allowing genes to be expressed and plant growth to resume.' Wigge believes phytochrome thermo-sensing evolved at a later stage, and co-opted the biological network already used for light-based growth during the downtime of night.

G
Some plants mainly use day length as an indicator of the season. Other species, such as daffodils, have considerable temperature sensitivity, and can flower months in advance during a warm winter. In fact, the discovery of the dual role of phytochromes provides the science behind a well-known rhyme long used to predict the coming season: oak before ash we'll have a plash, ash before oak we're in for a soak.
Wigge explains: 'Oak trees rely much more on temperature, likely using phytochromes as thermometers to dictate development, whereas ash trees rely on measuring day length to determine their seasonal timing. A warmer spring, and consequently a higher likeliness of a hot summer, will result in oak leafing before ash. A cold spring will see the opposite. As the British know only too well, a colder summer is likely to be a rain-soaked one.'

H
The new findings are the culmination of twelve years of research involving scientists from Germany, Argentina and the US, as well as the Cambridge team. The work was done in a model system, using a mustard plant called Arabidopsis, but Wigge says the phytochrome genes necessary for temperature sensing are found in crop plants as well. 'Recent advances in plant genetics now mean that scientists are able to rapidly identify the genes controlling these processes in crop plants, and even alter their activity using precise molecular "scalpels",' adds Wigge. 'Cambridge is uniquely well-positioned to do this kind of research as we have outstanding collaborators nearby who work on more applied aspects of plant biology, and can help us transfer this new knowledge into the field.'`,
      instructions: `Questions 27–32: Do the following statements agree with the information given in Reading Passage 3?
Write TRUE, FALSE, or NOT GIVEN.

Questions 33–37: Which section contains the following information?
Write the correct letter, A–H.

Questions 38–40: Complete the sentences below.
Choose NO MORE THAN TWO WORDS from the passage for each answer.`,
      questions: [
        // ── Q27–32: True/False/Not Given ──────────────────────────
        {
          id: "cam16-ra-t3-s3-q27",
          number: 27,
          groupLabel: "Questions 27–32: Do the following statements agree with the information given in Reading Passage 3?\nWrite TRUE, FALSE, or NOT GIVEN.\n\n27  The Cambridge scientists' discovery of the 'thermometer molecule' caused surprise among other scientists.\n28  The target for agricultural production by 2050 could be missed.\n29  Wheat and rice suffer from a rise in temperatures.\n30  It may be possible to develop crops that require less water.\n31  Plants grow faster in sunlight than in shade.\n32  Phytochromes change their state at the same speed day and night.",
          type: "true_false_ng",
          question: "27. The Cambridge scientists' discovery of the 'thermometer molecule' caused surprise among other scientists.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q28",
          number: 28,
          type: "true_false_ng",
          question: "28. The target for agricultural production by 2050 could be missed.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q29",
          number: 29,
          type: "true_false_ng",
          question: "29. Wheat and rice suffer from a rise in temperatures.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q30",
          number: 30,
          type: "true_false_ng",
          question: "30. It may be possible to develop crops that require less water.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q31",
          number: 31,
          type: "true_false_ng",
          question: "31. Plants grow faster in sunlight than in shade.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q32",
          number: 32,
          type: "true_false_ng",
          question: "32. Phytochromes change their state at the same speed day and night.",
          correctAnswer: "FALSE",
          points: 1,
        },
        // ── Q33–37: Section matching ──────────────────────────────
        {
          id: "cam16-ra-t3-s3-q33",
          number: 33,
          groupLabel: "Questions 33–37: Reading Passage 3 has eight sections, A–H.\nWhich section contains the following information?\nWrite the correct letter, A–H, in boxes 33–37 on your answer sheet.",
          type: "matching",
          question: "33. mention of specialists who can make use of the research findings",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q34",
          number: 34,
          type: "matching",
          question: "34. a reference to a potential benefit of the research findings",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q35",
          number: 35,
          type: "matching",
          question: "35. scientific support for a traditional saying",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q36",
          number: 36,
          type: "matching",
          question: "36. a reference to people traditionally making plans based on plant behaviour",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q37",
          number: 37,
          type: "matching",
          question: "37. a reference to where the research has been reported",
          options: [
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
            { label: "F", value: "F" },
            { label: "G", value: "G" },
            { label: "H", value: "H" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        // ── Q38–40: Sentence completion ────────────────────────────
        {
          id: "cam16-ra-t3-s3-q38",
          number: 38,
          groupLabel: "Questions 38–40: Complete the sentences below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.\n\n38  Daffodils are likely to flower early in response to ………………….. weather.\n39  If ash trees come into leaf before oak trees, the weather in ………………….. will probably be wet.\n40  The research was carried out using a particular species of ………………….. .",
          type: "summary_completion",
          question: "38. Daffodils are likely to flower early in response to _______ weather.",
          correctAnswer: "warm",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q39",
          number: 39,
          type: "summary_completion",
          question: "39. If ash trees come into leaf before oak trees, the weather in _______ will probably be wet.",
          correctAnswer: "summer",
          points: 1,
        },
        {
          id: "cam16-ra-t3-s3-q40",
          number: 40,
          type: "summary_completion",
          question: "40. The research was carried out using a particular species of _______.",
          correctAnswer: "mustard plant",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge16Tests: IELTSTest[] = [cambridge16_reading_t1, cambridge16_reading_t2, cambridge16_reading_t3];
