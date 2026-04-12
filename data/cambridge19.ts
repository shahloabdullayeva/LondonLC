import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 19 – TEST 1  (Academic Reading)
// Passages: How tennis rackets have changed /
//           The pirates of the ancient Mediterranean /
//           The persistence and peril of misinformation
// ============================================================
export const cambridge19_reading_t1: IELTSTest = {
  id: "cam19-reading-academic-t1",
  title: "Cambridge IELTS 19 – Test 1",
  bookNumber: 19,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam19-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "How tennis rackets have changed",
      passageText: `In 2016, the British professional tennis player Andy Murray was ranked as the world's number one. It was an incredible achievement by any standard – made even more remarkable by the fact that he did this during a period considered to be one of the strongest in the sport's history, competing against the likes of Rafael Nadal, Roger Federer and Novak Djokovic, to name just a few. Yet five years previously, he had been regarded as a talented outsider who entered but never won the major tournaments.

Of the changes that account for this transformation, one was visible and widely publicised: in 2011, Murray invited former number one player Ivan Lendl onto his coaching team – a valuable addition that had a visible impact on the player's playing style. Another change was so subtle as to pass more or less unnoticed. Like many players, Murray has long preferred a racket that consists of two types of string: one for the mains (verticals) and another for the crosses (horizontals). While he continued to use natural string in the crosses, in 2012 he switched to a synthetic string for the mains. A small change, perhaps, but its importance should not be underestimated.

The modification that Murray made is just one of a number of options available to players looking to tweak their rackets in order to improve their games. 'Touring professionals have their rackets customised to their specific needs,' says Colin Triplow, a UK-based professional racket stringer. 'It's a highly important part of performance maximisation.' Consequently, the specific rackets used by the world's elite are not actually readily available to the public; rather, each racket is individually made to suit the player who uses it. Take the US professional tennis players Mike and Bob Bryan, for example: 'We're very particular with our racket specifications,' they say. 'All our rackets are sent from our manufacturer to Tampa, Florida, where our frames go through a . . . thorough customisation process.' They explain how they have adjusted not only racket length, but even experimented with different kinds of paint. The rackets they use now weigh more than the average model and also have a denser string pattern (i.e. more crosses and mains).

The primary reason for these modifications is simple: as the line between winning and losing becomes thinner and thinner, even these slight changes become more and more important. As a result, players and their teams are becoming increasingly creative with the modifications to their rackets as they look to maximise their competitive advantage.

Racket modifications mainly date back to the 1970s, when the amateur German tennis player Werner Fischer started playing with the so-called spaghetti-strung racket. It created a string bed that generated so much topspin that it was quickly banned by the International Tennis Federation. However, within a decade or two, racket modification became a regularity. Today it is, in many ways, an aspect of the game that is equal in significance to nutrition or training.

Modifications can be divided into two categories: those to the string bed and those to the racket frame. The former is far more common than the latter: the choice of the strings and the tension with which they are installed is something that nearly all professional players experiment with. They will continually change it depending on various factors including the court surface, climatic conditions, and game styles. Some will even change it depending on how they feel at the time.

At one time, all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines. This all changed in the early 1990s with the development of synthetic strings that were cheaper and more durable. They are made from three materials: nylon (relatively durable and affordable), Kevlar (too stiff to be used alone) or co-polyester (polyester combined with additives that enhance its performance). Even so, many professional players continue to use a 'hybrid set-up', where a combination of both synthetic and natural strings are used.

Of the synthetics, co-polyester is by far the most widely used. It's a perfect fit for the style of tennis now played, where players tend to battle it out from the back of the court rather than coming to the net. Studies indicate that the average spin from a co-polyester string is 25% greater than that from natural string or other synthetics. In a sense, the development of co-polyester strings has revolutionised the game.

However, many players go beyond these basic adjustments to the strings and make changes to the racket frame itself. For example, much of the serving power of US professional player Pete Sampras was attributed to the addition of four to five lead weights onto his rackets, and today many professionals have the weight adjusted during the manufacturing process.

Other changes to the frame involve the handle. Players have individual preferences for the shape of the handle and some will have the handle of one racket moulded onto the frame of a different racket. Other players make different changes. The professional Portuguese player Gonçalo Oliveira replaced the original grips of his rackets with something thinner because they had previously felt uncomfortable to hold.

Racket customisation and modification have pushed the standards of the game to greater levels that few could have anticipated in the days of natural strings and heavy, wooden frames, and it's exciting to see what further developments there will be in the future.`,
      instructions: `Questions 1–7: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.
Questions 8–13: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.`,
      questions: [
        {
          id: "cam19-ra-t1-s1-q1",
          number: 1,
          groupLabel: `Questions 1–7: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE if the statement agrees with the information.\nWrite FALSE if the statement contradicts the information.\nWrite NOT GIVEN if there is no information on this.`,
          type: "true_false_ng",
          question: "1. People had expected Andy Murray to become the world's top tennis player for at least five years before 2016.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. The change that Andy Murray made to his rackets attracted a lot of attention.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. Most of the world's top players take a professional racket stringer on tour with them.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. Mike and Bob Bryan use rackets that are light in comparison to the majority of rackets.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. Werner Fischer played with a spaghetti-strung racket that he designed himself.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. The weather can affect how professional players adjust the strings on their rackets.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q7",
          number: 7,
          type: "true_false_ng",
          question: "7. It was believed that the change Pete Sampras made to his rackets contributed to his strong serve.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q8",
          number: 8,
          groupLabel: `Questions 8–13: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.\n\nThe tennis racket and how it has changed\n●  Mike and Bob Bryan made changes to the types of 8 _______ used on their racket frames.\n●  Players were not allowed to use the spaghetti-strung racket because of the amount of 9 _______ it created.\n●  Changes to rackets can be regarded as being as important as players' diets or the 10 _______ they do.\n●  All rackets used to have natural strings made from the 11 _______ of animals.\n●  Pete Sampras had metal 12 _______ put into the frames of his rackets.\n●  Gonçalo Oliveira changed the 13 _______ on his racket handles.`,
          type: "note_completion",
          question: "8. Mike and Bob Bryan made changes to the types of _______ used on their racket frames.",
          correctAnswer: "paint",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q9",
          number: 9,
          type: "note_completion",
          question: "9. Players were not allowed to use the spaghetti-strung racket because of the amount of _______ it created.",
          correctAnswer: "topspin",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q10",
          number: 10,
          type: "note_completion",
          question: "10. Changes to rackets can be regarded as being as important as players' diets or the _______ they do.",
          correctAnswer: "training",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q11",
          number: 11,
          type: "note_completion",
          question: "11. All rackets used to have natural strings made from the _______ of animals.",
          correctAnswer: "intestines",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q12",
          number: 12,
          type: "note_completion",
          question: "12. Pete Sampras had metal _______ put into the frames of his rackets.",
          correctAnswer: "weights",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s1-q13",
          number: 13,
          type: "note_completion",
          question: "13. Gonçalo Oliveira changed the _______ on his racket handles.",
          correctAnswer: "grips",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam19-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "The pirates of the ancient Mediterranean",
      passageText: `A
When one mentions pirates, an image springs to most people's minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea. Yet from the first to the third millennium BCE, thousands of years before these swashbucklers began spreading fear across the Caribbean, pirates prowled the Mediterranean, raiding merchant ships and threatening vital trade routes. However, despite all efforts and the might of various ancient states, piracy could not be stopped. The situation remained unchanged for thousands of years. Only when the pirates directly threatened the interests of ancient Rome did the Roman Republic organise a massive fleet to eliminate piracy. Under the command of the Roman general Pompey, Rome eradicated piracy, transforming the Mediterranean into 'Mare Nostrum' (Our Sea).

B
Although piracy in the Mediterranean is first recorded in ancient Egypt during the reign of Pharaoh Amenhotep III (c 1390–1353 BCE), it is reasonable to assume it predated this powerful civilisation. This is partly due to the great importance the Mediterranean held at this time, and partly due to its geography. While the Mediterranean region is predominantly fertile, some parts are rugged and hilly, even mountainous. In the ancient times, the inhabitants of these areas relied heavily on marine resources, including fish and salt. Most had their own boats, possessed good seafaring skills, and unsurpassed knowledge of the local coastline and sailing routes. Thus, it is not surprising that during hardships, these men turned to piracy. Geography itself further benefited the pirates, with the numerous coves along the coast providing places for them to hide their boats and strike undetected. Before the invention of ocean-going caravels in the 15th century, ships could not easily cross long distances over open water. Thus, in the ancient world most were restricted to a few well-known navigable routes that followed the coastline. Caught in a trap, a slow merchant ship laden with goods had no other option but to surrender. In addition, knowledge of the local area helped the pirates to avoid retaliation once a state fleet arrived.

C
One should also add that it was not unknown in the first and second millennia BCE for governments to resort to pirates' services, especially during wartime, employing their skills and numbers against their opponents. A pirate fleet would serve in the first wave of attack, preparing the way for the navy. Some of the regions were known for providing safe harbours to pirates, who, in return, boosted the local economy.

D
The first known record of a named group of Mediterranean pirates, made during the rule of ancient Egyptian Pharaoh Akhenaten (c 1353–1336 BCE), was in the Amarna Letters. These were extracts of diplomatic correspondence between the pharaoh and his allies, and covered many pressing issues, including piracy. It seems the pharaoh was troubled by two distinct pirate groups, the Lukka and the Sherden. Despite the Egyptian fleet's best efforts, the pirates continued to cause substantial disruption to regional commerce. In the letters, the king of Alashiya (modern Cyprus) rejected Akhenaten's claims of a connection with the Lukka (based in modern-day Turkey). The king assured Akhenaten he was prepared to punish any of his subjects involved in piracy.

E
The ancient Greek world's experience of piracy was different from that of Egyptian rulers. While Egypt's power was land-based, the ancient Greeks relied on the Mediterranean in almost all aspects of life, from trade to warfare. Interestingly, in his works the Iliad and the Odyssey, the ancient Greek writer Homer not only condones, but praises the lifestyle and actions of pirates. The opinion remained unchanged in the following centuries. The ancient Greek historian Thucydides, for instance, glorified pirates' daring attacks on ships or even cities. For Greeks, piracy was a part of everyday life. Even high-ranking members of the state were not beyond engaging in such activities. According to the Greek orator Demosthenes, in 355 BCE, Athenian ambassadors made a detour from their official travel to capture a ship sailing from Egypt, taking the wealth found onboard for themselves! The Greeks' liberal approach towards piracy does not mean they always tolerated it, but attempts to curtail piracy were hampered by the large number of pirates operating in the Mediterranean.

F
The rising power of ancient Rome required the Roman Republic to deal with piracy in the Mediterranean. While piracy was a serious issue for the Republic, Rome profited greatly from its existence. Pirate raids provided a steady source of slaves, essential for Rome's agriculture and mining industries. But this arrangement could work only while the pirates left Roman interests alone. Pirate attacks on grain ships, which were essential to Roman citizens, led to angry voices in the Senate, demanding punishment of the culprits. Rome, however, did nothing, further encouraging piracy. By the 1st century BCE, emboldened pirates kidnapped prominent Roman dignitaries, asking for a large ransom to be paid. Their most famous hostage was none other than Julius Caesar, captured in 75 BCE.

G
By now, Rome was well aware that pirates had outlived their usefulness. The time had come for concerted action. In 67 BCE, a new law granted Pompey vast funds to combat the Mediterranean menace. Taking personal command, Pompey divided the entire Mediterranean into 13 districts, assigning a fleet and commander to each. After cleansing one district of pirates, the fleet would join another in the next district. The process continued until the entire Mediterranean was free of pirates. Although thousands of pirates died at the hands of Pompey's troops, as a long-term solution to the problem, many more were offered land in fertile areas located far from the sea. Instead of a maritime menace, Rome got productive farmers that further boosted its economy.`,
      instructions: `Questions 14–19: Matching information — which paragraph A–G contains each piece of information? NB You may use any letter more than once.
Questions 20–21: Choose TWO letters, A–E (statements about inhabitants of the Mediterranean).
Questions 22–23: Choose TWO letters, A–E (statements about piracy and ancient Greece).
Questions 24–26: Summary completion — ONE WORD ONLY from the passage.`,
      questions: [
        {
          id: "cam19-ra-t1-s2-q14",
          number: 14,
          groupLabel: `Questions 14–19: Reading Passage 2 has seven paragraphs, A–G. Which paragraph contains the following information?\nNB You may use any letter more than once.\n\n14  a reference to a denial of involvement in piracy\n15  details of how a campaign to eradicate piracy was carried out\n16  a mention of the circumstances in which states in the ancient world would make use of pirates\n17  a reference to how people today commonly view pirates\n18  an explanation of how some people were encouraged not to return to piracy\n19  a mention of the need for many sailing vessels to stay relatively close to land`,
          type: "matching",
          question: "14. a reference to a denial of involvement in piracy",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. details of how a campaign to eradicate piracy was carried out",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. a mention of the circumstances in which states in the ancient world would make use of pirates",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. a reference to how people today commonly view pirates",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "18. an explanation of how some people were encouraged not to return to piracy",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q19",
          number: 19,
          type: "matching",
          question: "19. a mention of the need for many sailing vessels to stay relatively close to land",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q20",
          number: 20,
          groupLabel: `Questions 20 and 21: Choose TWO letters, A–E.\n\nWhich TWO of the following statements does the writer make about inhabitants of the Mediterranean region in the ancient world?\n\nA  They often used stolen vessels to carry out pirate attacks.\nB  They managed to escape capture by the authorities because they knew the area so well.\nC  They paid for information about the routes merchant ships would take.\nD  They depended more on the sea for their livelihood than on farming.\nE  They stored many of the goods taken in pirate attacks in coves along the coastline.`,
          type: "multiple_choice",
          question: "20. Choose TWO (first answer)",
          options: [
            { label: "A  They often used stolen vessels to carry out pirate attacks.", value: "A" },
            { label: "B  They managed to escape capture by the authorities because they knew the area so well.", value: "B" },
            { label: "C  They paid for information about the routes merchant ships would take.", value: "C" },
            { label: "D  They depended more on the sea for their livelihood than on farming.", value: "D" },
            { label: "E  They stored many of the goods taken in pirate attacks in coves along the coastline.", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q21",
          number: 21,
          type: "multiple_choice",
          question: "21. Choose TWO (second answer)",
          options: [
            { label: "A  They often used stolen vessels to carry out pirate attacks.", value: "A" },
            { label: "B  They managed to escape capture by the authorities because they knew the area so well.", value: "B" },
            { label: "C  They paid for information about the routes merchant ships would take.", value: "C" },
            { label: "D  They depended more on the sea for their livelihood than on farming.", value: "D" },
            { label: "E  They stored many of the goods taken in pirate attacks in coves along the coastline.", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q22",
          number: 22,
          groupLabel: `Questions 22 and 23: Choose TWO letters, A–E.\n\nWhich TWO of the following statements does the writer make about piracy and ancient Greece?\n\nA  The state estimated that very few people were involved in piracy.\nB  Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written.\nC  Important officials were known to occasionally take part in piracy.\nD  Every citizen regarded pirate attacks on cities as unacceptable.\nE  A favourable view of piracy is evident in certain ancient Greek texts.`,
          type: "multiple_choice",
          question: "22. Choose TWO (first answer)",
          options: [
            { label: "A  The state estimated that very few people were involved in piracy.", value: "A" },
            { label: "B  Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written.", value: "B" },
            { label: "C  Important officials were known to occasionally take part in piracy.", value: "C" },
            { label: "D  Every citizen regarded pirate attacks on cities as unacceptable.", value: "D" },
            { label: "E  A favourable view of piracy is evident in certain ancient Greek texts.", value: "E" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q23",
          number: 23,
          type: "multiple_choice",
          question: "23. Choose TWO (second answer)",
          options: [
            { label: "A  The state estimated that very few people were involved in piracy.", value: "A" },
            { label: "B  Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written.", value: "B" },
            { label: "C  Important officials were known to occasionally take part in piracy.", value: "C" },
            { label: "D  Every citizen regarded pirate attacks on cities as unacceptable.", value: "D" },
            { label: "E  A favourable view of piracy is evident in certain ancient Greek texts.", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q24",
          number: 24,
          groupLabel: `Questions 24–26: Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.\n\nAncient Rome and piracy\nPiracy was an issue ancient Rome had to deal with, but it also brought some benefits for Rome. For example, pirates supplied slaves that were important for Rome's industries. However, attacks on vessels transporting 24 _______ to Rome resulted in calls for 25 _______ for the pirates responsible. Nevertheless, piracy continued, with some pirates demanding a 26 _______ for the return of the Roman officials they captured.`,
          type: "summary_completion",
          question: "24. attacks on vessels transporting _______ to Rome",
          correctAnswer: "grain",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q25",
          number: 25,
          type: "summary_completion",
          question: "25. resulted in calls for _______ for the pirates responsible",
          correctAnswer: "punishment",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s2-q26",
          number: 26,
          type: "summary_completion",
          question: "26. some pirates demanding a _______ for the return of the Roman officials they captured",
          correctAnswer: "ransom",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam19-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "The persistence and peril of misinformation",
      passageText: `Misinformation – both deliberately promoted and accidentally shared – is perhaps an inevitable part of the world in which we live, but it is not a new problem. People likely have lied to one another for roughly as long as verbal communication has existed. Deceiving others can offer an apparent opportunity to gain strategic advantage, to motivate others to action, or even to protect interpersonal bonds. Moreover, people inadvertently have been sharing inaccurate information with one another for thousands of years.

However, we currently live in an era in which technology enables information to reach large audiences distributed across the globe, and thus the potential for immediate and widespread effects from misinformation now looms larger than in the past. Yet the means to correct misinformation might, over time, be found in those same patterns of mass communication and of the facilitated spread of information.

The main worry regarding misinformation is its potential to unduly influence attitudes and behavior, leading people to think and act differently than they would if they were correctly informed, as suggested by the research teams of Stephan Lewandowsky of the University of Bristol and Elizabeth Marsh of Duke University, among others. In other words, we worry that misinformation might lead people to hold misperceptions (or false beliefs) and that these misperceptions, especially when they occur among large groups of people, may have detrimental, downstream consequences for health, social harmony, and the political climate.

At least three observations related to misinformation in the contemporary mass-media environment warrant the attention of researchers, policy makers, and really everyone who watches television, listens to the radio, or reads information online. First of all, people who encounter misinformation tend to believe it, at least initially. Secondly, electronic and print media often do not block many types of misinformation before it appears in content available to large audiences. Thirdly, countering misinformation once it has enjoyed wide exposure can be a resource-intensive effort.

Knowing what happens when people initially encounter misinformation holds tremendous importance for estimating the potential for subsequent problems. Although it is fairly routine for individuals to come across information that is false, the question of exactly how – and when – we mentally label information as true or false has garnered philosophical debate. The dilemma is neatly summarized by a contrast between how the 17th-century philosophers Rene Descartes and Baruch Spinoza described human information engagement, with conflicting predictions that only recently have been empirically tested in robust ways. Descartes argued that a person only accepts or rejects information after considering its truth or falsehood; Spinoza argued that people accept all encountered information (or misinformation) by default and then subsequently verify or reject it through a separate cognitive process. In recent decades, empirical evidence from the research teams of Erik Asp of the University of Chicago and Daniel Gilbert at Harvard University, among others, has supported Spinoza's account: people appear to encode all new information as if it were true, even if only momentarily, and later tag the information as being either true or false, a pattern that seems consistent with the observation that mental resources for skepticism physically reside in a different part of the brain than the resources used in perceiving and encoding.

What about our second observation that misinformation often can appear in electronic or print media without being preemptively blocked? In support of this, one might consider the nature of regulatory structures in the United States: regulatory agencies here tend to focus on post hoc detection of broadcast information. Organizations such as the Food and Drug Administration (FDA) offer considerable monitoring and notification functions, but these roles typically do not involve preemptive censoring. The FDA oversees direct-to-consumer prescription drug advertising, for example, and has developed mechanisms such as the 'Bad Ad' program, through which people can report advertising in apparent violation of FDA guidelines on drug risks. Such programs, although laudable and useful, do not keep false advertising off the airwaves. In addition, even misinformation that is successfully corrected can continue to affect attitudes.

This leads us to our third observation: a campaign to correct misinformation, even if rhetorically compelling, requires resources and planning to accomplish necessary reach and frequency. For corrective campaigns to be persuasive, audiences need to be able to comprehend them, which requires either effort to frame messages in ways that are accessible or effort to educate and sensitize audiences to the possibility of misinformation. That some audiences might be unaware of the potential for misinformation also suggests the utility of media literacy efforts as early as elementary school. Even with journalists and scholars pointing to the phenomenon of 'fake news', people do not distinguish between demonstrably false stories and those based in fact when scanning and processing written information.

We live at a time when widespread misinformation is common. Yet at this time many people also are passionately developing potential solutions and remedies. The journey forward undoubtedly will be a long and arduous one. Future remedies will require not only continued theoretical consideration but also the development and maintenance of consistent monitoring tools – and a recognition among fellow members of society that claims which find prominence in the media that are insufficiently based in scientific consensus and social reality should be countered. Misinformation arises as a result of human fallibility and human information needs. To overcome the worst effects of the phenomenon, we will need coordinated efforts over time, rather than any singular one-time panacea we could hope to offer.`,
      instructions: `Questions 27–30: Multiple choice — choose the correct letter A–D.
Questions 31–36: Summary completion — choose the correct phrase A–J.
Questions 37–40: Do the statements agree with the claims of the writer? Write YES, NO, or NOT GIVEN.`,
      questions: [
        {
          id: "cam19-ra-t1-s3-q27",
          number: 27,
          groupLabel: `Questions 27–30: Choose the correct letter, A, B, C or D.`,
          type: "multiple_choice",
          question: "27. What point does the writer make about misinformation in the first paragraph?",
          options: [
            { label: "A  Misinformation is a relatively recent phenomenon.", value: "A" },
            { label: "B  Some people find it easy to identify misinformation.", value: "B" },
            { label: "C  Misinformation changes as it is passed from one person to another.", value: "C" },
            { label: "D  There may be a number of reasons for the spread of misinformation.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. What does the writer say about the role of technology?",
          options: [
            { label: "A  It may at some point provide us with a solution to misinformation.", value: "A" },
            { label: "B  It could fundamentally alter the way in which people regard information.", value: "B" },
            { label: "C  It has changed the way in which organisations use misinformation.", value: "C" },
            { label: "D  It has made it easier for people to check whether information is accurate.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. What is the writer doing in the fourth paragraph?",
          options: [
            { label: "A  comparing the different opinions people have of misinformation.", value: "A" },
            { label: "B  explaining how the effects of misinformation have changed over time", value: "B" },
            { label: "C  outlining which issues connected with misinformation are significant today", value: "C" },
            { label: "D  describing the attitude of policy makers towards misinformation in the media", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. What point does the writer make about regulation in the USA?",
          options: [
            { label: "A  The guidelines issued by the FDA need to be simplified.", value: "A" },
            { label: "B  Regulation does not affect people's opinions of new prescription drugs.", value: "B" },
            { label: "C  The USA has more regulatory bodies than most other countries.", value: "C" },
            { label: "D  Regulation fails to prevent misinformation from appearing in the media.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q31",
          number: 31,
          groupLabel: `Questions 31–36: Complete the summary using the list of phrases, A–J, below.\n\nWhat happens when people encounter misinformation?\nAlthough people have 31 _______ to misinformation, there is debate about precisely how and when we label something as true or untrue. The philosophers Descartes and Spinoza had 32 _______ about how people engage with information. While Descartes believed that people accept or reject information after considering whether it is true or not, Spinoza argued that people accepted all information they encountered (and by default misinformation) and did not verify or reject it until afterwards. Moreover, Spinoza believes that a distinct 33 _______ is involved in these stages. Recent research has provided 34 _______ for Spinoza's theory and it would appear that people accept all encountered information as if it were true, even if this is for an extremely 35 _______, and do not label the information as true or false until later. This is consistent with the fact that the resources for scepticism and the resources for perceiving and encoding are in 36 _______ in the brain.\n\nA  constant conflict\nB  additional evidence\nC  different locations\nD  experimental subjects\nE  short period\nF  extreme distrust\nG  frequent exposure\nH  mental operation\nI  dubious reason\nJ  different ideas`,
          type: "matching",
          question: "31. Although people have _______ to misinformation",
          options: [
            { label: "A  constant conflict", value: "A" },
            { label: "B  additional evidence", value: "B" },
            { label: "C  different locations", value: "C" },
            { label: "D  experimental subjects", value: "D" },
            { label: "E  short period", value: "E" },
            { label: "F  extreme distrust", value: "F" },
            { label: "G  frequent exposure", value: "G" },
            { label: "H  mental operation", value: "H" },
            { label: "I  dubious reason", value: "I" },
            { label: "J  different ideas", value: "J" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q32",
          number: 32,
          type: "matching",
          question: "32. Descartes and Spinoza had _______ about how people engage with information",
          options: [
            { label: "A  constant conflict", value: "A" },
            { label: "B  additional evidence", value: "B" },
            { label: "C  different locations", value: "C" },
            { label: "D  experimental subjects", value: "D" },
            { label: "E  short period", value: "E" },
            { label: "F  extreme distrust", value: "F" },
            { label: "G  frequent exposure", value: "G" },
            { label: "H  mental operation", value: "H" },
            { label: "I  dubious reason", value: "I" },
            { label: "J  different ideas", value: "J" },
          ],
          correctAnswer: "J",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q33",
          number: 33,
          type: "matching",
          question: "33. a distinct _______ is involved in these stages",
          options: [
            { label: "A  constant conflict", value: "A" },
            { label: "B  additional evidence", value: "B" },
            { label: "C  different locations", value: "C" },
            { label: "D  experimental subjects", value: "D" },
            { label: "E  short period", value: "E" },
            { label: "F  extreme distrust", value: "F" },
            { label: "G  frequent exposure", value: "G" },
            { label: "H  mental operation", value: "H" },
            { label: "I  dubious reason", value: "I" },
            { label: "J  different ideas", value: "J" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q34",
          number: 34,
          type: "matching",
          question: "34. Recent research has provided _______ for Spinoza's theory",
          options: [
            { label: "A  constant conflict", value: "A" },
            { label: "B  additional evidence", value: "B" },
            { label: "C  different locations", value: "C" },
            { label: "D  experimental subjects", value: "D" },
            { label: "E  short period", value: "E" },
            { label: "F  extreme distrust", value: "F" },
            { label: "G  frequent exposure", value: "G" },
            { label: "H  mental operation", value: "H" },
            { label: "I  dubious reason", value: "I" },
            { label: "J  different ideas", value: "J" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q35",
          number: 35,
          type: "matching",
          question: "35. even if this is for an extremely _______",
          options: [
            { label: "A  constant conflict", value: "A" },
            { label: "B  additional evidence", value: "B" },
            { label: "C  different locations", value: "C" },
            { label: "D  experimental subjects", value: "D" },
            { label: "E  short period", value: "E" },
            { label: "F  extreme distrust", value: "F" },
            { label: "G  frequent exposure", value: "G" },
            { label: "H  mental operation", value: "H" },
            { label: "I  dubious reason", value: "I" },
            { label: "J  different ideas", value: "J" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q36",
          number: 36,
          type: "matching",
          question: "36. the resources for scepticism and for perceiving and encoding are in _______ in the brain",
          options: [
            { label: "A  constant conflict", value: "A" },
            { label: "B  additional evidence", value: "B" },
            { label: "C  different locations", value: "C" },
            { label: "D  experimental subjects", value: "D" },
            { label: "E  short period", value: "E" },
            { label: "F  extreme distrust", value: "F" },
            { label: "G  frequent exposure", value: "G" },
            { label: "H  mental operation", value: "H" },
            { label: "I  dubious reason", value: "I" },
            { label: "J  different ideas", value: "J" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q37",
          number: 37,
          groupLabel: `Questions 37–40: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES if the statement agrees with the claims of the writer.\nWrite NO if the statement contradicts the claims of the writer.\nWrite NOT GIVEN if it is impossible to say what the writer thinks about this.`,
          type: "true_false_ng",
          question: "37. Campaigns designed to correct misinformation will fail to achieve their purpose if people are unable to understand them.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "38. Attempts to teach elementary school students about misinformation have been opposed.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. It may be possible to overcome the problem of misinformation in a relatively short period.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam19-ra-t1-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. The need to keep up with new information is hugely exaggerated in today's world.",
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
  ],
};

export const cambridge19_reading_t2: IELTSTest = {
  id: "cam19-reading-academic-t2",
  title: "Cambridge IELTS 19 – Test 2",
  bookNumber: 19,
  testNumber: 2,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam19-ra-t2-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The Industrial Revolution in Britain",
      passageText: `The Industrial Revolution began in Britain in the mid-1700s and by the 1830s and 1840s has spread to many other parts of the world, including the United States. In Britain, it was a period when a largely rural, agrarian society was transformed into an industrialised, urban one. Goods that had once been crafted by hand started to be produced in mass quantities by machines in factories, thanks to the invention of steam power and the introduction of new machines and manufacturing techniques in textiles, iron-making and other industries.

The foundations of the Industrial Revolution date back to the early 1700s, when the English inventor Thomas Newcomen designed the first modern steam engine. Called the 'atmospheric steam engine', Newcomen's invention was originally used to power machines that pumped water out of mines. In the 1760s, the Scottish engineer James Watt started to adapt one of Newcomen's models, and succeeded in making it far more efficient. Watt later worked with the English manufacturer Matthew Boulton to invent a new steam engine driven by both the forward and backward strokes of the piston, while the gear mechanism it was connected to produced rotary motion. It was a key innovation that would allow steam power to spread across British industries.

The demand for coal, which was a relatively cheap energy source, grew rapidly during the Industrial Revolution, as it was needed to run not only the factories used to produce manufactured goods, but also steam-powered transportation. In the early 1800s, the English engineer Richard Trevithick built a steam-powered locomotive, and by 1830 goods and passengers were being transported between the industrial centres of Manchester and Liverpool. In addition, steam-powered boats and ships were widely used to carry goods along Britain's canals as well as across the Atlantic.

Britain had produced textiles like wool, linen and cotton, for hundreds of years, but prior to the Industrial Revolution, the British textile business was a true 'cottage industry', with the work performed in small workshops or even homes by individual spinners, weavers and dyers. Starting in the mid-1700s, innovations like the spinning jenny and the power loom made weaving cloth and spinning yarn and thread much easier. With these machines, relatively little labour was required to produce cloth, and the new, mechanised textile factories that opened around the country were quickly able to meet customer demand for cloth both at home and abroad.

The British iron industry also underwent major change as it adopted new innovations. Chief among the new techniques was the smelting of iron ore with coke (a material made by heating coal) instead of the traditional charcoal. This method was cheaper and produced metals that were of a higher quality, enabling Britain's iron and steel production to expand in response to demand created by the Napoleonic Wars (1803-15) and the expansion of the railways from the 1830s.

The latter part of the Industrial Revolution also saw key advances in communication methods, as people increasingly saw the need to communicate efficiently over long distances. In 1837, British inventors William Cooke and Charles Wheatstone patented the first commercial telegraphy system. In the 1830s and 1840s, Samuel Morse and other inventors worked on their own versions in the United States. Cooke and Wheatstone's system was soon used for railway signalling in the UK. As the speed of the new locomotives increased, it was essential to have a fast and effective means of avoiding collisions.

The impact of the Industrial Revolution on people's lives was immense. Although many people in Britain had begun moving to the cities from rural areas before the Industrial Revolution, this accelerated dramatically with industrialisation, as the rise of large factories turned smaller towns into major cities in just a few decades. This rapid urbanisation brought significant challenges, as overcrowded cities suffered from pollution and inadequate sanitation.

Although industrialisation increased the country's economic output overall and improved the standard of living for the middle and upper classes, many poor people continued to struggle. Factory workers had to work long hours in dangerous conditions for extremely low wages. These conditions along with the rapid pace of change fuelled opposition to industrialisation. A group of British workers who became known as 'Luddites' were British weavers and textile workers who objected to the increased use of mechanised looms and knitting frames. Many had spent years learning their craft, and they feared that unskilled machine operators were robbing them of their livelihood. A few desperate weavers began breaking into factories and smashing textile machines. They called themselves Luddites after Ned Ludd, a young apprentice who was rumoured to have wrecked a textile machine in 1779.

The first major instances of machine breaking took place in 1811 in the city of Nottingham, and the practice soon spread across the country. Machine-breaking Luddites attacked and burned factories, and in some cases they even exchanged gunfire with company guards and soldiers. The workers wanted employers to stop installing new machinery, but the British government responded to the uprisings by making machine-breaking punishable by death. The unrest finally reached its peak in April 1812, when a few Luddites were shot during an attack on a mill near Huddersfield. In the days that followed, other Luddites were arrested, and dozens were hanged or transported to Australia. By 1813, the Luddite resistance had all but vanished.`,
      instructions: `Questions 1–7: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.
Questions 8–13: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.`,
      questions: [
        {
          id: "cam19-ra-t2-s1-q1",
          number: 1,
          groupLabel: `Questions 1–7: Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.\n\nBritain's Industrial Revolution\n\nSteam power\n●  Newcomen's steam engine was used in mines to remove water.\n●  In Watt and Boulton's steam engine, the movement of the 1 _______ was linked to a gear system.\n●  A greater supply of 2 _______ was required to power steam engines.\n\nTextile industry\n●  Before the Industrial Revolution, spinners and weavers worked at home and in 3 _______.\n●  Not as much 4 _______ was needed to produce cloth once the spinning jenny and power loom were invented.\n\nIron industry\n●  Smelting of iron ore with coke resulted in material that was better 5 _______.\n●  Demand for iron increased with the growth of the 6 _______.\n\nCommunications\n●  Cooke and Wheatstone patented the first telegraphy system.\n●  The telegraphy system was used to prevent locomotives colliding.\n\nUrbanisation\n●  Small towns turned into cities very quickly.\n●  The new cities were dirty, crowded and lacked sufficient 7 _______.`,
          type: "note_completion",
          question: "1. In Watt and Boulton's steam engine, the movement of the _______ was linked to a gear system.",
          correctAnswer: "piston",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q2",
          number: 2,
          type: "note_completion",
          question: "2. A greater supply of _______ was required to power steam engines.",
          correctAnswer: "coal",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q3",
          number: 3,
          type: "note_completion",
          question: "3. Before the Industrial Revolution, spinners and weavers worked at home and in _______.",
          correctAnswer: "workshops",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q4",
          number: 4,
          type: "note_completion",
          question: "4. Not as much _______ was needed to produce cloth once the spinning jenny and power loom were invented.",
          correctAnswer: "labour",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q5",
          number: 5,
          type: "note_completion",
          question: "5. Smelting of iron ore with coke resulted in material that was better _______.",
          correctAnswer: "quality",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q6",
          number: 6,
          type: "note_completion",
          question: "6. Demand for iron increased with the growth of the _______.",
          correctAnswer: "railways",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q7",
          number: 7,
          type: "note_completion",
          question: "7. The new cities were dirty, crowded and lacked sufficient _______.",
          correctAnswer: "sanitation",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q8",
          number: 8,
          groupLabel: `Questions 8–13: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE if the statement agrees with the information.\nWrite FALSE if the statement contradicts the information.\nWrite NOT GIVEN if there is no information on this.`,
          type: "true_false_ng",
          question: "8. Britain's canal network grew rapidly so that more goods could be transported around the country.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q9",
          number: 9,
          type: "true_false_ng",
          question: "9. Costs in the iron industry rose when the technique of smelting iron ore with coke was introduced.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q10",
          number: 10,
          type: "true_false_ng",
          question: "10. Samuel Morse's communication system was more reliable than that developed by William Cooke and Charles Wheatstone.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q11",
          number: 11,
          type: "true_false_ng",
          question: "11. The economic benefits of industrialisation were limited to certain sectors of society.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q12",
          number: 12,
          type: "true_false_ng",
          question: "12. Some skilled weavers believed that the introduction of the new textile machines would lead to job losses.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s1-q13",
          number: 13,
          type: "true_false_ng",
          question: "13. There was some sympathy among local people for the Luddites who were arrested near Huddersfield.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam19-ra-t2-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "Athletes and stress",
      passageText: `A
It isn't easy being a professional athlete. Not only are the physical demands greater than most people could handle, athletes also face intense psychological pressure during competition. This is something that British tennis player Emma Raducanu wrote about on social media following her withdrawal from the 2021 Wimbledon tournament. Though the young player had been doing well in the tournament, she began having difficulty regulating her breathing and heart rate during a match, which she later attributed to 'the accumulation of the excitement and the buzz'.

B
For athletes, some level of performance stress is almost unavoidable. But there are many different factors that dictate just how people's minds and bodies respond to stressful events. Typically, stress is the result of an exchange between two factors: demands and resources. An athlete may feel stressed about an event if they feel the demands on them are greater than they can handle. These demands include the high level of physical and mental effort required to succeed, and also the athlete's concerns about the difficulty of the event, their chance of succeeding, and any potential dangers such as injury. Resources, on the other hand, are a person's ability to cope with these demands. These include factors such as the competitor's degree of confidence, how much they believe they can control the situation's outcome, and whether they're looking forward to the event or not.

C
Each new demand or change in circumstances affects whether a person responds positively or negatively to stress. Typically, the more resources a person feels they have in handling the situation, the more positive their stress response. This positive stress response is called a challenge state. But should the person feel there are too many demands placed on them, the more likely they are to experience a negative stress response – known as a threat state. Research shows that the challenge states lead to good performance, while threat states lead to poorer performance. So, in Emma Raducanu's case, a much larger audience, higher expectations and facing a more skilful opponent, may all have led her to feel there were greater demands being placed on her at Wimbledon – but she didn't have the resources to tackle them. This led to her experiencing a threat response.

D
Our challenge and threat responses essentially influence how our body responds to stressful situations, as both affect the production of adrenaline and cortisol – also known as 'stress hormones'. During a challenge state, adrenaline increases the amount of blood pumped from the heart and expands the blood vessels, which allows more energy to be delivered to the muscles and brain. This increase of blood and decrease of pressure in the blood vessels has been consistently related to superior sport performance in everything from cricket batting, to golf putting and football penalty taking. But during a threat state, cortisol inhibits the positive effect of adrenaline, resulting in tighter blood vessels, higher blood pressure, slower psychological responses, and a faster heart rate. In short, a threat state makes people more anxious – they make worse decisions and perform more poorly. In tennis players, cortisol has been associated with more unsuccessful serves and greater anxiety.

E
That said, anxiety is also a common experience for athletes when they're under pressure. Anxiety can increase heart rate and perspiration, cause heart palpitations, muscle tremors and shortness of breath, as well as headaches, nausea, stomach pain, weakness and a desire to escape in more extreme cases. Anxiety can also reduce concentration and self-control and cause overthinking. The intensity with which a person experiences anxiety depends on the demands and resources they have. Anxiety may also manifest itself in the form of excitement or nervousness depending on the stress response. Negative stress responses can be damaging to both physical and mental health – and repeated episodes of anxiety coupled with negative responses can increase risk of heart disease and depression.

F
But there are many ways athletes can ensure they respond positively under pressure. Positive stress responses can be promoted through the language that they and others – such as coaches or parents – use. Psychologists can also help athletes change how they see their physiological responses – such as helping them see a higher heart rate as excitement, rather than nerves. Developing psychological skills, such as visualisation, can also help decrease physiological responses to threat. Visualisation may involve the athlete recreating a mental picture of a time when they performed well, or picturing themselves doing well in the future. This can help create a feeling of control over the stressful event. Recreating competitive pressure during training can also help athletes learn how to deal with stress. An example of this might be scoring athletes against their peers to create a sense of competition. This would increase the demands which players experience compared to a normal training session, while still allowing them to practise coping with stress.`,
      instructions: `Questions 14–18: Matching information — which paragraph A–F contains each piece of information? NB You may use any letter more than once.
Questions 19–22: Sentence completion — ONE WORD ONLY from the passage.
Questions 23–24: Choose TWO letters, A–E (facts about Raducanu's withdrawal).
Questions 25–26: Choose TWO letters, A–E (facts about anxiety in Paragraph E).`,
      questions: [
        {
          id: "cam19-ra-t2-s2-q14",
          number: 14,
          groupLabel: `Questions 14–18: Reading Passage 2 has six paragraphs, A–F. Which paragraph contains the following information?\nNB You may use any letter more than once.\n\n14  reference to two chemical compounds which impact on performance\n15  examples of strategies for minimising the effects of stress\n16  how a sportsperson accounted for their own experience of stress\n17  study results indicating links between stress responses and performance\n18  mention of people who can influence how athletes perceive their stress responses`,
          type: "matching",
          question: "14. reference to two chemical compounds which impact on performance",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q15",
          number: 15,
          type: "matching",
          question: "15. examples of strategies for minimising the effects of stress",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q16",
          number: 16,
          type: "matching",
          question: "16. how a sportsperson accounted for their own experience of stress",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q17",
          number: 17,
          type: "matching",
          question: "17. study results indicating links between stress responses and performance",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q18",
          number: 18,
          type: "matching",
          question: "18. mention of people who can influence how athletes perceive their stress responses",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q19",
          number: 19,
          groupLabel: `Questions 19–22: Complete the sentences below. Choose ONE WORD ONLY from the passage for each answer.`,
          type: "sentence_completion",
          question: "19. Performance stress involves many demands on the athlete, for example, coping with the possible risk of _______.",
          correctAnswer: "injury",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q20",
          number: 20,
          type: "sentence_completion",
          question: "20. Cortisol can cause tennis players to produce fewer good _______.",
          correctAnswer: "serves",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q21",
          number: 21,
          type: "sentence_completion",
          question: "21. Psychologists can help athletes to view their physiological responses as the effect of a positive feeling such as _______.",
          correctAnswer: "excitement",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q22",
          number: 22,
          type: "sentence_completion",
          question: "22. _______ is an example of a psychological technique which can reduce an athlete's stress responses.",
          correctAnswer: "Visualisation",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q23",
          number: 23,
          groupLabel: `Questions 23 and 24: Choose TWO letters, A–E.\n\nWhich TWO facts about Emma Raducanu's withdrawal from the Wimbledon tournament are mentioned in the text?\n\nA  the stage at which she dropped out of the tournament\nB  symptoms of her performance stress at the tournament\nC  measures which she had taken to manage her stress levels\nD  aspects of the Wimbledon tournament which increased her stress levels\nE  reactions to her social media posts about her experience at Wimbledon`,
          type: "multiple_choice",
          question: "23. Choose TWO (first answer)",
          options: [
            { label: "A  the stage at which she dropped out of the tournament", value: "A" },
            { label: "B  symptoms of her performance stress at the tournament", value: "B" },
            { label: "C  measures which she had taken to manage her stress levels", value: "C" },
            { label: "D  aspects of the Wimbledon tournament which increased her stress levels", value: "D" },
            { label: "E  reactions to her social media posts about her experience at Wimbledon", value: "E" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q24",
          number: 24,
          type: "multiple_choice",
          question: "24. Choose TWO (second answer)",
          options: [
            { label: "A  the stage at which she dropped out of the tournament", value: "A" },
            { label: "B  symptoms of her performance stress at the tournament", value: "B" },
            { label: "C  measures which she had taken to manage her stress levels", value: "C" },
            { label: "D  aspects of the Wimbledon tournament which increased her stress levels", value: "D" },
            { label: "E  reactions to her social media posts about her experience at Wimbledon", value: "E" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q25",
          number: 25,
          groupLabel: `Questions 25 and 26: Choose TWO letters, A–E.\n\nWhich TWO facts about anxiety are mentioned in Paragraph E of the text?\n\nA  the factors which determine how severe it may be\nB  how long it takes for its effects to become apparent\nC  which of its symptoms is most frequently encountered\nD  the types of athletes who are most likely to suffer from it\nE  the harm that can result if athletes experience it too often`,
          type: "multiple_choice",
          question: "25. Choose TWO (first answer)",
          options: [
            { label: "A  the factors which determine how severe it may be", value: "A" },
            { label: "B  how long it takes for its effects to become apparent", value: "B" },
            { label: "C  which of its symptoms is most frequently encountered", value: "C" },
            { label: "D  the types of athletes who are most likely to suffer from it", value: "D" },
            { label: "E  the harm that can result if athletes experience it too often", value: "E" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s2-q26",
          number: 26,
          type: "multiple_choice",
          question: "26. Choose TWO (second answer)",
          options: [
            { label: "A  the factors which determine how severe it may be", value: "A" },
            { label: "B  how long it takes for its effects to become apparent", value: "B" },
            { label: "C  which of its symptoms is most frequently encountered", value: "C" },
            { label: "D  the types of athletes who are most likely to suffer from it", value: "D" },
            { label: "E  the harm that can result if athletes experience it too often", value: "E" },
          ],
          correctAnswer: "E",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam19-ra-t2-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "An inquiry into the existence of the gifted child",
      passageText: `Let us start by looking at a modern 'genius', Maryam Mirzakhani, who died at the early age of 40. She was the only woman to win the Fields Medal – the mathematical equivalent of a Nobel prize. It would be easy to assume that someone as special as Mirzakhani must have been one of those 'gifted' children, those who have an extraordinary ability in a specific sphere of activity or knowledge. But look closer and a different story emerges. Mirzakhani was born in Tehran, Iran. She went to a highly selective girls' school but maths wasn't her interest – reading was. She loved novels and would read anything she could lay her hands on. As for maths, she did rather poorly at it for the first couple of years in her middle school, but became interested when her elder brother told her about what he'd learned. He shared a famous maths problem from a magazine that fascinated her – and she was hooked.

In adult life it is clear that she was curious, excited by what she did and also resolute in the face of setbacks. One of her comments sums it up. 'Of course, the most rewarding part is the "Aha" moment, the excitement of discovery and enjoyment of understanding something new … But most of the time, doing mathematics for me is like being on a long hike with no trail and no end in sight.' That trail took her to the heights of original research into mathematics.

Is her background unusual? Apparently not. Most Nobel prize winners were unexceptional in childhood. Einstein was slow to talk as a baby. He failed the general part of the entry test to Zurich Polytechnic – though they let him in because of high physics and maths scores. He struggled at work initially, but he kept plugging away and eventually rewrote the laws of Newtonian mechanics with his theory of relativity.

There has been a considerable amount of research on high performance over the last century that suggests it goes way beyond tested intelligence. On top of that, research is clear that brains are flexible, new neural pathways can be created, and IQ isn't fixed. For example, just because you can read stories with hundreds of pages at the age of five doesn't mean you will still be ahead of your contemporaries in your teens.

While the jury is out on giftedness being innate and other factors potentially making the difference, what is certain is that the behaviours associated with high levels of performance are replicable and most can be taught – even traits such as curiosity.

According to my colleague Prof Deborah Eyre, with whom I've collaborated on the book Great Minds and How to Grow Them, the latest neuroscience and psychological research suggests most individuals can reach levels of performance associated in school with the gifted and talented. However, they must be taught the right attitudes and approaches to their learning and develop the attributes of high performers – curiosity, persistence and hard work, for example – an approach Eyre calls 'high performance learning'. Critically, they need the right support in developing those approaches at home as well as at school.

Prof Anders Ericsson, an eminent education psychologist at Florida State University, US, is the co-author of Peak: Secrets from the New Science of Expertise. After research going back to 1980 into diverse achievements, from music to memory to sport, he doesn't think unique and innate talents are at the heart of performance. Deliberate practice, that stretches you every step of the way, and around 10,000 hours of it, is what produces the goods. It's not a magic number – the highest performers move on to doing a whole lot more, of course. Ericsson's memory research is particularly interesting because random students, trained in memory techniques for the study, went on to outperform others thought to have innately superior memories – those who you might call gifted.

But it is perhaps the work of Benjamin Bloom, another distinguished American educationist working in the 1980s, that gives the most pause for thought. Bloom's team looked at a group of extraordinarily high achieving people in disciplines as varied as ballet, swimming, piano, tennis, maths, sculpture and neurology. He found a pattern of parents encouraging and supporting their children, often in areas they enjoyed themselves. Bloom's outstanding people had worked very hard and consistently at something they had become hooked on when at a young age, and their parents all emerged as having strong work ethics themselves.

Eyre says we know how high performers learn. From that she has developed a high performing learning approach. She is working on this with a group of schools, both in Britain and abroad. Some spin-off research, which looked in detail at 24 of the 3,000 children being studied who were succeeding despite difficult circumstances, found something remarkable. Half were getting free school meals because of poverty, more than half were living with a single parent, and four in five were living in disadvantaged areas. Interviews uncovered strong evidence of an adult or adults in the child's life who valued and supported education, either in the immediate or extended family or in the child's wider community. Children talked about the need to work hard at school, to listen in class and keep trying.

Let us end with Einstein, the epitome of a genius. He clearly had curiosity, character and determination. He struggled against rejection in early life but was undeterred. Did he think he was a genius or even gifted? He once wrote: 'It's not that I'm so smart, it's just that I stay with problems longer. Most people say it is the intellect which makes a great scientist. They are wrong: it is character.'`,
      instructions: `Questions 27–32: Summary completion — choose the correct phrase A–K.
Questions 33–37: Do the statements agree with the claims of the writer? Write YES, NO, or NOT GIVEN.
Questions 38–40: Multiple choice — choose the correct letter A–D.`,
      questions: [
        {
          id: "cam19-ra-t2-s3-q27",
          number: 27,
          groupLabel: `Questions 27–32: Complete the summary using the list of phrases, A–K, below.\n\nMaryam Mirzakhani\nMaryam Mirzakhani is regarded as 27 _______ in the field of mathematics because she was the only female holder of the prestigious Fields Medal – a record that she retained at the time of her death. However, maths held little 28 _______ for her as a child and in fact her performance was below average until she was 29 _______ by a difficult puzzle that one of her siblings showed her.\n\nLater, as a professional mathematician, she had an inquiring mind and proved herself to be 30 _______ when things did not go smoothly. She said she got the greatest 31 _______ from making ground-breaking discoveries and in fact she was responsible for some extremely 32 _______ mathematical studies.\n\nA  appeal\nB  determined\nC  intrigued\nD  single\nE  achievement\nF  devoted\nG  involved\nH  unique\nI  innovative\nJ  satisfaction\nK  intent`,
          type: "matching",
          question: "27. Mirzakhani is regarded as _______ in the field of mathematics",
          options: [
            { label: "A  appeal", value: "A" },
            { label: "B  determined", value: "B" },
            { label: "C  intrigued", value: "C" },
            { label: "D  single", value: "D" },
            { label: "E  achievement", value: "E" },
            { label: "F  devoted", value: "F" },
            { label: "G  involved", value: "G" },
            { label: "H  unique", value: "H" },
            { label: "I  innovative", value: "I" },
            { label: "J  satisfaction", value: "J" },
            { label: "K  intent", value: "K" },
          ],
          correctAnswer: "H",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q28",
          number: 28,
          type: "matching",
          question: "28. maths held little _______ for her as a child",
          options: [
            { label: "A  appeal", value: "A" },
            { label: "B  determined", value: "B" },
            { label: "C  intrigued", value: "C" },
            { label: "D  single", value: "D" },
            { label: "E  achievement", value: "E" },
            { label: "F  devoted", value: "F" },
            { label: "G  involved", value: "G" },
            { label: "H  unique", value: "H" },
            { label: "I  innovative", value: "I" },
            { label: "J  satisfaction", value: "J" },
            { label: "K  intent", value: "K" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q29",
          number: 29,
          type: "matching",
          question: "29. she was _______ by a difficult puzzle that one of her siblings showed her",
          options: [
            { label: "A  appeal", value: "A" },
            { label: "B  determined", value: "B" },
            { label: "C  intrigued", value: "C" },
            { label: "D  single", value: "D" },
            { label: "E  achievement", value: "E" },
            { label: "F  devoted", value: "F" },
            { label: "G  involved", value: "G" },
            { label: "H  unique", value: "H" },
            { label: "I  innovative", value: "I" },
            { label: "J  satisfaction", value: "J" },
            { label: "K  intent", value: "K" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q30",
          number: 30,
          type: "matching",
          question: "30. she proved herself to be _______ when things did not go smoothly",
          options: [
            { label: "A  appeal", value: "A" },
            { label: "B  determined", value: "B" },
            { label: "C  intrigued", value: "C" },
            { label: "D  single", value: "D" },
            { label: "E  achievement", value: "E" },
            { label: "F  devoted", value: "F" },
            { label: "G  involved", value: "G" },
            { label: "H  unique", value: "H" },
            { label: "I  innovative", value: "I" },
            { label: "J  satisfaction", value: "J" },
            { label: "K  intent", value: "K" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q31",
          number: 31,
          type: "matching",
          question: "31. she got the greatest _______ from making ground-breaking discoveries",
          options: [
            { label: "A  appeal", value: "A" },
            { label: "B  determined", value: "B" },
            { label: "C  intrigued", value: "C" },
            { label: "D  single", value: "D" },
            { label: "E  achievement", value: "E" },
            { label: "F  devoted", value: "F" },
            { label: "G  involved", value: "G" },
            { label: "H  unique", value: "H" },
            { label: "I  innovative", value: "I" },
            { label: "J  satisfaction", value: "J" },
            { label: "K  intent", value: "K" },
          ],
          correctAnswer: "J",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q32",
          number: 32,
          type: "matching",
          question: "32. she was responsible for some extremely _______ mathematical studies",
          options: [
            { label: "A  appeal", value: "A" },
            { label: "B  determined", value: "B" },
            { label: "C  intrigued", value: "C" },
            { label: "D  single", value: "D" },
            { label: "E  achievement", value: "E" },
            { label: "F  devoted", value: "F" },
            { label: "G  involved", value: "G" },
            { label: "H  unique", value: "H" },
            { label: "I  innovative", value: "I" },
            { label: "J  satisfaction", value: "J" },
            { label: "K  intent", value: "K" },
          ],
          correctAnswer: "I",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q33",
          number: 33,
          groupLabel: `Questions 33–37: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES if the statement agrees with the claims of the writer.\nWrite NO if the statement contradicts the claims of the writer.\nWrite NOT GIVEN if it is impossible to say what the writer thinks about this.`,
          type: "true_false_ng",
          question: "33. Many people who ended up winning prestigious intellectual prizes only reached an average standard when young.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q34",
          number: 34,
          type: "true_false_ng",
          question: "34. Einstein's failures as a young man were due to his lack of confidence.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q35",
          number: 35,
          type: "true_false_ng",
          question: "35. It is difficult to reach agreement on whether some children are actually born gifted.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q36",
          number: 36,
          type: "true_false_ng",
          question: "36. Einstein was upset by the public's view of his life's work.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "37. Einstein put his success down to the speed at which he dealt with scientific questions.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q38",
          number: 38,
          groupLabel: `Questions 38–40: Choose the correct letter, A, B, C or D.`,
          type: "multiple_choice",
          question: "38. What does Eyre believe is needed for children to equal 'gifted' standards?",
          options: [
            { label: "A  strict discipline from the teaching staff", value: "A" },
            { label: "B  assistance from their peers in the classroom", value: "B" },
            { label: "C  the development of a spirit of inquiry towards their studies", value: "C" },
            { label: "D  the determination to surpass everyone else's achievements", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q39",
          number: 39,
          type: "multiple_choice",
          question: "39. What is the result of Ericsson's research?",
          options: [
            { label: "A  Very gifted students do not need to work on improving memory skills.", value: "A" },
            { label: "B  Being born with a special gift is not the key factor in becoming expert.", value: "B" },
            { label: "C  Including time for physical exercise is crucial in raising performance.", value: "C" },
            { label: "D  10,000 hours of relevant and demanding work will create a genius.", value: "D" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam19-ra-t2-s3-q40",
          number: 40,
          type: "multiple_choice",
          question: "40. In the penultimate paragraph, it is stated the key to some deprived children's success is",
          options: [
            { label: "A  a regular and nourishing diet at home.", value: "A" },
            { label: "B  the loving support of more than one parent.", value: "B" },
            { label: "C  a community which has well-funded facilities for learning.", value: "C" },
            { label: "D  the guidance of someone who recognises the benefits of learning.", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge19Tests: IELTSTest[] = [cambridge19_reading_t1, cambridge19_reading_t2];
