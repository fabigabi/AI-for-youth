// VARIABLES DE ESTADO
let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let maxScore = 0;
let currentLanguage = 'es'; // Idioma por defecto

// CONSOLIDACIÓN DE DATOS
const datosNiveles = {
    es: datosNivelesSP,
    en: datosNivelesEN,
    it: datosNivelesIT
};

// UI TRANSLATIONS
const uiTranslations = {
    es: {
        title: "IA: Piloto vs Copiloto",
        subtitle: "¿Dominas la IA o la IA te domina a ti?",
        description: "Demuestra que tienes el criterio para usar la Inteligencia Artificial de forma ética, segura y eficiente.<br><br>6 Niveles | 60 Retos",
        startBtn: "Iniciar Desafío",
        level: "Nivel",
        score: "Puntaje",
        loading: "Cargando pregunta...",
        correct: "¡Correcto!",
        incorrect: "Incorrecto",
        nextBtn: "Siguiente Reto",
        completedTitle: "¡Simulación Completada!",
        finalScore: "Puntaje Final",
        calculating: "Evaluando desempeño...",
        restartBtn: "Reiniciar Entrenamiento",
        ranks: {
            expert: "🏆 ¡Rango: PILOTO EXPERTO! Tienes el control total. La IA es tu herramienta, no tu jefe.",
            advanced: "🥇 ¡Rango: PILOTO AVANZADO! Tienes muy buen criterio, pero mantente alerta a las alucinaciones.",
            novice: "🥈 ¡Rango: COPILOTO EN ENTRENAMIENTO! Entiendes los riesgos, pero a veces confías demasiado.",
            beginner: "⚠️ ¡Rango: PASAJERO AUTOMÁTICO! Estás en riesgo de manipulación o error. Revisa el material teórico y vuelve a intentarlo."
        }
    },
    en: {
        title: "AI: Pilot vs Copilot",
        subtitle: "Do you master AI or does AI master you?",
        description: "Prove you have the judgment to use Artificial Intelligence ethically, safely, and efficiently.<br><br>6 Levels | 60 Challenges",
        startBtn: "Start Challenge",
        level: "Level",
        score: "Score",
        loading: "Loading question...",
        correct: "Correct!",
        incorrect: "Incorrect",
        nextBtn: "Next Challenge",
        completedTitle: "Simulation Completed!",
        finalScore: "Final Score",
        calculating: "Evaluating performance...",
        restartBtn: "Restart Training",
        ranks: {
            expert: "🏆 Rank: EXPERT PILOT! You are in full control. AI is your tool, not your boss.",
            advanced: "🥇 Rank: ADVANCED PILOT! You have great judgment, but stay alert for hallucinations.",
            novice: "🥈 Rank: COPILOT IN TRAINING! You understand the risks, but sometimes trust too much.",
            beginner: "⚠️ Rank: AUTOMATIC PASSENGER! You are at risk of manipulation or error. Review theory and try again."
        }
    },
    it: {
        title: "IA: Pilota vs Copilota",
        subtitle: "Domini l'IA o l'IA domina te?",
        description: "Dimostra di avere il giudizio per usare l'Intelligenza Artificiale in modo etico, sicuro ed efficiente.<br><br>6 Livelli | 60 Sfide",
        startBtn: "Inizia Sfida",
        level: "Livello",
        score: "Punteggio",
        loading: "Caricamento domanda...",
        correct: "Corretto!",
        incorrect: "Sbagliato",
        nextBtn: "Prossima Sfida",
        completedTitle: "Simulazione Completata!",
        finalScore: "Punteggio Finale",
        calculating: "Valutazione prestazioni...",
        restartBtn: "Riavvia Addestramento",
        ranks: {
            expert: "🏆 Rango: PILOTA ESPERTO! Hai il controllo totale. L'IA è il tuo strumento, non il tuo capo.",
            advanced: "🥇 Rango: PILOTA AVANZATO! Hai un ottimo giudizio, ma stai attento alle allucinazioni.",
            novice: "🥈 Rango: COPILOTA IN ADDESTRAMENTO! Capisci i rischi, ma a volte ti fidi troppo.",
            beginner: "⚠️ Rango: PASSEGGERO AUTOMATICO! Sei a rischio di manipolazione o errore. Ripassa la teoria e riprova."
        }
    }
};

// REFERENCIAS AL DOM
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');

const levelTitleEl = document.getElementById('level-title');
const currentLevelEl = document.getElementById('current-level');
const scoreEl = document.getElementById('score');
const progressBar = document.getElementById('progress-bar');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Text Elements for Translation
const mainTitle = document.querySelector('h1');
const subTitle = document.querySelector('.subtitle');
const description = document.querySelector('.description');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const completedTitle = document.querySelector('#end-screen h2');
const finalScoreLabel = document.getElementById('final-score-label');
const finalScoreValue = document.getElementById('final-score');
const finalMaxScoreValue = document.getElementById('max-score');
const finalMessageEl = document.getElementById('final-message');
const restartBtn = document.querySelector('#end-screen button');
const uiLevelText = document.querySelector('.level-indicator');
const uiScoreText = document.querySelector('.score-box');

// Elementos de Feedback
const feedbackArea = document.getElementById('feedback-area');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackText = document.getElementById('feedback-text');
const feedbackCta = document.getElementById('feedback-cta');
const feedbackSource = document.getElementById('feedback-source');

// Language Buttons
const langBtns = document.querySelectorAll('.lang-btn');

// INICIALIZACIÓN
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
    });
});

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', loadNextQuestion);

