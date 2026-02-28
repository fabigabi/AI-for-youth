// --- GLOBALS & STATE ---
let currentLang = 'es';
let gameData = [];
let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let currentLevelQuestions = [];
let audioCtx = null;
let levelScore = 0;
let levelErrors = 0;
let totalErrors = 0;
let startTime = null;
let timerInterval = null;
let levelTimes = [];

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    failed: document.getElementById('failed-screen'),
    end: document.getElementById('end-screen')
};

const UI = {
    langBtns: document.querySelectorAll('.lang-btn'),
    startBtn: document.getElementById('start-btn'),
    levelNum: document.getElementById('current-level'),
    levelTitle: document.getElementById('level-title'),
    timer: document.getElementById('timer-display'),
    score: document.getElementById('score'),
    errors: document.getElementById('errors'),
    progressBar: document.getElementById('progress-bar'),
    questionText: document.getElementById('question-text'),
    optionsGrid: document.getElementById('options-container'),

    // Feedback
    feedbackOverlay: document.getElementById('feedback-overlay'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackText: document.getElementById('feedback-text'),
    feedbackCta: document.getElementById('feedback-cta'),
    feedbackSource: document.getElementById('feedback-source'),
    nextBtn: document.getElementById('next-btn'),

    // Failed
    retryBtn: document.getElementById('retry-level-btn'),
    failedLevel: document.getElementById('failed-level-num'),
    failedScore: document.getElementById('failed-score'),

    // Final
    finalTime: document.getElementById('final-time'),
    finalErrors: document.getElementById('final-errors'),
    finalRank: document.getElementById('final-rank'),
    savingIndicator: document.getElementById('saving-indicator'),

    // Modals
    termModal: document.getElementById('term-modal'),
    termTitle: document.getElementById('term-title'),
    termDef: document.getElementById('term-def'),
    closeTermModal: document.getElementById('close-term-modal'),

    fullGlossaryModal: document.getElementById('full-glossary-modal'),
    openFullGlossaryBtn: document.getElementById('open-full-glossary'),
    closeFullGlossaryBtn: document.getElementById('close-full-glossary'),
    glossaryList: document.getElementById('full-glossary-list'),
    glossarySearch: document.getElementById('glossary-search')
};


// --- INITIALIZATION ---

function init() {
    // Setup listeners
    UI.langBtns.forEach(btn => btn.addEventListener('click', handleLangSelection));
    UI.startBtn.addEventListener('click', startGame);
    UI.nextBtn.addEventListener('click', nextQuestion);
    UI.retryBtn.addEventListener('click', restartLevel);

    // Modal listeners
    UI.closeTermModal.addEventListener('click', () => UI.termModal.classList.add('hidden'));
    UI.openFullGlossaryBtn.addEventListener('click', openFullGlossary);
    UI.closeFullGlossaryBtn.addEventListener('click', () => UI.fullGlossaryModal.classList.add('hidden'));
    UI.glossarySearch.addEventListener('input', renderFullGlossary);

    // Close modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === UI.termModal) UI.termModal.classList.add('hidden');
        if (e.target === UI.fullGlossaryModal) UI.fullGlossaryModal.classList.add('hidden');
    });

    // Mock API call to get top players
    fetchTopPlayers();
}

function handleLangSelection(e) {
    UI.langBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentLang = e.target.dataset.lang;
}

function startGame() {
    // Init audio context on user gesture
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Load chosen data
    switch (currentLang) {
        case 'en': gameData = window.datosNivelesEN || []; break;
        case 'it': gameData = window.datosNivelesIT || []; break;
        default: gameData = window.datosNivelesSP || []; break;
    }

    if (!gameData || gameData.length === 0) {
        alert("Error: Database not loaded.");
        return;
    }

    // Reset Globals
    currentLevelIndex = 0;
    totalErrors = 0;
    levelTimes = [];
    startTime = Date.now();

    switchScreen('game');
    startTimer();
    loadLevel();
}

function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.replace('active', 'hidden'));
    screens[screenName].classList.replace('hidden', 'active');
}


// --- TIMER ---

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimerDisplay, 1000);
}

function updateTimerDisplay() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const s = String(elapsed % 60).padStart(2, '0');
    UI.timer.textContent = `${m}:${s}`;
}

