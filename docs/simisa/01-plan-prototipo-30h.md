# SIMISA — Plan de prototipo para 30 horas

Fecha: 14 de noviembre de 2026. Este alcance es una propuesta de ejecución basada en las aclaraciones del usuario.

## 1. Objetivo de la muestra

Permitir que una persona experimente cómo un astronauta consultaría su salud, recorrería visualmente su cuerpo, interpretaría una lectura que necesita atención y registraría una acción, aun cuando la comunicación con Tierra tenga demora.

La demostración debe sostener tres ideas:

1. La anatomía funciona como navegación: acercarse a una región abre sus indicadores y explicaciones.
2. Los datos se convierten en información comprensible: valor, unidad, momento, calidad, tendencia y siguiente paso.
3. La experiencia podría conectarse en el futuro con dispositivos médicos y procesos de revisión apropiados para una misión.

El éxito se mide por un recorrido claro, visualmente cuidado y reproducible. No se necesita implementar fisiología, diagnosticar enfermedades ni conectar equipos reales durante estas 30 horas.

## 2. Relación con el challenge

El resumen proporcionado pide una herramienta visual que reúna indicadores y ayude al astronauta a evaluar su salud y actuar. Los indicadores y funciones mencionados en el challenge son posibilidades; no se exige implementar todos.

| Necesidad del challenge | Evidencia en el prototipo |
| --- | --- |
| Reunir indicadores | Lecturas ficticias identificadas y un check-in breve |
| Evaluar la propia salud | Cuerpo interactivo, valores, tendencias y explicación |
| Orientar acciones | Ficha contextual revisada por el equipo médico |
| Explicar el contexto espacial | Contenido breve basado en recursos de NASA, con enlaces |
| Presentar información visualmente | Navegación animada y jerarquía clara de estados |

La cobertura completa de los cinco peligros del vuelo espacial es una visión futura. La demo puede mostrar bien una situación y explicar sus límites.

## 3. Alcance base recomendado

Se proponen cuatro secciones principales. Los detalles y alertas se resuelven dentro de ellas o mediante paneles; no requieren una pantalla independiente por cada función.

| Sección | Contenido de la muestra | Prioridad |
| --- | --- | --- |
| Inicio / Overview | Astronauta ficticio, resumen limitado a indicadores disponibles y acceso a explorar el cuerpo | P0 |
| Salud corporal / Body Explorer | Cuerpo completo, corazón y pulmones; acercamientos y desplazamientos animados | P0 |
| Bienestar / Daily Check-in | Horas de sueño, ánimo y estrés; confirmación de guardado local | P0, formulario mínimo |
| Dispositivos / Devices | Dispositivos simulados, calidad, última lectura y desconexión | P0, puede ser un panel compacto |
| Detalle de indicador | Una plantilla con valor, unidad, tendencia, explicación y fuente | P0, dentro de Body Explorer |
| Alerta y actividad | Episodio preparado, reconocimiento, acción registrada y evolución | P0, panel contextual |
| Enlace con Tierra | Demora del escenario y registro simulado de envío | P0, bloque compacto |
| Controles de demo | Iniciar, avanzar, desconectar, reconectar y reiniciar | P0, accesibles al presentador |

P0 significa necesario para la experiencia base propuesta. P1 significa ampliación si todo P0 ya se puede presentar. P2 significa visión futura.

### Indicadores iniciales

- Frecuencia cardíaca: lectura simulada y pequeña tendencia en la vista cardiovascular.
- SpO₂: lectura y tendencia simuladas; indicador principal del episodio de demo.
- Frecuencia respiratoria: lectura simulada contextual en la vista respiratoria.
- Sueño, ánimo y estrés: ingreso manual de prueba, sin diagnóstico ni puntaje clínico.

La presión arterial puede agregarse como P1 si ya existe el componente de tarjetas. Las regiones anatómicas ayudan a encontrar información; no establecen por sí mismas la causa de una alteración.

### P1: ampliar después de completar el recorrido

- Panel de cuatro tripulantes ficticios.
- Gráfica de siete días de sueño.
- Detalle cardiovascular más completo.
- Una región corporal adicional reutilizando la plantilla.
- Guardado del progreso de la demo entre recargas, con reinicio visible.
- Instalación y recarga sin conexión mediante una estrategia de caché probada.
- Sonido opcional, activado explícitamente por el usuario.

### P2: futuro del producto

Integración de sensores reales, cuentas y permisos, investigación, exportación de informes, chat con IA, gamificación, glucosa, radiación, hueso/QUS, dosimetría, ambiente de cabina, reglas clínicas generales y sincronización real con Tierra.

La selección de rol y la pantalla de bienvenida de las referencias pueden explicarse en la presentación. No deberían bloquear el acceso al recorrido principal.

## 4. Historia central

