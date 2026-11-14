# Pantalla principal implementada

La referencia principal es `Imagenes de referencia1/PantallaPrincipal.jpeg`, indicada por el usuario. La página se encuentra en `/index.html`; los estilos y comportamientos están en `web/`. El estudio de movimiento original continúa en `prototipo-cuerpo/`.

## Diseño

La composición mantiene encabezado ancho, navegación lateral, resumen de salud a la izquierda, cuerpo al centro, seguimiento a la derecha y accesos rápidos inferiores. Usa azules oscuros, bordes luminosos e iconos vectoriales. El diseño se reorganiza en una columna en móvil.

La marca es SIMISA; no se reutiliza el logo de NASA de la referencia. Ana Torres es un perfil ficticio. Las cifras son ejemplos fijos identificados como demo. El círculo indica campos del check-in completados, no un porcentaje de salud. El mapa resalta corazón y pulmones; temperatura corresponde al cuerpo completo. No se infiere salud ósea, cognición ni metabolismo de métricas ausentes.

## Interacciones disponibles y conexiones futuras

| Elemento | Comportamiento implementado | Conexión futura |
| --- | --- | --- |
| Tarjetas de indicadores | Abren detalle, unidad, fuente y serie cuando existe; enfocan la región asociada | Lecturas con fecha, calidad y estado |
| Cuerpo y botones de región | Acercamiento animado a corazón y pulmones; retorno al cuerpo completo | Imágenes específicas por orientación |
| Registro diario | Valida sueño, ánimo y estrés; guarda el registro del día en localStorage | Persistencia por tripulante |
| Seguimiento diario | Refleja 0/3 o 3/3 campos completados | Rutinas de misión configurables |
| Sensores | Conexión/desconexión simulada; oculta valores actuales y gráfica de la fuente | Adaptadores de dispositivos reales |
| Gráficas | Selección de indicador y períodos de 7 o 3 días de ejemplo | Historial con tiempos y discontinuidades |
| Alertas y actividad | Muestra estado del registro y fuentes disponibles | Eventos y alertas revisados |
| Asistente | Accesos guiados; integración conversacional declarada pendiente | Orientación contextual con fuentes |
| Información | Explica límites del prototipo y enlaza documentación | Biblioteca revisada de fuentes |
| Comunicación terrestre | Describe integración futura, sin simular envío real | Cola, latencia y confirmación de recepción |
| Perfil | Identifica el personaje de demostración | Selección de usuario y permisos |
| Configuración | Permite reducir movimiento; respeta preferencia del sistema | Preferencias persistentes |

Los diálogos se cierran con Escape, botón o clic fuera; restauran el foco al control de origen. Los accesos rápidos usan los mismos paneles que la navegación lateral.

## Organización y ejecución

`web/app.js` separa `METRICS`, series ficticias, estado de conexión, navegación y renderizado. Todos los datos de salud son de muestra. El estado de conexión dura la sesión; solamente el check-in se guarda localmente. El prototipo no usa servicios externos ni bibliotecas en producción.

Desde la raíz del proyecto:

```powershell
python -m http.server 4174 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:4174`. El contenido de la interfaz está en español para coincidir con la referencia principal; la traducción al inglés para la entrega queda pendiente.
