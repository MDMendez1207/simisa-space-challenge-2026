'use strict';

// Interface data is deliberately separate from rendering and interactions.
// Replace this adapter with device readings without changing the card controls.
const METRICS = [
  { id: 'heart', name: 'Frecuencia cardíaca', value: '72', unit: 'lpm', icon: 'heart', region: 'heart', source: 'Sensor cardíaco', values: [70, 66, 75, 72, 75, 73, 72], description: 'Frecuencia cardíaca del escenario de demostración.' },
  { id: 'pressure', name: 'Presión arterial', value: '118/76', unit: 'mmHg', icon: 'drop', region: 'heart', source: 'Tensiómetro', description: 'Ejemplo de una medición puntual. La integración del tensiómetro se plantea para una etapa futura.' },
  { id: 'respiration', name: 'Frecuencia respiratoria', value: '16', unit: 'rpm', icon: 'lungs', region: 'lungs', source: 'Sensor respiratorio', values: [16, 15, 16, 17, 16, 15, 16], description: 'Frecuencia respiratoria de ejemplo para explorar la interfaz.' },
  { id: 'oxygen', name: 'Saturación de oxígeno', value: '98', unit: '%', icon: 'oxygen', region: 'lungs', source: 'Pulsioxímetro', values: [98, 97, 98, 98, 99, 98, 98], description: 'La vista respiratoria agrupa esta lectura de ejemplo. El resaltado del cuerpo indica navegación, no una localización de alteraciones.' },
  { id: 'temperature', name: 'Temperatura corporal', value: '36.6', unit: '°C', icon: 'temperature', region: 'full', source: 'Termómetro', description: 'Ejemplo de temperatura corporal. Este indicador se asocia al cuerpo completo.' }
];
const ICONS = {
  home: '<path d="m3 11 9-8 9 8M5 10v11h5v-7h4v7h5V10"/>',
  heart: '<path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/>',
  lungs: '<path d="M12 3v9m0-3-3 4m3-4 3 4M8 5C5 6 2 12 3 18s6 2 6-1V7Q9 4 8 5Zm8 0c3 1 6 7 5 13s-6 2-6-1V7q0-3 1-2Z"/>',
  moon: '<path d="M20 14A8 8 0 0 1 10 4a8.5 8.5 0 1 0 10 10Z"/><path d="M18 2v5m-2.5-2.5h5M21 9v2m-1-1h2"/>',
  flower: '<path d="M12 21C4 18 2 13 3 8c5 1 8 4 9 13Zm0 0c8-3 10-8 9-13-5 1-8 4-9 13Zm0-5c-5-5-4-9 0-14 4 5 5 9 0 14Z"/>',
  sensor: '<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M 9 1 v 4 m 6 -4 v 4 M 9 19 v 4 m 6 -4 v 4 M 1 9 h 4 m -4 6 h 4 m 14 -6 h 4 m -4 6 h 4 m -15 -3 l 2 -4 l 4 7 l 2 -4"/>',
  chart: '<path d="M3 3v18h19M7 17v-5m5 5V8m5 9V4"/>',
  alert: '<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v1"/>',
  assistant: '<rect x="4" y="7" width="16" height="13" rx="5"/><path d="M12 3v4m-2 9h4M1 11v5m22-5v5"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1"/>',
  document: '<path d="M14 2H5v20h14V7l-5-5Zm0 0v6h5M8 12h8m-8 4h6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  user: '<circle cx="12" cy="7" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3Z"/>',
  settings: `<circle cx="12" cy="12" r="3"/>
  <path d="M 16.436 6.377 Z M 10.5216 2.8451 c 0.0772 -0.0319 0.1944 -0.0614 0.4351 -0.0778 C 11.2042 2.7504 11.5238 2.75 12 2.75 C 12.4762 2.75 12.7958 2.7504 13.0432 2.7673 
  C 13.284 2.7837 13.4012 2.8132 13.4783 2.8451 C 13.7846 2.972 14.028 3.2154 14.1548 3.5217 C 14.1949 3.6183 14.228 3.7689 14.2414 4.126 C 14.271 4.9184 14.68 5.6813 15.4061 6.1005 
  C 16.1321 6.5197 16.9974 6.4924 17.6984 6.1219 C 18.0143 5.9549 18.1614 5.9083 18.265 5.8947 C 18.5937 5.8514 18.9261 5.9405 19.1891 6.1423 C 19.2554 6.1931 19.3395 6.2799 19.4741 6.4802 
  C 19.6125 6.686 19.7726 6.9626 20.0107 7.375 C 20.2488 7.7874 20.4083 8.0644 20.5174 8.2871 C 20.6235 8.5038 20.6566 8.6201 20.6675 8.7029 C 20.7108 9.0315 20.6217 9.364 20.4199 9.627 
  C 20.3562 9.7099 20.2424 9.814 19.9397 10.0041 C 19.2684 10.426 18.8122 11.1616 18.8121 11.9999 C 18.8121 12.8383 19.2683 13.574 19.9397 13.9959 C 20.2423 14.186 20.3561 14.29 20.4198 14.373 
  C 20.6216 14.636 20.7107 14.9684 20.6674 15.2971 C 20.6565 15.3799 20.6234 15.4961 20.5173 15.7128 C 20.4082 15.9355 20.2487 16.2125 20.0106 16.6249 C 19.7725 17.0373 19.6124 17.3139 19.474 17.5198 
  C 19.3394 17.72 19.2553 17.8068 19.189 17.8576 C 18.926 18.0595 18.5936 18.1485 18.2649 18.1053 C 18.1613 18.0916 18.0142 18.045 17.6983 17.8781 C 16.9973 17.5075 16.132 17.4803 15.4059 17.8995 
  C 14.68 18.3187 14.271 19.0816 14.2414 19.874 C 14.228 20.2311 14.1949 20.3817 14.1548 20.4784 C 14.028 20.7846 13.7846 21.028 13.4783 21.1549 C 13.4012 21.1868 13.284 21.2163 13.0432 21.2327 
  C 12.7958 21.2496 12.4762 21.25 12 21.25 C 11.5238 21.25 11.2042 21.2496 10.9567 21.2327 C 10.716 21.2163 10.5988 21.1868 10.5216 21.1549 C 10.2154 21.028 9.972 20.7846 9.8451 20.4784 C 9.8051 20.3817 9.772 20.2311 9.7586 19.874 
  C 9.729 19.0817 9.32 18.3187 8.5939 17.8995 C 7.8678 17.4803 7.0026 17.5076 6.3016 17.8781 C 5.9856 18.0451 5.8386 18.0917 5.735 18.1053 C 5.4063 18.1486 5.0739 18.0595 4.8108 17.8577 C 4.7446 17.8069 4.6604 17.7201 4.5259 17.5198 
  C 4.3875 17.314 4.2274 17.0374 3.9893 16.625 C 3.7511 16.2126 3.5917 15.9356 3.4826 15.7129 C 3.3765 15.4962 3.3434 15.3799 3.3325 15.2971 C 3.2892 14.9684 3.3783 14.636 3.5801 14.373 C 3.6438 14.2901 3.7576 14.186 4.0602 13.9959 
  C 4.7316 13.5741 5.1878 12.8384 5.1879 12.0001 C 5.1879 11.1616 4.7317 10.4259 4.0602 10.004 C 3.7577 9.8139 3.6439 9.7099 3.5802 9.6269 C 3.3784 9.3639 3.2893 9.0315 3.3326 8.7028 C 3.3435 8.62 3.3766 8.5038 3.4827 8.2871 C 3.5918 8.0643 3.7513 7.7873 3.9893 7.3749 
  C 4.2275 6.9625 4.3876 6.686 4.526 6.4801 C 4.6605 6.2798 4.7447 6.1931 4.8109 6.1422 C 5.0739 5.9404 5.4064 5.8513 5.735 5.8946 C 5.8387 5.9082 5.9858 5.9548 6.3017 6.1218 C 7.0027 6.4924 7.8679 6.5196 8.5939 6.1005 C 9.32 5.6813 9.729 4.9184 9.7586 4.126 C 9.772 3.7689 9.8051 3.6183 9.8451 3.5217 C 9.972 3.2154 10.2154 2.972 10.5216 2.8451 Z" stroke-width="1" fill="none"/>`,
  body: '<circle cx="12" cy="4" r="2"/><path d="M5 9h14m-7-3v9m0 0-4 7m4-7 4 7M8 9l-3 7m11-7 3 7"/>',
  drop: '<path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/><path d="M8 15a4 4 0 0 0 4 4"/>',
  oxygen: '<circle cx="10" cy="10" r="7"/><path d="M18 17c0-4 5-4 5-1 0 2-5 3-5 6h5"/>',
  temperature: '<path d="M9 14V5a3 3 0 0 1 6 0v9a5 5 0 1 1-6 0Z"/><path d="M12 7v11m6-12h3m-3 4h2"/>',
  wifi: '<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 16a6 6 0 0 1 8 0"/><circle cx="12" cy="20" r="1"/>',
  bell: '<path d="M5 17h14l-2-4V8A5 5 0 0 0 7 8v5l-2 4Zm5 3h4"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.body}</svg>`;
document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });
document.querySelectorAll('.nav-item').forEach(el => { const label = el.querySelector('span:nth-child(2)').textContent.trim(); el.setAttribute('aria-label', label); el.title = label; });
const $ = selector => document.querySelector(selector);
const dialog = $('#detail-dialog');
let selectedRegion = 'full', lastFocus = null, toastTimer;
const connections = Object.fromEntries(METRICS.map(m => [m.id, true]));
const preference = matchMedia('(prefers-reduced-motion: reduce)');
let reduced = preference.matches;
let checkin = null;
const today = () => new Date().toLocaleDateString('en-CA');
try { const saved = JSON.parse(localStorage.getItem('simisa.checkin.v1')); if (saved?.date === today() && Number.isFinite(saved.hours) && saved.hours >= 0 && saved.hours <= 24 && ['Muy bajo', 'Bajo', 'Neutral', 'Bueno', 'Muy bueno'].includes(saved.mood) && ['Bajo', 'Moderado', 'Alto'].includes(saved.stress)) checkin = saved; } catch { /* Storage is optional. */ }

