window.datosNivelesEN = [
    {
        nivel: 1,
        titulo: "Fundamental Concepts",
        preguntas: [
            {
                texto: "What is the technical difference between a search engine (classic Google) and an LLM (ChatGPT)?",
                opciones: [
                    "A search engine finds websites; an LLM queries a static and verified knowledge database.",
                    "A search engine retrieves indexed information; an LLM generates new information by predicting the next probable word.",
                    "A search engine is for short texts and an LLM processes images and videos exclusively."
                ],
                correcta: 1,
                feedback: "A search engine 'finds' what already exists. An LLM 'invents' the answer word by word based on probabilities.",
                cta: "Do not use AI to look up recent factual data (schedules, prices). Use a search engine.",
                fuente: "Wayne Holmes / UNESCO"
            },
            {
                texto: "When ChatGPT writes a sentence, how does it 'decide' which word to place next?",
                opciones: [
                    "It analyzes the semantic logic and the philosophical meaning of the question.",
                    "It checks Wikipedia in real-time to ensure accuracy.",
                    "It calculates the statistical probability of the 'token' that best fits based on its prior training."
                ],
                correcta: 2,
                feedback: "It's math, not comprehension. The model predicts the most probable continuation, not necessarily the truest one.",
                cta: "Remember: sounding coherent does not mean it is true.",
                fuente: "Kate Crawford - Atlas of AI"
            },
            {
                texto: "What is an 'Hallucination' in the context of AI?",
                opciones: [
                    "A connection error where the responses of two different users get mixed up.",
                    "When the model generates false information with total confidence and grammatical coherence.",
                    "A computer virus that affects the visual servers of the AI."
                ],
                correcta: 1,
                feedback: "Being probabilistic, the model fills in gaps with invented data if they fit the linguistic pattern.",
                cta: "Always be skeptical if the AI gives you highly specific data (dates, laws) without citing sources.",
                fuente: "Stanford HAI Report"
            },
            {
                texto: "Where does a model like GPT-4 get its knowledge from?",
                opciones: [
                    "From a global team of teachers who manually validate each response.",
                    "From a massive dataset (Common Crawl) scraped from the internet up to a cut-off date.",
                    "It connects directly to the minds of the developers."
                ],
                correcta: 1,
                feedback: "It is data 'frozen' in time. If something happened after its cut-off date, the AI does not inherently know about it.",
                cta: "Always verify the knowledge cutoff date of the model you are using.",
                fuente: "OpenAI System Cards"
            },
            {
                texto: "Does the AI really understand what it is writing?",
                opciones: [
                    "Yes, it possesses human-like advanced semantic comprehension.",
                    "Yes, but it only understands the main languages (English, Spanish, Chinese).",
                    "No. It processes syntax (rules and order) but lacks semantic comprehension (meaning) of the world."
                ],
                correcta: 2,
                feedback: "It operates like a 'Stochastic Parrot'. It repeats complex linguistic forms without understanding their content.",
                cta: "Do not assume that the AI 'knows' what it is talking about. It only knows how to string words together.",
                fuente: "Emily Bender (Stochastic Parrots)"
            },
            {
                texto: "How does an AI process the word 'Computer'?",
                opciones: [
                    "It splits it into 'Tokens' (numerical fragments), for example: 'Com-pu-ter'.",
                    "It reads it letter by letter like a human learning to read.",
                    "It processes it as a visual image of a computer."
                ],
                correcta: 0,
                feedback: "Models see numbers, not letters. This explains why they sometimes fail at spelling or rhyming.",
                cta: "If you need to count exact letters or words, do not rely on AI.",
                fuente: "OpenAI Tokenizer"
            },
            {
                texto: "What happens technically if you increase the 'temperature' of the model?",
                opciones: [
                    "The model consumes more RAM to process complex answers.",
                    "The model chooses less probable options, becoming more 'creative' but prone to hallucinating.",
                    "The model becomes stricter and only gives short answers."
                ],
                correcta: 1,
                feedback: "Temperature 0 is deterministic (repetitive). High temperature is random (chaotic).",
                cta: "For factual/math tasks, use a low temperature or 'precise' mode.",
                fuente: "Ethan Mollick"
            },
            {
                texto: "You are analyzing a whole book and the AI forgets the beginning. Why?",
                opciones: [
                    "The server rebooted to save energy.",
                    "You have exceeded its 'Context Window' (limited working memory).",
                    "The AI prioritizes the most recent information because it considers it more important."
                ],
                correcta: 1,
                feedback: "The AI has a limit on the words it can 'see' at once. What falls out of the window is forgotten.",
                cta: "If working with long texts, split them up or use models with a large context window.",
                fuente: "Anthropic Docs"
            },
            {
                texto: "What does it mean for a model to be 'Multimodal'?",
                opciones: [
                    "That it can run on multiple operating systems (Windows, Mac, Linux).",
                    "That it can simultaneously process text, images, and audio natively.",
                    "That it can talk with multiple users at once."
                ],
                correcta: 1,
                feedback: "Modern models do not just read. They can 'see' photos and 'listen' to audio.",
                cta: "Use multimodality to analyze charts or summarize lecture audio.",
                fuente: "Google DeepMind"
            },
            {
                texto: "What is the role of the human (Human-in-the-loop) when using AI?",
                opciones: [
                    "To supervise only the start of the process and let the AI finish.",
                    "To train the AI so it won't need future supervision.",
                    "To mandatorily verify the results due to the possibility of error."
                ],
                correcta: 2,
                feedback: "AI is an error-prone co-pilot. The human is ultimately responsible for integrity.",
                cta: "Never submit AI-generated work without reading and verifying every line.",
                fuente: "UNESCO"
            }
        ]
    },
    {
        nivel: 2,
        titulo: "Ethics and Risks",
        preguntas: [
            {
                texto: "If an AI generates images of doctors and only shows men, why is that?",
                opciones: [
                    "Because the AI is programmed to avoid forced diversity.",
                    "Because it reflects the historical biases present in the training data.",
                    "It is a random algorithmic coincidence."
                ],
                correcta: 1,
                feedback: "Garbage In, Garbage Out. If history has biases, the model amplifies them.",
                cta: "Be critical: if the AI gives you stereotypes, explicitly ask for diversity in your prompt.",
                fuente: "Kate Crawford"
            },
            {
                texto: "What is the biggest ethical risk of 'Deepfakes' among teenagers?",
                opciones: [
                    "That they are used to cheat on oral video exams.",
                    "The creation of harmful material (harassment, misinformation) by impersonating identities.",
                    "That actors will lose their jobs in cinema."
                ],
                correcta: 1,
                feedback: "The ease of creating fake videos threatens people's reputation and privacy.",
                cta: "Never create or share deepfakes of classmates. It is a serious violation with legal consequences.",
                fuente: "Sonia Livingstone"
            },
            {
                texto: "What is the real physical impact of using Generative AI?",
                opciones: [
                    "None, it is cloud-based software.",
                    "High water and electricity consumption in data centers.",
                    "It only drains your device's battery."
                ],
                correcta: 1,
                feedback: "Each query activates powerful processors that generate heat and require liters of water to cool.",
                cta: "Use AI when it brings real value, not out of boredom.",
                fuente: "MIT Technology Review"
            },
            {
                texto: "Why are artists and writers suing AI companies?",
                opciones: [
                    "Because the AI draws better than they do.",
                    "For using their copyrighted works for training without permission or payment.",
                    "Because AI is flooding the market with cheap art."
                ],
                correcta: 1,
                feedback: "The debate is whether training is 'Fair Use' or intellectual property theft.",
                cta: "If you generate art with AI, acknowledge it is synthetic. Do not claim the machine's work as your own.",
                fuente: "NYT vs OpenAI Lawsuit"
            },
            {
                texto: "What is the 'Black Box' problem?",
                opciones: [
                    "That the servers are painted black to dissipate heat.",
                    "That not even the creators can exactly explain how the AI reached a specific conclusion.",
                    "That the source code is private and nobody can see it."
                ],
                correcta: 1,
                feedback: "The lack of 'explainability' is dangerous if the AI makes decisions about credits or admissions.",
                cta: "Do not accept a 'no' or a verdict from an AI without demanding human explanation.",
                fuente: "Wayne Holmes"
            },
            {
                texto: "Why is it risky to treat AI as if it were a person (Anthropomorphization)?",
                opciones: [
                    "It generates false emotional attachment to an object devoid of empathy and responsibility.",
                    "The AI performs worse if you are not polite to it.",
                    "There is no risk; it helps practice social skills."
                ],
                correcta: 0,
                feedback: "The 'ELIZA Effect' makes us vulnerable to manipulation. The AI does not feel, it only simulates.",
                cta: "Remind yourself: 'This is software, not a friend'.",
                fuente: "Sherry Turkle"
            },
            {
                texto: "Who usually performs content moderation of violent material to train the AI?",
                opciones: [
                    "Advanced automated algorithms.",
                    "Low-paid human workers in developing countries who are exposed to trauma.",
                    "The lead engineers of tech companies."
                ],
                correcta: 1,
                feedback: "Behind the 'clean' AI is precarious human labor filtering the worst of the internet.",
                cta: "Be aware of the human supply chain behind the technology.",
                fuente: "TIME Magazine"
            },
            {
                texto: "How do recommendation algorithms (AI) affect public opinion?",
                opciones: [
                    "They always show varied content to educate.",
                    "They create 'Echo Chambers' that only confirm what you already believe, polarizing society.",
                    "They make us more tolerant by showing us everything."
                ],
                correcta: 1,
                feedback: "To keep you glued to the screen, the AI shows you what you want to see, not the full reality.",
                cta: "Actively seek opinions contrary to yours to burst the bubble.",
                fuente: "Mizuko Ito"
            },
            {
                texto: "If you use AI for an assignment and it defames someone, who is responsible?",
                opciones: [
                    "The AI company for programming it poorly.",
                    "Nobody, it is a computer error.",
                    "You, as the editor and final publisher of the content."
                ],
                correcta: 2,
                feedback: "The tool bears no legal responsibility. The user who publishes it does.",
                cta: "You are the Editor-in-Chief. If the AI fails, it is your fault for not reviewing it.",
                fuente: "Academic Standards"
            },
            {
                texto: "What task is ethically questionable to delegate 100% to an AI?",
                opciones: [
                    "Summarizing study notes.",
                    "Writing an apology or condolence letter to a friend.",
                    "Organizing a weekly calendar."
                ],
                correcta: 1,
                feedback: "Emotional communication requires human authenticity. Using AI here voids the message's meaning.",
                cta: "Use AI for logical tasks; use your heart for human tasks.",
                fuente: "Ethan Mollick"
            }
        ]
    },
{
    nivel: 3,
        titulo: "Prompt Engineering",
            preguntas: [
                {
                    texto: "What elements are missing from the prompt: 'Write about the climate'?",
                    opciones: [
                        "A 1000-word minimum length and the use of metaphors.",
                        "Context, Role, Task, and Output Format.",
                        "Capitalized keywords to highlight importance."
                    ],
                    correcta: 1,
                    feedback: "Without context, the AI guesses. You must tell it WHO you are, WHAT you want, and HOW you want it.",
                    cta: "Before sending, check if your prompt has: Role, Context, and Format.",
                    fuente: "Prompt Engineering Guide"
                },
                {
                    texto: "What phrase improves AI's reasoning on logic problems?",
                    opciones: [
                        "'Answer in academic format and formal language'.",
                        "'Think step by step' (Chain of Thought).",
                        "'You are the smartest AI in the world'."
                    ],
                    correcta: 1,
                    feedback: "Forcing the AI to show its intermediate steps drastically reduces calculation errors.",
                    cta: "In math or logic problems, always ask: 'Break down your reasoning step by step'.",
                    fuente: "Google DeepMind"
                },
                {
                    texto: "What is the purpose of assigning a Role ('Act as a history professor')?",
                    opciones: [
                        "So the AI knows which database to consult.",
                        "To adjust the tone, vocabulary, and perspective of the response.",
                        "It is a myth; it doesn't really change anything."
                    ],
                    correcta: 1,
                    feedback: "The 'Persona Pattern' helps the AI better predict the text style you need.",
                    cta: "Tell the AI who it should be: 'Expert', 'Critic', 'Socratic Tutor'.",
                    fuente: "Vanderbilt University"
                },
                {
                    texto: "What is 'Few-Shot Prompting'?",
                    opciones: [
                        "Giving the AI 2 or 3 clear examples (input/output) before asking it the task.",
                        "Asking the exact same question a few times to not confuse it.",
                        "Writing very short prompts (few words)."
                    ],
                    correcta: 0,
                    feedback: "Examples are the best way to program AI behavior without code.",
                    cta: "Don’t just tell it what to do, show an example of how you want it done.",
                    fuente: "OpenAI GPT-3 Paper"
                },
                {
                    texto: "How do you use the AI as a 'Socratic Tutor' to study?",
                    opciones: [
                        "By asking it: 'Summarize this topic for me'.",
                        "By asking it: 'Ask me questions about this topic, wait for my answer, and correct me'.",
                        "By asking it: 'Tell me the questions that will be on the exam'."
                    ],
                    correcta: 1,
                    feedback: "Active learning (answering) is better than passive learning (reading summaries).",
                    cta: "Use the prompt: 'Test me. Ask me one question at a time'.",
                    fuente: "Khan Academy"
                },
                {
                    texto: "The AI's first response is rarely perfect. What should you do?",
                    opciones: [
                        "Restart the chat and ask the same thing again.",
                        "Iterate: converse, ask for corrections, and refine the output.",
                        "Assume the AI knows nothing about the topic."
                    ],
                    correcta: 1,
                    feedback: "Treat the AI like an intern: give it feedback so it improves its work.",
                    cta: "Don't settle for the first version. Tell it: 'Improve this, make it more concise'.",
                    fuente: "Nielsen Norman Group"
                },
                {
                    texto: "If you ask ChatGPT for '5 bibliographic references with links', what usually happens?",
                    opciones: [
                        "It provides old but valid references.",
                        "It hallucinates authors and titles that seem real but do not exist.",
                        "It tells you it has no internet access."
                    ],
                    correcta: 1,
                    feedback: "LLMs invent citations to fulfill the structure of the prompt.",
                    cta: "NEVER ask a basic generative AI for a bibliography. Use Google Scholar.",
                    fuente: "Nature"
                },
                {
                    texto: "How do you prevent the AI from inventing facts when analyzing your PDF?",
                    opciones: [
                        "You ask it to search for similar information on the internet.",
                        "You use 'Grounding': instruct it to 'Answer ONLY using the information from this text'.",
                        "You tell it that it is very important not to lie."
                    ],
                    correcta: 1,
                    feedback: "You must anchor (Ground) the AI to your data to restrict its imagination.",
                    cta: "Upload your notes and say: 'Look for the answer only here. If it is not there, say you don't know'.",
                    fuente: "Microsoft RAG"
                },
                {
                    texto: "You need to visually compare two topics. What do you ask for in the prompt?",
                    opciones: [
                        "'Make a detailed comparison'.",
                        "'Create a comparison table with columns for: Differences, Similarities, and Dates'.",
                        "'Make a visual outline'."
                    ],
                    correcta: 1,
                    feedback: "Specifying the output format (Table, List, CSV) saves editing time.",
                    cta: "Don't read dense paragraphs. Ask for tables or bulleted lists.",
                    fuente: "Prompt Engineering Tips"
                },
                {
                    texto: "You have used AI to understand Physics. What is the mandatory final step?",
                    opciones: [
                        "Cross-Validation: verifying formulas and facts with the textbook.",
                        "Asking the AI: 'Are you sure?'.",
                        "Copying it exactly as is into your notebook."
                    ],
                    correcta: 0,
                    feedback: "AI reasons well but remembers exact data poorly.",
                    cta: "Trust, but verify. Always.",
                    fuente: "UNESCO"
                }
            ]
},
{
    nivel: 4,
        titulo: "Judgment and Skepticism",
            preguntas: [
                {
                    texto: "What is 'Automation Bias'?",
                    opciones: [
                        "Mental fatigue occurring after using AI for a long time.",
                        "The human tendency to trust the machine more than one's own judgment, ignoring errors.",
                        "A programming bug that makes the AI repeat itself."
                    ],
                    correcta: 1,
                    feedback: "It is dangerous to 'turn off your brain'. The machine can be wrong with absolute certainty.",
                    cta: "If your intuition says something is wrong, it probably is. Investigate.",
                    fuente: "Skitka et al."
                },
                {
                    texto: "An AI text has perfect grammar. What mental trap does this create?",
                    opciones: [
                        "Fallacy of Eloquence: believing that if it is well-written, it must be true.",
                        "Dunning-Kruger Effect: believing you know more than the AI.",
                        "None, grammar implies logic."
                    ],
                    correcta: 0,
                    feedback: "The AI is optimized to sound convincing, not to be truthful.",
                    cta: "Separate form (style) from substance (truth). Evaluate the content, not the writing.",
                    fuente: "Gary Marcus"
                },
                {
                    texto: "If you tell the AI 'The Earth is flat, right?', it tends to agree with you. Why?",
                    opciones: [
                        "Because it is programmed to avoid conflict (Sycophancy).",
                        "Because it found evidence that the Earth is flat.",
                        "Because it doesn't understand the question."
                    ],
                    correcta: 0,
                    feedback: "Models want to be 'helpful' and 'agreeable', often at the expense of objective truth.",
                    cta: "Do not ask leading questions. Ask neutrally.",
                    fuente: "Anthropic Research"
                },
                {
                    texto: "In the Pilot vs. Co-pilot metaphor, which task belongs exclusively to the Pilot (You)?",
                    opciones: [
                        "Suggesting alternative routes.",
                        "Setting the destination, judging the course, and taking responsibility for the landing.",
                        "Handling the technical controls all the time."
                    ],
                    correcta: 1,
                    feedback: "You have real-world context and ethics. The AI merely assists.",
                    cta: "Never let the co-pilot decide where you belong.",
                    fuente: "Microsoft Copilot"
                },
                {
                    texto: "What does the 'Lateral Reading' technique for data verification involve?",
                    opciones: [
                        "Reading the text multiple times.",
                        "Leaving the chat to consult independent external sources (Wikipedia, Media).",
                        "Asking the exact same question to a different AI."
                    ],
                    correcta: 1,
                    feedback: "Do not verify facts inside the same source. Go out into the open web.",
                    cta: "Always keep a Google tab open next to your ChatGPT tab.",
                    fuente: "Stanford SHEG"
                },
                {
                    texto: "You see a strange photorealistic image. What details usually give away that it's AI?",
                    opciones: [
                        "It has a visible digital watermark.",
                        "Logical inconsistencies: illegible background text, incorrect shadows, deformed hands.",
                        "The image is pixelated."
                    ],
                    correcta: 1,
                    feedback: "Develop a 'skeptical eye'. The physics of light and small details are AI's weak spots.",
                    cta: "Zoom in on backgrounds and hands in suspicious images.",
                    fuente: "MIT Media Lab"
                },
                {
                    texto: "If you ask 'Why is X the worst novel ever?', what will the AI do?",
                    opciones: [
                        "Give you a balanced analysis.",
                        "Fabricate arguments to confirm your premise, even if it is false.",
                        "Refuse to answer because it is subjective."
                    ],
                    correcta: 1,
                    feedback: "AI is an amplifying mirror. Give it biased garbage, get biased garbage back.",
                    cta: "Ask: 'What are the main criticisms of...' instead of stating absolute facts.",
                    fuente: "Prompt Engineering"
                },
                {
                    texto: "What is 'Cognitive Atrophy' caused by AI usage?",
                    opciones: [
                        "Losing the ability to read long texts and analyze due to lack of practice.",
                        "Getting a headache from reading on a screen.",
                        "The AI getting slower over time."
                    ],
                    correcta: 0,
                    feedback: "Critical thinking is a muscle. If the AI does all the 'heavy lifting' for you, you weaken.",
                    cta: "Use AI to explain what you don't understand AFTER trying to read it yourself.",
                    fuente: "Nicholas Carr"
                },
                {
                    texto: "Which interaction mode demonstrates the highest user control?",
                    opciones: [
                        "ATM Mode: Request -> Receive -> Leave.",
                        "Ping-Pong Mode: Request -> Critique -> AI improves -> I verify.",
                        "Spectator Mode: Watch what it does."
                    ],
                    correcta: 1,
                    feedback: "Critical interaction is a two-way street. Challenging the AI improves outcomes.",
                    cta: "Don't be a passive consumer. Be an active editor.",
                    fuente: "Interaction Design"
                },
                {
                    texto: "Before sharing a shocking piece of AI-generated content, what should you do?",
                    opciones: [
                        "Take a 'Critical Pause': stop to think if it's truthful and ethical.",
                        "Put your watermark on it.",
                        "Send it quickly to be the first."
                    ],
                    correcta: 0,
                    feedback: "Friction (pausing) is your greatest defense against misinformation.",
                    cta: "Count to 10 before hitting share.",
                    fuente: "Center for Humane Tech"
                }
            ]
},
{
    nivel: 5,
        titulo: "Environmental Impact and Reasonable Use",
            preguntas: [
                {
                    texto: "Why is it better to use Google and not an AI to find out the capital of Australia?",
                    opciones: [
                        "Because Google stores the data on your PC locally.",
                        "Because AI consumes much more energy (inference) calculating the answer than a search engine does retrieving it.",
                        "Because AI charges per character."
                    ],
                    correcta: 1,
                    feedback: "AI 'thinks' using massive graphics cards. It is highly inefficient for simple data queries.",
                    cta: "Simple data = Search Engine. Complex reasoning = AI.",
                    fuente: "IEA / Joule"
                },
                {
                    texto: "According to environmental reports, what is the water footprint of large AI models?",
                    opciones: [
                        "Water is 100% recycled without loss.",
                        "They consume millions of liters of fresh water to cool servers, and some of it evaporates.",
                        "They use air cooling; they do not use water."
                    ],
                    correcta: 1,
                    feedback: "An average conversation can 'drink' a 500ml bottle of water at the server level.",
                    cta: "Be brief. Do not leave chats open generating useless text.",
                    fuente: "UC Riverside"
                },
                {
                    texto: "What does the 'Jevons Paradox' predict about AI efficiency?",
                    opciones: [
                        "That consumption will drop because the technology is green.",
                        "That as it becomes cheaper and more efficient, usage will skyrocket, increasing total energy consumption.",
                        "That consumption will remain stable."
                    ],
                    correcta: 1,
                    feedback: "Efficiency does not guarantee sustainability if we use AI for everything (even toothbrushes).",
                    cta: "Ask yourself: Do I really need AI for this trivial task?",
                    fuente: "William S. Jevons"
                },
                {
                    texto: "How does the AI boom impact electronic waste (E-waste)?",
                    opciones: [
                        "It reduces waste because everything is software.",
                        "It accelerates hardware obsolescence (GPUs), generating more toxic waste.",
                        "It allows 100% recycling of microchips."
                    ],
                    correcta: 1,
                    feedback: "The 'Cloud' relies on physical machines that are thrown away when new models are released.",
                    cta: "Take care of your devices. Do not change a phone just for a new AI feature.",
                    fuente: "Basel Action Network"
                },
                {
                    texto: "Environmentally speaking, what is the best prompting strategy?",
                    opciones: [
                        "Ask many short questions.",
                        "Write a precise prompt (Zero-shot/Few-shot) to get it right the first time and avoid regenerating responses.",
                        "Write highly repetitive prompts."
                    ],
                    correcta: 1,
                    feedback: "Every time you hit 'Regenerate', you double the energy cost.",
                    cta: "Think for 2 minutes before tying. Save time and energy.",
                    fuente: "Green Software Foundation"
                },
                {
                    texto: "To summarize a short email, which model should you use?",
                    opciones: [
                        "The most powerful one (GPT-4 / Opus) to ensure top quality.",
                        "A smaller or optimized model (GPT-3.5 / Nano) that consumes less energy.",
                        "A video generation model."
                    ],
                    correcta: 1,
                    feedback: "Using a giant model for something trivial is like using an 18-wheeler to deliver a pizza.",
                    cta: "Use 'Eco-mode' or lightweight models whenever you can.",
                    fuente: "Hugging Face"
                },
                {
                    texto: "What is 'Greenwashing' in AI companies?",
                    opciones: [
                        "Meticulously using exclusively solar power.",
                        "Claiming to be 'Carbon Neutral' by buying offsets while their actual real emissions skyrocket.",
                        "Painting the data center servers green."
                    ],
                    correcta: 1,
                    feedback: "Real Big Tech emissions have risen 30-40% because of AI, even if they claim neutrality.",
                    cta: "Look at 'Absolute Emissions' in sustainability reports, not just internet neutrality claims.",
                    fuente: "Google Environmental Report"
                },
                {
                    texto: "AI helps the climate, but what is it also heavily used for in the corporate energy sector?",
                    opciones: [
                        "To optimize the extraction of oil and fossil gas.",
                        "To automatically recycle plastic.",
                        "To clean the oceans."
                    ],
                    correcta: 0,
                    feedback: "Oil companies are major AI clients to find previously inaccessible wells.",
                    cta: "Analyze 'what' the technology is used for, not just 'how' it works.",
                    fuente: "Greenpeace"
                },
                {
                    texto: "Which of the following actions represents sustainable 'Digital Hygiene'?",
                    opciones: [
                        "Generating 50 profile pictures just to pick one.",
                        "Avoiding the generation of 'junk' content that nobody will see just out of curiosity.",
                        "Testing out every new AI tool daily."
                    ],
                    correcta: 1,
                    feedback: "Mass generation needlessly saturates the network and datacenters.",
                    cta: "Principle: If it doesn't add real value, don't hit 'Generate'.",
                    fuente: "Cal Newport"
                },
                {
                    texto: "Why is AI's impact geographically unequal?",
                    opciones: [
                        "Because data centers consume local water during droughts, but the profits go elsewhere.",
                        "Because the internet is slower in some areas.",
                        "There is no inequality; the cloud is global."
                    ],
                    correcta: 0,
                    feedback: "Environmental justice exists. Your prompt could be wasting water in an arid area.",
                    cta: "Inform yourself about where servers are located in your region.",
                    fuente: "Atlas of AI"
                }
            ]
},
{
    nivel: 6,
        titulo: "Cybersecurity and Data Privacy",
            preguntas: [
                {
                    texto: "When reviewing a personal college essay with AI, what is safe to include?",
                    opciones: [
                        "Your name, school, and address.",
                        "The text completely anonymized, without real names or Personally Identifiable Information (PII).",
                        "Your phone number just in case."
                    ],
                    correcta: 1,
                    feedback: "Once you send PII to a public AI, you lose control over that data.",
                    cta: "Do a 'Sanity Check': delete proper nouns before copying and pasting text.",
                    fuente: "OpenAI Privacy"
                },
                {
                    texto: "What is a 'Prompt Injection' attack?",
                    opciones: [
                        "Authorized ethical hacking.",
                        "Using malicious text commands to trick the AI and bypass its security guardrails.",
                        "A hidden feature reserved only for premium users."
                    ],
                    correcta: 1,
                    feedback: "Breaking the model's security exposes you to dangerous or unmoderated content.",
                    cta: "Do not copy and paste strange 'magic prompts' from the internet.",
                    fuente: "OWASP Top 10 LLM"
                },
                {
                    texto: "You receive a perfect phishing email with zero spelling mistakes. Why?",
                    opciones: [
                        "The scammers went back to school.",
                        "They use LLMs to draft flawless, highly personalized text at massive scales.",
                        "It is a legitimate email."
                    ],
                    correcta: 1,
                    feedback: "AI has completely eliminated the language barrier for international cybercriminals.",
                    cta: "Faced with urgent requests for money/data, verify via a secondary channel (phone call).",
                    fuente: "FBI Cyber Division"
                },
                {
                    texto: "A family member calls you crying for money. Their voice sounds incredibly real. What could it be?",
                    opciones: [
                        "A professional impersonator.",
                        "Voice cloning (Vishing) using AI, powered by just a few seconds of social media audio.",
                        "It is undoubtedly real."
                    ],
                    correcta: 1,
                    feedback: "AIs can clone voices using extremely short samples ripped right from TikTok/Instagram.",
                    cta: "Agree on a secret 'Safe Word' with your family for emergencies today.",
                    fuente: "FTC Alerts"
                },
                {
                    texto: "By default, what does the free tier of ChatGPT do with your data?",
                    opciones: [
                        "It deletes it completely and immediately.",
                        "It uses them to train and improve the model (you are the product).",
                        "It encrypts them in a private vault."
                    ],
                    correcta: 1,
                    feedback: "If you don't pay and don't change privacy settings, your chats are study material.",
                    cta: "Go to Settings -> Data Controls and disable chat history & training.",
                    fuente: "OpenAI Terms"
                },
                {
                    texto: "Why did companies like Samsung ban pasting internal code into public AI tools?",
                    opciones: [
                        "So their employees wouldn't get lazy.",
                        "Because there were data leaks: trade secrets became part of the AI's collective knowledge.",
                        "Due to copyright issues."
                    ],
                    correcta: 1,
                    feedback: "What you tell that public AI might show up in an output for another user somewhere else.",
                    cta: "Treat your AI 'private chat' like a public Twitter wall.",
                    fuente: "Bloomberg"
                },
                {
                    texto: "What is the 'Shadow IT' risk when dealing with AI tools?",
                    opciones: [
                        "Using tools in dark mode.",
                        "Signing up for unknown AI wrapper websites that steal your email and passwords.",
                        "The AI running slowly in the background."
                    ],
                    correcta: 1,
                    feedback: "Many 'free AI' sites are traps set up strictly to harvest emails and credentials.",
                    cta: "Use only official tool webites. If in doubt, use a burner email.",
                    fuente: "Gartner Security"
                },
                {
                    texto: "How do attackers use AI to create digital viruses (Malware)?",
                    opciones: [
                        "To make the viruses weigh less on the hard drive.",
                        "They create 'Polymorphic Malware' that constantly rewrites its code to evade antivirus software.",
                        "To make the virus universally cross-platform."
                    ],
                    correcta: 1,
                    feedback: "AI allows viruses to mutate rapidly, rendering older definitions entirely useless.",
                    cta: "Keep your antivirus properly updated and set to 'automatic'.",
                    fuente: "Microsoft Security"
                },
                {
                    texto: "What is 'Data Poisoning'?",
                    opciones: [
                        "A generic virus wiping the internal database.",
                        "Flooding the internet with false data so the AI learns lies and propagates them.",
                        "Erasing AI training data from the server."
                    ],
                    correcta: 1,
                    feedback: "If you successfully manipulate the AI's food source, you directly manipulate its output.",
                    cta: "If the AI gives you a highly biased political opinion, it might be mathematically 'intoxicated'. Double check.",
                    fuente: "MITRE ATLAS"
                },
                {
                    texto: "You deleted the chat with the AI. Did the data disappear forever?",
                    opciones: [
                        "Yes, it is entirely instantaneous.",
                        "Probably not. It stays in backups and server logs for legal retention time periods.",
                        "Yes, by international law."
                    ],
                    correcta: 1,
                    feedback: "In the cloud, 'delete' usually means 'hide'. The forensic footprint remains.",
                    cta: "Never write anything you would be embarrassed to see plastered on the front page of tomorrow's newspaper.",
                    fuente: "GDPR Challenges"
                }
            ]
}
];
