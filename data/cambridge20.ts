import type { IELTSTest } from "./ielts-tests";

// ============================================================
// CAMBRIDGE IELTS 20  (Academic Reading)
// ============================================================

// ============================================================
// CAMBRIDGE IELTS 20 – TEST 1  (Academic Reading)
// Passages: The kākāpō /
//           To Britain (elms) /
//           How stress affects our judgement
// ============================================================
export const cambridge20_reading_t1: IELTSTest = {
  id: "cam20-reading-academic-t1",
  title: "Cambridge IELTS 20 – Test 1",
  bookNumber: 20,
  testNumber: 1,
  type: "reading",
  level: "academic",
  durationMinutes: 60,
  transferMinutes: 0,
  sections: [
    // ── PASSAGE 1 ─────────────────────────────────────────────
    {
      id: "cam20-ra-t1-s1",
      sectionNumber: 1,
      title: "Reading Passage 1",
      passageTitle: "The kākāpō",
      passageText: `The kākāpō, also known as the owl parrot, is a large, forest-dwelling bird, with a pale owl-like face. Up to 64 cm in length, it has predominantly yellow-green feathers, forward-facing eyes, a large grey beak, large blue feet, and relatively short wings and tail. It is the world's only flightless parrot, and is also possibly one of the world's longest-living birds, with a reported lifespan of up to 100 years.

Kākāpō are solitary birds and tend to occupy the same home range for many years. They forage on the ground and climb high into trees. They often leap from trees and flap their wings, but at best manage a controlled descent to the ground. They are entirely vegetarian, with their diet including the leaves, roots and bark of trees as well as bulbs, and fern fronds.

Kākāpō breed in summer and autumn, but only in years when food is plentiful. Males play no part in incubation or chick-rearing – females alone incubate eggs and feed the chicks. The 1-4 eggs are laid in soil, which is repeatedly turned over before and during incubation. The female kākāpō has to spend long periods away from the nest searching for food, which leaves the unattended eggs and chicks particularly vulnerable to predators.

Before humans arrived, kākāpō were common throughout New Zealand's forests. However, this all changed with the arrival of the first Polynesian settlers about 700 years ago. For the early settlers, the flightless kākāpō was easy prey. They ate its meat and used its feathers to make soft cloaks. With them came the Polynesian dog and rat, which also preyed on kākāpō. By the time European colonisers arrived in the early 1800s, kākāpō had become confined to the central North Island and forested parts of the South Island. The fall in kākāpō numbers was accelerated by European colonisation. A great deal of habitat was lost through forest clearance, and introduced species such as deer depleted the remaining forests of food. Other predators such as cats, stoats and two more species of rat were also introduced. The kākāpō were in serious trouble.

In 1894, the New Zealand government launched its first attempt to save the kākāpō. Conservationist Richard Henry led an effort to relocate several hundred of the birds to predator-free Resolution Island in Fiordland. Unfortunately, the island didn't remain predator free – stoats arrived within six years, eventually destroying the kākāpō population. By the mid-1900s, the kākāpō was practically a lost species. Only a few clung to life in the most isolated parts of New Zealand.

From 1949 to 1973, the newly formed New Zealand Wildlife Service made over 60 expeditions to find kākāpō, focusing mainly on Fiordland. Six were caught, but there were no females amongst them and all but one died within a few months of captivity. In 1974, a new initiative was launched, and by 1977, 18 more kākāpō were found in Fiordland. However, there were still no females. In 1977, a large population of males was spotted in Rakiura – a large island free from stoats, ferrets and weasels. There were about 200 individuals, and in 1980 it was confirmed females were also present. These birds have been the foundation of all subsequent work in managing the species.

Unfortunately, predation by feral cats on Rakiura Island led to a rapid decline in kākāpō numbers. As a result, during 1980-97, the surviving population was evacuated to three island sanctuaries: Codfish Island, Maud Island and Little Barrier Island. However, breeding success was hard to achieve. Rats were found to be a major predator of kākāpō chicks and an insufficient number of chicks survived to offset adult mortality. By 1995, although at least 12 chicks had been produced on the islands, only three had survived. The kākāpō population had dropped to 51 birds. The critical situation prompted an urgent review of kākāpō management in New Zealand.

In 1996, a new Recovery Plan was launched, together with a specialist advisory group called the Kākāpō Scientific and Technical Advisory Committee and a higher amount of funding. Renewed steps were taken to control predators on the three islands. Cats were eradicated from Little Barrier Island in 1980, and possums were eradicated from Codfish Island by 1986. However, the population did not start to increase until rats were removed from all three islands, and the birds were more intensively managed. This involved moving the birds between islands, supplementary feeding of adults and rescuing and hand-raising any failing chicks.

After the first five years of the Recovery Plan, the population was on target. By 2000, five new females had been produced, and the total population had grown to 62 birds. For the first time, there was cautious optimism for the future of kākāpō and by June 2020, a total of 210 birds was recorded.

Today, kākāpō management continues to be guided by the kākāpō Recovery Plan. Its key goals are: minimise the loss of genetic diversity in the kākāpō population, restore or maintain sufficient habitat to accommodate the expected increase in the kākāpō population, and ensure stakeholders continue to be fully engaged in the preservation of the species.`,
      instructions: `Questions 1–6: Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.
Questions 7–13: Complete the notes below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.`,
      questions: [
        {
          id: "cam20-ra-t1-s1-q1",
          number: 1,
          groupLabel: `Questions 1–6: Do the following statements agree with the information given in Reading Passage 1?\nWrite TRUE if the statement agrees with the information.\nWrite FALSE if the statement contradicts the information.\nWrite NOT GIVEN if there is no information on this.`,
          type: "true_false_ng",
          question: "1. There are other parrots that share the kakapo's inability to fly.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q2",
          number: 2,
          type: "true_false_ng",
          question: "2. Adult kakapo produce chicks every year.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q3",
          number: 3,
          type: "true_false_ng",
          question: "3. Adult male kakapo bring food back to nesting females.",
          correctAnswer: "FALSE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q4",
          number: 4,
          type: "true_false_ng",
          question: "4. The Polynesian rat was a greater threat to the kakapo than Polynesian settlers.",
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q5",
          number: 5,
          type: "true_false_ng",
          question: "5. Kakapo were transferred from Rakiura Island to other locations because they were at risk from feral cats.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q6",
          number: 6,
          type: "true_false_ng",
          question: "6. One Recovery Plan initiative that helped increase the kakapo population size was caring for struggling young birds.",
          correctAnswer: "TRUE",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q7",
          number: 7,
          groupLabel: `Questions 7–13: Complete the notes below. Choose ONE WORD AND/OR A NUMBER from the passage for each answer.\n\nNew Zealand's kākāpō\n\nA type of parrot:\n●  diet consists of fern fronds, various parts of a tree and 7 _______\n●  nests are created in 8 _______ where eggs are laid.\n\nArrival of Polynesian settlers\n●  the 9 _______ of the kākāpō were used to make clothes.\n\nArrival of European colonisers\n●  10 _______ were an animal which they introduced that ate the kākāpō's food sources.\n\nProtecting kākāpō\n●  Richard Henry, a conservationist, tried to protect the kākāpō.\n●  a definite sighting of female kākāpō on Rakiura Island was reported in the year 11 _______\n●  the Recovery Plan included an increase in 12 _______\n●  a current goal of the Recovery Plan is to maintain the involvement of 13 _______ in kākāpō protection.`,
          type: "note_completion",
          question: "7. diet consists of fern fronds, various parts of a tree and _______",
          correctAnswer: "bulbs",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q8",
          number: 8,
          type: "note_completion",
          question: "8. nests are created in _______ where eggs are laid",
          correctAnswer: "soil",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q9",
          number: 9,
          type: "note_completion",
          question: "9. the _______ of the kākāpō were used to make clothes",
          correctAnswer: "feathers",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q10",
          number: 10,
          type: "note_completion",
          question: "10. _______ were an animal which they introduced that ate the kākāpō's food sources",
          correctAnswer: "deer",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q11",
          number: 11,
          type: "note_completion",
          question: "11. a definite sighting of female kākāpō on Rakiura Island was reported in the year _______",
          correctAnswer: "1980",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q12",
          number: 12,
          type: "note_completion",
          question: "12. the Recovery Plan included an increase in _______",
          correctAnswer: "funding",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s1-q13",
          number: 13,
          type: "note_completion",
          question: "13. a current goal of the Recovery Plan is to maintain the involvement of _______ in kākāpō protection",
          correctAnswer: "stakeholders",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 2 ─────────────────────────────────────────────
    {
      id: "cam20-ra-t1-s2",
      sectionNumber: 2,
      title: "Reading Passage 2",
      passageTitle: "To Britain",
      passageText: `A
Around 25 million elms, accounting for 90% of all elm trees in the UK, died during the 1960s and '70s of Dutch elm disease. In the aftermath, the elm, once so dominant in the British landscape, was largely forgotten. However, there's now hope the elm may be reintroduced to the countryside of central and southern England. Any reintroduction will start from a very low base. 'The impact of the disease is difficult to picture if you hadn't seen what was there before,' says Matt Elliot of the Woodland Trust. 'You look at old photographs from the 1960s and it's only then that you realise the impact [elms had] … They were significant, large trees… then they were gone.'

B
The disease is caused by a fungus that blocks the elms' vascular (water, nutrient and food transport) system, causing branches to wilt and die. A first epidemic, which occurred in the 1920s, gradually died down, but in the '70s a second epidemic was triggered by shipments of elm from Canada. The wood came in the form of logs destined for boat building and its intact bark was perfect for the elm bark beetles that spread the deadly fungus. This time, the beetles carried a much more virulent strain that destroyed the vast majority of British elms.

C
Today, elms still exist in the southern English countryside but mostly only in low hedgerows between fields. 'We have millions of small elms in hedgerows but they get targeted by the beetle as soon as they reach a certain size,' says Karen Russell, co-author of the report 'Where we are with elm'. Once the trunk of the elm reaches 10-15 centimetres or so in diameter, it becomes a perfect size for beetles to lay eggs and for the fungus to take hold. Yet mature specimens have been identified, in counties such as Cambridgeshire, that are hundreds of years old, and have mysteriously escaped the epidemic.

The key, Russell says, is to identify and study those trees that have survived and work out why they stood tall when millions of others succumbed. Nevertheless, opportunities are limited as the number of these mature survivors is relatively small. 'What are the reasons for their survival?' asks Russell. 'Avoidance, tolerance, resistance? We don't know where the balance lies between the three. I don't see how it can be entirely down to luck.'

D
For centuries, elm ran a close second to oak as the hardwood tree of choice in Britain and was in many instances the most prominent tree in the landscape. Not only was elm common in European forests, it became a key component of birch, ash and hazel woodlands. The use of elm is thought to go back to the Bronze Age, when it was widely used for tools. Elm was also the preferred material for shields and early swords. In the 18th century, it was planted more widely and its wood was used for items such as storage crates and flooring. It was also suitable for items that experienced high levels of impact and was used to build the keel of the 19th-century sailing ship Cutty Sark as well as mining equipment.

E
Given how ingrained elm is in British culture, it's unsurprising the tree has many advocates. Amongst them is Peter Bourne of the National Elm Collection in Brighton. 'I saw Dutch elm disease unfold as a small boy,' he says. 'The elm seemed to be part of rural England, but I remember watching trees just lose their leaves and that really stayed with me.' Today, the city of Brighton's elms total about 17,000. Local factors appear to have contributed to their survival. Strong winds from the sea make it difficult for the determined elm bark beetle to attack this coastal city's elm population. However, the situation is precarious. 'The beetles can just march in if we're not careful, as the threat is right on our doorstep,' says Bourne.

F
Any prospect of the elm returning relies heavily on trees being either resistant to, or tolerant of, the disease. This means a widespread reintroduction would involve existing or new hybrid strains derived from resistant, generally non-native elm species. A new generation of seedlings have been bred and tested to see if they can withstand the fungus by cutting a small slit on the bark and injecting a tiny amount of the pathogen. 'The effects are very quick,' says Russell. 'You return in four to six weeks and trees that are resistant show no symptoms, whereas those that are susceptible show leaf loss and may even have died completely.'

G
All of this raises questions of social acceptance, acknowledges Russell. 'If we're putting elm back into the landscape, a small element of it is not native – are we bothered about that?' For her, the environmental case for reintroducing elm is strong. 'They will host wildlife, which is a good thing.' Others are more wary. 'On the face of it, it seems like a good idea,' says Elliot. The problem, he suggests, is that, 'You're replacing a native species with a horticultural analogue. You're effectively cloning.' There's also the risk of introducing new diseases. Rather than plant new elms, the Woodland Trust emphasises providing space to those elms that have survived independently. 'Sometimes the best thing you can do is just give nature time to recover over time, you might get resistance,' says Elliot.`,
      instructions: `Questions 14–18: Matching information — which section A–G contains each piece of information? NB You may use any letter more than once.
Questions 19–23: Match each statement with the correct person, A–C. NB You may use any letter more than once.
Questions 24–26: Summary completion — ONE WORD ONLY from the passage.`,
      questions: [
        {
          id: "cam20-ra-t1-s2-q14",
          number: 14,
          groupLabel: `Questions 14–18: Reading Passage 2 has seven sections, A–G. Which section contains the following information?\nNB You may use any letter more than once.\n\n14  reference to the research problems that arise from there being only a few surviving large elms\n15  details of a difference of opinion about the value of reintroducing elms to Britain\n16  reference to how Dutch elm disease was brought into Britain\n17  a description of the conditions that have enabled a location in Britain to escape Dutch elm disease\n18  reference to the stage at which young elms become vulnerable to Dutch elm disease`,
          type: "matching",
          question: "14. reference to the research problems that arise from there being only a few surviving large elms",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q15",
          number: 15,
          type: "matching",
          question: "15. details of a difference of opinion about the value of reintroducing elms to Britain",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q16",
          number: 16,
          type: "matching",
          question: "16. reference to how Dutch elm disease was brought into Britain",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q17",
          number: 17,
          type: "matching",
          question: "17. a description of the conditions that have enabled a location in Britain to escape Dutch elm disease",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q18",
          number: 18,
          type: "matching",
          question: "18. reference to the stage at which young elms become vulnerable to Dutch elm disease",
          options: [
            { label: "A", value: "A" }, { label: "B", value: "B" }, { label: "C", value: "C" },
            { label: "D", value: "D" }, { label: "E", value: "E" }, { label: "F", value: "F" },
            { label: "G", value: "G" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q19",
          number: 19,
          groupLabel: `Questions 19–23: Match each statement with the correct person, A, B, or C.\nNB You may use any letter more than once.\n\nList of People\nA  Matt Elliot\nB  Karen Russell\nC  Peter Bourne`,
          type: "matching",
          question: "19. If a tree gets infected with Dutch elm disease, the damage rapidly becomes visible.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q20",
          number: 20,
          type: "matching",
          question: "20. It may be better to wait and see if the mature elms that have survived continue to flourish.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q21",
          number: 21,
          type: "matching",
          question: "21. There must be an explanation for the survival of some mature elms.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q22",
          number: 22,
          type: "matching",
          question: "22. We need to be aware that insects carrying Dutch elm disease are not very far away.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q23",
          number: 23,
          type: "matching",
          question: "23. You understand the effect Dutch elm disease has had when you see evidence of how prominent the tree once was.",
          options: [
            { label: "A  Matt Elliot", value: "A" },
            { label: "B  Karen Russell", value: "B" },
            { label: "C  Peter Bourne", value: "C" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q24",
          number: 24,
          groupLabel: `Questions 24–26: Complete the summary below. Choose ONE WORD ONLY from the passage for each answer.\n\nUses of a popular tree\nFor hundreds of years, the only tree that was more popular in Britain than elm was 24 _______. Starting in the Bronze Age, many tools were made from elm and people also used it to make weapons. In the 18th century, it was grown to provide wood for boxes and 25 _______. Due to its strength, elm was often used for mining equipment and the Cutty Sark's 26 _______ was also constructed from elm.`,
          type: "summary_completion",
          question: "24. the only tree that was more popular in Britain than elm was _______",
          correctAnswer: "oak",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q25",
          number: 25,
          type: "summary_completion",
          question: "25. it was grown to provide wood for boxes and _______",
          correctAnswer: "flooring",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s2-q26",
          number: 26,
          type: "summary_completion",
          question: "26. the Cutty Sark's _______ was also constructed from elm",
          correctAnswer: "keel",
          points: 1,
        },
      ],
    },
    // ── PASSAGE 3 ─────────────────────────────────────────────
    {
      id: "cam20-ra-t1-s3",
      sectionNumber: 3,
      title: "Reading Passage 3",
      passageTitle: "How stress affects our judgement",
      passageText: `Some of the most important decisions of our lives occur while we're feeling stressed and anxious. From medical decisions to financial and professional ones, we are all sometimes required to weigh up information under stressful conditions. But do we become better or worse at processing and using information under such circumstances?

My colleague and I, both neuroscientists, wanted to investigate how the mind operates under stress, so we visited some local fire stations. Firefighters' workdays vary quite a bit. Some are pretty relaxed; they'll spend their time washing the truck, cleaning equipment, cooking meals and reading. Other days can be hectic, with numerous life-threatening incidents to attend to; they'll enter burning homes to rescue trapped residents, and assist with medical emergencies. These ups and downs presented the perfect setting for an experiment on how people's ability to use information changes when they feel under pressure.

We found that perceived threat acted as a trigger for a stress reaction that made the task of processing information easier for the firefighters – but only as long as it conveyed bad news.

This is how we arrived at these results. We asked the firefighters to estimate their likelihood of experiencing 40 different adverse events in their life, such as being involved in an accident or becoming a victim of card fraud. We then gave them either good news (that their likelihood of experiencing these events was lower than they'd thought) or bad news (that it was higher) and asked them to provide new estimates.

People are normally quite optimistic – they will ignore bad news and embrace the good. This is what happened when the firefighters were relaxed; but when they were under stress, a different pattern emerged. Under these conditions, they became hyper-vigilant to bad news, even when it had nothing to do with their job (such as learning that the likelihood of card fraud was higher than they'd thought), and altered their beliefs in response. In contrast, stress didn't change how they responded to good news (such as learning that the likelihood of card fraud was lower than they'd thought).

Back in our lab, we observed the same pattern in students who were told they had to give a surprise public speech, which would be judged by a panel, recorded and posted online. Sure enough, their cortisol levels spiked, their heart rates went up and they suddenly became better at processing unrelated, yet alarming, information about rates of disease and violence.

When we experience stressful events, a physiological change is triggered that causes us to take in warnings and focus on what might go wrong. Brain imaging reveals that this 'switch' is related to a sudden boost in a neural signal important for learning, specifically in response to unexpected warning signs, such as faces expressing fear.

Such neural engineering could have helped prehistoric humans to survive. When our ancestors found themselves surrounded by hungry animals, they would have benefited from an increased ability to learn about hazards. In a safe environment, however, it would have been wasteful to be on high alert constantly. So, a neural switch that automatically increases or decreases our ability to process warnings in response to changes in our environment could have been useful. In fact, people with clinical depression and anxiety seem unable to switch away from a state in which they absorb all the negative messages around them.

It is also important to realise that stress travels rapidly from one person to the next. If a co-worker is stressed, we are more likely to tense up and feel stressed ourselves. We don't even need to be in the same room with someone for their emotions to influence our behaviour. Studies show that if we observe positive feeds on social media, such as images of a pink sunset, we are more likely to post uplifting messages ourselves. If we observe negative posts, such as complaints about a long queue at the coffee shop, we will in turn create more negative posts.

In some ways, many of us now live as if we are in danger, constantly ready to tackle demanding emails and text messages, and respond to news alerts and comments on social media. Repeatedly checking your phone, according to a survey conducted by the American Psychological Association, is related to stress. In other words, a pre-programmed physiological reaction, which evolution has equipped us with to help us avoid famished predators, is now being triggered by an online post. Social media posting, according to one study, raises your pulse, makes you sweat, and enlarges your pupils more than most daily activities.

The fact that stress increases the likelihood that we will focus more on alarming messages, together with the fact that it spreads extremely rapidly, can create collective fear that is not always justified. After a stressful public event, such as a natural disaster or major financial crash, there is often a wave of alarming information in traditional and social media, which individuals become very aware of. But that has the effect of exaggerating existing danger. And so, a reliable pattern emerges – stress is triggered, spreading from one person to the next, which temporarily enhances the likelihood that people will take in negative reports, which increases stress further. As a result, trips are cancelled, even if the disaster took place across the globe; stocks are sold, even when holding on is the best thing to do. The good news, however, is that positive emotions, such as hope, are contagious too, and are powerful in inducing people to act to find solutions. Being aware of the close relationship between people's emotional state and how they process information can help us frame our messages more effectively and become conscientious agents of change.`,
      instructions: `Questions 27–30: Multiple choice — choose the correct letter A–D.
Questions 31–35: Complete each sentence with the correct ending, A–G.
Questions 36–40: Do the statements agree with the claims of the writer? Write YES, NO, or NOT GIVEN.`,
      questions: [
        {
          id: "cam20-ra-t1-s3-q27",
          number: 27,
          groupLabel: `Questions 27–30: Choose the correct letter, A, B, C or D.`,
          type: "multiple_choice",
          question: "27. In the first paragraph, the writer introduces the topic of the text by",
          options: [
            { label: "A  defining some commonly used terms.", value: "A" },
            { label: "B  questioning a widely held assumption.", value: "B" },
            { label: "C  mentioning a challenge faced by everyone.", value: "C" },
            { label: "D  specifying a situation which makes us most anxious.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q28",
          number: 28,
          type: "multiple_choice",
          question: "28. What point does the writer make about firefighters in the second paragraph?",
          options: [
            { label: "A  The regular changes of stress levels in their working lives make them ideal study subjects.", value: "A" },
            { label: "B  The strategies they use to handle stress are of particular interest to researchers.", value: "B" },
            { label: "C  The stressful nature of their job is typical of many public service professions.", value: "C" },
            { label: "D  Their personalities make them especially well-suited to working under stress.", value: "D" },
          ],
          correctAnswer: "A",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q29",
          number: 29,
          type: "multiple_choice",
          question: "29. What is the writer doing in the fourth paragraph?",
          options: [
            { label: "A  explaining their findings", value: "A" },
            { label: "B  justifying their approach", value: "B" },
            { label: "C  setting out their objectives", value: "C" },
            { label: "D  describing their methodology", value: "D" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q30",
          number: 30,
          type: "multiple_choice",
          question: "30. In the seventh paragraph, the writer describes a mechanism in the brain which",
          options: [
            { label: "A  enables people to respond more quickly to stressful situations.", value: "A" },
            { label: "B  results in increased ability to control our levels of anxiety.", value: "B" },
            { label: "C  produces heightened sensitivity to indications of external threats.", value: "C" },
            { label: "D  is activated when there is a need to communicate a sense of danger.", value: "D" },
          ],
          correctAnswer: "C",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q31",
          number: 31,
          groupLabel: `Questions 31–35: Complete each sentence with the correct ending, A–G, below.\n\nA  made them feel optimistic.\nB  took relatively little notice of bad news.\nC  responded to negative and positive information in the same way.\nD  were feeling under stress.\nE  put them in a stressful situation.\nF  behaved in a similar manner, regardless of the circumstances.\nG  thought it more likely that they would experience something bad.`,
          type: "matching",
          question: "31. At times when they were relaxed, the firefighters usually",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "B",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q32",
          number: 32,
          type: "matching",
          question: "32. The researchers noted that when the firefighters were stressed, they",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "G",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q33",
          number: 33,
          type: "matching",
          question: "33. When the firefighters were told good news, they always",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "F",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q34",
          number: 34,
          type: "matching",
          question: "34. The students' cortisol levels and heart rates were affected when the researchers",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "E",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q35",
          number: 35,
          type: "matching",
          question: "35. In both experiments, negative information was processed better when the subjects",
          options: [
            { label: "A  made them feel optimistic.", value: "A" },
            { label: "B  took relatively little notice of bad news.", value: "B" },
            { label: "C  responded to negative and positive information in the same way.", value: "C" },
            { label: "D  were feeling under stress.", value: "D" },
            { label: "E  put them in a stressful situation.", value: "E" },
            { label: "F  behaved in a similar manner, regardless of the circumstances.", value: "F" },
            { label: "G  thought it more likely that they would experience something bad.", value: "G" },
          ],
          correctAnswer: "D",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q36",
          number: 36,
          groupLabel: `Questions 36–40: Do the following statements agree with the claims of the writer in Reading Passage 3?\nWrite YES if the statement agrees with the claims of the writer.\nWrite NO if the statement contradicts the claims of the writer.\nWrite NOT GIVEN if it is impossible to say what the writer thinks about this.`,
          type: "true_false_ng",
          question: "36. The tone of the content we post on social media tends to reflect the nature of the posts in our feeds.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q37",
          number: 37,
          type: "true_false_ng",
          question: "37. Phones have a greater impact on our stress levels than other electronic media devices.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NOT GIVEN",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q38",
          number: 38,
          type: "true_false_ng",
          question: "38. The more we read about a stressful public event on social media, the less able we are to take the information in.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "NO",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q39",
          number: 39,
          type: "true_false_ng",
          question: "39. Stress created by social media posts can lead us to take unnecessary precautions.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
        {
          id: "cam20-ra-t1-s3-q40",
          number: 40,
          type: "true_false_ng",
          question: "40. Our tendency to be affected by other people's moods can be used in a positive way.",
          options: [
            { label: "YES", value: "YES" },
            { label: "NO", value: "NO" },
            { label: "NOT GIVEN", value: "NOT GIVEN" },
          ],
          correctAnswer: "YES",
          points: 1,
        },
      ],
    },
  ],
};

export const cambridge20Tests: IELTSTest[] = [cambridge20_reading_t1];