function getFormattedTime(ms) {
    const elapsed = Math.floor(ms / 1000);
    const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const s = String(elapsed % 60).padStart(2, '0');
    return `${m}:${s}`;
}


// --- AUDIO ---
function playSound(type) {
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
        osc.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.3); // C6

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.4);

        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.5);
    } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
        gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.3);

        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.4);
    }
}

// --- GAMEPLAY LOGIC ---

function loadLevel() {
    levelScore = 0;
    levelErrors = 0;
    currentQuestionIndex = 0;

    const levelData = gameData[currentLevelIndex];
    UI.levelNum.textContent = levelData.nivel;
    UI.levelTitle.textContent = levelData.titulo;

    // Suffle questions for this level
    currentLevelQuestions = [...levelData.preguntas].sort(() => Math.random() - 0.5);

    updateScoreBoard();
    loadQuestion();
}

function restartLevel() {
    switchScreen('game');
    loadLevel();
}

function updateScoreBoard() {
    UI.score.textContent = levelScore;
    UI.errors.textContent = levelErrors;
    const progress = (currentQuestionIndex / currentLevelQuestions.length) * 100;
    UI.progressBar.style.width = `${progress}%`;
}

function loadQuestion() {
    const q = currentLevelQuestions[currentQuestionIndex];
    updateScoreBoard();

    // Process text for glossary tooltips
    UI.questionText.innerHTML = injectGlossaryTerms(q.texto);

    // Create options buttons
    UI.optionsGrid.innerHTML = '';

    // Map and shuffle options
    let options = q.opciones.map((optText, index) => ({
        text: optText,
        isCorrect: index === q.correcta
    })).sort(() => Math.random() - 0.5);

    options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = injectGlossaryTerms(opt.text);
        if (opt.isCorrect) btn.dataset.correct = 'true';
        btn.onclick = () => handleAnswer(btn, opt.isCorrect, q);
        UI.optionsGrid.appendChild(btn);
    });

    UI.feedbackOverlay.classList.add('hidden');

    // Setup newly injected glossary terms
    setupGlossaryListeners();
}

function handleAnswer(btn, isCorrect, qData) {
    const allBtns = UI.optionsGrid.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true); // Disable further clicking

    if (isCorrect) {
        btn.classList.add('correct');
        levelScore++;
        playSound('correct');
        showFeedback(true, qData);
    } else {
        btn.classList.add('incorrect');
        levelErrors++;
        totalErrors++;
        playSound('wrong');
        allBtns.forEach(b => {
            if (b.dataset.correct === 'true') {
                b.classList.add('correct');
            }
        });
        showFeedback(false, qData);
    }
}

function showFeedback(isCorrect, qData) {
    UI.feedbackOverlay.classList.remove('hidden');
    UI.feedbackTitle.textContent = isCorrect ? '✔️ Correct' : '❌ System Error';
    UI.feedbackTitle.className = isCorrect ? 'feedback-title success' : 'feedback-title error';

    // Inject glossary terms in feedback as well
    UI.feedbackText.innerHTML = injectGlossaryTerms(qData.feedback);
    UI.feedbackCta.innerHTML = injectGlossaryTerms(qData.cta);
    UI.feedbackSource.textContent = qData.fuente;

    setupGlossaryListeners(); // re-bind specifically for feedback box
}

function nextQuestion() {
    const questionsCount = currentLevelQuestions.length;
    currentQuestionIndex++;

    if (currentQuestionIndex < questionsCount) {
        loadQuestion();
    } else {
        finishLevel();
    }
}

function finishLevel() {
    const questionsCount = currentLevelQuestions.length;

    // Check level passing condition
    if (levelScore < questionsCount) {
        // Failed
        UI.failedLevel.textContent = gameData[currentLevelIndex].nivel;
        UI.failedScore.textContent = levelScore;
        switchScreen('failed');
    } else {
        // Passed
        levelTimes.push(Date.now()); // Record checkpoint
        currentLevelIndex++;

        if (currentLevelIndex < gameData.length) {
            loadLevel();
        } else {
            finishGame();
        }
    }
}