function setLanguage(lang) {
    currentLanguage = lang;

    // Update active button state
    langBtns.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    // Update Static UI Text
    const t = uiTranslations[lang];
    if (mainTitle) mainTitle.textContent = t.title;
    if (subTitle) subTitle.textContent = t.subtitle;
    if (description) description.innerHTML = t.description;
    if (startBtn) startBtn.textContent = t.startBtn;
    if (nextBtn) nextBtn.textContent = t.nextBtn;
    if (completedTitle) completedTitle.textContent = t.completedTitle;
    if (restartBtn) restartBtn.textContent = t.restartBtn;

    // Slight hack for text nodes mixed with spans
    // Note: In a cleaner impl, we'd wrap "Nivel" and "Puntaje" in spans too.
    // For now assuming the structure from HTML: Nivel <span id="current-level">...
    uiLevelText.childNodes[0].nodeValue = t.level + " ";
    uiScoreText.childNodes[0].nodeValue = t.score + ": ";
    if (finalScoreLabel) finalScoreLabel.textContent = t.finalScore;

}

function startGame() {
    startScreen.classList.remove('active');
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    gameScreen.classList.add('active');

    // Recalculate max score based on current language data
    let totalQuestions = 0;
    const currentData = datosNiveles[currentLanguage];
    currentData.forEach(nivel => totalQuestions += nivel.preguntas.length);
    maxScore = totalQuestions * 10;

    loadQuestion();
}

// PROCESADOR DE TEXTO (GLOSARIO)
function processTextWithGlossary(text) {
    if (!text) return "";

    let processedText = text;
    const termsObj = glosarioTerminos[currentLanguage];

    if (!termsObj) return text;

    const terminos = Object.keys(termsObj).sort((a, b) => b.length - a.length);

    terminos.forEach(termino => {
        const definicion = termsObj[termino];
        const regex = new RegExp(`\\b(${termino})\\b`, 'gi');
        processedText = processedText.replace(regex, `<span class="glossary-term" data-def="${definicion}">$1</span>`);
    });

    return processedText;
}

// CARGAR PREGUNTA
function loadQuestion() {
    feedbackArea.classList.add('hidden');
    feedbackArea.classList.remove('is-correct', 'is-wrong');
    optionsContainer.innerHTML = '';

    const currentData = datosNiveles[currentLanguage];
    const nivelActual = currentData[currentLevelIndex];

    if (!nivelActual) return; // Safety

    const preguntaActual = nivelActual.preguntas[currentQuestionIndex];

    currentLevelEl.textContent = nivelActual.nivel;
    levelTitleEl.textContent = nivelActual.titulo;
    scoreEl.textContent = score;

    // Calcular Progreso
    let preguntasPasadas = 0;
    for (let i = 0; i < currentLevelIndex; i++) {
        preguntasPasadas += currentData[i].preguntas.length;
    }
    preguntasPasadas += currentQuestionIndex;
    const totalGlobal = maxScore / 10;
    const porcentaje = totalGlobal > 0 ? (preguntasPasadas / totalGlobal) * 100 : 0;
    progressBar.style.width = `${porcentaje}%`;

    questionTextEl.innerHTML = processTextWithGlossary(preguntaActual.texto);

    preguntaActual.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerHTML = processTextWithGlossary(opcion);
        btn.onclick = () => checkAnswer(index, preguntaActual.correcta);
        optionsContainer.appendChild(btn);
    });
}

// VERIFICAR RESPUESTA
function checkAnswer(selectedIndex, correctIndex) {
    const botones = optionsContainer.querySelectorAll('.option-btn');
    botones.forEach(btn => btn.disabled = true);

    const currentData = datosNiveles[currentLanguage];
    const nivelActual = currentData[currentLevelIndex];
    const preguntaActual = nivelActual.preguntas[currentQuestionIndex];
    const t = uiTranslations[currentLanguage];

    if (selectedIndex === correctIndex) {
        botones[selectedIndex].classList.add('correct');
        score += 10;
        scoreEl.textContent = score;
        feedbackTitle.textContent = t.correct;
        feedbackArea.classList.add('is-correct');
    } else {
        botones[selectedIndex].classList.add('wrong');
        botones[correctIndex].classList.add('correct');
        feedbackTitle.textContent = t.incorrect;
        feedbackArea.classList.add('is-wrong');
    }

    feedbackText.innerHTML = processTextWithGlossary(preguntaActual.feedback);
    feedbackCta.textContent = preguntaActual.cta;
    feedbackSource.textContent = preguntaActual.fuente;

    feedbackArea.classList.remove('hidden');
}

// CONTROL DE NAVEGACIÓN
function loadNextQuestion() {
    const currentData = datosNiveles[currentLanguage];
    const nivelActual = currentData[currentLevelIndex];

    currentQuestionIndex++;

    if (currentQuestionIndex >= nivelActual.preguntas.length) {
        currentQuestionIndex = 0;
        currentLevelIndex++;
    }

    if (currentLevelIndex >= currentData.length) {
        endGame();
    } else {
        loadQuestion();
    }
}

function endGame() {
    gameScreen.classList.remove('active');
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    endScreen.classList.add('active');

    finalScoreValue.textContent = score;
    finalMaxScoreValue.textContent = maxScore;

    const porcentaje = maxScore > 0 ? (score / maxScore) * 100 : 0;
    let mensaje = "";

    const t = uiTranslations[currentLanguage];

    if (porcentaje === 100) {
        mensaje = t.ranks.expert;
    } else if (porcentaje >= 80) {
        mensaje = t.ranks.advanced;
    } else if (porcentaje >= 60) {
        mensaje = t.ranks.novice;
    } else {
        mensaje = t.ranks.beginner;
    }

    finalMessageEl.textContent = mensaje;
}

// Init default static text
setLanguage('es');