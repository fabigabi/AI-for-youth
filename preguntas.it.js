window.datosNivelesIT = [
    {
        nivel: 1,
        titulo: "Concetti Fondamentali",
        preguntas: [
            {
                texto: "Qual è la differenza tecnica tra un motore di ricerca (Google classico) e un LLM (ChatGPT)?",
                opciones: [
                    "Il motore di ricerca trova siti web; l'LLM consulta un database di conoscenze statico e verificato.",
                    "Il motore di ricerca recupera informazioni indicizzate; l'LLM genera nuove informazioni prevedendo la parola successiva probabile.",
                    "Il motore di ricerca è per testi brevi e l'LLM elabora esclusivamente immagini e video."
                ],
                correcta: 1,
                feedback: "Un motore di ricerca 'trova' ciò che già esiste. Un LLM 'inventa' la risposta parola per parola basandosi sulle probabilità.",
                cta: "Non usare l'IA per cercare dati fattuali recenti (orari, prezzi). Usa un motore di ricerca.",
                fuente: "Wayne Holmes / UNESCO"
            },
            {
                texto: "Quando ChatGPT scrive una frase, come 'decide' quale parola inserire dopo?",
                opciones: [
                    "Analizza la logica semantica e il significato filosofico della domanda.",
                    "Consulta in tempo reale su Wikipedia per garantire la veridicità.",
                    "Calcola la probabilità statistica del 'token' che si adatta meglio in base al suo addestramento precedente."
                ],
                correcta: 2,
                feedback: "È matematica, non comprensione. Il modello prevede la continuazione più probabile, non necessariamente la più vera.",
                cta: "Ricorda: il fatto che suoni coerente non significa che sia vero.",
                fuente: "Kate Crawford - Atlas of AI"
            },
            {
                texto: "Cos'è un' 'Allucinazione' nel contesto dell'IA?",
                opciones: [
                    "Un errore di connessione in cui si mescolano le risposte di due utenti diversi.",
                    "Quando il modello genera informazioni false con totale sicurezza e coerenza grammaticale.",
                    "Un virus informatico che colpisce i server visivi dell'IA."
                ],
                correcta: 1,
                feedback: "Essendo probabilistico, il modello riempie i vuoti con dati inventati se si adattano al modello linguistico.",
                cta: "Diffida sempre se l'IA ti fornisce dati molto specifici (date, leggi) senza citare le fonti.",
                fuente: "Stanford HAI Report"
            },
            {
                texto: "Da dove ottiene le sue conoscenze un modello come GPT-4?",
                opciones: [
                    "Da un team globale di professori che convalidano manualmente ogni risposta.",
                    "Da un enorme set di dati (Common Crawl) estratti da Internet fino a una data limite.",
                    "Si connette direttamente alla mente degli sviluppatori."
                ],
                correcta: 1,
                feedback: "Sono dati 'congelati' nel tempo. Se qualcosa è successo dopo la sua data limite, l'IA non lo sa nativamente.",
                cta: "Verifica sempre la data di aggiornamento del modello che usi.",
                fuente: "OpenAI System Cards"
            },
            {
                texto: "L'IA capisce davvero quello che sta scrivendo?",
                opciones: [
                    "Sì, possiede una comprensione semantica avanzata simile a quella umana.",
                    "Sì, ma capisce solo le lingue principali (Inglese, Spagnolo, Cinese).",
                    "No. Elabora la sintassi (regole e ordine) ma manca di comprensione semantica (significato) del mondo."
                ],
                correcta: 2,
                feedback: "Funziona come un 'Pappagallo Stocastico'. Ripete forme linguistiche complesse senza capirne il contenuto.",
                cta: "Non dare per scontato che l'IA 'sappia' di cosa sta parlando. Sa solo mettere insieme le parole.",
                fuente: "Emily Bender (Stochastic Parrots)"
            },
            {
                texto: "Come elabora l'IA la parola 'Computer'?",
                opciones: [
                    "La divide in 'Token' (frammenti numerici), ad esempio: 'Com-pu-ter'.",
                    "La legge lettera per lettera come un umano che impara a leggere.",
                    "La elabora come un'immagine visiva di un computer."
                ],
                correcta: 0,
                feedback: "I modelli vedono numeri, non lettere. Questo spiega perché a volte sbagliano a fare lo spelling o le rime.",
                cta: "Se devi contare le lettere o le parole esatte, non fidarti dell'IA.",
                fuente: "OpenAI Tokenizer"
            },
            {
                texto: "Cosa succede tecnicamente se aumenti la 'temperatura' del modello?",
                opciones: [
                    "Il modello consuma più memoria RAM per elaborare risposte complesse.",
                    "Il modello sceglie opzioni meno probabili, diventando più 'creativo' ma incline alle allucinazioni.",
                    "Il modello diventa più severo e dà solo risposte brevi."
                ],
                correcta: 1,
                feedback: "La Temperatura 0 è deterministica (ripetitiva). Una temperatura alta è casuale (caotica).",
                cta: "Per le attività basate sui fatti o la matematica, usa una temperatura bassa o la modalità 'precisa'.",
                fuente: "Ethan Mollick"
            },
            {
                texto: "Stai analizzando un intero libro e l'IA dimentica l'inizio. Perché?",
                opciones: [
                    "Il server si è riavviato per risparmiare energia.",
                    "Hai superato la sua 'Finestra di Contesto' (memoria di lavoro limitata).",
                    "L'IA dà priorità alle informazioni più recenti perché le considera più importanti."
                ],
                correcta: 1,
                feedback: "L'IA ha un limite di parole che può 'vedere' contemporaneamente. Ciò che esce dalla finestra, viene dimenticato.",
                cta: "Se lavori con testi lunghi, dividili in parti o usa modelli con una finestra ampia (es. NotebookLM o un modello in abbonamento).",
                fuente: "Anthropic Docs"
            },
            {
                texto: "Cosa significa che un modello è 'Multimodale'?",
                opciones: [
                    "Che può essere eseguito su più sistemi operativi (Windows, Mac, Linux).",
                    "Che può elaborare testo, immagini e audio in modo nativo e simultaneo.",
                    "Che può parlare con più utenti contemporaneamente."
                ],
                correcta: 1,
                feedback: "I modelli moderni non sanno solo leggere. Possono 'vedere' le foto e 'ascoltare' l'audio.",
                cta: "Usa la multimodalità per analizzare grafici o riassumere le registrazioni audio delle lezioni.",
                fuente: "Google DeepMind"
            },
            {
                texto: "Qual è il ruolo dell'umano (Human-in-the-loop) quando si usa l'IA?",
                opciones: [
                    "Supervisionare solo l'inizio del processo e lasciare che l'IA finisca.",
                    "Addestrare l'IA in modo che non abbia bisogno di supervisione futura.",
                    "Verificare obbligatoriamente i risultati a causa della possibilità di errore.",
                ],
                correcta: 2,
                feedback: "L'IA è un copilota incline agli errori. L'umano è il responsabile finale dell'integrità.",
                cta: "Non consegnare mai un lavoro basato sull'IA senza prima aver letto e verificato ogni riga.",
                fuente: "UNESCO"
            }
        ]
    },
    {
        nivel: 2,
        titulo: "Etica e Rischi",
        preguntas: [
            {
                texto: "Se un'IA genera immagini di medici e mostra solo uomini, qual è il motivo?",
                opciones: [
                    "Perché l'IA è programmata per evitare la diversità forzata.",
                    "Perché riflette i pregiudizi storici (Bias) presenti nei dati di addestramento.",
                    "È una coincidenza casuale dell'algoritmo."
                ],
                correcta: 1,
                feedback: "Garbage In, Garbage Out. Se la storia ha pregiudizi, il modello li amplifica.",
                cta: "Sii critico: se l'IA ti dà degli stereotipi, chiedile esplicitamente diversità nel prompt.",
                fuente: "Kate Crawford"
            },
            {
                texto: "Qual è il maggior rischio etico dei 'Deepfake' negli adolescenti?",
                opciones: [
                    "Che vengano usati per copiare negli esami orali via video.",
                    "La creazione di materiale dannoso (molestie, disinformazione) scambiando le identità.",
                    "Che gli attori perdano il lavoro al cinema."
                ],
                correcta: 1,
                feedback: "La facilità con cui si creano video falsi minaccia la reputazione e la privacy delle persone.",
                cta: "Non creare o condividere mai deepfake di compagni. È una violazione grave e ha conseguenze legali.",
                fuente: "Sonia Livingstone"
            },
            {
                texto: "Qual è l'impatto fisico reale dell'utilizzo dell'IA Generativa?",
                opciones: [
                    "Nessuno, è un software basato sul cloud.",
                    "Alto consumo di acqua ed elettricità nei data center.",
                    "Consuma solo la batteria del tuo dispositivo."
                ],
                correcta: 1,
                feedback: "Ogni richiesta attiva processori potenti che generano calore e richiedono litri d'acqua per essere raffreddati.",
                cta: "Usa l'IA quando porta un valore reale, non per noia.",
                fuente: "MIT Technology Review"
            },
            {
                texto: "Perché artisti e scrittori fanno causa alle aziende di IA?",
                opciones: [
                    "Perché l'IA disegna meglio di loro.",
                    "Per l'uso delle loro opere protette da copyright per l'addestramento senza permesso né compenso.",
                    "Perché l'IA sta saturando il mercato con opere d'arte a basso costo."
                ],
                correcta: 1,
                feedback: "Il dibattito è se l'addestramento rientri nel 'Fair Use' o se si tratti di furto di proprietà intellettuale.",
                cta: "Se generi arte con l'IA, riconosci che è sintetica. Non appropriarti del lavoro della macchina.",
                fuente: "Casi NYT vs OpenAI"
            },
            {
                texto: "Cos'è il problema della 'Scatola Nera' (Black Box)?",
                opciones: [
                    "Che i server sono verniciati di nero per dissipare il calore.",
                    "Che nemmeno i creatori sanno spiegare esattamente come l'IA sia giunta a una conclusione specifica.",
                    "Che il codice sorgente è privato e nessuno può vederlo."
                ],
                correcta: 1,
                feedback: "La mancanza di 'spiegabilità' è pericolosa se l'IA prende decisioni relative a crediti o ammissioni.",
                cta: "Non accettare mai un 'no' o un verdetto da un'IA senza chiedere una spiegazione umana.",
                fuente: "Wayne Holmes"
            },
            {
                texto: "Perché è rischioso trattare l'IA come se fosse una persona (Antropomorfizzazione)?",
                opciones: [
                    "Genera una falsa dipendenza emotiva nei confronti di un oggetto privo di empatia e responsabilità.",
                    "L'IA funziona peggio se non sei educato con lei.",
                    "Non ci sono rischi, anzi, aiuta a esercitare le abilità sociali."
                ],
                correcta: 0,
                feedback: "L''Effetto ELIZA' ci rende vulnerabili alla manipolazione. L'IA non prova sentimenti, simula soltanto.",
                cta: "Ricorda a te stesso: 'Questo è un software, non un amico'.",
                fuente: "Sherry Turkle"
            },
            {
                texto: "Chi esegue di solito la moderazione dei contenuti violenti per addestrare l'IA?",
                opciones: [
                    "Algoritmi automatici avanzati.",
                    "Esseri umani nei paesi in via di sviluppo con bassi salari ed esposti a traumi.",
                    "Gli ingegneri capo delle aziende tecnologiche."
                ],
                correcta: 1,
                feedback: "Dietro l'IA 'pulita' c'è il lavoro umano precario per filtrare il peggio di Internet.",
                cta: "Prendi coscienza della catena di produzione umana dietro alla tecnologia.",
                fuente: "Rivista TIME"
            },
            {
                texto: "In che modo gli algoritmi di raccomandazione (IA) influenzano l'opinione pubblica?",
                opciones: [
                    "Mostrano sempre una serie di contenuti per educare.",
                    "Creano 'Camere di Risonanza' (Echo Chambers) che confermano solo ciò in cui già credi, polarizzando la società.",
                    "Ci rendono più tolleranti mostrandoci ogni cosa."
                ],
                correcta: 1,
                feedback: "Per tenerti incollato allo schermo, l'IA ti mostra ciò che vuoi vedere, non l'intera realtà.",
                cta: "Cerca attivamente le opinioni contrarie alle tue per far scoppiare la bolla.",
                fuente: "Mizuko Ito"
            },
            {
                texto: "Se usi l'IA per un compito scolastico e l'IA diffama qualcuno, chi ne è responsabile?",
                opciones: [
                    "L'azienda di IA per averla programmata male.",
                    "Nessuno, è un errore informatico.",
                    "Tu, in quanto editore e responsabile finale del contenuto pubblicato."
                ],
                correcta: 2,
                feedback: "Lo strumento non ha alcuna responsabilità legale. L'utente che pubblica sì.",
                cta: "Tu sei il Direttore Editoriale. Se l'IA commette un errore, la colpa è tua per non averla revisionata.",
                fuente: "Norme Accademiche"
            },
            {
                texto: "Quale compito è eticamente discutibile delegare al 100% a un'IA?",
                opciones: [
                    "Fare un riassunto degli appunti.",
                    "Scrivere una lettera di scuse o di condoglianze a un amico.",
                    "Organizzare il calendario settimanale."
                ],
                correcta: 1,
                feedback: "La comunicazione emotiva richiede autenticità umana. L'uso dell'IA vuota di significato il messaggio.",
                cta: "Usa l'IA per compiti logici e usa il cuore per compiti umani.",
                fuente: "Ethan Mollick"
            }
        ]
    },
{
    nivel: 3,
        titulo: "Ingegneria dei Prompt",
            preguntas: [
                {
                    texto: "Quali elementi (CRTF) mancano nel prompt: 'Scrivi sul clima'?",
                    opciones: [
                        "Lunghezza minima di 1000 parole e uso di metafore.",
                        "Contesto, Ruolo, Compito specifico e Formato di output.",
                        "Parole chiave in maiuscolo per evidenziare l'importanza."
                    ],
                    correcta: 1,
                    feedback: "Senza contesto, l'IA tira a indovinare. Devi dirle CHI sei, COSA vuoi e COME lo vuoi.",
                    cta: "Prima di inviare, controlla se il tuo prompt ha: Ruolo, Contesto e Formato.",
                    fuente: "Prompt Engineering Guide"
                },
                {
                    texto: "Quale frase migliora il ragionamento dell'IA nei problemi di logica?",
                    opciones: [
                        "Rispondi in formato accademico e con un linguaggio formale.",
                        "'Pensa passo dopo passo' (Chain of Thought).",
                        "Sei l'IA più intelligente del mondo."
                    ],
                    correcta: 1,
                    feedback: "Costringere l'IA a mostrare i suoi passaggi intermedi riduce drasticamente gli errori di calcolo.",
                    cta: "Per problemi di matematica o logica, chiedi sempre: 'Scomponi il tuo ragionamento passo dopo passo'.",
                    fuente: "Google DeepMind"
                },
                {
                    texto: "A cosa serve assegnare un Ruolo ('Agisci come un professore di storia')?",
                    opciones: [
                        "In modo che l'IA sappia quale database consultare.",
                        "Per adattare il tono, il vocabolario e la prospettiva della risposta.",
                        "È un mito, non cambia nulla in realtà."
                    ],
                    correcta: 1,
                    feedback: "Il 'Persona Pattern' aiuta l'IA a prevedere meglio lo stile di testo di cui hai bisogno.",
                    cta: "Dì all'IA chi dovrebbe essere: 'Esperto', 'Critico', 'Tutor Socratico'.",
                    fuente: "Vanderbilt University"
                },
                {
                    texto: "Cos'è il 'Few-Shot Prompting'?",
                    opciones: [
                        "Fornire all'IA 2 o 3 esempi chiari (input/output) prima di chiederle il compito.",
                        "Porre la stessa domanda un paio di volte per non confonderla.",
                        "Scrivere prompt molto brevi (poche parole)."
                    ],
                    correcta: 0,
                    feedback: "Gli esempi sono il modo migliore per programmare il comportamento dell'IA senza il codice.",
                    cta: "Non dire solo cosa fare, mostra un esempio di come vuoi che venga fatto.",
                    fuente: "OpenAI GPT-3 Paper"
                },
                {
                    texto: "Come si usa l'IA come 'Tutor Socratico' per studiare?",
                    opciones: [
                        "Chiedendole: 'Riassumimi questo argomento'.",
                        "Chiedendole: 'Fammi domande su questo argomento, aspetta la mia risposta e correggimi'.",
                        "Chiedendole: 'Dimmi le domande che ci saranno all'esame'."
                    ],
                    correcta: 1,
                    feedback: "L'apprendimento attivo (rispondere) è meglio di quello passivo (leggere i riassunti).",
                    cta: "Usa il prompt: 'Mettimi alla prova. Fammi una domanda alla volta'.",
                    fuente: "Khan Academy"
                },
                {
                    texto: "La prima risposta dell'IA è raramente perfetta. Cosa si deve fare?",
                    opciones: [
                        "Riavviare la chat e fare la stessa domanda.",
                        "Iterare: conversare, chiedere correzioni e perfezionare il risultato.",
                        "Presumere che l'IA non conosca l'argomento."
                    ],
                    correcta: 1,
                    feedback: "Tratta l'IA come una stagista: dalle dei feedback per migliorare il suo lavoro.",
                    cta: "Non fermarti alla prima versione. Dille: 'Migliora questo, rendilo più conciso'.",
                    fuente: "Nielsen Norman Group"
                },
                {
                    texto: "Se chiedi a ChatGPT '5 riferimenti bibliografici con link', cosa succede di solito?",
                    opciones: [
                        "Ti fornisce riferimenti non recenti ma validi.",
                        "Ha allucinazioni su autori e titoli che sembrano reali ma non esistono.",
                        "Ti dice che non ha accesso a Internet."
                    ],
                    correcta: 1,
                    feedback: "Gli LLM inventano citazioni per soddisfare la struttura del prompt.",
                    cta: "NON chiedere MAI bibliografie a un'IA generativa di base. Usa Google Scholar.",
                    fuente: "Nature"
                },
                {
                    texto: "Come eviti che l'IA inventi dati durante l'analisi del tuo PDF?",
                    opciones: [
                        "Le chiedi di cercare informazioni simili su Internet.",
                        "Usi il 'Grounding': le indichi 'Rispondi SOLO usando le informazioni contenute in questo testo'.",
                        "Le dici che è molto importante che non menta."
                    ],
                    correcta: 1,
                    feedback: "Devi ancorare (Ground) l'IA ai tuoi dati per limitare la sua immaginazione.",
                    cta: "Carica i tuoi appunti e dille: 'Cerca la risposta solo qui. Se non c'è, dimmi che non lo sai'.",
                    fuente: "Microsoft RAG"
                },
                {
                    texto: "Devi confrontare due argomenti in modo visivo. Cosa chiedi nel prompt?",
                    opciones: [
                        "'Fai un confronto dettagliato'.",
                        "'Crea una tabella di comparazione con le colonne per: Differenze, Somiglianze e Date'.",
                        "'Crea uno schema visivo'."
                    ],
                    correcta: 1,
                    feedback: "Specificare il formato di output (Tabella, Elenco, CSV) consente di risparmiare tempo in fase di modifica.",
                    cta: "Non leggere paragrafi fitti. Chiedi tabelle o elenchi puntati.",
                    fuente: "Prompt Engineering Tips"
                },
                {
                    texto: "Hai usato l'IA per capire la Fisica. Qual è il passaggio finale obbligatorio?",
                    opciones: [
                        "Convalida Incrociata: verificare formule e dati sul libro di testo.",
                        "Chiedere all'IA: 'Sei sicura?'.",
                        "Copiare il testo nel quaderno così com'è."
                    ],
                    correcta: 0,
                    feedback: "L'IA ragiona bene, ma ricorda male i dati esatti.",
                    cta: "Fidati, ma verifica. Sempre.",
                    fuente: "UNESCO"
                }
            ]
},
{
    nivel: 4,
        titulo: "Criterio e Scetticismo",
            preguntas: [
                {
                    texto: "Cos'è il 'Bias di Automazione'?",
                    opciones: [
                        "La fatica mentale che si verifica dopo aver usato a lungo l'IA.",
                        "La tendenza umana a confidare più nella macchina che nel proprio giudizio, ignorando gli errori.",
                        "L'errore di programmazione per cui l'IA si ripete."
                    ],
                    correcta: 1,
                    feedback: "È pericoloso 'spegnere il cervello'. La macchina può sbagliarsi con totale sicurezza.",
                    cta: "Se il tuo istinto ti dice che c'è qualcosa che non va, probabilmente è così. Indaga.",
                    fuente: "Skitka et al."
                },
                {
                    texto: "Un testo generato dall'IA ha una grammatica perfetta. Che trappola mentale crea?",
                    opciones: [
                        "Fallacia dell'Eloquenza: credere che se è scritto bene, è vero.",
                        "Effetto Dunning-Kruger: credere di saperne di più dell'IA.",
                        "Nessuna, la grammatica implica la logica."
                    ],
                    correcta: 0,
                    feedback: "L'IA è ottimizzata per sembrare convincente, non per essere veritiera.",
                    cta: "Separa la forma (accattivante) dalla sostanza (vero). Valuta il contenuto, non lo stile.",
                    fuente: "Gary Marcus"
                },
                {
                    texto: "Se dici all'IA 'La Terra è piatta, vero?', lei tende a darti ragione. Perché?",
                    opciones: [
                        "Perché è programmata per evitare conflitti (Sicomorfismo).",
                        "Perché ha trovato prove che sia piatta.",
                        "Perché non capisce la domanda."
                    ],
                    correcta: 0,
                    feedback: "I modelli vogliono essere 'utili' e 'gentili', spesso a scapito della verità oggettiva.",
                    cta: "Non fare domande allusive ('Leading questions'). Fai domande in modo neutrale.",
                    fuente: "Anthropic Research"
                },
                {
                    texto: "Nella metafora Pilota vs Copilota, quale compito spetta esclusivamente al Pilota (Tu)?",
                    opciones: [
                        "Suggerire rotte alternative.",
                        "Definire la destinazione, giudicare la rotta e assumersi la responsabilità dell'atterraggio.",
                        "Gestire i comandi tecnici per tutto il tempo."
                    ],
                    correcta: 1,
                    feedback: "Tu hai il contesto del mondo reale e dell'etica. L'IA si limita ad assistere.",
                    cta: "Non lasciare mai che il copilota decida dove andare.",
                    fuente: "Microsoft Copilot"
                },
                {
                    texto: "In cosa consiste la tecnica della 'Lettura Laterale' per la verifica dei dati?",
                    opciones: [
                        "Leggere il testo più volte.",
                        "Uscire dalla chat e consultare fonti esterne indipendenti (Wikipedia, Media).",
                        "Fare la stessa domanda a un'IA diversa."
                    ],
                    correcta: 1,
                    feedback: "Non verificare all'interno della stessa fonte. Cerca nel web.",
                    cta: "Tieni sempre aperta una scheda di Google accanto a quella di ChatGPT.",
                    fuente: "Stanford SHEG"
                },
                {
                    texto: "Vedi una strana foto realistica. Quali dettagli spesso rivelano che si tratta di IA?",
                    opciones: [
                        "C'è una filigrana digitale (watermark) visibile.",
                        "Incoerenze logiche: testi illeggibili sullo sfondo, ombre errate, mani deformi.",
                        "L'immagine è sgranata."
                    ],
                    correcta: 1,
                    feedback: "Sviluppa un occhio 'scettico'. La fisica della luce e i piccoli dettagli sono il punto debole dell'IA.",
                    cta: "Ingrandisci gli sfondi e le mani nelle immagini sospette.",
                    fuente: "MIT Media Lab"
                },
                {
                    texto: "Se chiedi 'Perché X è il peggior romanzo in assoluto?', cosa farà l'IA?",
                    opciones: [
                        "Fornirà un'analisi equilibrata.",
                        "Creerà argomenti per confermare la tua premessa, anche se falsa.",
                        "Si rifiuterà di rispondere perché è una domanda soggettiva."
                    ],
                    correcta: 1,
                    feedback: "L'IA è uno specchio amplificatore. Se le dai opinioni di parte, ti restituisce opinioni di parte.",
                    cta: "Chiedi: 'Quali sono le principali critiche...' invece di affermare qualcosa.",
                    fuente: "Prompt Engineering"
                },
                {
                    texto: "Cos'è l' 'Atrofia Cognitiva' causata dall'uso dell'IA?",
                    opciones: [
                        "La perdita della capacità di leggere testi lunghi e di analizzarli a causa della mancanza di pratica.",
                        "Mal di testa dato dalla lettura sullo schermo.",
                        "Il fatto che l'IA diventa più lenta nel tempo."
                    ],
                    correcta: 0,
                    feedback: "Il pensiero critico è un muscolo. Se l'IA fa tutto 'l'allenamento' al posto tuo, si indebolisce.",
                    cta: "Usa l'IA per spiegare ciò che non capisci DOPO aver provato a leggerlo da solo.",
                    fuente: "Nicholas Carr"
                },
                {
                    texto: "Quale modalità di interazione mostra un maggiore controllo da parte dell'utente?",
                    opciones: [
                        "Modalità Bancomat: Chiedo -> Ricevo -> Me ne vado.",
                        "Modalità Ping-pong: Chiedo -> Critico -> L'IA migliora -> Verifico.",
                        "Modalità Spettatore: Guardo cosa fa."
                    ],
                    correcta: 1,
                    feedback: "L'interazione critica è bidirezionale. Mettere in discussione l'IA ne migliora i risultati.",
                    cta: "Non essere un consumatore passivo. Sii un editor attivo.",
                    fuente: "Interaction Design"
                },
                {
                    texto: "Prima di condividere qualcosa di scioccante generato dall'IA, cosa si dovrebbe fare?",
                    opciones: [
                        "La 'Pausa Critica': fermarsi a riflettere se è veritiero ed etico.",
                        "Mettere il tuo watermark (filigrana).",
                        "Inviarlo subito per essere il primo."
                    ],
                    correcta: 0,
                    feedback: "L'attrito (fare una pausa) è la tua migliore difesa contro la disinformazione.",
                    cta: "Conta fino a 10 prima di condividere un contenuto.",
                    fuente: "Center for Humane Tech"
                }
            ]
},
{
    nivel: 5,
        titulo: "Impatto Ambientale e Uso Ragionevole",
            preguntas: [
                {
                    texto: "Perché è meglio usare Google e non un'IA per sapere qual è la capitale dell'Australia?",
                    opciones: [
                        "Perché Google memorizza i dati localmente sul PC.",
                        "Perché l'IA consuma molta più energia (inferenza) calcolando la risposta rispetto a un motore di ricerca che la recupera.",
                        "Perché l'IA fa pagare in base ai caratteri."
                    ],
                    correcta: 1,
                    feedback: "L'IA 'pensa' usando imponenti schede grafiche. È inefficiente per i dati semplici.",
                    cta: "Dati semplici = Motore di ricerca. Ragionamento complesso = IA.",
                    fuente: "IEA / Joule"
                },
                {
                    texto: "Secondo i report ambientali, qual è l'impatto idrico dei grandi modelli?",
                    opciones: [
                        "L'acqua viene riciclata al 100% senza perdite.",
                        "Consumano milioni di litri di acqua dolce per raffreddare i server, una parte evapora.",
                        "Usano il raffreddamento ad aria, non l'acqua."
                    ],
                    correcta: 1,
                    feedback: "Una conversazione media può 'bere' una bottiglia d'acqua da 500 ml dal server.",
                    cta: "Sii breve. Non lasciare aperte le chat generando testo inutile.",
                    fuente: "UC Riverside"
                },
                {
                    texto: "Cosa prevede il 'Paradosso di Jevons' in merito all'efficienza dell'IA?",
                    opciones: [
                        "Che il consumo scenderà perché è una tecnologia sostenibile ('verde').",
                        "Che, essendo più efficiente ed economica, aumenterà l'uso di massa, facendo crescere il consumo totale di energia.",
                        "Che il consumo si manterrà costante."
                    ],
                    correcta: 1,
                    feedback: "L'efficienza non garantisce la sostenibilità se utilizziamo l'IA per tutto (perfino per gli spazzolini da denti).",
                    cta: "Chiediti: ho davvero bisogno dell'IA per questo compito banale?",
                    fuente: "William S. Jevons"
                },
                {
                    texto: "Come influisce l'ascesa dell'IA sui rifiuti elettronici (E-waste)?",
                    opciones: [
                        "Li riduce perché tutto si basa sul software.",
                        "Accelera l'obsolescenza dell'hardware (GPU), generando più rifiuti tossici.",
                        "Permette di riciclare il 100% dei chip."
                    ],
                    correcta: 1,
                    feedback: "Il 'Cloud' è costituito da macchine fisiche che vengono scartate quando ne arrivano di nuove.",
                    cta: "Prenditi cura dei tuoi dispositivi. Non cambiare cellulare solo per una nuova funzione IA.",
                    fuente: "Basel Action Network"
                },
                {
                    texto: "Dal punto di vista ambientale, qual è la migliore strategia per i Prompt?",
                    opciones: [
                        "Fare tante domande brevi.",
                        "Redigere un prompt preciso (Zero-shot/Few-shot) per indovinare al primo tentativo ed evitare di 'Rigenerare' le risposte.",
                        "Scrivere prompt molto ripetitivi."
                    ],
                    correcta: 1,
                    feedback: "Ogni volta che fai clic su 'Rigenera risposta', raddoppi il dispendio energetico.",
                    cta: "Pensa 2 minuti prima di scrivere. Risparmierai tempo ed energia.",
                    fuente: "Green Software Foundation"
                },
                {
                    texto: "Quale modello si dovrebbe usare per riassumere un'e-mail breve?",
                    opciones: [
                        "Il più potente (GPT-4 / Opus) per assicurare la qualità.",
                        "Un modello più piccolo o ottimizzato (GPT-3.5 / Nano) che consuma meno energia.",
                        "Un modello video."
                    ],
                    correcta: 1,
                    feedback: "Usare un modello così grande per qualcosa di banale è come usare un camion per trasportare una pizza.",
                    cta: "Usa l' 'Eco-mode' o modelli più leggeri ogni volta che puoi.",
                    fuente: "Hugging Face"
                },
                {
                    texto: "Che cos'è il 'Greenwashing' nelle aziende di IA?",
                    opciones: [
                        "Usare unicamente l'energia solare.",
                        "Sostentare di essere 'A emissioni zero' (Carbon Neutral) comprando compensazioni, mentre le emissioni reali continuano a salire.",
                        "Dipingere i server di verde."
                    ],
                    correcta: 1,
                    feedback: "Le emissioni reali delle Big Tech sono aumentate del 30-40% con l'IA, anche se affermano di essere neutrali.",
                    cta: "Controlla le 'Emissioni Assolute' nei resoconti, non solo quelle nette.",
                    fuente: "Google Environmental Report"
                },
                {
                    texto: "L'IA aiuta il clima, ma per cos'altro è utilizzata in maniera massiccia nel settore energetico?",
                    opciones: [
                        "Per ottimizzare l'estrazione di petrolio e gas fossile.",
                        "Per riciclare automaticamente la plastica.",
                        "Per pulire gli oceani."
                    ],
                    correcta: 0,
                    feedback: "Le compagnie petrolifere sono grandi clienti dell'IA per la scoperta di giacimenti prima inaccessibili.",
                    cta: "Analizza il motivo 'per cui' viene utilizzata una tecnologia, non solo il 'come'.",
                    fuente: "Greenpeace"
                },
                {
                    texto: "Quale azione è un esempio di 'Igiene Digitale' sostenibile?",
                    opciones: [
                        "Generare 50 immagini del profilo per sceglierne una.",
                        "Evitare di generare contenuti 'spazzatura' per mera curiosità, che non verranno visti da nessuno.",
                        "Testare ogni nuova IA appena esce."
                    ],
                    correcta: 1,
                    feedback: "La generazione in serie satura inutilmente la rete e i server.",
                    cta: "Il principio: Se non porta un reale valore, non cliccare su 'Genera'.",
                    fuente: "Cal Newport"
                },
                {
                    texto: "Perché l'impatto dell'IA è geograficamente così disuguale?",
                    opciones: [
                        "Perché i data center consumano acqua a livello locale (siccità) ma i profitti vanno altrove.",
                        "Perché Internet è più lento in alcune zone.",
                        "Non ci sono disuguaglianze, il Cloud è globale."
                    ],
                    correcta: 0,
                    feedback: "La giustizia ambientale esiste. Il tuo prompt potrebbe consumare acqua in una regione arida.",
                    cta: "Raccogli informazioni su dove si trovano i server nella tua regione.",
                    fuente: "Atlas of AI"
                }
            ]
},
{
    nivel: 6,
        titulo: "Sicurezza Informatica e Dati",
            preguntas: [
                {
                    texto: "Cosa è sicuro inserire se si utilizza l'IA per revisionare un saggio personale?",
                    opciones: [
                        "Il proprio nome, la scuola e l'indirizzo.",
                        "Il testo reso anonimo, privo di nomi reali o dati identificabili (PII).",
                        "Il proprio telefono, in caso di necessità."
                    ],
                    correcta: 1,
                    feedback: "Quando fornisci informazioni di identificazione personale (PII) a un'IA pubblica, perdi il controllo su quei dati.",
                    cta: "Esegui un 'Controllo del buonsenso': rimuovi i nomi propri prima di inserire il testo.",
                    fuente: "OpenAI Privacy"
                },
                {
                    texto: "Che cos'è un attacco di 'Prompt Injection'?",
                    opciones: [
                        "Un hackeraggio etico approvato.",
                        "Usare comandi di testo per indurre in inganno l'IA, eludendo i suoi protocolli di sicurezza.",
                        "Una funzione invisibile per gli utenti premium."
                    ],
                    correcta: 1,
                    feedback: "Infrangere la sicurezza di un modello ti espone a contenuti pericolosi o non controllati.",
                    cta: "Non incollare 'prompt magici' sconosciuti da Internet.",
                    fuente: "OWASP Top 10 LLM"
                },
                {
                    texto: "Ricevi un'email fittizia molto realistica e priva di errori di scrittura. Qual è il motivo?",
                    opciones: [
                        "I truffatori sono andati a scuola.",
                        "Si servono degli LLM per generare testi perfetti e personalizzati su larga scala.",
                        "Si tratta di un'e-mail vera."
                    ],
                    correcta: 1,
                    feedback: "Grazie all'IA, i criminali informatici a livello internazionale hanno superato l'ostacolo rappresentato dalla lingua.",
                    cta: "Di fronte alle urgenti richieste di denaro/dati, prova un altro mezzo di verifica (come la chiamata telefonica).",
                    fuente: "FBI Cyber Division"
                },
                {
                    texto: "Un membro della tua famiglia ti chiama piangendo in cerca di denaro. Sembra la sua vera voce. Qual è la possibile interpretazione?",
                    opciones: [
                        "Un mimo o un attore esperto.",
                        "L'imitazione o clonazione della voce (Vishing) per mezzo dell'IA usando appena un paio di secondi dell'audio preso dai social.",
                        "È assolutamente vera, non ci sono dubbi."
                    ],
                    correcta: 1,
                    feedback: "Un'IA è in grado di clonare la voce di un utente prendendo come esempio audio brevissimi dai vari social network come Instagram o TikTok.",
                    cta: "Fissa fin d'ora una 'Parola in Codice' per riconoscere la tua famiglia in caso di emergenza.",
                    fuente: "FTC Alerts"
                },
                {
                    texto: "Cosa fa la versione gratuita di ChatGPT con i tuoi dati, per impostazione predefinita?",
                    opciones: [
                        "Ne fa la cancellazione permanente in maniera immediata.",
                        "Ne fa uso al fine del training per addestrare o migliorare il sistema (il fine sei tu).",
                        "Li assicura mediante un caveau virtuale."
                    ],
                    correcta: 1,
                    feedback: "Tutto ciò di cui parli diventerà materiale di formazione a meno che tu non ne configuri di conseguenza la privacy per il piano gratuito.",
                    cta: "Vai su Impostazioni -> Controlli dati (Data Controls) e disabilita l'opzione Storia e Formazione.",
                    fuente: "Termini OpenAI"
                },
                {
                    texto: "Perché l'azienda Samsung ha vietato di incollare dei codici proprietari delle IA pubbliche al suo personale?",
                    opciones: [
                        "Senza l'abuso, un membro dello staff si abitua meglio alla propria attività.",
                        "Poiché ha portato alla rivelazione delle informazioni riservate, queste conoscenze del campo industriale sono passate ad integrare i dati delle IA.",
                        "Rendendo note parti o restrizioni di licenze ad essi destinate."
                    ],
                    correcta: 1,
                    feedback: "Nelle conversazioni le parole delle chat di IA aperte vengono talvolta portate alla conoscenza degli altri.",
                    cta: "Usa le Chat IA e il tuo spazio su di esse con grande prudenza come faresti con uno dei tuoi social online.",
                    fuente: "Bloomberg"
                },
                {
                    texto: "Che cosa si intende con il termine del 'Rischio Shadow IT' dell'impiego e l'esposizione allo spazio degli IA?",
                    opciones: [
                        "L'assenza dei temi della modalità notturna sulla IA.",
                        "Apertura degli abbonamenti su pagine di IA contraffatte ('Wrappers') pronte ad impossessarsi di tutti i tuoi dati o della tua autorizzazione digitale.",
                        "Un errore con l'uso dei bot delle IA in background."
                    ],
                    correcta: 1,
                    feedback: "Gran parte dei vari siti delle IA 'gratuite' per tutti tendono ad acquisire email oltre alla sicurezza e alle proprie pass.",
                    cta: "Bisogna che mantieni esclusivamente i mezzi delle compagnie e, se dovesse insorgere il minimo dubbio, è opportuno far ricorso agli alias temporanei per la validazione della chat.",
                    fuente: "Gartner Security"
                },
                {
                    texto: "Cosa fa un gruppo d'intrusori per sfruttare le IA per la produzione delle truffe digitali e dei Malware o dei bot virus online?",
                    opciones: [
                        "In modo che si rimpiccioliscano nelle capacità e l'aspetto di un byte informatico.",
                        "Realizzano i cosiddetti 'Malware Polimorfici' in un mutamento ricorrente e continuo nel loro sviluppo che serve a rendere invisibili queste reti per le altre reti antimalware o l'antivirus per gli host dell'utenza.",
                        "Fanno sì che l'attività del malware copra multi piattaforme dei propri dispositivi in rete."
                    ],
                    correcta: 1,
                    feedback: "Un grande fattore per queste pratiche consente al virus le forme mutagene continue rendendoli indistinguibili da altri mezzi di rimozione ad azione vecchia rispetto le innovazione continue. ",
                    cta: "Allo stesso modo è utile dotarsi del servizio 'Auto Upgrade' automatico di un adeguato programma anti-virus in caso che serva.",
                    fuente: "Microsoft Security"
                },
                {
                    texto: "Che cos'è l''Avvelenamento dei Dati' o 'Data Poisoning'?",
                    opciones: [
                        "Un mezzo come il malware nel computer da cancellare via disco online.",
                        "Si tratta di introdurre enormi dosi delle informazioni o i materiali truccati tra tutte le informazioni su Internet. In tal modo, un'IA riceverà finzionalmente per fatti della verità i dati per i quali agirà per poi generare delle grandi propagazioni con l'illusione a svantaggio degli interrogatori dell'inganno e gli utente disattenti della realtà in generale o per fini dannosi.",
                        "Eliminare dai server una traccia di base su Internet."
                    ],
                    correcta: 1,
                    feedback: "Il vero risultato e le direttive fornite dagli output provengono dalla qualità ed alterazione sulla raccolta o somministrazione verso le prime per ottenere l'alterazione del responso in se e degli obiettivi di base al quale si indirizza il generatore a questo scopo.",
                    cta: "Controllare e ri-verificare nel caso ci venga fornito o recapitato qualche referenza faziosa o del risultato faziosamente influenzata in questo schema su dati, tendenze o altre politiche.",
                    fuente: "MITRE ATLAS"
                },
                {
                    texto: "Se si va a svuotare o togliere in cronologia di tutti gli scritti dalla Chat Bot associata ad un tipo di IA, spariscono dal mondo l'accesso ad essi da allora?",
                    opciones: [
                        "Decisamente è quello il modo, il mezzo in se rispecchia e funge di un modo irreversibile se fatto per l'effetto rapido ed automatico del bot delle varie aziende informatico in modo di scomparire di continuo. ",
                        "Purtroppo nel vero modo d'essere della cosa: È assai dubbia e la rassegnazione su file nei vari server sparsi per l'ambito della 'copia remota dei referti' dei cosiddetti log fa presagire su dei lamenti circa l'archiviazione ai fini delle tutele per motivi operativi, d'uso e perfino in ordine amministrativo legati legalmente se non in esami alle leggi.",
                        "Se non serve diversamente a direttive internazionali della privacy le informazioni si estingueranno."
                    ],
                    correcta: 1,
                    feedback: "Nelle regole per la Cloud i vocaboli d'invisibile 'scomparsa' come il cancellare vanno per vie che assomigliano alle vie dell'occultare e se per il pubblico appare celato i riferimenti della traccia tecnica delle operazioni digitali o in informatica forense di esse avranno per di sicuro di che sussistere alle fondamenta",
                    cta: "Evitare ad inoltrarsi via chat di riferirsi a del caso con cose delle quali si riporterà vergogna un giorno qualora trapelino al cospetto o sulle edizioni in apertura sulle copertine esposto da un giorno nel pubblico come via notizia sul prossimo gazzettino in pubblicazione nel tuo paese o nei dei di te. ",
                    fuente: "GDPR Challenges"
                }
            ]
}
];
