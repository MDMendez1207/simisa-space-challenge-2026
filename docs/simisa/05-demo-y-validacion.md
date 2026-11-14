# SIMISA — Guion de demostración y validación

Fecha: 14 de noviembre de 2026. Todas las pruebas de este archivo están pendientes de ejecución sobre la futura aplicación.

## 1. Qué debe entender quien mira la demo

SIMISA permite explorar visualmente el cuerpo, consultar indicadores y comprender un cambio que requiere atención. La navegación animada conecta una región con información legible y una acción contextual. La muestra utiliza datos preparados y explica cómo podría evolucionar hacia una integración real.

La demo debe poder repetirse sin esperar eventos aleatorios, una API o una conexión con dispositivos.

## 2. Preparación del escenario

| Elemento | Configuración propuesta |
| --- | --- |
| Persona | Ana Torres, astronauta ficticia |
| Contexto | Misión conceptual en tránsito a Marte |
| Frecuencia cardíaca inicial | 72 bpm, valor ficticio |
| Frecuencia respiratoria inicial | 16 breaths/min, valor ficticio |
| SpO₂ inicial | 98 %, valor ficticio |
| Episodio principal | Descenso guionado de SpO₂ hasta 90 % |
| Calidad de señal del episodio | Válida dentro de la simulación |
| Demora hacia Tierra | 20 minutos por trayecto en este escenario |
| Modo de ejecución | Avance por pasos con reinicio visible |

Estos números sirven para construir una historia; no definen rangos universales, protocolos ni validación clínica. Mostrar Demo scenario y Simulated data. La etiqueta de estado proviene del escenario preparado.

La fuente simulada de SpO₂ debe identificarse de forma estable, por ejemplo Demo pulse oximeter. No atribuir compatibilidad a una marca comercial que no se haya integrado.

## 3. Historia reproducible

| Paso | Acción del presentador | Resultado observable |
| --- | --- | --- |
| S0 — Reinicio | Pulsar Reset scenario | Estado inicial, sin episodios arrastrados de otra ejecución |
| S1 — Panorama | Abrir Overview y luego Explore my health | Cuerpo completo y tarjetas con el mismo conjunto de datos |
| S2 — Corazón | Seleccionar Heart | Acercamiento suave y detalle cardiovascular |
| S3 — Pulmones | Seleccionar Lungs | Reencuadre corto, pulmones destacados y datos respiratorios |
| S4 — Cambio | Avanzar al episodio preparado | La serie incorpora el descenso; tarjeta, región y aviso coinciden |
| S5 — Comprensión | Abrir el detalle del aviso | Valor, momento, calidad y orientación del escenario visibles |
| S6 — Reconocimiento | Pulsar Acknowledge | Aviso reconocido con hora; episodio todavía activo |
| S7 — Acción | Registrar una acción del guion | Actividad registrada; los valores no cambian por el simple clic |
| S8 — Comunicación | Abrir el bloque del enlace | Mensaje local pendiente o en tránsito, según el estado seleccionado |
| S9 — Pérdida de señal | Desconectar la fuente simulada | Sin lectura actual; última lectura y episodio previo conservados |
| S10 — Nueva información | Reconectar y avanzar a una lectura nueva de recuperación | Se muestra el dato nuevo; la recuperación del episodio queda registrada |
| S11 — Regreso | Pulsar Full body | Alejamiento y panorama coherente con el estado final |

El guion no supone que una acción determinada causa la recuperación. Esta se introduce mediante una nueva lectura preparada. Si se muestra persistencia o una espera antes de resolver, debe representarse en el reloj simulado y explicarse como parte del escenario.

### Estado de la alerta

El reconocimiento y la condición son dimensiones distintas:

| Situación | Condición | Reconocimiento | Presentación |
| --- | --- | --- | --- |
| Aviso recién creado | Activa | Pendiente | Lectura que requiere atención |
| Después de Entendido | Activa | Registrado | Reconocida, aún activa |
| Sensor desconectado | Evolución no verificable | Conservar estado previo | Datos no disponibles; último episodio visible |
| Llegan datos de recuperación | Recuperación representada por el guion | Conservar registro | Evolución registrada con nueva evidencia |

No reemplazar la historia por una tarjeta verde al perder la señal.

## 4. Textos iniciales para probar en interfaz

Son borradores de comunicación para una muestra. Revisar su claridad y cualquier contenido clínico antes de incorporarlos.

| Lugar | Texto propuesto |
| --- | --- |
| Identificación | Demo — simulated health data |
| Inicio de exploración | Explore my health |
| Regreso | Full body |
| Episodio | Oxygen saturation needs attention in this demo scenario. |
| Evidencia | Simulated SpO₂: 90%. Signal quality: valid. |
| Reconocimiento | Acknowledge |
| Confirmación | Acknowledged. The episode is still active. |
| Acción | Review measurement guidance |
| Registro | Record action |
| Desconexión | No current reading. Last available measurement shown below. |
| Comunicación | Simulated Earth link — 20 min one-way delay |
| Mensaje enviado | In transit — simulated |
| Bienestar | Check-in saved on this device. |

La ficha de orientación debe indicar su fuente y revisión. Si todavía no hay un procedimiento respaldado, mostrar contenido de medición y el acceso a una guía prevista; no inventar un tratamiento.

## 5. Presentación en vivo sugerida: alrededor de dos minutos

Este tiempo es una propuesta para ensayar; no describe una regla oficial del evento.

| Tiempo aproximado | Qué mostrar | Idea a comunicar |
| --- | --- | --- |
| 0–15 s | Inicio y cuerpo completo | El astronauta puede consultar su propia salud |
| 15–35 s | Corazón y transición a pulmones | La anatomía organiza la información |
| 35–60 s | Cambio preparado y tendencia | El dato se convierte en una señal comprensible |
| 60–85 s | Ficha y reconocimiento | La persona entiende y registra el siguiente paso |
| 85–100 s | Comunicación simulada | La distancia condiciona la asistencia desde Tierra |
| 100–115 s | Desconexión y lectura posterior | La interfaz distingue incertidumbre y evolución |
| 115–120 s | Panorama y cierre | Integración de dispositivos y evaluación de requisitos como próximos pasos |

El check-in puede mostrarse en una versión extendida o durante preguntas. Debe funcionar aunque no ocupe tiempo en la historia principal.

### Versión breve de 30 segundos

- 0–3 s: nombre y propósito.
- 3–11 s: cuerpo → corazón → pulmones.
- 11–21 s: cambio de indicador y explicación del aviso.
- 21–26 s: reconocimiento y registro.
- 26–30 s: etiqueta de prototipo y visión de integración futura.

Este formato es útil como respaldo y coincide con una restricción mencionada en consultas públicas del evento, pero hay que confirmar la guía vigente antes de tratarlo como entrega oficial. Ver [04 — Fuentes y entrega](04-integracion-nasa-y-fuentes.md).

### Esquema provisional de siete slides

1. SIMISA, equipo y problema elegido.
2. Necesidad del astronauta y contexto espacial respaldado por NASA.
3. Visión visual: el cuerpo como navegación.
4. Secuencia de demo: región, indicador y acción.
5. Qué funciona, qué se simula y qué aporta cada recurso utilizado.
6. Integración futura y trabajo pendiente frente a estándares aplicables.
7. Enlace a la muestra, herramientas, fuentes y declaración de uso de IA según corresponda.

Preparar una sola entrega principal con buena calidad; ajustar extensión y formato al confirmar las reglas.

## 6. Comprobaciones del prototipo

Registrar resultado, responsable y evidencia al ejecutar estas comprobaciones. No marcar una prueba como aprobada por estar escrita en este documento.

