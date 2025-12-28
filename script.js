{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // VARIABLES DE ESTADO\
let currentLevelIndex = 0;\
let currentQuestionIndex = 0;\
let score = 0;\
let maxScore = 0; // Se calcula din\'e1micamente seg\'fan el total de preguntas\
\
// REFERENCIAS AL DOM (Elementos de la pantalla)\
const startScreen = document.getElementById('start-screen');\
const gameScreen = document.getElementById('game-screen');\
const endScreen = document.getElementById('end-screen');\
\
const levelTitleEl = document.getElementById('level-title');\
const currentLevelEl = document.getElementById('current-level');\
const scoreEl = document.getElementById('score');\
const progressBar = document.getElementById('progress-bar');\
const questionTextEl = document.getElementById('question-text');\
const optionsContainer = document.getElementById('options-container');\
\
// Elementos de Feedback\
const feedbackArea = document.getElementById('feedback-area');\
const feedbackTitle = document.getElementById('feedback-title');\
const feedbackText = document.getElementById('feedback-text');\
const feedbackCta = document.getElementById('feedback-cta');\
const feedbackSource = document.getElementById('feedback-source');\
const nextBtn = document.getElementById('next-btn');\
\
// Elementos Finales\
const finalScoreEl = document.getElementById('final-score');\
const finalMessageEl = document.getElementById('final-message');\
\
// INICIALIZACI\'d3N\
document.getElementById('start-btn').addEventListener('click', startGame);\
nextBtn.addEventListener('click', loadNextQuestion);\
\
function startGame() \{\
    startScreen.classList.remove('active');\
    startScreen.classList.add('hidden');\
    gameScreen.classList.remove('hidden');\
    gameScreen.classList.add('active');\
    \
    // Calcular puntaje m\'e1ximo posible (10 pts por pregunta)\
    let totalQuestions = 0;\
    datosNiveles.forEach(nivel => totalQuestions += nivel.preguntas.length);\
    maxScore = totalQuestions * 10;\
\
    loadQuestion();\
\}\
\
// PROCESADOR DE TEXTO (GLOSARIO)\
// Busca palabras del glosario en el texto y las convierte en HTML interactivo\
function processTextWithGlossary(text) \{\
    if (!text) return "";\
    \
    let processedText = text;\
    \
    // Ordenamos las claves por longitud (de mayor a menor) para evitar \
    // que "IA" reemplace parte de "Inteligencia Artificial" si ambas est\'e1n en el glosario.\
    const terminos = Object.keys(glosarioTerminos).sort((a, b) => b.length - a.length);\
\
    terminos.forEach(termino => \{\
        const definicion = glosarioTerminos[termino];\
        // Regex: \\b asegura que sea palabra completa, 'gi' es global e insensible a may\'fasculas\
        const regex = new RegExp(`\\\\b($\{termino\})\\\\b`, 'gi');\
        \
        // Reemplazamos por un span con tooltip. $1 mantiene la capitalizaci\'f3n original del texto.\
        processedText = processedText.replace(regex, `<span class="glossary-term" data-def="$\{definicion\}">$1</span>`);\
    \});\
\
    return processedText;\
\}\
\
// CARGAR PREGUNTA\
function loadQuestion() \{\
    // Resetear UI\
    feedbackArea.classList.add('hidden');\
    feedbackArea.classList.remove('is-correct', 'is-wrong');\
    optionsContainer.innerHTML = ''; // Limpiar botones anteriores\
    \
    // Obtener datos actuales\
    const nivelActual = datosNiveles[currentLevelIndex];\
    const preguntaActual = nivelActual.preguntas[currentQuestionIndex];\
\
    // Actualizar Barra Superior\
    currentLevelEl.textContent = nivelActual.nivel;\
    levelTitleEl.textContent = nivelActual.titulo;\
    scoreEl.textContent = score;\
\
    // Calcular Progreso Global\
    // (L\'f3gica simplificada para la barra: preguntas totales vs actuales)\
    let preguntasPasadas = 0;\
    for(let i=0; i < currentLevelIndex; i++) \{\
        preguntasPasadas += datosNiveles[i].preguntas.length;\
    \}\
    preguntasPasadas += currentQuestionIndex;\
    const totalGlobal = maxScore / 10;\
    const porcentaje = (preguntasPasadas / totalGlobal) * 100;\
    progressBar.style.width = `$\{porcentaje\}%`;\
\
    // Renderizar Pregunta (Con Glosario)\
    questionTextEl.innerHTML = processTextWithGlossary(preguntaActual.texto);\
\
    // Renderizar Opciones\
    preguntaActual.opciones.forEach((opcion, index) => \{\
        const btn = document.createElement('button');\
        btn.classList.add('option-btn');\
        // Tambi\'e9n procesamos el glosario en las opciones\
        btn.innerHTML = processTextWithGlossary(opcion);\
        btn.onclick = () => checkAnswer(index, preguntaActual.correcta);\
        optionsContainer.appendChild(btn);\
    \});\
\}\
\
// VERIFICAR RESPUESTA\
function checkAnswer(selectedIndex, correctIndex) \{\
    // Deshabilitar todos los botones para que no cliquen dos veces\
    const botones = optionsContainer.querySelectorAll('.option-btn');\
    botones.forEach(btn => btn.disabled = true);\
\
    const nivelActual = datosNiveles[currentLevelIndex];\
    const preguntaActual = nivelActual.preguntas[currentQuestionIndex];\
\
    // Mostrar cu\'e1l era la correcta y la incorrecta\
    if (selectedIndex === correctIndex) \{\
        botones[selectedIndex].classList.add('correct');\
        score += 10;\
        scoreEl.textContent = score;\
        feedbackTitle.textContent = "\'a1Correcto!";\
        feedbackArea.classList.add('is-correct');\
    \} else \{\
        botones[selectedIndex].classList.add('wrong');\
        botones[correctIndex].classList.add('correct'); // Mostrar cu\'e1l era la buena\
        feedbackTitle.textContent = "Incorrecto";\
        feedbackArea.classList.add('is-wrong');\
    \}\
\
    // Cargar contenido del Feedback\
    feedbackText.innerHTML = processTextWithGlossary(preguntaActual.feedback);\
    feedbackCta.textContent = preguntaActual.cta;\
    feedbackSource.textContent = preguntaActual.fuente;\
\
    // Mostrar caja de feedback\
    feedbackArea.classList.remove('hidden');\
\}\
\
// CONTROL DE NAVEGACI\'d3N\
function loadNextQuestion() \{\
    const nivelActual = datosNiveles[currentLevelIndex];\
\
    // Avanzar \'edndice de pregunta\
    currentQuestionIndex++;\
\
    // Si se acaban las preguntas de este nivel\
    if (currentQuestionIndex >= nivelActual.preguntas.length) \{\
        currentQuestionIndex = 0;\
        currentLevelIndex++;\
    \}\
\
    // Si se acaban los niveles (Fin del juego)\
    if (currentLevelIndex >= datosNiveles.length) \{\
        endGame();\
    \} else \{\
        loadQuestion();\
    \}\
\}\
\
function endGame() \{\
    gameScreen.classList.remove('active');\
    gameScreen.classList.add('hidden');\
    endScreen.classList.remove('hidden');\
    endScreen.classList.add('active');\
\
    finalScoreEl.textContent = `$\{score\} / $\{maxScore\}`;\
\
    // Mensaje personalizado seg\'fan puntaje\
    const porcentaje = (score / maxScore) * 100;\
    let mensaje = "";\
\
    if (porcentaje === 100) \{\
        mensaje = "\uc0\u55356 \u57286  \'a1Rango: PILOTO EXPERTO! Tienes el control total. La IA es tu herramienta, no tu jefe.";\
    \} else if (porcentaje >= 80) \{\
        mensaje = "\uc0\u55358 \u56647  \'a1Rango: PILOTO AVANZADO! Tienes muy buen criterio, pero mantente alerta a las alucinaciones.";\
    \} else if (porcentaje >= 60) \{\
        mensaje = "\uc0\u55358 \u56648  \'a1Rango: COPILOTO EN ENTRENAMIENTO! Entiendes los riesgos, pero a veces conf\'edas demasiado.";\
    \} else \{\
        mensaje = "\uc0\u9888 \u65039  \'a1Rango: PASAJERO AUTOM\'c1TICO! Est\'e1s en riesgo de manipulaci\'f3n o error. Revisa el material te\'f3rico y vuelve a intentarlo.";\
    \}\
\
    finalMessageEl.textContent = mensaje;\
\}}