function finishGame() {
    clearInterval(timerInterval);
    const totalMs = Date.now() - startTime;

    UI.finalTime.textContent = getFormattedTime(totalMs);
    UI.finalErrors.textContent = totalErrors;

    switchScreen('end');

    // Prepare Data for GSheets
    const payload = {
        language: currentLang,
        totalTimeMs: totalMs,
        totalErrors: totalErrors,
        errorIncidence: (totalErrors / (gameData.length * 10)).toFixed(2), // Assumes 10 q/level
        timestamp: new Date().toISOString()
    };

    saveToGoogleSheets(payload);
}


// --- GLOSSARY LOGIC ---

// Replaces known glossary terms inside text with a clickable span
function injectGlossaryTerms(text) {
    if (!window.glosarioTerminos) return text;
    const dictionary = window.glosarioTerminos[currentLang] || {};

    let processedText = text;
    // Sort keys by length descending so longer terms compound first
    const keys = Object.keys(dictionary).sort((a, b) => b.length - a.length);

    keys.forEach(key => {
        // Regex word boundary, case insensitive
        // Warning: This simple regex might break HTML inside text if keys match tag names.
        const regex = new RegExp(`\\b(${key})\\b`, 'gi');
        processedText = processedText.replace(regex, `<span class="glossary-term" data-term="$1">$1</span>`);
    });

    return processedText;
}

function setupGlossaryListeners() {
    document.querySelectorAll('.glossary-term').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering button click if inside option
            const termRaw = el.dataset.term;
            showTermModal(termRaw);
        });
    });
}

function showTermModal(rawTerm) {
    const dictionary = window.glosarioTerminos[currentLang] || {};

    // Find the exact matching key (case insensitive match)
    const exactKey = Object.keys(dictionary).find(k => k.toLowerCase() === rawTerm.toLowerCase());

    if (exactKey) {
        UI.termTitle.textContent = exactKey;
        UI.termDef.textContent = dictionary[exactKey];
        UI.termModal.classList.remove('hidden');
    }
}

function openFullGlossary(e) {
    e.preventDefault();
    renderFullGlossary();
    UI.fullGlossaryModal.classList.remove('hidden');
}

function renderFullGlossary() {
    const dictionary = window.glosarioTerminos[currentLang] || {};
    const query = UI.glossarySearch.value.toLowerCase();

    UI.glossaryList.innerHTML = '';

    Object.entries(dictionary).forEach(([term, def]) => {
        if (term.toLowerCase().includes(query) || def.toLowerCase().includes(query)) {
            const div = document.createElement('div');
            div.className = 'glossary-item fade-in';
            div.innerHTML = `<h4>${term}</h4><p>${def}</p>`;
            UI.glossaryList.appendChild(div);
        }
    });
}


// --- BACKEND (Google Sheets Simulation/Integration) ---

const GAS_URL = "https://script.google.com/macros/s/AKfycbyDVbvm5mb5EveD5rUIFiPVlHlyRMx1k3jZ1MEtjwunTe4qoV-WGR0tj-w2aFbru-OZ/exec"; // User will replace this

function fetchTopPlayers() {
    const preview = document.getElementById('preview-ranking');
    preview.innerHTML = '<div class="rank-item"><span>#1 AI_Master</span><span>12:05</span></div><div class="rank-item"><span>#2 SyntaxError</span><span>14:32</span></div><div class="rank-item"><span>#3 NullPointer</span><span>15:10</span></div>';

    // If actually connected:
    /*
    fetch(GAS_URL + "?action=getTop")
        .then(res => res.json())
        .then(data => { ... render UI ... })
    */
}

function saveToGoogleSheets(payload) {
    UI.savingIndicator.style.display = 'flex';

    // Simulate API delay, for when URL is not set yet
    if (GAS_URL.includes("YOUR_GOOGLE")) {
        setTimeout(() => {
            UI.savingIndicator.style.display = 'none';
            UI.finalRank.textContent = `#8 (Simulated)`;
        }, 2000);
        return;
    }

    // Real API Call
    fetch(GAS_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
    })
        .then(r => r.json())
        .then(data => {
            UI.savingIndicator.style.display = 'none';
            if (data.status === 'success') {
                UI.finalRank.textContent = `#${data.position}`;
            } else {
                UI.finalRank.textContent = "Error saving";
            }
        })
        .catch(err => {
            console.error(err);
            UI.savingIndicator.style.display = 'none';
            UI.finalRank.textContent = "Offline Mode";
        });
}

// Start
init();