| ID | Prueba | Resultado esperado |
| --- | --- | --- |
| V01 | Abrir la publicación en una ventana privada | Se accede a la muestra sin registro y cargan las ilustraciones |
| V02 | Recorrer cuerpo → corazón → pulmones → cuerpo | La navegación responde y mantiene orientación visual |
| V03 | Seleccionar regiones rápidamente durante una animación | Prevalece la última selección; título y datos corresponden |
| V04 | Cambiar tamaño de ventana | Las zonas de selección siguen alineadas y los controles son alcanzables |
| V05 | Abrir una región mediante teclado o botones equivalentes | No depende de hover ni de acertar una zona pequeña |
| V06 | Activar movimiento reducido | Se conserva el recorrido con fundidos y sin movimiento decorativo |
| V07 | Avanzar al episodio | El mismo valor, momento y estado aparecen en las vistas pertinentes |
| V08 | Reconocer un aviso con lectura aún alterada | Sigue activo y conserva la evidencia |
| V09 | Desconectar el sensor durante el episodio | Falta de datos explícita; historia y alerta anterior conservadas |
| V10 | Reconectar sin nueva lectura y luego agregarla | No se presenta un dato actual hasta recibir la nueva muestra |
| V11 | Revisar la gráfica después de una desconexión | Existe un hueco; no se dibuja una falsa continuidad |
| V12 | Guardar check-in, salir, volver y recargar | El registro ficticio se conserva y las unidades son comprensibles |
| V13 | Reiniciar dos veces el escenario | Se obtiene el mismo inicio, sin eventos duplicados ni temporizadores viejos |
| V14 | Pausar o dejar la pestaña en segundo plano | No se acumulan cambios inesperados al continuar |
| V15 | Abrir fuentes desde el contenido | Se distingue evidencia científica, decisiones de diseño y simulación |
| V16 | Ejecutar la copia local con internet desconectado | El recorrido básico funciona con sus recursos locales |
| V17 | Probar recarga de la web publicada sin internet, solo si se promete P1 offline | Carga la app y sus recursos desde la estrategia de caché implementada |
| V18 | Revisar el relato final | No presenta conexiones, tratamientos, eficacia clínica o conformidad como hechos no demostrados |

La revisión de accesibilidad de esta tabla es una comprobación inicial, no una auditoría completa.

## 7. Prueba breve con una persona ajena al equipo

Pedirle que encuentre los pulmones, explique cuál es el dato que requiere atención, indique cuándo se midió, reconozca el aviso y vuelva al panorama. Observar dónde duda sin guiar cada clic.

Después comprobar si entendió que los datos son simulados, si reconoció la diferencia entre señal perdida y lectura alterada, y si la animación le ayudó a ubicarse. Corregir primero dificultades de estas tareas antes de añadir decoración.

## 8. Preparación de la entrega

- [ ] Confirmar horario local de presentación y fecha límite efectiva del equipo.
- [ ] Confirmar las reglas vigentes de formato, idioma, recursos e IA.
- [ ] Revisar mensajes clínicos y etiquetas de simulación.
- [ ] Registrar fuentes, licencias y usos concretos de recursos NASA.
- [ ] Probar el enlace publicado desde una ventana privada y otro equipo.
- [ ] Preparar copia local de la versión congelada y de sus imágenes.
- [ ] Grabar la historia principal como respaldo.
- [ ] Ensayar el reinicio antes de presentar.
- [ ] Verificar que ningún enlace público contenga datos personales reales.
- [ ] Identificar con precisión funciones implementadas, simuladas y futuras.

## 9. Si algo falla durante la presentación

Ante una pérdida de conexión, usar la copia local ya probada. Ante un fallo visual que impida continuar, mostrar el video de respaldo y explicar qué parte estaba implementada. No sustituir una función ausente por una afirmación de que ya funciona.

El presentador debe conocer los controles de demo sin depender de un atajo oculto. Un botón discreto Demo controls es suficiente; los atajos son opcionales.
