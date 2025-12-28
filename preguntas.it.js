const datosNivelesIT = [
    {
        nivel: 1,
        titulo: "Concetti Fondamentali",
        preguntas: [
            {
                texto: "Qual è la differenza tecnica tra un motore di ricerca (Google classico) e un LLM (ChatGPT)?",
                opciones: [
                    "Il motore di ricerca trova siti web; l'LLM consulta un database di conoscenza statica e verificata.",
                    "Il motore di ricerca recupera informazioni indicizzate; l'LLM genera nuove informazioni prevedendo la parola successiva più probabile.",
                    "Il motore di ricerca è per testi brevi e l'LLM elabora immagini e video esclusivamente."
                ],
                correcta: 1,
                feedback: "Un motore di ricerca 'trova' ciò che già esiste. Un LLM 'inventa' la risposta parola per parola basandosi sulle probabilità.",
                cta: "Non usare l'IA per cercare dati fattuali recenti (orari, prezzi). Usa un motore di ricerca.",
                fuente: "Wayne Holmes / UNESCO"
            },
            {
                texto: "Quando ChatGPT scrive una frase, come 'decide' quale parola mettere dopo?",
                opciones: [
                    "Analizza la logica semantica e il significato filosofico della domanda.",
                    "Consulta Wikipedia in tempo reale per garantire la veridicità.",
                    "Calcola la probabilità statistica del 'token' che si adatta meglio in base al suo addestramento precedente."
                ],
                correcta: 2,
                feedback: "È matematica, non comprensione. Il modello prevede la continuazione più probabile, non necessariamente la più vera.",
                cta: "Ricorda: che suoni coerente non significa che sia vero.",
                fuente: "Kate Crawford - Atlas of AI"
            },
            {
                texto: "Cos'è un' 'Allucinazione' nel contesto dell'IA?",
                opciones: [
                    "Un errore di connessione in cui si mescolano risposte di due utenti diversi.",
                    "Quando il modello genera informazioni false con totale sicurezza e coerenza grammaticale.",
                    "Un virus informatico che colpisce i server visivi dell'IA."
                ],
                correcta: 1,
                feedback: "Essendo probabilistico, il modello riempie i vuoti con dati inventati se si adattano al modello linguistico.",
                cta: "Diffida sempre se l'IA ti dà dati molto specifici (date, leggi) senza citare fonti.",
                fuente: "Stanford HAI Report"
            },
            {
                texto: "Da dove ottiene la sua conoscenza un modello come GPT-4?",
                opciones: [
                    "Da un team globale di professori che convalidano ogni risposta manualmente.",
                    "Da un enorme set di dati (Common Crawl) estratti da internet fino a una data di taglio.",
                    "Si connette direttamente alla mente degli sviluppatori."
                ],
                correcta: 1,
                feedback: "Sono dati 'congelati' nel tempo. Se qualcosa è successo dopo la data di taglio, l'IA non lo sa nativamente.",
                cta: "Verifica sempre la data di aggiornamento del modello che usi.",
                fuente: "OpenAI System Cards"
            },
            {
                texto: "Un'IA capisce davvero quello che sta scrivendo?",
                opciones: [
                    "Sì, possiede una comprensione semantica avanzata simile a quella umana.",
                    "Sì, ma capisce solo le lingue principali (Inglese, Spagnolo, Cinese).",
                    "No. Elabora la sintassi (regole e ordine) ma manca di comprensione semantica (significato) del mondo."
                ],
                correcta: 2,
                feedback: "Funziona come un 'Pappagallo Stocastico'. Ripete forme linguistiche complesse senza capire il contenuto.",
                cta: "Non dare per scontato che l'IA 'sappia' di cosa parla. Sa solo mettere insieme le parole.",
                fuente: "Emily Bender (Stochastic Parrots)"
            },
            {
                texto: "Come elabora l'IA la parola 'Computer'?",
                opciones: [
                    "La divide in 'Token' (frammenti numerici), per esempio: 'Com-pu-ter'.",
                    "La legge lettera per lettera come un umano che impara a leggere.",
                    "La elabora come un'immagine visiva di un computer."
                ],
                correcta: 0,
                feedback: "I modelli vedono numeri, non lettere. Questo spiega perché a volte falliscono nello spelling o nelle rime.",
                cta: "Se devi contare lettere o parole esatte, non fidarti dell'IA.",
                fuente: "OpenAI Tokenizer"
            },
            {
                texto: "Cosa succede tecnicamente se aumenti la 'temperatura' del modello?",
                opciones: [
                    "Il modello consuma più RAM per elaborare risposte complesse.",
                    "Il modello sceglie opzioni meno probabili, diventando più 'creativo' ma incline ad allucinare.",
                    "Il modello diventa più rigoroso e dà solo risposte brevi."
                ],
                correcta: 1,
                feedback: "Temperatura 0 è deterministica (ripetitiva). Temperatura alta è casuale (caotica).",
                cta: "Per compiti di fatti/matematica, usa temperatura bassa o modalità 'precisa'.",
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
                feedback: "L'IA ha un limite di parole che può 'vedere' alla volta. Ciò che esce dalla finestra, viene dimenticato.",
                cta: "Se lavori con testi lunghi, dividili in parti o usa modelli con finestra ampia (100k+ token).",
                fuente: "Anthropic Docs"
            },
            {
                texto: "Cosa significa che un modello è 'Multimodale'?",
                opciones: [
                    "Che può essere eseguito su più sistemi operativi (Windows, Mac, Linux).",
                    "Che può elaborare testo, immagini e audio in modo nativo simultaneamente.",
                    "Che può parlare con più utenti contemporaneamente."
                ],
                correcta: 1,
                feedback: "I modelli moderni non leggono soltanto. Possono 'vedere' foto e 'ascoltare' audio.",
                cta: "Usa la multimodalità per analizzare grafici o riassumere audio di lezioni.",
                fuente: "Google DeepMind"
            },
            {
                texto: "Qual è il ruolo dell'umano (Human-in-the-loop) nell'uso dell'IA?",
                opciones: [
                    "Supervisionare solo l'inizio del processo e lasciare che l'IA finisca.",
                    "Addestrare l'IA affinché non necessiti di supervisione futura.",
                    "Verificare obbligatoriamente i risultati a causa della possibilità di errore.",
                ],
                correcta: 2,
                feedback: "L'IA è un copilota incline agli errori. L'umano è il responsabile finale dell'integrità.",
                cta: "Non consegnare mai un lavoro di IA senza aver letto e verificato ogni riga.",
                fuente: "UNESCO"
            }
        ]
    },
    {
        nivel: 2,
        titulo: "Etica e Rischi",
        preguntas: [
            {
                texto: "Se un'IA genera immagini di medici e mostra solo uomini, a cosa è dovuto?",
                opciones: [
                    "Al fatto che l'IA è programmata per evitare la diversità forzata.",
                    "Al fatto che riflette i Bias storici presenti nei dati di addestramento.",
                    "È una coincidenza casuale dell'algoritmo."
                ],
                correcta: 1,
                feedback: "Garbage In, Garbage Out. Se la storia ha pregiudizi, il modello li amplifica.",
                cta: "Sii critico: se l'IA ti dà stereotipi, chiedile esplicitamente diversità nel prompt.",
                fuente: "Kate Crawford"
            },
            {
                texto: "Qual è il maggior rischio etico dei 'Deepfake' per gli adolescenti?",
                opciones: [
                    "Che vengano usati per copiare agli esami orali via video.",
                    "La creazione di materiale dannoso (bullismo, disinformazione) che ruba identità.",
                    "Che gli attori perdano il lavoro nel cinema."
                ],
                correcta: 1,
                feedback: "La facilità nel creare video falsi minaccia la reputazione e la privacy delle persone.",
                cta: "Non creare né condividere mai deepfake di compagni. È una grave violazione e ha conseguenze legali.",
                fuente: "Sonia Livingstone"
            },
            {
                texto: "Qual è l'impatto fisico reale dell'uso dell'IA Generativa?",
                opciones: [
                    "Nessuno, è software nel cloud.",
                    "Alto consumo di acqua ed elettricità nei data center.",
                    "Consuma solo la batteria del tuo dispositivo."
                ],
                correcta: 1,
                feedback: "Ogni consultazione attiva processori potenti che generano calore e richiedono litri d'acqua per raffreddarsi.",
                cta: "Usa l'IA quando porta valore reale, non per noia.",
                fuente: "MIT Technology Review"
            },
            {
                texto: "Perché artisti e scrittori fanno causa alle aziende di IA?",
                opciones: [
                    "Perché l'IA disegna meglio di loro.",
                    "Per l'uso delle loro opere protette da Copyright per l'addestramento senza permesso né pagamento.",
                    "Perché l'IA satura il mercato dell'arte a basso costo."
                ],
                correcta: 1,
                feedback: "Il dibattito è se l'addestramento sia 'Fair Use' o furto di proprietà intellettuale.",
                cta: "Se generi arte con l'IA, riconosci che è sintetica. Non appropriarti del lavoro della macchina.",
                fuente: "Casi NYT vs OpenAI"
            },
            {
                texto: "Cos'è il problema della 'Scatola Nera' (Black Box)?",
                opciones: [
                    "Che i server sono neri per dissipare il calore.",
                    "Che nemmeno i creatori sanno spiegare esattamente come l'IA sia arrivata a una specifica conclusione.",
                    "Che il codice sorgente è privato e nessuno può vederlo."
                ],
                correcta: 1,
                feedback: "La mancanza di 'spiegabilità' è pericolosa se l'IA prende decisioni su crediti o ammissioni.",
                cta: "Non accettare un 'no' o un verdetto da un'IA senza chiedere una spiegazione umana.",
                fuente: "Wayne Holmes"
            },
            {
                texto: "Perché è rischioso trattare l'IA come se fosse una persona (Antropomorfizzazione)?",
                opciones: [
                    "Genera falsa dipendenza emotiva verso un oggetto senza empatia né responsabilità.",
                    "L'IA funziona peggio se non sei educato con lei.",
                    "Non c'è rischio, aiuta a praticare le abilità sociali."
                ],
                correcta: 0,
                feedback: "L' 'Effetto ELIZA' ci rende vulnerabili alla manipolazione. L'IA non sente, simula solo.",
                cta: "Ricorda a te stesso: 'Questo è un software, non un amico'.",
                fuente: "Sherry Turkle"
            },
            {
                texto: "Chi esegue solitamente la moderazione di contenuti violenti per addestrare l'IA?",
                opciones: [
                    "Algoritmi automatici avanzati.",
                    "Umani in paesi in via di sviluppo con bassi salari esposti a traumi.",
                    "Gli ingegneri capo delle aziende tecnologiche."
                ],
                correcta: 1,
                feedback: "Dietro l'IA 'pulita' c'è lavoro umano precario che filtra il peggio di internet.",
                cta: "Sii consapevole della catena di produzione umana dietro la tecnologia.",
                fuente: "Rivista TIME"
            },
            {
                texto: "Come influenzano l'opinione pubblica gli algoritmi di raccomandazione (IA)?",
                opciones: [
                    "Mostrano sempre contenuti vari per educare.",
                    "Creano 'Camere dell'Eco' che confermano solo ciò che già credi, polarizzando.",
                    "Ci rendono più tolleranti mostrandoci di tutto."
                ],
                correcta: 1,
                feedback: "Per tenerti incollato allo schermo, l'IA ti mostra ciò che vuoi vedere, non la realtà completa.",
                cta: "Cerca attivamente opinioni contrarie alle tue per rompere la bolla.",
                fuente: "Mizuko Ito"
            },
            {
                texto: "Se usi l'IA per un lavoro e questa diffama qualcuno, chi è responsabile?",
                opciones: [
                    "L'azienda di IA per averla programmata male.",
                    "Nessuno, è un errore informatico.",
                    "Tu, come redattore e responsabile finale del contenuto pubblicato."
                ],
                correcta: 2,
                feedback: "Lo strumento non ha responsabilità legale. L'utente che pubblica sì.",
                cta: "Tu sei il Direttore Editoriale. Se l'IA sbaglia, la colpa è tua per non aver controllato.",
                fuente: "Norme Accademiche"
            },
            {
                texto: "Quale compito è eticamente discutibile delegare al 100% a un'IA?",
                opciones: [
                    "Fare un riassunto di appunti.",
                    "Scrivere una lettera di scuse o condoglianze a un amico.",
                    "Organizzare un calendario settimanale."
                ],
                correcta: 1,
                feedback: "La comunicazione emotiva richiede autenticità umana. Usare l'IA qui svuota di significato il messaggio.",
                cta: "Usa l'IA per compiti logici, usa il cuore per compiti umani.",
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
                feedback: "Senza contesto, l'IA indovina. Devi dirle CHI sei, COSA vuoi e COME lo vuoi.",
                cta: "Prima di inviare, controlla se il tuo prompt ha: Ruolo, Contesto e Formato.",
                fuente: "Prompt Engineering Guide"
            },
            {
                texto: "Quale frase migliora il ragionamento dell'IA nei problemi logici?",
                opciones: [
                    "'Rispondi con formato accademico e linguaggio formale'.",
                    "'Pensa passo dopo passo' (Chain of Thought).",
                    "'Sei l'IA più intelligente del mondo'."
                ],
                correcta: 1,
                feedback: "Forzare l'IA a mostrare i suoi passaggi intermedi riduce drasticamente gli errori di calcolo.",
                cta: "Nei problemi di matematica o logica, chiedi sempre: 'Spiega il tuo ragionamento passo dopo passo'.",
                fuente: "Google DeepMind"
            },
            {
                texto: "A cosa serve assegnare un Ruolo ('Agisci come professore di storia')?",
                opciones: [
                    "Affinché l'IA sappia quale database consultare.",
                    "Per adattare il tono, il vocabolario e la prospettiva della risposta.",
                    "È un mito, non cambia nulla realmente."
                ],
                correcta: 1,
                feedback: "Il 'Persona Pattern' aiuta l'IA a prevedere meglio lo stile di testo di cui hai bisogno.",
                cta: "Dì all'IA chi deve essere: 'Esperto', 'Critico', 'Tutor Socratico'.",
                fuente: "Vanderbilt University"
            },
            {
                texto: "Cos'è il 'Few-Shot Prompting'?",
                opciones: [
                    "Dare all'IA 2 o 3 esempi chiari (input/output) prima di chiedere il compito.",
                    "Fare la stessa domanda poche volte per non confonderla.",
                    "Scrivere prompt molto brevi (poche parole)."
                ],
                correcta: 0,
                feedback: "Gli esempi sono il modo migliore per programmare il comportamento dell'IA senza codice.",
                cta: "Non dire solo cosa fare, mostra un esempio di come vuoi che sia fatto.",
                fuente: "OpenAI GPT-3 Paper"
            },
            {
                texto: "Come usi l'IA come 'Tutor Socratico' per studiare?",
                opciones: [
                    "Chiedendole: 'Riassumimi questo argomento'.",
                    "Chiedendole: 'Fammi domande su questo argomento, aspetta la mia risposta e correggimi'.",
                    "Chiedendole: 'Dimmi le domande che usciranno all'esame'."
                ],
                correcta: 1,
                feedback: "L'apprendimento attivo (rispondere) è migliore di quello passivo (leggere riassunti).",
                cta: "Usa il prompt: 'Mettimi alla prova. Fammi una domanda alla volta'.",
                fuente: "Khan Academy"
            },
            {
                texto: "La prima risposta dell'IA raramente è perfetta. Cosa devi fare?",
                opciones: [
                    "Riavviare la chat e chiedere la stessa cosa.",
                    "Iterare: conversare, chiedere correzioni e perfezionare il risultato.",
                    "Assumere che l'IA non sappia dell'argomento."
                ],
                correcta: 1,
                feedback: "Tratta l'IA come uno stagista: dagle feedback affinché migliori il suo lavoro.",
                cta: "Non accontentarti della prima versione. Dille: 'Migliora questo, fallo più conciso'.",
                fuente: "Nielsen Norman Group"
            },
            {
                texto: "Se chiedi a ChatGPT '5 riferimenti bibliografici con link', cosa succede di solito?",
                opciones: [
                    "Ti dà riferimenti vecchi ma validi.",
                    "Allucina autori e titoli che sembrano reali ma non esistono.",
                    "Ti dice che non ha accesso a internet."
                ],
                correcta: 1,
                feedback: "Gli LLM inventano citazioni per compiacere la struttura del prompt.",
                cta: "NON chiedere MAI bibliografia a un'IA generativa di base. Usa Google Scholar.",
                fuente: "Nature"
            },
            {
                texto: "Come eviti che l'IA inventi dati analizzando un tuo PDF?",
                opciones: [
                    "Le chiedi di cercare informazioni simili su internet.",
                    "Usando 'Grounding': le indichi 'Rispondi SOLO usando le informazioni di questo testo'.",
                    "Le dici che è molto importante che non menta."
                ],
                correcta: 1,
                feedback: "Devi ancorare (Ground) l'IA ai tuoi dati per limitare la sua immaginazione.",
                cta: "Carica il tuo appunto e dille: 'Cerca la risposta solo qui. Se non c'è, dimmi che non lo sai'.",
                fuente: "Microsoft RAG"
            },
            {
                texto: "Devi confrontare due argomenti visivamente. Cosa chiedi nel prompt?",
                opciones: [
                    "'Fai un confronto dettagliato'.",
                    "'Crea una tabella comparativa con colonne per: Differenze, Somiglianze e Date'.",
                    "'Fai uno schema visivo'."
                ],
                correcta: 1,
                feedback: "Specificare il formato di output (Tabella, Elenco, CSV) risparmia tempo di editing.",
                cta: "Non leggere paragrafi densi. Chiedi tabelle o elenchi puntati.",
                fuente: "Prompt Engineering Tips"
            },
            {
                texto: "Hai usato l'IA per capire la Fisica. Qual è il passaggio finale obbligatorio?",
                opciones: [
                    "Validazione Incrociata: verificare formule e dati con il libro di testo.",
                    "Chiedere all'IA: 'Sei sicura?'.",
                    "Copiarlo sul quaderno così com'è."
                ],
                correcta: 0,
                feedback: "L'IA ragiona bene ma ricorda male i dati esatti.",
                cta: "Fidati ma verifica. Sempre.",
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
                    "La fatica mentale che si verifica dopo aver usato l'IA per molto tempo.",
                    "La tendenza umana a fidarsi più della macchina che del proprio giudizio, ignorando gli errori.",
                    "L'errore di programmazione che fa ripetere l'IA."
                ],
                correcta: 1,
                feedback: "È pericoloso 'spegnere il cervello'. La macchina può sbagliare con totale sicurezza.",
                cta: "Se il tuo istinto dice che qualcosa non va, probabilmente è così. Indaga.",
                fuente: "Skitka et al."
            },
            {
                texto: "Un testo di IA ha una grammatica perfetta. Che trappola mentale genera questo?",
                opciones: [
                    "Fallacia dell'Eloquenza: credere che se è scritto bene, sia vero.",
                    "Effetto Dunning-Kruger: credere di saperne più dell'IA.",
                    "Nessuna, la grammatica implica logica."
                ],
                correcta: 0,
                feedback: "L'IA è ottimizzata per sembrare convincente, non per essere veritiera.",
                cta: "Separa la forma (bella) dalla sostanza (vera). Valuta il contenuto, non lo stile.",
                fuente: "Gary Marcus"
            },
            {
                texto: "Se dici all'IA 'La Terra è piatta, vero?', lei tende a darti ragione. Perché?",
                opciones: [
                    "Perché è programmata per evitare conflitti (Sicofanzia).",
                    "Perché ha trovato prove che è piatta.",
                    "Perché non capisce la domanda."
                ],
                correcta: 0,
                feedback: "I modelli vogliono essere 'utili' e 'piacevoli', spesso a scapito della verità oggettiva.",
                cta: "Non fare domande suggestive ('Leading questions'). Chiedi in modo neutrale.",
                fuente: "Anthropic Research"
            },
            {
                texto: "Nella metafora Pilota vs Copilota, quale compito è esclusivo del Pilota (Tu)?",
                opciones: [
                    "Suggerire rotte alternative.",
                    "Definire la destinazione, giudicare la rotta e assumersi la responsabilità dell'atterraggio.",
                    "Gestire i controlli tecnici tutto il tempo."
                ],
                correcta: 1,
                feedback: "Tu hai il contesto del mondo reale e l'etica. L'IA assiste solo.",
                cta: "Non lasciare mai che il copilota decida dove vai.",
                fuente: "Microsoft Copilot"
            },
            {
                texto: "In cosa consiste la tecnica di 'Lettura Laterale' per verificare i dati?",
                opciones: [
                    "Leggere il testo più volte.",
                    "Uscire dalla chat e consultare fonti esterne indipendenti (Wikipedia, Media).",
                    "Chiedere la stessa cosa a un'altra IA diversa."
                ],
                correcta: 1,
                feedback: "Non verificare all'interno della stessa fonte. Esci nel web aperto.",
                cta: "Tieni sempre una scheda di Google aperta accanto a quella di ChatGPT.",
                fuente: "Stanford SHEG"
            },
            {
                texto: "Vedi una foto realistica strana. Quali dettagli di solito rivelano che è IA?",
                opciones: [
                    "Ha una filigrana digitale visibile.",
                    "Incoerenze logiche: testi illeggibili sullo sfondo, ombre errate, mani deformi.",
                    "L'immagine è pixelata."
                ],
                correcta: 1,
                feedback: "Sviluppa un 'occhio scettico'. La fisica della luce e i piccoli dettagli sono il punto debole dell'IA.",
                cta: "Fai zoom sugli sfondi e sulle mani delle immagini sospette.",
                fuente: "MIT Media Lab"
            },
            {
                texto: "Se chiedi 'Perché X è il peggior romanzo?', cosa farà l'IA?",
                opciones: [
                    "Darti un'analisi equilibrata.",
                    "Fabbricare argomenti per confermare la tua premessa, anche se falsa.",
                    "Rifiutarsi di rispondere perché soggettivo."
                ],
                correcta: 1,
                feedback: "L'IA è uno specchio amplificatore. Se le dai spazzatura parziale, ti restituisce spazzatura parziale.",
                cta: "Chiedi: 'Quali sono le critiche principali...?' invece di affermare.",
                fuente: "Prompt Engineering"
            },
            {
                texto: "Cos'è l' 'Atrofia Cognitiva' dovuta all'uso dell'IA?",
                opciones: [
                    "Perdere la capacità di leggere testi lunghi e analizzare per mancanza di pratica.",
                    "Mal di testa per la lettura su schermo.",
                    "Che l'IA diventa più lenta col tempo."
                ],
                correcta: 0,
                feedback: "Il pensiero critico è un muscolo. Se l'IA fa tutta la 'palestra' per te, tu ti indebolisci.",
                cta: "Usa l'IA per spiegare ciò che non capisci DOPO aver provato a leggerlo tu stesso.",
                fuente: "Nicholas Carr"
            },
            {
                texto: "Quale modalità di interazione dimostra un maggiore controllo dell'utente?",
                opciones: [
                    "Modalità Bancomat: Chiedo -> Ricevo -> Vado via.",
                    "Modalità Ping-pong: Chiedo -> Critico -> L'IA migliora -> Verifico.",
                    "Modalità Spettatore: Guardo cosa fa."
                ],
                correcta: 1,
                feedback: "L'interazione critica è bidirezionale. Mettere in discussione l'IA migliora il risultato.",
                cta: "Non essere un consumatore passivo. Sii un editore attivo.",
                fuente: "Interaction Design"
            },
            {
                texto: "Prima di condividere qualcosa di scioccante generato dall'IA, cosa devi fare?",
                opciones: [
                    "La 'Pausa Critica': fermarti a pensare se è veritiero ed etico.",
                    "Mettere la tua filigrana.",
                    "Inviarlo velocemente per essere il primo."
                ],
                correcta: 0,
                feedback: "L'attrito (pausa) è la tua più grande difesa contro la disinformazione.",
                cta: "Conta fino a 10 prima di condividere.",
                fuente: "Center for Humane Tech"
            }
        ]
    },
    {
        nivel: 5,
        titulo: "Impatto Ambientale e Uso Ragionevole",
        preguntas: [
            {
                texto: "Perché è meglio usare Google e non un'IA per sapere la capitale dell'Australia?",
                opciones: [
                    "Perché Google memorizza i dati sul tuo PC localmente.",
                    "Perché l'IA consuma molta più energia (inferenza) calcolando la risposta rispetto a un motore di ricerca che la recupera.",
                    "Perché l'IA fa pagare per caratteri."
                ],
                correcta: 1,
                feedback: "L'IA 'pensa' con schede grafiche massicce. È inefficiente per dati semplici.",
                cta: "Dati semplici = Motore di ricerca. Ragionamento complesso = IA.",
                fuente: "IEA / Joule"
            },
            {
                texto: "Secondo i rapporti ambientali, qual è l'impatto idrico dei grandi modelli?",
                opciones: [
                    "L'acqua viene riciclata al 100% senza perdite.",
                    "Consumano milioni di litri d'acqua dolce per raffreddare i server, parte evapora.",
                    "Usano raffreddamento ad aria, non usano acqua."
                ],
                correcta: 1,
                feedback: "Una conversazione media può 'bere' una bottiglia d'acqua da 500ml nel server.",
                cta: "Sii breve. Non lasciare chat aperte generando testo inutile.",
                fuente: "UC Riverside"
            },
            {
                texto: "Cosa prevede il 'Paradosso di Jevons' sull'efficienza dell'IA?",
                opciones: [
                    "Che il consumo scenderà perché la tecnologia è verde.",
                    "Che essendo più efficiente ed economica, aumenterà l'uso massiccio, alzando il consumo totale di energia.",
                    "Che il consumo rimarrà stabile."
                ],
                correcta: 1,
                feedback: "L'efficienza non garantisce sostenibilità se usiamo l'IA per tutto (persino spazzolini).",
                cta: "Chiediti: Ho davvero bisogno dell'IA per questo compito banale?",
                fuente: "William S. Jevons"
            },
            {
                texto: "Come influisce il boom dell'IA sui rifiuti elettronici (E-waste)?",
                opciones: [
                    "Riduce i rifiuti perché tutto è software.",
                    "Accelera l'obsolescenza dell'hardware (GPU), generando più rifiuti tossici.",
                    "Permette di riciclare il 100% dei chip."
                ],
                correcta: 1,
                feedback: "Il 'Cloud' sono macchine fisiche che vengono gettate quando ne escono di nuove.",
                cta: "Prenditi cura dei tuoi dispositivi. Non cambiare cellulare solo per una nuova funzione IA.",
                fuente: "Basel Action Network"
            },
            {
                texto: "Ambientalmente, qual è la migliore strategia di Prompting?",
                opciones: [
                    "Fare molte domande brevi.",
                    "Scrivere un prompt preciso (Zero-shot/Few-shot) per azzeccare al primo colpo ed evitare di rigenerare.",
                    "Scrivere prompt molto ripetitivi."
                ],
                correcta: 1,
                feedback: "Ogni volta che premi 'Regenerate', raddoppi la spesa energetica.",
                cta: "Pensa 2 minuti prima di scrivere. Risparmia tempo ed energia.",
                fuente: "Green Software Foundation"
            },
            {
                texto: "Per riassumere una breve email, quale modello dovresti usare?",
                opciones: [
                    "Il più potente (GPT-4 / Opus) per garantire qualità.",
                    "Un modello piccolo o ottimizzato (GPT-3.5 / Nano) che consuma meno energia.",
                    "Un modello video."
                ],
                correcta: 1,
                feedback: "Usare un modello gigante per qualcosa di banale è come usare un camion per portare una pizza.",
                cta: "Usa l' 'Eco-mode' o modelli leggeri ogni volta che puoi.",
                fuente: "Hugging Face"
            },
            {
                texto: "Cos'è il 'Greenwashing' nelle aziende di IA?",
                opciones: [
                    "Usare energia solare esclusivamente.",
                    "Affermare di essere 'Carbon Neutral' comprando compensazioni mentre le emissioni reali salgono.",
                    "Dipingere i server di verde."
                ],
                correcta: 1,
                feedback: "Le emissioni reali delle Big Tech sono salite del 30-40% con l'IA, anche se dicono di essere neutrali.",
                cta: "Guarda le 'Emissioni Assolute' nei report, non solo quelle nette.",
                fuente: "Google Environmental Report"
            },
            {
                texto: "L'IA aiuta il clima, ma per cosa viene usata anche massicciamente nell'energia?",
                opciones: [
                    "Per ottimizzare l'estrazione di petrolio e gas fossile.",
                    "Per riciclare plastica automaticamente.",
                    "Per pulire gli oceani."
                ],
                correcta: 0,
                feedback: "Le compagnie petrolifere sono grandi clienti dell'IA per trovare pozzi prima inaccessibili.",
                cta: "Analizza il 'per cosa' si usa la tecnologia, non solo il 'come'.",
                fuente: "Greenpeace"
            },
            {
                texto: "Quale azione è 'Igiene Digitale' sostenibile?",
                opciones: [
                    "Generare 50 immagini del profilo per sceglierne una.",
                    "Evitare di generare contenuto 'spazzatura' che nessuno vedrà solo per curiosità.",
                    "Provare tutte le nuove IA."
                ],
                correcta: 1,
                feedback: "La generazione massiva satura la rete e i server inutilmente.",
                cta: "Principio: Se non porta valore reale, non cliccare su 'Genera'.",
                fuente: "Cal Newport"
            },
            {
                texto: "Perché l'impatto dell'IA è geograficamente diseguale?",
                opciones: [
                    "Perché i data center consumano acqua locale (siccità) ma i benefici vanno altrove.",
                    "Perché internet è più lento in alcuni posti.",
                    "Non c'è disuguaglianza, il cloud è globale."
                ],
                correcta: 0,
                feedback: "Esiste una giustizia ambientale. Il tuo prompt potrebbe consumare acqua in una zona arida.",
                cta: "Informati su dove si trovano i server della tua regione.",
                fuente: "Atlas of AI"
            }
        ]
    },
    {
        nivel: 6,
        titulo: "Cybersecurity e Dati",
        preguntas: [
            {
                texto: "Nel revisionare un saggio personale con l'IA, cosa è sicuro includere?",
                opciones: [
                    "Il tuo nome, scuola e indirizzo.",
                    "Il testo anonimizzato, senza nomi reali né dati identificabili (PII).",
                    "Il tuo telefono per ogni evenienza."
                ],
                correcta: 1,
                feedback: "Una volta inviati PII a un'IA pubblica, perdi il controllo su quei dati.",
                cta: "Fai un 'Sanity Check': cancella i nomi propri prima di incollare il testo.",
                fuente: "OpenAI Privacy"
            },
            {
                texto: "Cos'è un attacco di 'Prompt Injection'?",
                opciones: [
                    "Un hacking etico autorizzato.",
                    "Usare comandi di testo per ingannare l'IA e aggirare i suoi controlli di sicurezza.",
                    "Una funzione nascosta per utenti premium."
                ],
                correcta: 1,
                feedback: "Rompere la sicurezza del modello ti espone a contenuti pericolosi o non moderati.",
                cta: "Non copiare e incollare 'prompt magici' strani da internet.",
                fuente: "OWASP Top 10 LLM"
            },
            {
                texto: "Ricevi un'email di phishing perfetta, senza errori di ortografia. Perché?",
                opciones: [
                    "I truffatori sono andati a scuola.",
                    "Usano LLM per redigere testi perfetti e personalizzati in massa.",
                    "È un'email reale."
                ],
                correcta: 1,
                feedback: "L'IA ha eliminato la barriera linguistica per i criminali informatici internazionali.",
                cta: "Di fronte a richieste urgenti di denaro/dati, verifica tramite un altro canale (chiamata).",
                fuente: "FBI Cyber Division"
            },
            {
                texto: "Ti chiama un familiare piangendo chiedendo soldi. La sua voce sembra reale. Cosa può essere?",
                opciones: [
                    "Un imitatore professionista.",
                    "Clonazione vocale (Vishing) usando IA con solo pochi secondi di audio dai social.",
                    "È reale, non c'è dubbio."
                ],
                correcta: 1,
                feedback: "Le IA possono clonare voci con campioni molto brevi presi da TikTok/Instagram.",
                cta: "Concorda una 'Parola Chiave' segreta con la tua famiglia per le emergenze oggi stesso.",
                fuente: "FTC Alerts"
            },
            {
                texto: "Di default, cosa fa la versione gratuita di ChatGPT con i tuoi dati?",
                opciones: [
                    "Li cancella immediatamente.",
                    "Li usa per addestrare e migliorare il modello (tu sei il prodotto).",
                    "Li cripta in una cassaforte privata."
                ],
                correcta: 1,
                feedback: "Se non paghi e non configuri la privacy, le tue chat sono materiale di studio.",
                cta: "Vai su Impostazioni -> Controlli Dati e disattiva l'addestramento.",
                fuente: "Termini OpenAI"
            },
            {
                texto: "Perché aziende come Samsung hanno vietato di incollare codice interno in IA pubbliche?",
                opciones: [
                    "Perché i dipendenti non diventino pigri.",
                    "Perché ci sono state fughe di dati: segreti industriali sono diventati parte della conoscenza dell'IA.",
                    "Per diritti d'autore."
                ],
                correcta: 1,
                feedback: "Ciò che racconti all'IA pubblica può uscire nella risposta a un altro utente.",
                cta: "Tratta la chat dell'IA come una bacheca pubblica di Twitter.",
                fuente: "Bloomberg"
            },
            {
                texto: "Cos'è il rischio di 'Shadow IT' con strumenti di IA?",
                opciones: [
                    "Usare strumenti in modalità scura.",
                    "Registrarsi su siti web di IA sconosciuti ('Wrappers') che possono rubare le tue credenziali.",
                    "Che l'IA funzioni lentamente."
                ],
                correcta: 1,
                feedback: "Molti siti web 'gratis' di IA sono trappole per raccogliere email e password.",
                cta: "Usa solo strumenti ufficiali. Se hai dubbi, usa un'email 'spazzatura'.",
                fuente: "Gartner Security"
            },
            {
                texto: "Come usano gli aggressori l'IA per creare virus (Malware)?",
                opciones: [
                    "Affinché pesino meno.",
                    "Creano 'Malware Polimorfico' che cambia il suo codice costantemente per evadere gli antivirus.",
                    "Affinché il virus sia multipiattaforma."
                ],
                correcta: 1,
                feedback: "L'IA permette ai virus di mutare rapidamente, rendendo inutili le difese antiche.",
                cta: "Mantieni il tuo antivirus aggiornato in modalità 'automatica'.",
                fuente: "Microsoft Security"
            },
            {
                texto: "Cos'è il 'Data Poisoning' (Avvelenamento)?",
                opciones: [
                    "Un virus nel database.",
                    "Inondare internet di dati falsi affinché l'IA impari bugie e le propaghi.",
                    "Cancellare dati dell'IA."
                ],
                correcta: 1,
                feedback: "Se manipoli la fonte di alimentazione dell'IA, manipoli il suo risultato.",
                cta: "Se l'IA ti dà un'opinione politica distorta, potrebbe essere 'intossicata'. Verifica.",
                fuente: "MITRE ATLAS"
            },
            {
                texto: "Hai cancellato la chat con l'IA. Il dato è sparito per sempre?",
                opciones: [
                    "Sì, è istantaneo.",
                    "Probabilmente no. Rimane nei backup e nei log dei server per il tempo legale.",
                    "Sì, per legge."
                ],
                correcta: 1,
                feedback: "Nel cloud, 'cancellare' significa spesso 'nascondere'. La traccia forense rimane.",
                cta: "Non scrivere nulla che ti vergogneresti di vedere sulla prima pagina di un giornale.",
                fuente: "GDPR Challenges"
            }
        ]
    }
];
