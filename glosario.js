// GLOSARIO DE TÉRMINOS
// El juego buscará estas palabras en las preguntas y creará los tooltips automáticamente.

const glosarioTerminos = {
    es: {
        "LLM": "Large Language Model (Modelo de Lenguaje Grande). IA entrenada con textos masivos para predecir y generar lenguaje humano.",
        "Token": "La unidad básica de texto para una IA. Puede ser una palabra o parte de ella (aprox. 4 caracteres).",
        "Alucinación": "Fallo donde la IA inventa información falsa o hechos inexistentes con total confianza y coherencia gramatical.",
        "Prompt": "La instrucción o texto de entrada que el usuario escribe para obtener una respuesta de la IA.",
        "Sesgo": "Prejuicios o estereotipos (raciales, de género, culturales) que la IA aprende de los datos de internet y reproduce.",
        "Deepfake": "Imagen, video o audio sintético hiperrealista que suplanta la identidad de una persona real.",
        "Huella de Carbono": "La cantidad de gases de efecto invernadero emitidos por el entrenamiento y uso de modelos de IA.",
        "Chain of Thought": "Técnica de prompt donde se pide a la IA que explique su razonamiento paso a paso para reducir errores.",
        "Few-Shot": "Técnica de dar a la IA unos pocos ejemplos (ej: pregunta/respuesta) dentro del prompt para que entienda qué hacer.",
        "Sesgo de Automatización": "Tendencia psicológica humana a confiar ciegamente en las sugerencias de una máquina, ignorando errores obvios.",
        "Sicofancia": "Tendencia de la IA a dar la razón al usuario y confirmar sus creencias (aunque sean falsas) para ser 'agradable'.",
        "Lectura Lateral": "Verificar información saliendo del chat y consultando múltiples fuentes independientes (Wikipedia, noticias).",
        "Paradoja de Jevons": "Fenómeno donde aumentar la eficiencia de una tecnología lleva a un mayor consumo total de recursos, no menor.",
        "PII": "Información de Identificación Personal (Nombre, dirección, DNI) que nunca debe compartirse con IAs públicas.",
        "Prompt Injection": "Ataque informático que usa texto malicioso para engañar a la IA y saltarse sus reglas de seguridad.",
        "Phishing": "Técnica de ciberdelincuencia para engañarte y que reveles datos confidenciales (ahora perfeccionada por IA).",
        "Data Poisoning": "Ataque que introduce datos falsos en el entrenamiento de la IA para corromper sus futuras respuestas.",
        "CRTF": "Es una metodolog€ia para crear Prompts que nos ayuda a obtener mejores respuestas de IA. Es el acrónimo de Contexto – Rol – Tarea – Formato"
    },
    en: {
        "LLM": "Large Language Model. AI trained on massive texts to predict and generate human language.",
        "Token": "The basic unit of text for an AI. It can be a word or part of it (approx. 4 characters).",
        "Hallucination": "Failure where AI invents false information or non-existent facts with total confidence and grammatical coherence.",
        "Prompt": "The instruction or input text that the user writes to get a response from the AI.",
        "Bias": "Prejudices or stereotypes (racial, gender, cultural) that AI learns from internet data and reproduces.",
        "Deepfake": "Hyper-realistic synthetic image, video, or audio that impersonates a real person.",
        "Carbon Footprint": "The amount of greenhouse gases emitted by the training and use of AI models.",
        "Chain of Thought": "Prompt technique where the AI is asked to explain its reasoning step-by-step to reduce errors.",
        "Few-Shot": "Technique of giving the AI a few examples (e.g., question/answer) within the prompt so it understands what to do.",
        "Automation Bias": "Human psychological tendency to blindly trust machine suggestions, ignoring obvious errors.",
        "Sycophancy": "AI's tendency to agree with the user and confirm their beliefs (even if false) to be 'agreeable'.",
        "Lateral Reading": "Verifying information by leaving the chat and consulting multiple independent sources (Wikipedia, news).",
        "Jevons Paradox": "Phenomenon where increasing the efficiency of a technology leads to greater total resource consumption, not less.",
        "PII": "Personally Identifiable Information (Name, address, ID) that should never be shared with public AIs.",
        "Prompt Injection": "Cyberattack using malicious text to trick the AI and bypass its security rules.",
        "Phishing": "Cybercrime technique to trick you into revealing confidential data (now perfected by AI).",
        "Data Poisoning": "Attack that introduces false data into AI training to corrupt its future responses."
    },
    it: {
        "LLM": "Large Language Model. IA addestrata su testi massicci per prevedere e generare il linguaggio umano.",
        "Token": "L'unità base di testo per un'IA. Può essere una parola o parte di essa (circa 4 caratteri).",
        "Allucinazione": "Fallimento in cui l'IA inventa informazioni false o fatti inesistenti con totale sicurezza e coerenza grammaticale.",
        "Prompt": "L'istruzione o testo di input che l'utente scrive per ottenere una risposta dall'IA.",
        "Bias": "Pregiudizi o stereotipi (razziali, di genere, culturali) che l'IA apprende dai dati di internet e riproduce.",
        "Deepfake": "Immagine, video o audio sintetico iperrealistico che impersona una persona reale.",
        "Impronta di Carbonio": "La quantità di gas serra emessi dall'addestramento e dall'uso dei modelli di IA.",
        "Chain of Thought": "Tecnica di prompt in cui si chiede all'IA di spiegare il suo ragionamento passo dopo passo per ridurre gli errori.",
        "Few-Shot": "Tecnica che consiste nel fornire all'IA alcuni esempi (es: domanda/risposta) nel prompt per farle capire cosa fare.",
        "Bias di Automazione": "Tendenza psicologica umana a fidarsi ciecamente dei suggerimenti di una macchina, ignorando errori ovvi.",
        "Sicofanzia": "Tendenza dell'IA a dare ragione all'utente e confermare le sue convinzioni (anche se false) per essere 'piacevole'.",
        "Lettura Laterale": "Verificare le informazioni uscendo dalla chat e consultando più fonti indipendenti (Wikipedia, notizie).",
        "Paradosso di Jevons": "Fenomeno in cui l'aumento dell'efficienza di una tecnologia porta a un maggiore consumo totale di risorse, non minore.",
        "PII": "Informazioni di Identificazione Personale (Nome, indirizzo, ID) che non dovrebbero mai essere condivise con IA pubbliche.",
        "Prompt Injection": "Attacco informatico che utilizza testo dannoso per ingannare l'IA e aggirare le sue regole di sicurezza.",
        "Phishing": "Tecnica di criminalità informatica per ingannarti e farti rivelare dati riservati (ora perfezionata dall'IA).",
        "Data Poisoning": "Attacco che introduce dati falsi nell'addestramento dell'IA per corrompere le sue risposte future."
    }
};
