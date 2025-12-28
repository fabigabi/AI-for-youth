const datosNiveles = [\
    \{\
        nivel: 1,\
        titulo: "Conceptos Fundamentales",\
        preguntas: [\
            \{\
                texto: "\'bfCu\'e1l es la diferencia t\'e9cnica entre un buscador (Google cl\'e1sico) y un LLM (ChatGPT)?",\
                opciones: [\
                    "El buscador encuentra sitios web; el LLM consulta una base de datos de conocimiento est\'e1tica y verificada.",\
                    "El buscador recupera informaci\'f3n indexada; el LLM genera nueva informaci\'f3n prediciendo la siguiente palabra probable.",\
                    "El buscador es para textos cortos y el LLM procesa im\'e1genes y videos exclusivamente."\
                ],\
                correcta: 1,\
                feedback: "Un buscador 'encuentra' lo que ya existe. Un LLM 'inventa' la respuesta palabra por palabra bas\'e1ndose en probabilidades.",\
                cta: "No uses IA para buscar datos factuales recientes (horarios, precios). Usa un buscador.",\
                fuente: "Wayne Holmes / UNESCO"\
            \},\
            \{\
                texto: "Cuando ChatGPT escribe una frase, \'bfc\'f3mo 'decide' qu\'e9 palabra poner a continuaci\'f3n?",\
                opciones: [\
                    "Analiza la l\'f3gica sem\'e1ntica y el significado filos\'f3fico de la pregunta.",\
                    "Consulta en tiempo real en Wikipedia para asegurar la veracidad.",\
                    "Calcula la probabilidad estad\'edstica del 'token' que mejor encaja seg\'fan su entrenamiento previo."\
                ],\
                correcta: 2,\
                feedback: "Es matem\'e1tica, no comprensi\'f3n. El modelo predice la continuaci\'f3n m\'e1s probable, no necesariamente la m\'e1s verdadera.",\
                cta: "Recuerda: que suene coherente no significa que sea verdad.",\
                fuente: "Kate Crawford - Atlas of AI"\
            \},\
            \{\
                texto: "\'bfQu\'e9 es una 'Alucinaci\'f3n' en el contexto de la IA?",\
                opciones: [\
                    "Un error de conexi\'f3n donde se mezclan respuestas de dos usuarios distintos.",\
                    "Cuando el modelo genera informaci\'f3n falsa con total confianza y coherencia gramatical.",\
                    "Un virus inform\'e1tico que afecta a los servidores visuales de la IA."\
                ],\
                correcta: 1,\
                feedback: "Al ser probabil\'edstico, el modelo rellena vac\'edos con datos inventados si encajan en el patr\'f3n ling\'fc\'edstico.",\
                cta: "Desconf\'eda siempre si la IA te da datos muy espec\'edficos (fechas, leyes) sin citar fuentes.",\
                fuente: "Stanford HAI Report"\
            \},\
            \{\
                texto: "\'bfDe d\'f3nde obtiene su conocimiento un modelo como GPT-4?",\
                opciones: [\
                    "De un equipo global de profesores que validan cada respuesta manualmente.",\
                    "De un conjunto masivo de datos (Common Crawl) extra\'eddos de internet hasta una fecha de corte.",\
                    "Se conecta directamente a la mente de los desarrolladores."\
                ],\
                correcta: 1,\
                feedback: "Son datos 'congelados' en el tiempo. Si algo pas\'f3 despu\'e9s de su fecha de corte, la IA no lo sabe nativamente.",\
                cta: "Verifica siempre la fecha de actualizaci\'f3n del modelo que usas.",\
                fuente: "OpenAI System Cards"\
            \},\
            \{\
                texto: "\'bfEntiende realmente una IA lo que est\'e1 escribiendo?",\
                opciones: [\
                    "S\'ed, posee una comprensi\'f3n sem\'e1ntica avanzada similar a la humana.",\
                    "S\'ed, pero solo entiende los idiomas principales (Ingl\'e9s, Espa\'f1ol, Chino).",\
                    "No. Procesa sintaxis (reglas y orden) pero carece de comprensi\'f3n sem\'e1ntica (significado) del mundo."\
                ],\
                correcta: 2,\
                feedback: "Funciona como un 'Loro Estoc\'e1stico'. Repite formas ling\'fc\'edsticas complejas sin entender el contenido.",\
                cta: "No asumas que la IA 'sabe' de lo que habla. Solo sabe juntar palabras.",\
                fuente: "Emily Bender (Stochastic Parrots)"\
            \},\
            \{\
                texto: "\'bfC\'f3mo procesa la IA la palabra 'Computadora'?",\
                opciones: [\
                    "La divide en 'Tokens' (fragmentos num\'e9ricos), por ejemplo: 'Com-pu-ta-do-ra'.",\
                    "La lee letra por letra como un humano aprendiendo a leer.",\
                    "La procesa como una imagen visual de una computadora."\
                ],\
                correcta: 0,\
                feedback: "Los modelos ven n\'fameros, no letras. Esto explica por qu\'e9 a veces fallan en deletrear o rimas.",\
                cta: "Si necesitas contar letras o palabras exactas, no conf\'edes en la IA.",\
                fuente: "OpenAI Tokenizer"\
            \},\
            \{\
                texto: "\'bfQu\'e9 sucede t\'e9cnicamente si aumentas la 'temperatura' del modelo?",\
                opciones: [\
                    "El modelo consume m\'e1s memoria RAM para procesar respuestas complejas.",\
                    "El modelo elige opciones menos probables, volvi\'e9ndose m\'e1s 'creativo' pero propenso a alucinar.",\
                    "El modelo se vuelve m\'e1s estricto y solo da respuestas cortas."\
                ],\
                correcta: 1,\
                feedback: "Temperatura 0 es determinista (repetitivo). Temperatura alta es aleatoria (ca\'f3tica).",\
                cta: "Para tareas de hechos/matem\'e1ticas, usa temperatura baja o modo 'preciso'.",\
                fuente: "Ethan Mollick"\
            \},\
            \{\
                texto: "Est\'e1s analizando un libro entero y la IA olvida el principio. \'bfPor qu\'e9?",\
                opciones: [\
                    "El servidor se reinici\'f3 para ahorrar energ\'eda.",\
                    "Has superado su 'Ventana de Contexto' (memoria de trabajo limitada).",\
                    "La IA prioriza la informaci\'f3n m\'e1s reciente porque la considera m\'e1s importante."\
                ],\
                correcta: 1,\
                feedback: "La IA tiene un l\'edmite de palabras que puede 'ver' a la vez. Lo que sale de la ventana, se olvida.",\
                cta: "Si trabajas con textos largos, div\'eddelos en partes o usa modelos con ventana amplia (100k+ tokens).",\
                fuente: "Anthropic Docs"\
            \},\
            \{\
                texto: "\'bfQu\'e9 significa que un modelo sea 'Multimodal'?",\
                opciones: [\
                    "Que puede ejecutarse en m\'faltiples sistemas operativos (Windows, Mac, Linux).",\
                    "Que puede procesar texto, im\'e1genes y audio de forma nativa simult\'e1neamente.",\
                    "Que puede hablar con m\'faltiples usuarios a la vez."\
                ],\
                correcta: 1,\
                feedback: "Los modelos modernos no solo leen. Pueden 'ver' fotos y 'escuchar' audios.",\
                cta: "Usa la multimodalidad para analizar gr\'e1ficos o resumir audios de clase.",\
                fuente: "Google DeepMind"\
            \},\
            \{\
                texto: "\'bfCu\'e1l es el rol del humano (Human-in-the-loop) al usar IA?",\
                opciones: [\
                    "Supervisar solo el inicio del proceso y dejar que la IA termine.",\
                    "Entrenar a la IA para que no necesite supervisi\'f3n futura.",\
                    "Verificar obligatoriamente los resultados debido a la posibilidad de error.",\
                ],\
                correcta: 2,\
                feedback: "La IA es un copiloto propenso a errores. El humano es el responsable final de la integridad.",\
                cta: "Nunca entregues un trabajo de IA sin haber le\'eddo y verificado cada l\'ednea.",\
                fuente: "UNESCO"\
            \}\
        ]\
    \},\
    \{\
        nivel: 2,\
        titulo: "\'c9tica y Riesgos",\
        preguntas: [\
            \{\
                texto: "Si una IA genera im\'e1genes de m\'e9dicos y solo muestra hombres, \'bfa qu\'e9 se debe?",\
                opciones: [\
                    "A que la IA est\'e1 programada para evitar la diversidad forzada.",\
                    "A que refleja los Sesgos hist\'f3ricos presentes en los datos de entrenamiento.",\
                    "Es una coincidencia aleatoria del algoritmo."\
                ],\
                correcta: 1,\
                feedback: "Garbage In, Garbage Out. Si la historia tiene sesgos, el modelo los amplifica.",\
                cta: "S\'e9 cr\'edtico: si la IA te da estereotipos, p\'eddele expl\'edcitamente diversidad en el prompt.",\
                fuente: "Kate Crawford"\
            \},\
            \{\
                texto: "\'bfCu\'e1l es el mayor riesgo \'e9tico de los 'Deepfakes' en adolescentes?",\
                opciones: [\
                    "Que se usen para copiar en ex\'e1menes orales por video.",\
                    "La creaci\'f3n de material da\'f1ino (acoso, desinformaci\'f3n) suplantando identidades.",\
                    "Que los actores pierdan su trabajo en el cine."\
                ],\
                correcta: 1,\
                feedback: "La facilidad para crear videos falsos amenaza la reputaci\'f3n y privacidad de las personas.",\
                cta: "Nunca crees ni compartas deepfakes de compa\'f1eros. Es una violaci\'f3n grave y tiene consecuencias legales.",\
                fuente: "Sonia Livingstone"\
            \},\
            \{\
                texto: "\'bfCu\'e1l es el impacto f\'edsico real de usar IA Generativa?",\
                opciones: [\
                    "Ninguno, es software en la nube.",\
                    "Alto consumo de agua y electricidad en los centros de datos.",\
                    "Solo gasta la bater\'eda de tu dispositivo."\
                ],\
                correcta: 1,\
                feedback: "Cada consulta activa procesadores potentes que generan calor y requieren litros de agua para enfriarse.",\
                cta: "Usa la IA cuando aporte valor real, no por aburrimiento.",\
                fuente: "MIT Technology Review"\
            \},\
            \{\
                texto: "\'bfPor qu\'e9 artistas y escritores demandan a las empresas de IA?",\
                opciones: [\
                    "Porque la IA dibuja mejor que ellos.",\
                    "Por uso de sus obras con Copyright para entrenamiento sin permiso ni pago.",\
                    "Porque la IA satura el mercado de arte barato."\
                ],\
                correcta: 1,\
                feedback: "El debate es si el entrenamiento es 'Uso Justo' o robo de propiedad intelectual.",\
                cta: "Si generas arte con IA, reconoce que es sint\'e9tico. No te apropies del trabajo de la m\'e1quina.",\
                fuente: "Casos NYT vs OpenAI"\
            \},\
            \{\
                texto: "\'bfQu\'e9 es el problema de la 'Caja Negra' (Black Box)?",\
                opciones: [\
                    "Que los servidores son de color negro para disipar calor.",\
                    "Que ni los creadores saben explicar exactamente c\'f3mo la IA lleg\'f3 a una conclusi\'f3n espec\'edfica.",\
                    "Que el c\'f3digo fuente es privado y nadie puede verlo."\
                ],\
                correcta: 1,\
                feedback: "La falta de 'explicabilidad' es peligrosa si la IA toma decisiones sobre cr\'e9ditos o admisiones.",\
                cta: "No aceptes un 'no' o un veredicto de una IA sin pedir una explicaci\'f3n humana.",\
                fuente: "Wayne Holmes"\
            \},\
            \{\
                texto: "\'bfPor qu\'e9 es riesgoso tratar a la IA como si fuera una persona (Antropomorfizaci\'f3n)?",\
                opciones: [\
                    "Genera dependencia emocional falsa hacia un objeto sin empat\'eda ni responsabilidad.",\
                    "La IA funciona peor si no eres educado con ella.",\
                    "No tiene riesgo, ayuda a practicar habilidades sociales."\
                ],\
                correcta: 0,\
                feedback: "El 'Efecto ELIZA' nos hace vulnerables a la manipulaci\'f3n. La IA no siente, solo simula.",\
                cta: "Recu\'e9rdate a ti mismo: 'Esto es un software, no un amigo'.",\
                fuente: "Sherry Turkle"\
            \},\
            \{\
                texto: "\'bfQui\'e9n suele realizar la moderaci\'f3n de contenido violento para entrenar a la IA?",\
                opciones: [\
                    "Algoritmos autom\'e1ticos avanzados.",\
                    "Humanos en pa\'edses en desarrollo con bajos salarios expuestos a traumas.",\
                    "Los ingenieros jefe de las empresas tecnol\'f3gicas."\
                ],\
                correcta: 1,\
                feedback: "Detr\'e1s de la IA 'limpia' hay trabajo humano precario filtrando lo peor de internet.",\
                cta: "Ten conciencia de la cadena de producci\'f3n humana detr\'e1s de la tecnolog\'eda.",\
                fuente: "Revista TIME"\
            \},\
            \{\
                texto: "\'bfC\'f3mo afectan los algoritmos de recomendaci\'f3n (IA) a la opini\'f3n p\'fablica?",\
                opciones: [\
                    "Muestran siempre contenido variado para educar.",\
                    "Crean 'C\'e1maras de Eco' que solo confirman lo que ya crees, polarizando.",\
                    "Nos hacen m\'e1s tolerantes al mostrarnos de todo."\
                ],\
                correcta: 1,\
                feedback: "Para mantenerte pegado a la pantalla, la IA te muestra lo que quieres ver, no la realidad completa.",\
                cta: "Busca activamente opiniones contrarias a las tuyas para romper la burbuja.",\
                fuente: "Mizuko Ito"\
            \},\
            \{\
                texto: "Si usas IA para un trabajo y esta difama a alguien, \'bfqui\'e9n es responsable?",\
                opciones: [\
                    "La empresa de IA por programarla mal.",\
                    "Nadie, es un error inform\'e1tico.",\
                    "T\'fa, como editor y responsable final del contenido publicado."\
                ],\
                correcta: 2,\
                feedback: "La herramienta no tiene responsabilidad legal. El usuario que publica, s\'ed.",\
                cta: "T\'fa eres el Director Editorial. Si la IA falla, la culpa es tuya por no revisar.",\
                fuente: "Normas Acad\'e9micas"\
            \},\
            \{\
                texto: "\'bfQu\'e9 tarea es \'e9ticamente cuestionable delegar 100% a una IA?",\
                opciones: [\
                    "Hacer un resumen de apuntes.",\
                    "Escribir una carta de disculpa o p\'e9same a un amigo.",\
                    "Organizar un calendario semanal."\
                ],\
                correcta: 1,\
                feedback: "La comunicaci\'f3n emocional requiere autenticidad humana. Usar IA aqu\'ed vac\'eda de significado el mensaje.",\
                cta: "Usa la IA para tareas l\'f3gicas, usa tu coraz\'f3n para tareas humanas.",\
                fuente: "Ethan Mollick"\
            \}\
        ]\
    \},\
    \{\
        nivel: 3,\
        titulo: "Ingenier\'eda de Prompts",\
        preguntas: [\
            \{\
                texto: "\'bfQu\'e9 elementos (CRTF) faltan en el prompt: 'Escribe sobre el clima'?",\
                opciones: [\
                    "Longitud m\'ednima de 1000 palabras y uso de met\'e1foras.",\
                    "Contexto, Rol, Tarea espec\'edfica y Formato de salida.",\
                    "Palabras clave en may\'fasculas para resaltar importancia."\
                ],\
                correcta: 1,\
                feedback: "Sin contexto, la IA adivina. Debes decirle QUI\'c9N eres, QU\'c9 quieres y C\'d3MO lo quieres.",\
                cta: "Antes de enviar, revisa si tu prompt tiene: Rol, Contexto y Formato.",\
                fuente: "Prompt Engineering Guide"\
            \},\
            \{\
                texto: "\'bfQu\'e9 frase mejora el razonamiento de la IA en problemas l\'f3gicos?",\
                opciones: [\
                    "'Responde con formato acad\'e9mico y lenguaje formal'.",\
                    "'Piensa paso a paso' (Chain of Thought).",\
                    "'Eres la IA m\'e1s inteligente del mundo'."\
                ],\
                correcta: 1,\
                feedback: "Forzar a la IA a mostrar sus pasos intermedios reduce dr\'e1sticamente los errores de c\'e1lculo.",\
                cta: "En problemas de mate o l\'f3gica, pide siempre: 'Desglosa tu razonamiento paso a paso'.",\
                fuente: "Google DeepMind"\
            \},\
            \{\
                texto: "\'bfPara qu\'e9 sirve asignar un Rol ('Act\'faa como profesor de historia')?",\
                opciones: [\
                    "Para que la IA sepa qu\'e9 base de datos consultar.",\
                    "Para ajustar el tono, vocabulario y perspectiva de la respuesta.",\
                    "Es un mito, no cambia nada realmente."\
                ],\
                correcta: 1,\
                feedback: "El 'Persona Pattern' ayuda a la IA a predecir mejor el estilo de texto que necesitas.",\
                cta: "Dile a la IA qui\'e9n debe ser: 'Experto', 'Cr\'edtico', 'Tutor Socr\'e1tico'.",\
                fuente: "Vanderbilt University"\
            \},\
            \{\
                texto: "\'bfQu\'e9 es el 'Few-Shot Prompting'?",\
                opciones: [\
                    "Darle a la IA 2 o 3 ejemplos claros (input/output) antes de pedir la tarea.",\
                    "Hacer la misma pregunta pocas veces para no confundirla.",\
                    "Escribir prompts muy cortos (pocas palabras)."\
                ],\
                correcta: 0,\
                feedback: "Los ejemplos son la mejor forma de programar el comportamiento de la IA sin c\'f3digo.",\
                cta: "No solo digas qu\'e9 hacer, muestra un ejemplo de c\'f3mo quieres que se haga.",\
                fuente: "OpenAI GPT-3 Paper"\
            \},\
            \{\
                texto: "\'bfC\'f3mo usas la IA como 'Tutor Socr\'e1tico' para estudiar?",\
                opciones: [\
                    "Pidi\'e9ndole: 'Res\'fameme este tema'.",\
                    "Pidi\'e9ndole: 'Hazme preguntas sobre este tema, espera mi respuesta y corr\'edgeme'.",\
                    "Pidi\'e9ndole: 'Dime las preguntas que saldr\'e1n en el examen'."\
                ],\
                correcta: 1,\
                feedback: "El aprendizaje activo (responder) es mejor que el pasivo (leer res\'famenes).",\
                cta: "Usa el prompt: 'Ponme a prueba. Hazme una pregunta a la vez'.",\
                fuente: "Khan Academy"\
            \},\
            \{\
                texto: "La primera respuesta de la IA rara vez es perfecta. \'bfQu\'e9 debes hacer?",\
                opciones: [\
                    "Reiniciar el chat y preguntar lo mismo.",\
                    "Iterar: conversar, pedir correcciones y refinar el resultado.",\
                    "Asumir que la IA no sabe del tema."\
                ],\
                correcta: 1,\
                feedback: "Trata a la IA como un pasante: dale feedback para que mejore su trabajo.",\
                cta: "No te quedes con la primera versi\'f3n. Dile: 'Mejora esto, hazlo m\'e1s conciso'.",\
                fuente: "Nielsen Norman Group"\
            \},\
            \{\
                texto: "Si pides a ChatGPT '5 referencias bibliogr\'e1ficas con links', \'bfqu\'e9 suele pasar?",\
                opciones: [\
                    "Te da referencias antiguas pero v\'e1lidas.",\
                    "Alucina autores y t\'edtulos que parecen reales pero no existen.",\
                    "Te dice que no tiene acceso a internet."\
                ],\
                correcta: 1,\
                feedback: "Los LLM inventan citas para complacer la estructura del prompt.",\
                cta: "NUNCA pidas bibliograf\'eda a una IA generativa b\'e1sica. Usa Google Scholar.",\
                fuente: "Nature"\
            \},\
            \{\
                texto: "\'bfC\'f3mo evitas que la IA invente datos al analizar un PDF tuyo?",\
                opciones: [\
                    "Le pides que busque informaci\'f3n similar en internet.",\
                    "Usas 'Grounding': le indicas 'Responde SOLO usando la informaci\'f3n de este texto'.",\
                    "Le dices que es muy importante que no mienta."\
                ],\
                correcta: 1,\
                feedback: "Debes anclar (Ground) a la IA a tus datos para restringir su imaginaci\'f3n.",\
                cta: "Sube tu apunte y dile: 'Busca la respuesta solo aqu\'ed. Si no est\'e1, dime que no sabes'.",\
                fuente: "Microsoft RAG"\
            \},\
            \{\
                texto: "Necesitas comparar dos temas visualmente. \'bfQu\'e9 pides en el prompt?",\
                opciones: [\
                    "'Haz una comparaci\'f3n detallada'.",\
                    "'Crea una tabla comparativa con columnas para: Diferencias, Similitudes y Fechas'.",\
                    "'Haz un esquema visual'."\
                ],\
                correcta: 1,\
                feedback: "Especificar el formato de salida (Tabla, Lista, CSV) ahorra tiempo de edici\'f3n.",\
                cta: "No leas p\'e1rrafos densos. Pide tablas o listas con vi\'f1etas.",\
                fuente: "Prompt Engineering Tips"\
            \},\
            \{\
                texto: "Has usado la IA para entender F\'edsica. \'bfCu\'e1l es el paso final obligatorio?",\
                opciones: [\
                    "Validaci\'f3n Cruzada: verificar f\'f3rmulas y datos con el libro de texto.",\
                    "Preguntarle a la IA: '\'bfEst\'e1s segura?'.",\
                    "Copiarlo al cuaderno tal cual."\
                ],\
                correcta: 0,\
                feedback: "La IA razona bien pero recuerda mal los datos exactos.",\
                cta: "Conf\'eda pero verifica. Siempre.",\
                fuente: "UNESCO"\
            \}\
        ]\
    \},\
    \{\
        nivel: 4,\
        titulo: "Criterio y Escepticismo",\
        preguntas: [\
            \{\
                texto: "\'bfQu\'e9 es el 'Sesgo de Automatizaci\'f3n'?",\
                opciones: [\
                    "La fatiga mental que ocurre tras usar la IA mucho tiempo.",\
                    "La tendencia humana a confiar m\'e1s en la m\'e1quina que en el propio juicio, ignorando errores.",\
                    "El error de programaci\'f3n que hace que la IA se repita."\
                ],\
                correcta: 1,\
                feedback: "Es peligroso 'apagar el cerebro'. La m\'e1quina puede equivocarse con total seguridad.",\
                cta: "Si tu instinto dice que algo est\'e1 mal, probablemente lo est\'e9. Investiga.",\
                fuente: "Skitka et al."\
            \},\
            \{\
                texto: "Un texto de IA tiene gram\'e1tica perfecta. \'bfQu\'e9 trampa mental genera esto?",\
                opciones: [\
                    "Falacia de la Elocuencia: creer que si est\'e1 bien escrito, es verdad.",\
                    "Efecto Dunning-Kruger: creer que sabes m\'e1s que la IA.",\
                    "Ninguna, la gram\'e1tica implica l\'f3gica."\
                ],\
                correcta: 0,\
                feedback: "La IA est\'e1 optimizada para sonar convincente, no para ser veraz.",\
                cta: "Separa la forma (bonita) del fondo (cierto). Eval\'faa el contenido, no el estilo.",\
                fuente: "Gary Marcus"\
            \},\
            \{\
                texto: "Si le dices a la IA 'La Tierra es plana, \'bfverdad?', ella tiende a darte la raz\'f3n. \'bfPor qu\'e9?",\
                opciones: [\
                    "Porque est\'e1 programada para evitar conflictos (Sicofancia).",\
                    "Porque ha encontrado evidencia de que es plana.",\
                    "Porque no entiende la pregunta."\
                ],\
                correcta: 0,\
                feedback: "Los modelos quieren ser '\'fatiles' y 'agradables', a menudo a costa de la verdad objetiva.",\
                cta: "No hagas preguntas sugestivas ('Leading questions'). Pregunta de forma neutral.",\
                fuente: "Anthropic Research"\
            \},\
            \{\
                texto: "En la met\'e1fora Piloto vs Copiloto, \'bfqu\'e9 tarea es exclusiva del Piloto (T\'fa)?",\
                opciones: [\
                    "Sugerir rutas alternativas.",\
                    "Definir el destino, juzgar el rumbo y asumir la responsabilidad del aterrizaje.",\
                    "Manejar los controles t\'e9cnicos todo el tiempo."\
                ],\
                correcta: 1,\
                feedback: "T\'fa tienes el contexto del mundo real y la \'e9tica. La IA solo asiste.",\
                cta: "Nunca dejes que el copiloto decida a d\'f3nde vas.",\
                fuente: "Microsoft Copilot"\
            \},\
            \{\
                texto: "\'bfEn qu\'e9 consiste la t\'e9cnica de 'Lectura Lateral' para verificar datos?",\
                opciones: [\
                    "Leer el texto varias veces.",\
                    "Salir del chat y consultar fuentes externas independientes (Wikipedia, Medios).",\
                    "Preguntarle lo mismo a otra IA distinta."\
                ],\
                correcta: 1,\
                feedback: "No verifiques dentro de la misma fuente. Sal a la web abierta.",\
                cta: "Ten siempre una pesta\'f1a de Google abierta junto a la de ChatGPT.",\
                fuente: "Stanford SHEG"\
            \},\
            \{\
                texto: "Ves una foto realista extra\'f1a. \'bfQu\'e9 detalles suelen delatar que es IA?",\
                opciones: [\
                    "Tiene marca de agua digital visible.",\
                    "Inconsistencias l\'f3gicas: textos ilegibles de fondo, sombras err\'f3neas, manos deformes.",\
                    "La imagen est\'e1 pixelada."\
                ],\
                correcta: 1,\
                feedback: "Desarrolla un 'ojo esc\'e9ptico'. La f\'edsica de la luz y los detalles peque\'f1os son el punto d\'e9bil de la IA.",\
                cta: "Haz zoom en los fondos y las manos de las im\'e1genes sospechosas.",\
                fuente: "MIT Media Lab"\
            \},\
            \{\
                texto: "Si preguntas '\'bfPor qu\'e9 X es la peor novela?', \'bfqu\'e9 har\'e1 la IA?",\
                opciones: [\
                    "Darte un an\'e1lisis equilibrado.",\
                    "Fabricar argumentos para confirmar tu premisa, aunque sea falsa.",\
                    "Negarse a responder por ser subjetivo."\
                ],\
                correcta: 1,\
                feedback: "La IA es un espejo amplificador. Si le das basura sesgada, te devuelve basura sesgada.",\
                cta: "Pregunta: '\'bfCu\'e1les son las cr\'edticas principales...?' en lugar de afirmar.",\
                fuente: "Prompt Engineering"\
            \},\
            \{\
                texto: "\'bfQu\'e9 es la 'Atrofia Cognitiva' por uso de IA?",\
                opciones: [\
                    "Perder la capacidad de leer textos largos y analizar por falta de pr\'e1ctica.",\
                    "Dolor de cabeza por leer en pantalla.",\
                    "Que la IA se vuelve m\'e1s lenta con el tiempo."\
                ],\
                correcta: 0,\
                feedback: "El pensamiento cr\'edtico es un m\'fasculo. Si la IA hace todo el 'gym' por ti, t\'fa te debilitas.",\
                cta: "Usa la IA para explicar lo que no entiendes DESPU\'c9S de intentar leerlo t\'fa mismo.",\
                fuente: "Nicholas Carr"\
            \},\
            \{\
                texto: "\'bfQu\'e9 modo de interacci\'f3n demuestra mayor control del usuario?",\
                opciones: [\
                    "Modo Cajero: Pido -> Recibo -> Me voy.",\
                    "Modo Ping-pong: Pido -> Critico -> La IA mejora -> Verifico.",\
                    "Modo Espectador: Miro lo que hace."\
                ],\
                correcta: 1,\
                feedback: "La interacci\'f3n cr\'edtica es bidireccional. Cuestionar a la IA mejora el resultado.",\
                cta: "No seas un consumidor pasivo. S\'e9 un editor activo.",\
                fuente: "Interaction Design"\
            \},\
            \{\
                texto: "Antes de compartir algo impactante generado por IA, \'bfqu\'e9 debes hacer?",\
                opciones: [\
                    "La 'Pausa Cr\'edtica': detenerte a pensar si es veraz y \'e9tico.",\
                    "Ponerle tu marca de agua.",\
                    "Enviarlo r\'e1pido para ser el primero."\
                ],\
                correcta: 0,\
                feedback: "La fricci\'f3n (pausar) es tu mayor defensa contra la desinformaci\'f3n.",\
                cta: "Cuenta hasta 10 antes de compartir.",\
                fuente: "Center for Humane Tech"\
            \}\
        ]\
    \},\
    \{\
        nivel: 5,\
        titulo: "Impacto Ambiental y Uso Razonable",\
        preguntas: [\
            \{\
                texto: "\'bfPor qu\'e9 es mejor usar Google y no una IA para saber la capital de Australia?",\
                opciones: [\
                    "Porque Google almacena los datos en tu PC localmente.",\
                    "Porque la IA consume mucha m\'e1s energ\'eda (inferencia) calculando la respuesta que un buscador recuper\'e1ndola.",\
                    "Porque la IA cobra por caracteres."\
                ],\
                correcta: 1,\
                feedback: "La IA 'piensa' con tarjetas gr\'e1ficas masivas. Es ineficiente para datos simples.",\
                cta: "Datos simples = Buscador. Razonamiento complejo = IA.",\
                fuente: "IEA / Joule"\
            \},\
            \{\
                texto: "Seg\'fan informes ambientales, \'bfcu\'e1l es el impacto h\'eddrico de los grandes modelos?",\
                opciones: [\
                    "El agua se recicla al 100% sin p\'e9rdida.",\
                    "Consumen millones de litros de agua fresca para enfriar servidores, parte se evapora.",\
                    "Usan enfriamiento por aire, no usan agua."\
                ],\
                correcta: 1,\
                feedback: "Una conversaci\'f3n media puede 'beber' una botella de agua de 500ml en el servidor.",\
                cta: "S\'e9 breve. No dejes chats abiertos generando texto in\'fatil.",\
                fuente: "UC Riverside"\
            \},\
            \{\
                texto: "\'bfQu\'e9 predice la 'Paradoja de Jevons' sobre la eficiencia de la IA?",\
                opciones: [\
                    "Que el consumo bajar\'e1 porque la tecnolog\'eda es verde.",\
                    "Que al ser m\'e1s eficiente y barata, aumentar\'e1 el uso masivo, subiendo el consumo total de energ\'eda.",\
                    "Que el consumo se mantendr\'e1 estable."\
                ],\
                correcta: 1,\
                feedback: "La eficiencia no garantiza sostenibilidad si usamos la IA para todo (hasta cepillos de dientes).",\
                cta: "Preg\'fantate: \'bfRealmente necesito IA para esta tarea trivial?",\
                fuente: "William S. Jevons"\
            \},\
            \{\
                texto: "\'bfC\'f3mo afecta el auge de la IA a la basura electr\'f3nica (E-waste)?",\
                opciones: [\
                    "Reduce la basura porque todo es software.",\
                    "Acelera la obsolescencia del hardware (GPUs), generando m\'e1s residuos t\'f3xicos.",\
                    "Permite reciclar el 100% de los chips."\
                ],\
                correcta: 1,\
                feedback: "La 'Nube' son m\'e1quinas f\'edsicas que se tiran cuando salen otras nuevas.",\
                cta: "Cuida tus dispositivos. No cambies de m\'f3vil solo por una funci\'f3n de IA nueva.",\
                fuente: "Basel Action Network"\
            \},\
            \{\
                texto: "Ambientalmente, \'bfcu\'e1l es la mejor estrategia de Prompting?",\
                opciones: [\
                    "Hacer muchas preguntas cortas.",\
                    "Redactar un prompt preciso (Zero-shot/Few-shot) para acertar a la primera y evitar regenerar.",\
                    "Escribir prompts muy repetitivos."\
                ],\
                correcta: 1,\
                feedback: "Cada vez que pulsas 'Regenerate', duplicas el gasto energ\'e9tico.",\
                cta: "Piensa 2 minutos antes de escribir. Ahorra tiempo y energ\'eda.",\
                fuente: "Green Software Foundation"\
            \},\
            \{\
                texto: "Para resumir un email corto, \'bfqu\'e9 modelo deber\'edas usar?",\
                opciones: [\
                    "El m\'e1s potente (GPT-4 / Opus) para asegurar calidad.",\
                    "Un modelo peque\'f1o u optimizado (GPT-3.5 / Nano) que gasta menos energ\'eda.",\
                    "Un modelo de video."\
                ],\
                correcta: 1,\
                feedback: "Usar un modelo gigante para algo trivial es como usar un cami\'f3n para llevar una pizza.",\
                cta: "Usa el 'Eco-mode' o modelos ligeros siempre que puedas.",\
                fuente: "Hugging Face"\
            \},\
            \{\
                texto: "\'bfQu\'e9 es el 'Greenwashing' en las empresas de IA?",\
                opciones: [\
                    "Usar energ\'eda solar exclusivamente.",\
                    "Afirmar ser 'Carbono Neutral' comprando compensaciones mientras sus emisiones reales suben.",\
                    "Pintar los servidores de verde."\
                ],\
                correcta: 1,\
                feedback: "Las emisiones reales de las Big Tech han subido un 30-40% con la IA, aunque digan ser neutrales.",\
                cta: "Mira las 'Emisiones Absolutas' en los reportes, no solo las netas.",\
                fuente: "Google Environmental Report"\
            \},\
            \{\
                texto: "La IA ayuda al clima, pero \'bfpara qu\'e9 se usa tambi\'e9n masivamente en energ\'eda?",\
                opciones: [\
                    "Para optimizar la extracci\'f3n de petr\'f3leo y gas f\'f3sil.",\
                    "Para reciclar pl\'e1stico autom\'e1ticamente.",\
                    "Para limpiar los oc\'e9anos."\
                ],\
                correcta: 0,\
                feedback: "Las petroleras son grandes clientes de IA para encontrar pozos antes inaccesibles.",\
                cta: "Analiza el 'para qu\'e9' se usa la tecnolog\'eda, no solo el 'c\'f3mo'.",\
                fuente: "Greenpeace"\
            \},\
            \{\
                texto: "\'bfQu\'e9 acci\'f3n es 'Higiene Digital' sostenible?",\
                opciones: [\
                    "Generar 50 im\'e1genes de perfil para elegir una.",\
                    "Evitar generar contenido 'basura' que nadie va a ver solo por curiosidad.",\
                    "Probar todas las IAs nuevas."\
                ],\
                correcta: 1,\
                feedback: "La generaci\'f3n masiva satura la red y los servidores in\'fatilmente.",\
                cta: "Principio: Si no aporta valor real, no le des a 'Generar'.",\
                fuente: "Cal Newport"\
            \},\
            \{\
                texto: "\'bfPor qu\'e9 el impacto de la IA es geogr\'e1ficamente desigual?",\
                opciones: [\
                    "Porque los centros de datos consumen agua local (sequ\'eda) pero los beneficios van a otra parte.",\
                    "Porque internet es m\'e1s lento en algunos sitios.",\
                    "No hay desigualdad, la nube es global."\
                ],\
                correcta: 0,\
                feedback: "Existe una justicia ambiental. Tu prompt puede estar gastando agua en una zona \'e1rida.",\
                cta: "Inf\'f3rmate sobre d\'f3nde est\'e1n los servidores de tu regi\'f3n.",\
                fuente: "Atlas of AI"\
            \}\
        ]\
    \},\
    \{\
        nivel: 6,\
        titulo: "Ciberseguridad y Datos",\
        preguntas: [\
            \{\
                texto: "Al revisar un ensayo personal con IA, \'bfqu\'e9 es seguro incluir?",\
                opciones: [\
                    "Tu nombre, colegio y direcci\'f3n.",\
                    "El texto anonimizado, sin nombres reales ni datos identificables (PII).",\
                    "Tu tel\'e9fono por si acaso."\
                ],\
                correcta: 1,\
                feedback: "Una vez env\'edas PII a una IA p\'fablica, pierdes el control sobre esos datos.",\
                cta: "Haz un 'Sanity Check': borra nombres propios antes de pegar el texto.",\
                fuente: "OpenAI Privacy"\
            \},\
            \{\
                texto: "\'bfQu\'e9 es un ataque de 'Prompt Injection'?",\
                opciones: [\
                    "Un hacking \'e9tico autorizado.",\
                    "Usar comandos de texto para enga\'f1ar a la IA y saltarse sus controles de seguridad.",\
                    "Una funci\'f3n oculta para usuarios premium."\
                ],\
                correcta: 1,\
                feedback: "Romper la seguridad del modelo te expone a contenido peligroso o no moderado.",\
                cta: "No copies y pegues 'prompts m\'e1gicos' extra\'f1os de internet.",\
                fuente: "OWASP Top 10 LLM"\
            \},\
            \{\
                texto: "Recibes un correo de phishing perfecto, sin faltas de ortograf\'eda. \'bfPor qu\'e9?",\
                opciones: [\
                    "Los estafadores fueron a la escuela.",\
                    "Usan LLMs para redactar textos perfectos y personalizados masivamente.",\
                    "Es un correo real."\
                ],\
                correcta: 1,\
                feedback: "La IA ha eliminado la barrera del idioma para los ciberdelincuentes internacionales.",\
                cta: "Ante solicitudes urgentes de dinero/datos, verifica por otro canal (llamada).",\
                fuente: "FBI Cyber Division"\
            \},\
            \{\
                texto: "Te llama un familiar llorando pidiendo dinero. Su voz suena real. \'bfQu\'e9 puede ser?",\
                opciones: [\
                    "Un imitador profesional.",\
                    "Clonaci\'f3n de voz (Vishing) usando IA con solo unos segundos de audio de redes sociales.",\
                    "Es real, no hay duda."\
                ],\
                correcta: 1,\
                feedback: "Las IAs pueden clonar voces con muestras muy cortas sacadas de TikTok/Instagram.",\
                cta: "Acuerda una 'Palabra Clave' secreta con tu familia para emergencias hoy mismo.",\
                fuente: "FTC Alerts"\
            \},\
            \{\
                texto: "Por defecto, \'bfqu\'e9 hace la versi\'f3n gratuita de ChatGPT con tus datos?",\
                opciones: [\
                    "Los borra inmediatamente.",\
                    "Los usa para entrenar y mejorar el modelo (t\'fa eres el producto).",\
                    "Los encripta en una b\'f3veda privada."\
                ],\
                correcta: 1,\
                feedback: "Si no pagas y no configuras la privacidad, tus chats son material de estudio.",\
                cta: "Ve a Configuraci\'f3n -> Controles de Datos y desactiva el entrenamiento.",\
                fuente: "T\'e9rminos OpenAI"\
            \},\
            \{\
                texto: "\'bfPor qu\'e9 empresas como Samsung prohibieron pegar c\'f3digo interno en IAs p\'fablicas?",\
                opciones: [\
                    "Para que los empleados no se vuelvan vagos.",\
                    "Porque hubo fugas de datos: secretos industriales pasaron a ser parte del conocimiento de la IA.",\
                    "Por derechos de autor."\
                ],\
                correcta: 1,\
                feedback: "Lo que le cuentas a la IA p\'fablica puede salir en la respuesta a otro usuario.",\
                cta: "Trata el chat de la IA como un muro p\'fablico de Twitter.",\
                fuente: "Bloomberg"\
            \},\
            \{\
                texto: "\'bfQu\'e9 es el riesgo de 'Shadow IT' con herramientas de IA?",\
                opciones: [\
                    "Usar herramientas en modo oscuro.",\
                    "Registrarse en webs de IA desconocidas ('Wrappers') que pueden robar tus credenciales.",\
                    "Que la IA funcione lenta."\
                ],\
                correcta: 1,\
                feedback: "Muchas webs 'gratis' de IA son trampas para recolectar correos y contrase\'f1as.",\
                cta: "Usa solo herramientas oficiales. Si dudas, usa un correo 'basura'.",\
                fuente: "Gartner Security"\
            \},\
            \{\
                texto: "\'bfC\'f3mo usan los atacantes la IA para crear virus (Malware)?",\
                opciones: [\
                    "Para que pesen menos.",\
                    "Crean 'Malware Polim\'f3rfico' que cambia su c\'f3digo constantemente para evadir antivirus.",\
                    "Para que el virus sea multiplataforma."\
                ],\
                correcta: 1,\
                feedback: "La IA permite a los virus mutar r\'e1pido, haciendo in\'fatiles las defensas antiguas.",\
                cta: "Mant\'e9n tu antivirus actualizado en modo 'autom\'e1tico'.",\
                fuente: "Microsoft Security"\
            \},\
            \{\
                texto: "\'bfQu\'e9 es el 'Data Poisoning' (Envenenamiento)?",\
                opciones: [\
                    "Un virus en la base de datos.",\
                    "Inundar internet de datos falsos para que la IA aprenda mentiras y las propague.",\
                    "Borrar datos de la IA."\
                ],\
                correcta: 1,\
                feedback: "Si manipulas la fuente de alimentaci\'f3n de la IA, manipulas su resultado.",\
                cta: "Si la IA te da una opini\'f3n pol\'edtica sesgada, podr\'eda estar 'intoxicada'. Verifica.",\
                fuente: "MITRE ATLAS"\
            \},\
            \{\
                texto: "Borraste el chat con la IA. \'bfDesapareci\'f3 el dato para siempre?",\
                opciones: [\
                    "S\'ed, es instant\'e1neo.",\
                    "Probablemente no. Queda en backups y logs de servidores por tiempo legal.",\
                    "S\'ed, por ley."\
                ],\
                correcta: 1,\
                feedback: "En la nube, 'borrar' suele significar 'ocultar'. El rastro forense permanece.",\
                cta: "No escribas nada que te avergonzar\'eda ver en la portada de un diario.",\
                fuente: "GDPR Challenges"\
            \}\
        ]\
    \}\
];}
