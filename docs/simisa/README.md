# SIMISA — Plan del prototipo y guía de diseño

Fecha: 14 de noviembre de 2026. Ventana de trabajo: 30 horas desde el inicio efectivo del equipo.

## Qué queremos construir

Un prototipo interactivo de asistencia visual para el automonitoreo de salud en misiones espaciales. Su experiencia central permite recorrer un cuerpo humano, acercarse a distintas regiones y consultar indicadores, tendencias y orientación contextual mediante animaciones.

El prototipo representa una situación preparada con datos ficticios. El trabajo se concentra en la interfaz, las animaciones y la coherencia del recorrido. La integración con dispositivos médicos y la evaluación frente a estándares de NASA forman parte de la visión futura, que debe explicarse con fuentes y límites claros.

## Documentos

| Archivo | Para qué sirve |
| --- | --- |
| [01 — Plan del prototipo](01-plan-prototipo-30h.md) | Objetivos, prioridades, cronograma, reparto de trabajo y recortes |
| [02 — Diseño y animaciones](02-diseno-y-animaciones.md) | Lectura de las referencias, pantallas, estilo y recorrido por el cuerpo |
| [03 — Tecnología y arquitectura](03-tecnologia-y-arquitectura.md) | Recomendación de herramientas, alternativas y estructura de la simulación |
| [04 — Integración, NASA y fuentes](04-integracion-nasa-y-fuentes.md) | Dispositivos futuros, referencias científicas y tratamiento de estándares |
| [05 — Demo y validación](05-demo-y-validacion.md) | Guion reproducible, escenarios, criterios de aceptación y entrega |

Orden sugerido de lectura: 01 y 02 para todo el equipo; 03 para desarrollo; 04 para contenido científico; 05 para quien presente y pruebe.

## Decisiones confirmadas y propuestas

### Confirmado por el usuario

- Hay 30 horas para terminar el prototipo.
- Es una muestra de cómo se usaría la aplicación en una situación simulada.
- El enfoque principal es gráfico y de interfaz.
- Se quiere explicar cómo se integrarían dispositivos médicos y cómo se abordarían estándares de NASA en una evolución del producto.
- Las dos imágenes de la carpeta de referencias representan una visión inicial del líder del grupo.
- Se desean animaciones al moverse por el cuerpo y revisar los distintos indicadores.
- Se solicita registrar el nuevo plan, el diseño y las recomendaciones de tecnologías en archivos Markdown.

### Recomendaciones de este plan

- Priorizar un astronauta ficticio, el cuerpo completo, el corazón y los pulmones.
- Construir la navegación corporal con ilustraciones en capas y animación 2D con sensación de profundidad.
- Usar React + Vite + Motion, con CSS y una biblioteca de gráficas si simplifica el trabajo.
- Implementar un escenario respiratorio y una desconexión de sensor con estados preparados y reproducibles.
- Mostrar datos, calidad y antigüedad de manera consistente en todas las vistas.
- Proponer la interfaz de presentación en inglés; mantener esta documentación de trabajo en español.

Estas recomendaciones aún pueden ajustarse por experiencia del equipo y disponibilidad de recursos. No son requisitos adicionales del challenge ni decisiones del líder ya confirmadas.

## Qué cambia respecto del plan anterior

| Antes | Nuevo enfoque recomendado |
| --- | --- |
| Monitor con 11 sensores y 14 variables | Experiencia interactiva con pocos indicadores y escenarios preparados |
| Sistema de monitoreo en tiempo real | Simulación de la experiencia de uso; sin garantías de tiempo real |
| Panel de tripulación como centro | Astronauta y exploración corporal como centro |
| Figura humana como una función más | Figura humana y recorrido animado como rasgo distintivo |
| Siete pantallas con muchas obligaciones internas | Cuatro secciones reutilizables y paneles contextuales |
| Motor clínico configurable y múltiples protocolos | Estados guionados y contenido revisado; motor clínico como evolución futura |
| Cumplimiento normativo como intención general | Identificación de referencias y plan de trazabilidad, sin afirmar cumplimiento |

Los documentos originales se conservan como antecedentes. Sus tablas de umbrales, obligaciones, cronogramas y sugerencias no se trasladan automáticamente a este nuevo alcance.

## Material de origen

- [Challenge summary.txt](../../Challenge%20summary.txt).
- [Plan anterior de SIMISA](../../SIMISA%20%E2%80%93%20Plan%20mejorado%20para%20NASA%20Space%20Apps%202026.md).
- [Referencia A: panorama de 15 pantallas](../../Imagenes%20de%20referencia1/WhatsApp%20Image%202026-11-13%20at%2023.36.06.jpeg).
- [Referencia B: detalle de Salud Corporal](../../Imagenes%20de%20referencia1/WhatsApp%20Image%202026-11-13%20at%2023.36.06%20%281%29.jpeg).
- Aclaraciones del usuario en la conversación, consolidadas arriba.

La segunda referencia es la principal guía visual propuesta. La primera registra la visión completa del producto y sirve como reserva de funciones futuras.

## Próximo paso operativo

En la primera sesión del equipo: elegir al responsable de cada área, confirmar las herramientas conocidas, preparar las tres ilustraciones principales y cerrar el escenario. Después construir inmediatamente el recorrido cuerpo → corazón → pulmones → cuerpo. No hace falta ampliar primero la documentación de todos los casos futuros.

## Primera implementación disponible

Se creó una [muestra independiente del explorador corporal](../../prototipo-cuerpo/README.md): ilustración, selección de regiones, acercamientos animados, arrastre y zoom. Su alcance es exclusivamente gráfico, según la siguiente indicación del usuario. No implementa datos de salud ni las demás funciones del plan. Está hecha en HTML/CSS/JavaScript sin dependencias para facilitar la revisión inicial; React + Vite + Motion sigue siendo la recomendación para la app completa.

Estado de este paquete: documentación preparada y primera muestra corporal disponible; integración médica, evaluación clínica y verificación de conformidad aún no implementadas.
