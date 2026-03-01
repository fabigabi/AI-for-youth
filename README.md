# AI for Youth - Trivia Game 🎮🤖

Este repositorio contiene el código fuente de **AI for Youth - Trivia Game**, un juego interactivo de preguntas y respuestas diseñado para educar a jóvenes y adultos sobre Inteligencia Artificial, abarcando desde conceptos fundamentales y ética, hasta impacto ambiental y ciberseguridad.

## 🚀 Características Principales

*   **Multilingüe**: El juego está completamente disponible en Español, Inglés e Italiano. Tanto las interfaces como las preguntas cambian dinámicamente según la preferencia del usuario.
*   **Glosario Interactivo**: Sistema inteligente que detecta términos técnicos en las preguntas y respuestas (ej. *LLM*, *Deepfake*, *Temperatura*) y permite a los jugadores hacer clic en ellos para ver su definición en tiempo real a través de un *tooltip*.
*   **Diseño Moderno (Dark/Neon Mode)**: Interfaz de usuario inmersiva con temática oscura y colores neón, diseñada para ser atractiva y moderna.
*   **Aleatoriedad Avanzada**: Cada vez que se juega un nivel, el orden de las preguntas y el orden de las 3 opciones de respuesta se mezclan aleatoriamente, garantizando que el juego sea rejugable y evitando la memorización mecánica de posiciones.
*   **Feedback Auditivo**: Utilización de la *Web Audio API* nativa (sin archivos externos .mp3) para generar sonidos de celebración al acertar y sonidos de error grave al fallar.
*   **Integración con Google Sheets**: Los puntajes y resultados de los jugadores (incluyendo nombre, nivel y errores cometidos) se envían y almacenan automáticamente en una hoja de cálculo de Google mediante Google Apps Script (GAS).
*   **Diseño Responsivo (Mobile-First)**: El juego escala fluidamente desde pantallas de teléfonos móviles hasta monitores de escritorio gracias al uso cuidadoso de Tailwind CSS y Flexbox/Grid.

## 📂 Archivos y Estructura del Proyecto

*   `index.html`: La estructura principal de la aplicación web y la interfaz de usuario.
*   `app.js`: El motor principal del juego. Contiene toda la lógica de estado, manejo del DOM, sistema de audio, temporizadores y comunicación con Google Sheets.
*   `glosario.js`: Base de datos de los términos del glosario con sus definiciones en los 3 idiomas.
*   `preguntas.sp.js`: Base de datos con las 60 preguntas, opciones, respuestas y feedback en **Español**.
*   `preguntas.en.js`: Base de datos equivalente en **Inglés**.
*   `preguntas.it.js`: Base de datos equivalente en **Italiano**.
*   `google_apps_script.gs`: Código fuente que debe ser pegado en Google Apps Script para recibir los datos del juego y guardarlos en la hoja de cálculo de Google.

## 🌐 Despliegue Público (GitHub Pages)

El juego original está desplegado de forma gratuita a través de [GitHub Pages]. Cualquier actualización realizada en la rama `main` reconstruirá y actualizará automáticamente la versión pública del juego.

*Desarrollado para la alfabetización en IA.*
