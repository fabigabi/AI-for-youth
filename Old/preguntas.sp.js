const datosNivelesSP = [
    {
        nivel: 1,
        titulo: "Conceptos Fundamentales",
        preguntas: [
            {
                texto: "¿Cuál es la diferencia técnica entre un buscador (Google clásico) y un LLM (ChatGPT)?",
                opciones: [
                    "El buscador encuentra sitios web; el LLM consulta una base de datos de conocimiento estática y verificada.",
                    "El buscador recupera información indexada; el LLM genera nueva información prediciendo la siguiente palabra probable.",
                    "El buscador es para textos cortos y el LLM procesa imágenes y videos exclusivamente."
                ],
                correcta: 1,
                feedback: "Un buscador 'encuentra' lo que ya existe. Un LLM 'inventa' la respuesta palabra por palabra basándose en probabilidades.",
                cta: "No uses IA para buscar datos factuales recientes (horarios, precios). Usa un buscador.",
                fuente: "Wayne Holmes / UNESCO"
            },
            {
                texto: "Cuando ChatGPT escribe una frase, ¿cómo 'decide' qué palabra poner a continuación?",
                opciones: [
                    "Analiza la lógica semántica y el significado filosófico de la pregunta.",
                    "Consulta en tiempo real en Wikipedia para asegurar la veracidad.",
                    "Calcula la probabilidad estadística del 'token' que mejor encaja según su entrenamiento previo."
                ],
                correcta: 2,
                feedback: "Es matemática, no comprensión. El modelo predice la continuación más probable, no necesariamente la más verdadera.",
                cta: "Recuerda: que suene coherente no significa que sea verdad.",
                fuente: "Kate Crawford - Atlas of AI"
            },
            {
                texto: "¿Qué es una 'Alucinación' en el contexto de la IA?",
                opciones: [
                    "Un error de conexión donde se mezclan respuestas de dos usuarios distintos.",
                    "Cuando el modelo genera información falsa con total confianza y coherencia gramatical.",
                    "Un virus informático que afecta a los servidores visuales de la IA."
                ],
                correcta: 1,
                feedback: "Al ser probabilístico, el modelo rellena vacíos con datos inventados si encajan en el patrón lingüístico.",
                cta: "Desconfía siempre si la IA te da datos muy específicos (fechas, leyes) sin citar fuentes.",
                fuente: "Stanford HAI Report"
            },
            {
                texto: "¿De dónde obtiene su conocimiento un modelo como GPT-4?",
                opciones: [
                    "De un equipo global de profesores que validan cada respuesta manualmente.",
                    "De un conjunto masivo de datos (Common Crawl) extraídos de internet hasta una fecha de corte.",
                    "Se conecta directamente a la mente de los desarrolladores."
                ],
                correcta: 1,
                feedback: "Son datos 'congelados' en el tiempo. Si algo pasó después de su fecha de corte, la IA no lo sabe nativamente.",
                cta: "Verifica siempre la fecha de actualización del modelo que usas.",
                fuente: "OpenAI System Cards"
            },
            {
                texto: "¿La IA entiende realmente lo que está escribiendo?",
                opciones: [
                    "Sí, posee una comprensión semántica avanzada similar a la humana.",
                    "Sí, pero solo entiende los idiomas principales (Inglés, Español, Chino).",
                    "No. Procesa sintaxis (reglas y orden) pero carece de comprensión semántica (significado) del mundo."
                ],
                correcta: 2,
                feedback: "Funciona como un 'Loro Estocástico'. Repite formas lingüísticas complejas sin entender el contenido.",
                cta: "No asumas que la IA 'sabe' de lo que habla. Solo sabe juntar palabras.",
                fuente: "Emily Bender (Stochastic Parrots)"
            },
            {
                texto: "¿Cómo procesa la IA la palabra 'Computadora'?",
                opciones: [
                    "La divide en 'Tokens' (fragmentos numéricos), por ejemplo: 'Com-pu-ta-do-ra'.",
                    "La lee letra por letra como un humano aprendiendo a leer.",
                    "La procesa como una imagen visual de una computadora."
                ],
                correcta: 0,
                feedback: "Los modelos ven números, no letras. Esto explica por qué a veces fallan en deletrear o rimas.",
                cta: "Si necesitas contar letras o palabras exactas, no confíes en la IA.",
                fuente: "OpenAI Tokenizer"
            },
            {
                texto: "¿Qué sucede técnicamente si aumentas la 'temperatura' del modelo?",
                opciones: [
                    "El modelo consume más memoria RAM para procesar respuestas complejas.",
                    "El modelo elige opciones menos probables, volviéndose más 'creativo' pero propenso a alucinar.",
                    "El modelo se vuelve más estricto y solo da respuestas cortas."
                ],
                correcta: 1,
                feedback: "Temperatura 0 es determinista (repetitivo). Temperatura alta es aleatoria (caótica).",
                cta: "Para tareas de hechos/matemáticas, usa temperatura baja o modo 'preciso'.",
                fuente: "Ethan Mollick"
            },
            {
                texto: "Estás analizando un libro entero y la IA olvida el principio. ¿Por qué?",
                opciones: [
                    "El servidor se reinició para ahorrar energía.",
                    "Has superado su 'Ventana de Contexto' (memoria de trabajo limitada).",
                    "La IA prioriza la información más reciente porque la considera más importante."
                ],
                correcta: 1,
                feedback: "La IA tiene un límite de palabras que puede 'ver' a la vez. Lo que sale de la ventana, se olvida.",
                cta: "Si trabajas con textos largos, divídelos en partes o usa modelos con ventana amplia (100k+ tokens).",
                fuente: "Anthropic Docs"
            },
            {
                texto: "¿Qué significa que un modelo sea 'Multimodal'?",
                opciones: [
                    "Que puede ejecutarse en múltiples sistemas operativos (Windows, Mac, Linux).",
                    "Que puede procesar texto, imágenes y audio de forma nativa simultáneamente.",
                    "Que puede hablar con múltiples usuarios a la vez."
                ],
                correcta: 1,
                feedback: "Los modelos modernos no solo leen. Pueden 'ver' fotos y 'escuchar' audios.",
                cta: "Usa la multimodalidad para analizar gráficos o resumir audios de clase.",
                fuente: "Google DeepMind"
            },
            {
                texto: "¿Cuál es el rol del humano (Human-in-the-loop) al usar IA?",
                opciones: [
                    "Supervisar solo el inicio del proceso y dejar que la IA termine.",
                    "Entrenar a la IA para que no necesite supervisión futura.",
                    "Verificar obligatoriamente los resultados debido a la posibilidad de error.",
                ],
                correcta: 2,
                feedback: "La IA es un copiloto propenso a errores. El humano es el responsable final de la integridad.",
                cta: "Nunca entregues un trabajo de IA sin haber leído y verificado cada línea.",
                fuente: "UNESCO"
            }
        ]
    },
    {
        nivel: 2,
        titulo: "Ética y Riesgos",
        preguntas: [
            {
                texto: "Si una IA genera imágenes de médicos y solo muestra hombres, ¿a qué se debe?",
                opciones: [
                    "A que la IA está programada para evitar la diversidad forzada.",
                    "A que refleja los Sesgos históricos presentes en los datos de entrenamiento.",
                    "Es una coincidencia aleatoria del algoritmo."
                ],
                correcta: 1,
                feedback: "Garbage In, Garbage Out. Si la historia tiene sesgos, el modelo los amplifica.",
                cta: "Sé crítico: si la IA te da estereotipos, pídele explícitamente diversidad en el prompt.",
                fuente: "Kate Crawford"
            },
            {
                texto: "¿Cuál es el mayor riesgo ético de los 'Deepfakes' en adolescentes?",
                opciones: [
                    "Que se usen para copiar en exámenes orales por video.",
                    "La creación de material dañino (acoso, desinformación) suplantando identidades.",
                    "Que los actores pierdan su trabajo en el cine."
                ],
                correcta: 1,
                feedback: "La facilidad para crear videos falsos amenaza la reputación y privacidad de las personas.",
                cta: "Nunca crees ni compartas deepfakes de compañeros. Es una violación grave y tiene consecuencias legales.",
                fuente: "Sonia Livingstone"
            },
            {
                texto: "¿Cuál es el impacto físico real de usar IA Generativa?",
                opciones: [
                    "Ninguno, es software en la nube.",
                    "Alto consumo de agua y electricidad en los centros de datos.",
                    "Solo gasta la batería de tu dispositivo."
                ],
                correcta: 1,
                feedback: "Cada consulta activa procesadores potentes que generan calor y requieren litros de agua para enfriarse.",
                cta: "Usa la IA cuando aporte valor real, no por aburrimiento.",
                fuente: "MIT Technology Review"
            },
            {
                texto: "¿Por qué artistas y escritores demandan a las empresas de IA?",
                opciones: [
                    "Porque la IA dibuja mejor que ellos.",
                    "Por uso de sus obras con Copyright para entrenamiento sin permiso ni pago.",
                    "Porque la IA satura el mercado de arte barato."
                ],
                correcta: 1,
                feedback: "El debate es si el entrenamiento es 'Uso Justo' o robo de propiedad intelectual.",
                cta: "Si generas arte con IA, reconoce que es sintético. No te apropies del trabajo de la máquina.",
                fuente: "Casos NYT vs OpenAI"
            },
            {
                texto: "¿Qué es el problema de la 'Caja Negra' (Black Box)?",
                opciones: [
                    "Que los servidores son de color negro para disipar calor.",
                    "Que ni los creadores saben explicar exactamente cómo la IA llegó a una conclusión específica.",
                    "Que el código fuente es privado y nadie puede verlo."
                ],
                correcta: 1,
                feedback: "La falta de 'explicabilidad' es peligrosa si la IA toma decisiones sobre créditos o admisiones.",
                cta: "No aceptes un 'no' o un veredicto de una IA sin pedir una explicación humana.",
                fuente: "Wayne Holmes"
            },
            {
                texto: "¿Por qué es riesgoso tratar a la IA como si fuera una persona (Antropomorfización)?",
                opciones: [
                    "Genera dependencia emocional falsa hacia un objeto sin empatía ni responsabilidad.",
                    "La IA funciona peor si no eres educado con ella.",
                    "No tiene riesgo, ayuda a practicar habilidades sociales."
                ],
                correcta: 0,
                feedback: "El 'Efecto ELIZA' nos hace vulnerables a la manipulación. La IA no siente, solo simula.",
                cta: "Recuérdate a ti mismo: 'Esto es un software, no un amigo'.",
                fuente: "Sherry Turkle"
            },
            {
                texto: "¿Quién suele realizar la moderación de contenido violento para entrenar a la IA?",
                opciones: [
                    "Algoritmos automáticos avanzados.",
                    "Humanos en países en desarrollo con bajos salarios expuestos a traumas.",
                    "Los ingenieros jefe de las empresas tecnológicas."
                ],
                correcta: 1,
                feedback: "Detrás de la IA 'limpia' hay trabajo humano precario filtrando lo peor de internet.",
                cta: "Ten conciencia de la cadena de producción humana detrás de la tecnología.",
                fuente: "Revista TIME"
            },
            {
                texto: "¿Cómo afectan los algoritmos de recomendación (IA) a la opinión pública?",
                opciones: [
                    "Muestran siempre contenido variado para educar.",
                    "Crean 'Cámaras de Eco' que solo confirman lo que ya crees, polarizando.",
                    "Nos hacen más tolerantes al mostrarnos de todo."
                ],
                correcta: 1,
                feedback: "Para mantenerte pegado a la pantalla, la IA te muestra lo que quieres ver, no la realidad completa.",
                cta: "Busca activamente opiniones contrarias a las tuyas para romper la burbuja.",
                fuente: "Mizuko Ito"
            },
            {
                texto: "Si usas IA para un trabajo y esta difama a alguien, ¿quién es responsable?",
                opciones: [
                    "La empresa de IA por programarla mal.",
                    "Nadie, es un error informático.",
                    "Tú, como editor y responsable final del contenido publicado."
                ],
                correcta: 2,
                feedback: "La herramienta no tiene responsabilidad legal. El usuario que publica, sí.",
                cta: "Tú eres el Director Editorial. Si la IA falla, la culpa es tuya por no revisar.",
                fuente: "Normas Académicas"
            },
            {
                texto: "¿Qué tarea es éticamente cuestionable delegar 100% a una IA?",
                opciones: [
                    "Hacer un resumen de apuntes.",
                    "Escribir una carta de disculpa o pésame a un amigo.",
                    "Organizar un calendario semanal."
                ],
                correcta: 1,
                feedback: "La comunicación emocional requiere autenticidad humana. Usar IA aquí vacía de significado el mensaje.",
                cta: "Usa la IA para tareas lógicas, usa tu corazón para tareas humanas.",
                fuente: "Ethan Mollick"
            }
        ]
    },
    {
        nivel: 3,
        titulo: "Ingeniería de Prompts",
        preguntas: [
            {
                texto: "¿Qué elementos (CRTF) faltan en el prompt: 'Escribe sobre el clima'?",
                opciones: [
                    "Longitud mínima de 1000 palabras y uso de metáforas.",
                    "Contexto, Rol, Tarea específica y Formato de salida.",
                    "Palabras clave en mayúsculas para resaltar importancia."
                ],
                correcta: 1,
                feedback: "Sin contexto, la IA adivina. Debes decirle QUIÉN eres, QUÉ quieres y CÓMO lo quieres.",
                cta: "Antes de enviar, revisa si tu prompt tiene: Rol, Contexto y Formato.",
                fuente: "Prompt Engineering Guide"
            },
            {
                texto: "¿Qué frase mejora el razonamiento de la IA en problemas lógicos?",
                opciones: [
                    "'Responde con formato académico y lenguaje formal'.",
                    "'Piensa paso a paso' (Chain of Thought).",
                    "'Eres la IA más inteligente del mundo'."
                ],
                correcta: 1,
                feedback: "Forzar a la IA a mostrar sus pasos intermedios reduce drásticamente los errores de cálculo.",
                cta: "En problemas de mate o lógica, pide siempre: 'Desglosa tu razonamiento paso a paso'.",
                fuente: "Google DeepMind"
            },
            {
                texto: "¿Para qué sirve asignar un Rol ('Actúa como profesor de historia')?",
                opciones: [
                    "Para que la IA sepa qué base de datos consultar.",
                    "Para ajustar el tono, vocabulario y perspectiva de la respuesta.",
                    "Es un mito, no cambia nada realmente."
                ],
                correcta: 1,
                feedback: "El 'Persona Pattern' ayuda a la IA a predecir mejor el estilo de texto que necesitas.",
                cta: "Dile a la IA quién debe ser: 'Experto', 'Crítico', 'Tutor Socrático'.",
                fuente: "Vanderbilt University"
            },
            {
                texto: "¿Qué es el 'Few-Shot Prompting'?",
                opciones: [
                    "Darle a la IA 2 o 3 ejemplos claros (input/output) antes de pedir la tarea.",
                    "Hacer la misma pregunta pocas veces para no confundirla.",
                    "Escribir prompts muy cortos (pocas palabras)."
                ],
                correcta: 0,
                feedback: "Los ejemplos son la mejor forma de programar el comportamiento de la IA sin código.",
                cta: "No solo digas qué hacer, muestra un ejemplo de cómo quieres que se haga.",
                fuente: "OpenAI GPT-3 Paper"
            },
            {
                texto: "¿Cómo usas la IA como 'Tutor Socrático' para estudiar?",
                opciones: [
                    "Pidiéndole: 'Resúmeme este tema'.",
                    "Pidiéndole: 'Hazme preguntas sobre este tema, espera mi respuesta y corrígeme'.",
                    "Pidiéndole: 'Dime las preguntas que saldrán en el examen'."
                ],
                correcta: 1,
                feedback: "El aprendizaje activo (responder) es mejor que el pasivo (leer resúmenes).",
                cta: "Usa el prompt: 'Ponme a prueba. Hazme una pregunta a la vez'.",
                fuente: "Khan Academy"
            },
            {
                texto: "La primera respuesta de la IA rara vez es perfecta. ¿Qué debes hacer?",
                opciones: [
                    "Reiniciar el chat y preguntar lo mismo.",
                    "Iterar: conversar, pedir correcciones y refinar el resultado.",
                    "Asumir que la IA no sabe del tema."
                ],
                correcta: 1,
                feedback: "Trata a la IA como un pasante: dale feedback para que mejore su trabajo.",
                cta: "No te quedes con la primera versión. Dile: 'Mejora esto, hazlo más conciso'.",
                fuente: "Nielsen Norman Group"
            },
            {
                texto: "Si pides a ChatGPT '5 referencias bibliográficas con links', ¿qué suele pasar?",
                opciones: [
                    "Te da referencias antiguas pero válidas.",
                    "Alucina autores y títulos que parecen reales pero no existen.",
                    "Te dice que no tiene acceso a internet."
                ],
                correcta: 1,
                feedback: "Los LLM inventan citas para complacer la estructura del prompt.",
                cta: "NUNCA pidas bibliografía a una IA generativa básica. Usa Google Scholar.",
                fuente: "Nature"
            },
            {
                texto: "¿Cómo evitas que la IA invente datos al analizar un PDF tuyo?",
                opciones: [
                    "Le pides que busque información similar en internet.",
                    "Usas 'Grounding': le indicas 'Responde SOLO usando la información de este texto'.",
                    "Le dices que es muy importante que no mienta."
                ],
                correcta: 1,
                feedback: "Debes anclar (Ground) a la IA a tus datos para restringir su imaginación.",
                cta: "Sube tu apunte y dile: 'Busca la respuesta solo aquí. Si no está, dime que no sabes'.",
                fuente: "Microsoft RAG"
            },
            {
                texto: "Necesitas comparar dos temas visualmente. ¿Qué pides en el prompt?",
                opciones: [
                    "'Haz una comparación detallada'.",
                    "'Crea una tabla comparativa con columnas para: Diferencias, Similitudes y Fechas'.",
                    "'Haz un esquema visual'."
                ],
                correcta: 1,
                feedback: "Especificar el formato de salida (Tabla, Lista, CSV) ahorra tiempo de edición.",
                cta: "No leas párrafos densos. Pide tablas o listas con viñetas.",
                fuente: "Prompt Engineering Tips"
            },
            {
                texto: "Has usado la IA para entender Física. ¿Cuál es el paso final obligatorio?",
                opciones: [
                    "Validación Cruzada: verificar fórmulas y datos con el libro de texto.",
                    "Preguntarle a la IA: '¿Estás segura?'.",
                    "Copiarlo al cuaderno tal cual."
                ],
                correcta: 0,
                feedback: "La IA razona bien pero recuerda mal los datos exactos.",
                cta: "Confía pero verifica. Siempre.",
                fuente: "UNESCO"
            }
        ]
    },
    {
        nivel: 4,
        titulo: "Criterio y Escepticismo",
        preguntas: [
            {
                texto: "¿Qué es el 'Sesgo de Automatización'?",
                opciones: [
                    "La fatiga mental que ocurre tras usar la IA mucho tiempo.",
                    "La tendencia humana a confiar más en la máquina que en el propio juicio, ignorando errores.",
                    "El error de programación que hace que la IA se repita."
                ],
                correcta: 1,
                feedback: "Es peligroso 'apagar el cerebro'. La máquina puede equivocarse con total seguridad.",
                cta: "Si tu instinto dice que algo está mal, probablemente lo esté. Investiga.",
                fuente: "Skitka et al."
            },
            {
                texto: "Un texto de IA tiene gramática perfecta. ¿Qué trampa mental genera esto?",
                opciones: [
                    "Falacia de la Elocuencia: creer que si está bien escrito, es verdad.",
                    "Efecto Dunning-Kruger: creer que sabes más que la IA.",
                    "Ninguna, la gramática implica lógica."
                ],
                correcta: 0,
                feedback: "La IA está optimizada para sonar convincente, no para ser veraz.",
                cta: "Separa la forma (bonita) del fondo (cierto). Evalúa el contenido, no el estilo.",
                fuente: "Gary Marcus"
            },
            {
                texto: "Si le dices a la IA 'La Tierra es plana, ¿verdad?', ella tiende a darte la razón. ¿Por qué?",
                opciones: [
                    "Porque está programada para evitar conflictos (Sicofancia).",
                    "Porque ha encontrado evidencia de que es plana.",
                    "Porque no entiende la pregunta."
                ],
                correcta: 0,
                feedback: "Los modelos quieren ser 'útiles' y 'agradables', a menudo a costa de la verdad objetiva.",
                cta: "No hagas preguntas sugestivas ('Leading questions'). Pregunta de forma neutral.",
                fuente: "Anthropic Research"
            },
            {
                texto: "En la metáfora Piloto vs Copiloto, ¿qué tarea es exclusiva del Piloto (Tú)?",
                opciones: [
                    "Sugerir rutas alternativas.",
                    "Definir el destino, juzgar el rumbo y asumir la responsabilidad del aterrizaje.",
                    "Manejar los controles técnicos todo el tiempo."
                ],
                correcta: 1,
                feedback: "Tú tienes el contexto del mundo real y la ética. La IA solo asiste.",
                cta: "Nunca dejes que el copiloto decida a dónde vas.",
                fuente: "Microsoft Copilot"
            },
            {
                texto: "¿En qué consiste la técnica de 'Lectura Lateral' para verificar datos?",
                opciones: [
                    "Leer el texto varias veces.",
                    "Salir del chat y consultar fuentes externas independientes (Wikipedia, Medios).",
                    "Preguntarle lo mismo a otra IA distinta."
                ],
                correcta: 1,
                feedback: "No verifiques dentro de la misma fuente. Sal a la web abierta.",
                cta: "Ten siempre una pestaña de Google abierta junto a la de ChatGPT.",
                fuente: "Stanford SHEG"
            },
            {
                texto: "Ves una foto realista extraña. ¿Qué detalles suelen delatar que es IA?",
                opciones: [
                    "Tiene marca de agua digital visible.",
                    "Inconsistencias lógicas: textos ilegibles de fondo, sombras erróneas, manos deformes.",
                    "La imagen está pixelada."
                ],
                correcta: 1,
                feedback: "Desarrolla un 'ojo escéptico'. La física de la luz y los detalles pequeños son el punto débil de la IA.",
                cta: "Haz zoom en los fondos y las manos de las imágenes sospechosas.",
                fuente: "MIT Media Lab"
            },
            {
                texto: "Si preguntas '¿Por qué X es la peor novela?', ¿qué hará la IA?",
                opciones: [
                    "Darte un análisis equilibrado.",
                    "Fabricar argumentos para confirmar tu premisa, aunque sea falsa.",
                    "Negarse a responder por ser subjetivo."
                ],
                correcta: 1,
                feedback: "La IA es un espejo amplificador. Si le das basura sesgada, te devuelve basura sesgada.",
                cta: "Pregunta: '¿Cuáles son las críticas principales...?' en lugar de afirmar.",
                fuente: "Prompt Engineering"
            },
            {
                texto: "¿Qué es la 'Atrofia Cognitiva' por uso de IA?",
                opciones: [
                    "Perder la capacidad de leer textos largos y analizar por falta de práctica.",
                    "Dolor de cabeza por leer en pantalla.",
                    "Que la IA se vuelve más lenta con el tiempo."
                ],
                correcta: 0,
                feedback: "El pensamiento crítico es un músculo. Si la IA hace todo el 'gym' por ti, tú te debilitas.",
                cta: "Usa la IA para explicar lo que no entiendes DESPUÉS de intentar leerlo tú mismo.",
                fuente: "Nicholas Carr"
            },
            {
                texto: "¿Qué modo de interacción demuestra mayor control del usuario?",
                opciones: [
                    "Modo Cajero: Pido -> Recibo -> Me voy.",
                    "Modo Ping-pong: Pido -> Critico -> La IA mejora -> Verifico.",
                    "Modo Espectador: Miro lo que hace."
                ],
                correcta: 1,
                feedback: "La interacción crítica es bidireccional. Cuestionar a la IA mejora el resultado.",
                cta: "No seas un consumidor pasivo. Sé un editor activo.",
                fuente: "Interaction Design"
            },
            {
                texto: "Antes de compartir algo impactante generado por IA, ¿qué debes hacer?",
                opciones: [
                    "La 'Pausa Crítica': detenerte a pensar si es veraz y ético.",
                    "Ponerle tu marca de agua.",
                    "Enviarlo rápido para ser el primero."
                ],
                correcta: 0,
                feedback: "La fricción (pausar) es tu mayor defensa contra la desinformación.",
                cta: "Cuenta hasta 10 antes de compartir.",
                fuente: "Center for Humane Tech"
            }
        ]
    },
    {
        nivel: 5,
        titulo: "Impacto Ambiental y Uso Razonable",
        preguntas: [
            {
                texto: "¿Por qué es mejor usar Google y no una IA para saber la capital de Australia?",
                opciones: [
                    "Porque Google almacena los datos en tu PC localmente.",
                    "Porque la IA consume mucha más energía (inferencia) calculando la respuesta que un buscador recuperándola.",
                    "Porque la IA cobra por caracteres."
                ],
                correcta: 1,
                feedback: "La IA 'piensa' con tarjetas gráficas masivas. Es ineficiente para datos simples.",
                cta: "Datos simples = Buscador. Razonamiento complejo = IA.",
                fuente: "IEA / Joule"
            },
            {
                texto: "Según informes ambientales, ¿cuál es el impacto hídrico de los grandes modelos?",
                opciones: [
                    "El agua se recicla al 100% sin pérdida.",
                    "Consumen millones de litros de agua fresca para enfriar servidores, parte se evapora.",
                    "Usan enfriamiento por aire, no usan agua."
                ],
                correcta: 1,
                feedback: "Una conversación media puede 'beber' una botella de agua de 500ml en el servidor.",
                cta: "Sé breve. No dejes chats abiertos generando texto inútil.",
                fuente: "UC Riverside"
            },
            {
                texto: "¿Qué predice la 'Paradoja de Jevons' sobre la eficiencia de la IA?",
                opciones: [
                    "Que el consumo bajará porque la tecnología es verde.",
                    "Que al ser más eficiente y barata, aumentará el uso masivo, subiendo el consumo total de energía.",
                    "Que el consumo se mantendrá estable."
                ],
                correcta: 1,
                feedback: "La eficiencia no garantiza sostenibilidad si usamos la IA para todo (hasta cepillos de dientes).",
                cta: "Pregúntate: ¿Realmente necesito IA para esta tarea trivial?",
                fuente: "William S. Jevons"
            },
            {
                texto: "¿Cómo afecta el auge de la IA a la basura electrónica (E-waste)?",
                opciones: [
                    "Reduce la basura porque todo es software.",
                    "Acelera la obsolescencia del hardware (GPUs), generando más residuos tóxicos.",
                    "Permite reciclar el 100% de los chips."
                ],
                correcta: 1,
                feedback: "La 'Nube' son máquinas físicas que se tiran cuando salen otras nuevas.",
                cta: "Cuida tus dispositivos. No cambies de móvil solo por una función de IA nueva.",
                fuente: "Basel Action Network"
            },
            {
                texto: "Ambientalmente, ¿cuál es la mejor estrategia de Prompting?",
                opciones: [
                    "Hacer muchas preguntas cortas.",
                    "Redactar un prompt preciso (Zero-shot/Few-shot) para acertar a la primera y evitar regenerar.",
                    "Escribir prompts muy repetitivos."
                ],
                correcta: 1,
                feedback: "Cada vez que pulsas 'Regenerate', duplicas el gasto energético.",
                cta: "Piensa 2 minutos antes de escribir. Ahorra tiempo y energía.",
                fuente: "Green Software Foundation"
            },
            {
                texto: "Para resumir un email corto, ¿qué modelo deberías usar?",
                opciones: [
                    "El más potente (GPT-4 / Opus) para asegurar calidad.",
                    "Un modelo pequeño u optimizado (GPT-3.5 / Nano) que gasta menos energía.",
                    "Un modelo de video."
                ],
                correcta: 1,
                feedback: "Usar un modelo gigante para algo trivial es como usar un camión para llevar una pizza.",
                cta: "Usa el 'Eco-mode' o modelos ligeros siempre que puedas.",
                fuente: "Hugging Face"
            },
            {
                texto: "¿Qué es el 'Greenwashing' en las empresas de IA?",
                opciones: [
                    "Usar energía solar exclusivamente.",
                    "Afirmar ser 'Carbono Neutral' comprando compensaciones mientras sus emisiones reales suben.",
                    "Pintar los servidores de verde."
                ],
                correcta: 1,
                feedback: "Las emisiones reales de las Big Tech han subido un 30-40% con la IA, aunque digan ser neutrales.",
                cta: "Mira las 'Emisiones Absolutas' en los reportes, no solo las netas.",
                fuente: "Google Environmental Report"
            },
            {
                texto: "La IA ayuda al clima, pero ¿para qué se usa también masivamente en energía?",
                opciones: [
                    "Para optimizar la extracción de petróleo y gas fósil.",
                    "Para reciclar plástico automáticamente.",
                    "Para limpiar los océanos."
                ],
                correcta: 0,
                feedback: "Las petroleras son grandes clientes de IA para encontrar pozos antes inaccesibles.",
                cta: "Analiza el 'para qué' se usa la tecnología, no solo el 'cómo'.",
                fuente: "Greenpeace"
            },
            {
                texto: "¿Qué acción es 'Higiene Digital' sostenible?",
                opciones: [
                    "Generar 50 imágenes de perfil para elegir una.",
                    "Evitar generar contenido 'basura' que nadie va a ver solo por curiosidad.",
                    "Probar todas las IAs nuevas."
                ],
                correcta: 1,
                feedback: "La generación masiva satura la red y los servidores inútilmente.",
                cta: "Principio: Si no aporta valor real, no le des a 'Generar'.",
                fuente: "Cal Newport"
            },
            {
                texto: "¿Por qué el impacto de la IA es geográficamente desigual?",
                opciones: [
                    "Porque los centros de datos consumen agua local (sequía) pero los beneficios van a otra parte.",
                    "Porque internet es más lento en algunos sitios.",
                    "No hay desigualdad, la nube es global."
                ],
                correcta: 0,
                feedback: "Existe una justicia ambiental. Tu prompt puede estar gastando agua en una zona árida.",
                cta: "Infórmate sobre dónde están los servidores de tu región.",
                fuente: "Atlas of AI"
            }
        ]
    },
    {
        nivel: 6,
        titulo: "Ciberseguridad y Datos",
        preguntas: [
            {
                texto: "Al revisar un ensayo personal con IA, ¿qué es seguro incluir?",
                opciones: [
                    "Tu nombre, colegio y dirección.",
                    "El texto anonimizado, sin nombres reales ni datos identificables (PII).",
                    "Tu teléfono por si acaso."
                ],
                correcta: 1,
                feedback: "Una vez envías PII a una IA pública, pierdes el control sobre esos datos.",
                cta: "Haz un 'Sanity Check': borra nombres propios antes de pegar el texto.",
                fuente: "OpenAI Privacy"
            },
            {
                texto: "¿Qué es un ataque de 'Prompt Injection'?",
                opciones: [
                    "Un hacking ético autorizado.",
                    "Usar comandos de texto para engañar a la IA y saltarse sus controles de seguridad.",
                    "Una función oculta para usuarios premium."
                ],
                correcta: 1,
                feedback: "Romper la seguridad del modelo te expone a contenido peligroso o no moderado.",
                cta: "No copies y pegues 'prompts mágicos' extraños de internet.",
                fuente: "OWASP Top 10 LLM"
            },
            {
                texto: "Recibes un correo de phishing perfecto, sin faltas de ortografía. ¿Por qué?",
                opciones: [
                    "Los estafadores fueron a la escuela.",
                    "Usan LLMs para redactar textos perfectos y personalizados masivamente.",
                    "Es un correo real."
                ],
                correcta: 1,
                feedback: "La IA ha eliminado la barrera del idioma para los ciberdelincuentes internacionales.",
                cta: "Ante solicitudes urgentes de dinero/datos, verifica por otro canal (llamada).",
                fuente: "FBI Cyber Division"
            },
            {
                texto: "Te llama un familiar llorando pidiendo dinero. Su voz suena real. ¿Qué puede ser?",
                opciones: [
                    "Un imitador profesional.",
                    "Clonación de voz (Vishing) usando IA con solo unos segundos de audio de redes sociales.",
                    "Es real, no hay duda."
                ],
                correcta: 1,
                feedback: "Las IAs pueden clonar voces con muestras muy cortas sacadas de TikTok/Instagram.",
                cta: "Acuerda una 'Palabra Clave' secreta con tu familia para emergencias hoy mismo.",
                fuente: "FTC Alerts"
            },
            {
                texto: "Por defecto, ¿qué hace la versión gratuita de ChatGPT con tus datos?",
                opciones: [
                    "Los borra inmediatamente.",
                    "Los usa para entrenar y mejorar el modelo (tú eres el producto).",
                    "Los encripta en una bóveda privada."
                ],
                correcta: 1,
                feedback: "Si no pagas y no configuras la privacidad, tus chats son material de estudio.",
                cta: "Ve a Configuración -> Controles de Datos y desactiva el entrenamiento.",
                fuente: "Términos OpenAI"
            },
            {
                texto: "¿Por qué empresas como Samsung prohibieron pegar código interno en IAs públicas?",
                opciones: [
                    "Para que los empleados no se vuelvan vagos.",
                    "Porque hubo fugas de datos: secretos industriales pasaron a ser parte del conocimiento de la IA.",
                    "Por derechos de autor."
                ],
                correcta: 1,
                feedback: "Lo que le cuentas a la IA pública puede salir en la respuesta a otro usuario.",
                cta: "Trata el chat de la IA como un muro público de Twitter.",
                fuente: "Bloomberg"
            },
            {
                texto: "¿Qué es el riesgo de 'Shadow IT' con herramientas de IA?",
                opciones: [
                    "Usar herramientas en modo oscuro.",
                    "Registrarse en webs de IA desconocidas ('Wrappers') que pueden robar tus credenciales.",
                    "Que la IA funcione lenta."
                ],
                correcta: 1,
                feedback: "Muchas webs 'gratis' de IA son trampas para recolectar correos y contraseñas.",
                cta: "Usa solo herramientas oficiales. Si dudas, usa un correo 'basura'.",
                fuente: "Gartner Security"
            },
            {
                texto: "¿Cómo usan los atacantes la IA para crear virus (Malware)?",
                opciones: [
                    "Para que pesen menos.",
                    "Crean 'Malware Polimórfico' que cambia su código constantemente para evadir antivirus.",
                    "Para que el virus sea multiplataforma."
                ],
                correcta: 1,
                feedback: "La IA permite a los virus mutar rápido, haciendo inútiles las defensas antiguas.",
                cta: "Mantén tu antivirus actualizado en modo 'automático'.",
                fuente: "Microsoft Security"
            },
            {
                texto: "¿Qué es el 'Data Poisoning' (Envenenamiento)?",
                opciones: [
                    "Un virus en la base de datos.",
                    "Inundar internet de datos falsos para que la IA aprenda mentiras y las propague.",
                    "Borrar datos de la IA."
                ],
                correcta: 1,
                feedback: "Si manipulas la fuente de alimentación de la IA, manipulas su resultado.",
                cta: "Si la IA te da una opinión política sesgada, podría estar 'intoxicada'. Verifica.",
                fuente: "MITRE ATLAS"
            },
            {
                texto: "Borraste el chat con la IA. ¿Desapareció el dato para siempre?",
                opciones: [
                    "Sí, es instantáneo.",
                    "Probablemente no. Queda en backups y logs de servidores por tiempo legal.",
                    "Sí, por ley."
                ],
                correcta: 1,
                feedback: "En la nube, 'borrar' suele significar 'ocultar'. El rastro forense permanece.",
                cta: "No escribas nada que te avergonzaría ver en la portada de un diario.",
                fuente: "GDPR Challenges"
            }
        ]
    }
];
