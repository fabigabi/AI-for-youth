// GLOSARIO DE TÉRMINOS
// El juego buscará estas palabras en las preguntas y creará los tooltips automáticamente.
// Puedes agregar más términos siguiendo el formato: "Término": "Definición"

const glosarioTerminos = {
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
    "Data Poisoning": "Ataque que introduce datos falsos en el entrenamiento de la IA para corromper sus futuras respuestas."
};