Una astronauta ficticia, Ana Torres, consulta su salud durante una misión conceptual en tránsito a Marte. Explora el corazón y los pulmones. Un escenario preparado introduce una lectura de SpO₂ que requiere atención. La interfaz explica qué cambió, qué calidad tiene el dato y qué paso seguir según el contenido aprobado para la demo. Ana reconoce el aviso y registra una acción. El sistema muestra el registro y el estado de comunicación simulado.

Luego se muestra brevemente que un sensor desconectado produce una indicación de falta de datos, no una falsa normalidad.

El recorrido completo y los valores de ejemplo se definen en [05 — Demo y validación](05-demo-y-validacion.md).

## 5. Qué debe funcionar realmente

- Navegación entre secciones y retorno al cuerpo completo.
- Selección de regiones por clic, toque y botones accesibles.
- Animaciones de desplazamiento y acercamiento.
- Actualización conjunta de tarjetas, región, gráfica y aviso ante un evento de demo.
- Reconocimiento de alertas sin borrarlas automáticamente.
- Registro del check-in y lectura posterior del dato guardado.
- Presentación de desconexión, última lectura e historial conservado.
- Reinicio reproducible de la simulación.

Se simulan las lecturas, la progresión del episodio, los equipos, el paso del tiempo del escenario y la comunicación. Las etiquetas deben permitir reconocerlo.

## 6. Cronograma por horas transcurridas

Las franjas suman 30 horas de calendario; no suponen 30 horas de trabajo continuo por persona. Organizar descansos, relevos y disponibilidad real. El plan anterior menciona seis integrantes, pero esa composición aún debe confirmarse.

| Franja | Foco | Entregable visible |
| --- | --- | --- |
| H0–H2 | Cerrar alcance, distribuir trabajo, preparar proyecto y publicar estructura | Navegación básica accesible mediante enlace |
| H2–H7 | Identidad visual, ilustraciones y navegación corporal | Cuerpo → corazón → pulmones → cuerpo, ya animado |
| H7–H14 | Tarjetas, gráfica, estado compartido y episodio preparado | Recorrido de alerta completo y coherente |
| H14–H20 | Check-in, dispositivos, enlace simulado y textos | Todas las funciones P0 integradas |
| H20–H25 | Pruebas de lectura, rendimiento, coherencia y correcciones | Versión congelada para presentar |
| H25–H30 | Guion, capturas, video de respaldo, fuentes y entrega | Demo ensayada y materiales accesibles |

La presentación y la revisión de fuentes comienzan durante las primeras franjas; no se dejan íntegramente para las últimas cinco horas.

### Controles de avance

- H2: si aún se discute la tecnología, elegir la que ya domina el equipo.
- H7: debe existir navegación corporal animada. Si faltan ilustraciones complejas, usar silueta SVG y órganos simplificados.
- H14: debe existir una historia completa. Si no, retirar pantallas secundarias y reducir gráficas antes de añadir funciones.
- H20: congelar alcance. Ninguna función nueva hasta resolver errores del recorrido.
- H25: grabar un respaldo aunque queden correcciones menores.

## 7. Reparto de trabajo sugerido

| Responsable | Entrega principal |
| --- | --- |
| Desarrollo A | Estructura, estado de demo, persistencia mínima y publicación |
| Desarrollo B | Body Explorer, zonas interactivas y animaciones |
| Desarrollo C | Tarjetas, gráfica, alertas, check-in y dispositivos reutilizando componentes |
| Diseño | Ilustraciones, estilos, composición y revisión visual junto a Desarrollo B |
| Contenido médico | Revisión de explicaciones, acciones y límites de los datos |
| Presentación | Historia, fuentes, página del proyecto y materiales de entrega |

Si hay menos personas, combinar funciones y bajar P1 a futuro.

Definir en H0 un único contrato de datos y nombres compartidos. Integrar cambios pequeños durante el trabajo; no esperar a terminar una pantalla para comprobarla con las demás.

## 8. Qué recortar primero si falta tiempo

1. Tripulación, roles, idiomas adicionales y vistas futuras.
2. Gráficas adicionales, filtros 24 h / 7 d / 30 d y estadísticas secundarias.
3. Pantallas completas que puedan convertirse en un panel.
4. Movimiento decorativo, partículas, sonidos y animaciones de entrada largas.
5. Formulario de bienestar: conservar un guardado breve y coherente.

Conservar el cuerpo interactivo, la transición entre corazón y pulmones, un detalle legible y una alerta completa. Si la animación compleja no es estable, simplificarla a desplazamiento, escala y fundido. Figma puede acompañar la visión futura, pero el flujo principal debe seguir funcionando en la app.

## 9. Criterio de terminado

La demo puede abrirse y repetirse sin asistencia técnica; el recorrido responde a clics; sus animaciones orientan; los mismos datos coinciden en todas las vistas; las acciones dejan un resultado visible; las simulaciones están identificadas; las fuentes están disponibles; y existe un respaldo grabado.

No se requiere que el prototipo demuestre eficacia clínica o cumplimiento normativo. Esas evaluaciones quedan registradas como trabajo futuro en el documento 04.
