# SIMISA — Explorador corporal, primera muestra

## Abrir

Abrir `index.html` en un navegador. No requiere instalación ni conexión a internet. También puede servirse desde esta carpeta con `python -m http.server 4173 --bind 127.0.0.1` y abrir `http://127.0.0.1:4173`.

## Alcance implementado

- Ilustración anatómica con estilo holográfico.
- Encuadres de cuerpo completo, cabeza, corazón, pulmones, abdomen y piernas.
- Acercamiento y desplazamiento animados entre regiones.
- Selección mediante menú o puntos sobre la ilustración.
- Arrastre, rueda de zoom, botones para acercar/alejar y restablecer.
- Navegación por teclado: con el área corporal enfocada, flechas, +, − y Home/Escape.
- Opción de reducir movimiento y respeto de la preferencia del sistema.
- Diseño adaptable al tamaño disponible.

Se trata de una ilustración 2D navegable, no de un modelo 3D con rotación. No contiene indicadores, datos de salud, alertas ni simulación clínica.

## Archivos

- `index.html`: estructura y controles.
- `styles.css`: presentación y adaptación a pantallas.
- `app.js`: posiciones de regiones, cámara, animación y gestos.
- `assets/cuerpo-holografico.png`: imagen generada para esta muestra.
- `assets/PROCEDENCIA.md`: procedencia y prompt del recurso.

Esta pieza se desarrolló en HTML, CSS y JavaScript sin dependencias para poder revisarla inmediatamente y abrirla como archivo local. No reemplaza la recomendación React + Vite + Motion para la aplicación completa. Los encuadres normalizados de `regions` y la imagen se pueden reutilizar en el componente de React posterior.

La ilustración es conceptual y requiere revisión anatómica antes de un uso educativo o médico. Los puntos de navegación se calibraron sobre esta imagen; una imagen distinta puede requerir ajustar las coordenadas.

## Verificación realizada

Comprobado en navegador: carga de imagen, vista completa, selección de corazón, pulmones y cabeza, acercamiento, arrastre, modo de movimiento reducido y restablecimiento a 1×. Se ajustó la composición a la altura de la vista previa y se verificó la sintaxis de JavaScript con Node. La captura `vista-previa.png` registra el resultado.

Pendiente: prueba en dispositivo táctil real y revisión visual completa de todos los tamaños. La apertura directa como archivo local no pudo comprobarse en el navegador integrado, que solo admite HTTP/HTTPS; la muestra se verificó mediante un servidor local.