function renderMetrics() {
  $('#metrics').innerHTML = METRICS.map(m => `<button class="metric ${m.id}" data-metric="${m.id}"><span class="metric-icon">${icon(m.icon)}</span><span><small>${m.name}</small><strong>${connections[m.id] ? m.value : '—'}</strong><span class="unit">${m.unit}</span></span>${m.values && connections[m.id] ? '<svg class="spark" viewBox="0 0 50 25" aria-hidden="true"><path d="m1 19 7-13 7 6 7-8 7 15 7-5 7-11 6 7"/></svg>' : ''}</button>`).join('');
}
// All plotted points are fixed demo series, not live measurements.
function chart(metric, days = 7) {
  if (!connections[metric.id]) return '<p class="note">Fuente desconectada en la simulación. No hay lecturas actuales.</p>';
  const values = metric.values;
  if (!values) return '<p class="note">Medición puntual de ejemplo. No hay una serie temporal disponible.</p>';
  const data = days === 7 ? values : values.slice(-3);
  const min = Math.floor(Math.min(...values) - 3), max = Math.ceil(Math.max(...values) + 3);
  const points = data.map((v, i) => [30 + i * 280 / (data.length - 1), 104 - (v - min) / (max - min) * 88]);
  const line = points.map(p => p.join(',')).join(' ');
  const labels = days === 7 ? ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'] : ['Día 5', 'Día 6', 'Día 7'];
  return `<svg viewBox="0 0 330 135" role="img" aria-label="Serie de ejemplo: ${data.join(', ')} ${metric.unit}">${[min, Math.round((min + max) / 2), max].map(v => { const y = 104 - (v - min) / (max - min) * 88; return `<path d="M30 ${y}H315" stroke="#21415d"/><text x="1" y="${y + 3}">${v}</text>`; }).join('')}<polygon points="30,105 ${line} 310,105" fill="#1488cc" opacity=".13" stroke="none"/><polyline points="${line}" stroke="#39d0f7"/>${points.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#66e2ff" stroke="none"/><text x="${x}" y="126" text-anchor="middle">${labels[i]}</text>`).join('')}</svg>`;
}
function renderOverview() { $('#overview-chart').innerHTML = chart(METRICS[0]); }
function updateRoutine() {
  const complete = !!checkin;
  $('#progress-count').textContent = complete ? '3/3' : '0/3';
  $('#progress-ring').style.setProperty('--progress', complete ? '100%' : '0%');
  $('#routine-title').textContent = complete ? 'Registro completo' : 'Un paso a la vez';
  document.querySelector('.progress-summary p').innerHTML = complete ? 'Tu registro de hoy<br>está listo para revisar.' : 'Completá tu registro<br>de bienestar de hoy.';
  document.querySelector('.progress-summary .text-button').textContent = complete ? 'Revisar check-in →' : 'Hacer check-in →';
  const row = document.querySelector('.activity-row[data-panel="wellbeing"] span:nth-child(2)');
  row.innerHTML = complete ? 'Registro diario guardado<small>Podés revisar o editar tus respuestas</small>' : 'Registro diario pendiente<small>Completá sueño, ánimo y estrés</small>';
}
function selectRegion(region) {
  const poses = { full: { name: 'Una mirada a tu interior', x: 0, y: 0, z: 1 }, heart: { name: 'Sistema cardiovascular', x: -.06, y: .24, z: 2.45 }, lungs: { name: 'Respiración y oxigenación', x: 0, y: .255, z: 2.1 } };
  const pose = poses[region]; if (!pose) return;
  selectedRegion = region;
  const scene = $('#body-scene');
  scene.style.transform = `translate(calc(-50% + ${pose.x * scene.clientWidth * pose.z}px), calc(-50% + ${pose.y * scene.clientHeight * pose.z}px)) scale(${pose.z})`;
  $('#body-title').textContent = pose.name;
  document.querySelectorAll('[data-region]').forEach(b => { b.setAttribute('aria-pressed', String(b.dataset.region === region)); b.classList.toggle('selected', b.dataset.region === region); });
  document.querySelectorAll('.body-label').forEach(b => { b.hidden = region !== 'full'; });
  $('#region-detail').hidden = region === 'full';
  $('#region-description').textContent = region === 'heart' ? 'Frecuencia cardíaca · Presión arterial' : 'Frecuencia respiratoria · Saturación de oxígeno';
}
function notify(message) { clearTimeout(toastTimer); $('#toast').textContent = message; $('#toast').hidden = false; toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 4500); }
function showDialog(title, html) {
  if (!dialog.open) lastFocus = document.activeElement;
  $('#dialog-title').textContent = title; $('#dialog-content').innerHTML = html;
  if (!dialog.open) dialog.showModal();
}
function openMetric(id) {
  const m = METRICS.find(item => item.id === id); if (!m) return;
  selectRegion(m.region);
  showDialog(m.name, `<span class="demo-tag">LECTURA DE EJEMPLO</span><div class="dialog-card"><strong class="reading">${connections[id] ? m.value : '—'}</strong> ${m.unit}<p>${connections[id] ? 'Fuente simulada: ' + m.source : 'Fuente desconectada en la simulación.'}</p></div><p>${m.description}</p><div class="chart">${chart(m)}</div><p class="note">Valores ficticios y fijos. No son mediciones personales ni una evaluación médica.</p><button class="secondary-button" data-panel="devices">Ver fuente de datos →</button>`);
}
function checkinForm() {
  return `<p>Tu registro de hoy. Las respuestas se guardan solamente en este navegador para probar el recorrido.</p><form id="checkin-form"><label class="form-field">Horas de sueño<input type="number" name="hours" min="0" max="24" step="0.5" required value="${checkin?.hours ?? ''}" placeholder="Por ejemplo, 7.5"></label><label class="form-field">¿Cómo te sentís?<select name="mood" required><option value="">Seleccioná una opción</option>${['Muy bajo', 'Bajo', 'Neutral', 'Bueno', 'Muy bueno'].map(v => `<option ${checkin?.mood === v ? 'selected' : ''}>${v}</option>`).join('')}</select></label><label class="form-field">Estrés percibido<select name="stress" required><option value="">Seleccioná una opción</option>${['Bajo', 'Moderado', 'Alto'].map(v => `<option ${checkin?.stress === v ? 'selected' : ''}>${v}</option>`).join('')}</select></label><button type="submit" class="primary-button">Guardar registro</button><p class="note">Usá respuestas ficticias para esta demostración.</p></form>`;
}
function renderDevices() {
  return `<p>Probá cómo cambia el panel al desconectar una fuente simulada. Estos controles no se conectan a dispositivos reales.</p>${METRICS.map(m => `<div class="dialog-card device-row"><div><h3>${m.source}</h3><p>${m.name}</p><span class="status-pill">${connections[m.id] ? 'Demo disponible' : 'Sin conexión · Demo'}</span></div><button class="secondary-button" data-device="${m.id}" aria-pressed="${connections[m.id]}">${connections[m.id] ? 'Desconectar' : 'Conectar'}</button></div>`).join('')}`;
}
function historyPanel(metricId = 'heart', days = 7) {
  const m = METRICS.find(item => item.id === metricId);
  showDialog('Gráficas e historial', `<p>Series de ejemplo para recorrer la interfaz. Cada indicador conserva su propia escala y unidad.</p><label class="form-field">Indicador<select id="history-metric">${METRICS.filter(x => x.values).map(x => `<option value="${x.id}" ${x.id === metricId ? 'selected' : ''}>${x.name}</option>`).join('')}</select></label><div class="dialog-tabs"><button class="secondary-button" data-days="7" aria-pressed="${days === 7}">7 días</button><button class="secondary-button" data-days="3" aria-pressed="${days === 3}">Últimos 3 días</button></div><div id="history-data" data-days="${days}"><span class="tiny-label">${m.unit.toUpperCase()} · SERIE FICTICIA</span><div class="chart">${chart(m, days)}</div></div>`);
}
function openPanel(id) {
  const pages = {
    sleep: ['Sueño y descanso', `${checkin ? `<div class="dialog-card"><strong class="reading">${checkin.hours}</strong> horas<p>Registro de hoy · Declarado en este navegador</p></div>` : '<p>Todavía no completaste tu registro de sueño de hoy.</p>'}<p>Registrá las horas que descansaste junto con tu ánimo y estrés percibido.</p><button class="primary-button" data-panel="wellbeing">${checkin ? 'Editar' : 'Completar'} check-in</button>`],
    wellbeing: ['Check-in diario', checkinForm()],
    devices: ['Estado de sensores', renderDevices()],
    alerts: ['Alertas y actividad', `<p>No hay alertas clínicas evaluadas en esta muestra.</p><div class="dialog-card"><h3>${checkin ? 'Registro completado' : 'Registro diario pendiente'}</h3><p>${checkin ? 'Tus respuestas están guardadas en este navegador.' : 'Completá los tres campos de tu check-in para registrar tu rutina.'}</p><button class="text-button" data-panel="wellbeing">Abrir registro →</button></div><div class="dialog-card"><h3>Fuentes simuladas</h3><p>${Object.values(connections).filter(Boolean).length} de ${METRICS.length} fuentes disponibles en esta sesión.</p><button class="text-button" data-panel="devices">Revisar sensores →</button></div>`],
    assistant: ['Asistente de misión', `<span class="demo-tag">INTEGRACIÓN FUTURA</span><p>Este espacio está reservado para orientación contextual con fuentes revisadas. La demo permite acceder directamente a estas funciones:</p><div class="dialog-card"><button class="text-button" data-panel="wellbeing">Completar mi registro diario →</button></div><div class="dialog-card"><button class="text-button" data-panel="devices">Consultar las fuentes de los indicadores →</button></div><p class="note">El asistente conversacional todavía no está conectado.</p>`],
    information: ['Información del prototipo', '<p>SIMISA explora una interfaz personal de seguimiento para misiones espaciales. Corazón y pulmones son accesos a grupos de indicadores.</p><div class="dialog-card"><h3>Lecturas e ilustración</h3><p>Los valores son ejemplos fijos y la anatomía es conceptual. El mapa destaca la región seleccionada, sin inferir diagnósticos.</p></div><div class="dialog-card"><h3>Integración futura</h3><p>La integración con sensores y la trazabilidad de requisitos NASA están pendientes. La demo no declara certificación ni cumplimiento de NASA.</p></div><a class="text-button" href="docs/simisa/04-integracion-nasa-y-fuentes.md" target="_blank" rel="noopener">Abrir documentación y fuentes ↗</a>'],
    earth: ['Comunicación con la Tierra', '<span class="demo-tag">INTEGRACIÓN FUTURA</span><p>La demo funciona localmente. No hay un enlace de telemetría ni envío de registros fuera de este navegador.</p><div class="dialog-card"><h3>Diseño previsto</h3><p>Cola de sincronización, última recepción confirmada y latencia de enlace visibles para la tripulación.</p></div>'],
    profile: ['Perfil de tripulación', '<div class="dialog-card"><h3>Ana Torres</h3><p>Astronauta · Perfil ficticio de demostración</p></div><p>La selección de tripulación y la gestión de permisos se integrarán en una etapa posterior.</p>'],
    settings: ['Configuración', `<div class="dialog-card device-row"><div><h3>Reducir movimiento</h3><p>Usar cambios de vista instantáneos.</p></div><button id="toggle-motion" class="secondary-button" aria-pressed="${reduced}">${reduced ? 'Activado' : 'Desactivado'}</button></div><p class="note">La preferencia del sistema se aplica automáticamente al iniciar.</p>`]
  };
  if (id === 'history') { historyPanel(); return; }
  const page = pages[id]; if (page) showDialog(...page);
}
document.addEventListener('click', event => {
  const button = event.target.closest('button'); if (!button) return;
  if (button.dataset.panel) openPanel(button.dataset.panel);
  else if (button.dataset.region) selectRegion(button.dataset.region);
  else if (button.dataset.metric) openMetric(button.dataset.metric);
  else if (button.dataset.device) { connections[button.dataset.device] = !connections[button.dataset.device]; renderMetrics(); renderOverview(); const id = button.dataset.device; $('#dialog-content').innerHTML = renderDevices(); document.querySelector(`[data-device="${id}"]`).focus(); }
  else if (button.dataset.days) historyPanel($('#history-metric').value, Number(button.dataset.days));
  else if (button.dataset.action) { selectRegion('full'); document.querySelectorAll('.nav-item').forEach(b => { b.classList.toggle('active', b === button); b.removeAttribute('aria-current'); }); button.setAttribute('aria-current', 'page'); if (button.dataset.action === 'body') $('#body-stage').focus(); }
});
$('#region-more').addEventListener('click', () => openMetric(selectedRegion === 'heart' ? 'heart' : 'oxygen'));
$('.brand').addEventListener('click', event => { event.preventDefault(); document.querySelector('[data-action="home"]').click(); });
$('#body-stage').addEventListener('keydown', event => { if (event.key === 'Escape') selectRegion('full'); });
$('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { if (lastFocus?.isConnected) lastFocus.focus(); });
dialog.addEventListener('change', event => { if (event.target.id === 'history-metric') { historyPanel(event.target.value, Number($('#history-data').dataset.days)); $('#history-metric').focus(); } });
dialog.addEventListener('submit', event => {
  if (event.target.id !== 'checkin-form') return; event.preventDefault();
  const form = new FormData(event.target); checkin = { date: today(), hours: Number(form.get('hours')), mood: form.get('mood'), stress: form.get('stress') };
  let persisted = true; try { localStorage.setItem('simisa.checkin.v1', JSON.stringify(checkin)); } catch { persisted = false; }
  updateRoutine(); dialog.close(); notify(persisted ? 'Registro guardado. Completaste las 3 tareas de hoy.' : 'Registro disponible en esta sesión. El navegador no permitió guardarlo.');
});
function setMotion(value) { reduced = value; document.documentElement.classList.toggle('reduced-motion', value); const b = $('#toggle-motion'); if (b) { b.setAttribute('aria-pressed', value); b.textContent = value ? 'Activado' : 'Desactivado'; } }
dialog.addEventListener('click', event => { if (event.target.closest('#toggle-motion')) setMotion(!reduced); });
preference.addEventListener('change', event => setMotion(event.matches));
new ResizeObserver(() => selectRegion(selectedRegion)).observe($('#body-stage'));
$('#anatomy').addEventListener('error', () => { $('#image-status').hidden = false; $('#image-status').textContent = 'No se pudo cargar el cuerpo. Los botones de indicadores siguen disponibles.'; });
function updateClock() { $('#clock').textContent = new Intl.DateTimeFormat('es-AR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' }).format(new Date()) + ' UTC'; }
setMotion(reduced); renderMetrics(); renderOverview(); updateRoutine(); updateClock(); setInterval(updateClock, 60000);
