# Documentación Técnica: AI for Youth - Trivia Game

Esta guía técnica está diseñada para brindar una comprensión profunda de la arquitectura, la estructura de archivos y las principales mecánicas del código del proyecto **AI for Youth - Trivia Game**. Puedes utilizar este contenido directamente en tu sitio web de documentación.

---

## 🏗️ 1. Arquitectura General y Tecnologías

El juego es una aplicación web SPA (*Single Page Application*) desarrollada en su totalidad con tecnologías nativas del navegador (Vanilla JS), lo que garantiza un alto rendimiento y elimina la necesidad de compiladores o frameworks pesados.

*   **Estructura y Semántica**: HTML5.
*   **Estilos y Diseño Responsivo**: CSS3 potenciado con **Tailwind CSS** (inyectado vía CDN para rápidez de desarrollo). El uso de clases de utilidad de Tailwind permite adaptar la interfaz mediante metodologías *Mobile-First*.
*   **Lógica e Interacción**: JavaScript ES6+.
*   **Almacenamiento e Integración Backend**: Google Apps Script (GAS) actuando como una API REST (webhook) que recibe peticiones `POST` desde el juego y almacena secuencialmente los datos (Nombre, Nivel, Errores) en una Google Sheet.
*   **Despliegue (Hosting)**: GitHub Pages (`gh-pages`), alojando el código estáticamente y sirviéndolo por HTTPS.

---

## 📁 2. Estructura de Archivos

El sistema está dividido modularmente para separar la lógica, las definiciones, las traducciones y las interfaces:

```text
/
├── index.html                  # Interfaz de Usuario (UI) Principal
├── TriviaGame/
│   ├── app.js                  # Motor del juego (Controlador Principal)
│   └── google_apps_script.gs   # Código backend (Se ejecuta en los servidores de Google)
├── glosario.js                 # Diccionarios multilingües de definiciones y tooltips
├── preguntas.sp.js             # Base de datos JSON de preguntas (Español)
├── preguntas.en.js             # Base de datos JSON de preguntas (Inglés)
├── preguntas.it.js             # Base de datos JSON de preguntas (Italiano)
└── README.md                   # Instrucciones del repositorio
```

---

## ⚙️ 3. Lógica Fundamental (`app.js`)

El archivo `app.js` es el núcleo de la aplicación. Gestiona el ciclo de vida del juego:

### Gestión de Estado Global
Se inicializan variables para rastrear el progreso del usuario: `currentLevelIndex`, `currentQuestionIndex`, la lista de las 10 preguntas actuales (`currentLevelQuestions`), puntuaciones parciales (`levelScore`), cantidad de errores, y el estado del temporizador (`startTime`).

### Sistema de Localización (Multi-idioma)
La aplicación carga de manera síncrona/dinámica 3 archivos grandes de arreglos de objetos (`window.datosNivelesSP`, `EN`, `IT`). La función `loadLevelsView(lang)` se encarga de cambiar los textos estáticos del *DOM* (botones, menús) al idioma correspondiente y carga la matriz de preguntas correcta en la variable de estado principal.

### Sistema de Aleatoriedad (Randomización)
El juego implementa múltiples niveles de aleatorización para prevenir trampas y promover la asimilación del contenido:
1.  **Orden de Preguntas:** Al iniciar un nivel o presionar "Reboot Level", el motor selecciona el banco de preguntas de ese nivel de forma secuencial, pero aplica una función algorítmica de barajado (inspirada en la técnica *Fisher-Yates*) para mezclar completamente el orden (1 al 10) que será mostrado al usuario.
2.  **Orden de Opciones:** Dentro de cada pregunta, el arreglo genuino `[0, 1, 2]` correspondiente a las 3 opciones de respuesta, es copiado (clonado) e introducido en `shuffleArray()`. La respuesta que antes era correcta por estar en la posición `1`, ahora pasa a vincularse dinámicamente con la nueva posición, de manera que la repetición del nivel nunca expondrá las respuestas en el mismo rectángulo visual de la interfaz.

### Feedback Auditivo Nativo (Web Audio API)
La música y los efectos de sonido se reproducen mediante la **API Web Audio nativa de JavaScript**. En lugar de requerir que el navegador del jugador descargue archivos MP3 que entorpezcan el rendimiento:
*   `playCorrectSound()`: Utiliza un oscilador de frecuencia (Onda cuadrada/triangular) que incrementa progresivamente en hercios (`Hz`) para simular un sonido electrónico de victoria de 8-bits.
*   `playErrorSound()`: Crea graves fuertes (`100 Hz`) y discordantes para señalar claramente que se ha fallado la respuesta.

---

## 📚 4. Subsistema del Glosario Dinámico

El motor de glosario permite enriquecer textos con contexto sin saturar la pantalla.
1.  Un archivo independiente `glosario.js` exporta un objeto `window.Glosario = { es: {...}, en: {...}, it: {...} }` que contiene parejas de clave-valor asociadas a un idioma específico.
2.  La función de utilidad `applyGlosario()` recibe un string crudo (la pregunta o la explicación). Itera a través de las llaves correspondientes al idioma seleccionado.
3.  Emplea **Expresiones Regulares (RegEx)** no-sensibles a mayúsculas para buscar esa palabra.
4.  Tan pronto la intercepta, la envuelve con un elemento HTML `<span class="glosario-palabra">` añadiendo eventos de ratón (`onmouseenter`, `onmouseleave`) o toque para móviles.
5.  Un div flotante (tooltip) es revelado con la defnición capturada dinámicamente, proveyendo al estudiante el contexto de inmediato (ej. ¿Qué es un "LLM"?).

---

## 📡 5. Backend y Persistencia de Puntajes (Google Apps Script)

Google Sheets actúa como nuestra base de datos NoSQL gratuita.

*   El usuario ingresa su nombre al principio (almacenado en la variable global `playerName`).
*   Al completar el Sexto (último) Nivel, la función `endGame()` calcula el puntaje final basado en el número total de errores. A menor número de fallos, mayor Rank Global (*Ex: "Global Rank: S", "A", etc.*).
*   Se ejecuta un **`fetch()` HTTP POST Request**.
*   Para pasar las políticas de CORS (intercambio de recursos de origen cruzado) estrictamente establecidas por Google, NO se envía el tipo de archivo estándar `application/json`, sino como un objeto preformateado en texto nativo URL (parámetros `x-www-form-urlencoded`).
*   En el lado de la nube, `google_apps_script.gs` recibe el `POST` con la función nativa `doPost(e)`. Se abre la hoja conectada mediante `SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()`.
*   Añade una fila secuencial con: `[Marca de Tiempo (Timestamp), Nombre del Jugador, Errores Totales, Puntaje Asignado]`.
*   Esto le permite a los administradores del proyecto recolectar métricas sobre la efectividad educativa del curso de IA.
