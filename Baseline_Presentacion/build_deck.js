const pptxgen = require('pptxgenjs');
const path = require('path');

const ICON = (name) => path.join(__dirname, 'icons', `${name}.png`);

// ---------- Palette ----------
const C = {
  primary: '1B4332',   // deep forest green
  primaryDark: '10281E',
  secondary: '7F5539',  // soil brown
  accent: '95D5B2',     // mint highlight
  cream: 'F5F7F5',
  white: 'FFFFFF',
  text: '2B2B2B',
  muted: '6B7A70',
};

const FONT_HEAD = 'Cambria';
const FONT_BODY = 'Calibri';

// ---------- Bilingual content ----------
const LANGS = {
  en: {
    fileOut: 'SMMyE_Baseline_EN_v2.pptx',
    title1: 'SMMyE', title2: 'Environmental and Soil Monitoring System',
    subtitle: 'for the Región Valles, Jalisco, Mexico',
    course: 'Software Configuration Management — Graduate Program',
    deliverable: 'Project Baseline v1.0',
    presenter: 'Ignacio Andrade Salazar — Project Manager',
    date: 'August 28, 2026',
    s2_title: 'Why This Matters',
    s2_items: [
      'The Región Valles lacks continuous, publicly accessible environmental and soil data.',
      'Farmers, researchers and local authorities need real-time insight they can actually understand — not raw sensor logs.',
      'Existing IoT monitoring platforms expose data, but rarely explain it in plain language.',
    ],
    s3_title: 'Objectives',
    s3_general_label: 'General Objective',
    s3_general: 'Develop and evaluate a web platform that integrates an AI agent (via MCP + LLM) to make the technical data produced by SMMyE\'s IoT nodes accessible and understandable to users of every technical level in the Región Valles.',
    s3_specific_label: 'Specific Objectives',
    s3_specific: [
      'Define functional & non-functional requirements (SRS)',
      'Design a scalable, secure system architecture',
      'Build the REST API, web platform and MCP server',
      'Validate usability with real users (target SUS score ≥ 70)',
    ],
    s4_title: 'Scope',
    s4_in_label: 'In Scope',
    s4_in: [
      'Continuous data reception & storage from IoT nodes',
      'Real-time visualization: tables, cards, charts',
      'Station, sensor & user administration',
      'Natural-language chat assistant — EcoFlow',
      'Initial deployment on CUValles nodes, Región Valles',
    ],
    s4_out_label: 'Out of Scope / Limitations',
    s4_out: [
      'Physical device control or actuation',
      'Remote sensor calibration / hardware config',
      'Predictive analytics or forecasting (future work)',
      'Automated external notifications (email/SMS)',
      'High availability / redundancy (single server)',
    ],
    s5_title: 'System Architecture',
    s5_subtitle: 'Five decoupled layers',
    s5_layers: [
      { icon: 'raspberrypi', name: 'Acquisition (IoT)', desc: 'Raspberry Pi 5 nodes with environmental & soil sensors' },
      { icon: 'server', name: 'Business Logic', desc: 'Laravel 10 REST API with JWT authentication' },
      { icon: 'database', name: 'Data', desc: 'MySQL 8 — relational storage of all system data' },
      { icon: 'desktop', name: 'Presentation (SPA)', desc: 'Vue 3 — monitoring, stats, admin & reports' },
      { icon: 'robot', name: 'Conversational AI', desc: 'n8n + MCP server + Ollama (local LLM)' },
    ],
    s6_title: 'IoT Sensor Network',
    s6_subtitle: 'Hardware provided & installed by CUValles — replicable to other regions',
    s6_groups: [
      { icon: 'wind', name: 'Air & Climate', vars: 'Temperature · Humidity · Pressure · CO₂ · Particulate matter · Rainfall · Wind speed & direction' },
      { icon: 'sun', name: 'Radiation', vars: 'UV radiation · Light intensity' },
      { icon: 'flask', name: 'Soil (Edaphological)', vars: 'Nitrogen (N) · Phosphorus (P) · Potassium (K)' },
    ],
    s7_title: 'Technology Stack',
    s7_rows: [
      ['Backend', 'PHP 8.2 + Laravel 10, JWT auth'],
      ['Database', 'MySQL 8'],
      ['Frontend', 'Vue 3 + Vite + Pinia + Tailwind CSS'],
      ['AI / Chat', 'n8n orchestrator + MCP server + Ollama (local LLM)'],
      ['Infrastructure', 'Docker + Docker Compose + Nginx'],
    ],
    s8_title: 'EcoFlow — The Conversational Assistant',
    s8_steps: [
      { icon: 'comments', label: 'User asks\na question' },
      { icon: 'network', label: 'n8n\norchestrates' },
      { icon: 'robot', label: 'Ollama LLM\npicks a tool' },
      { icon: 'toolbox', label: 'MCP server\nqueries data' },
      { icon: 'comments', label: 'Plain-language\nanswer' },
    ],
    s8_note: 'The LLM never touches the database directly — every query goes through read-only MCP tools.',
    s9_title: 'Team',
    s9_subtitle: 'Roles defined for this course exercise',
    s9_team: [
      { icon: 'usertie', name: 'Ignacio Andrade', role: 'Project Manager / SCM Lead' },
      { icon: 'code', name: 'Backend Developer', role: 'Laravel API & data layer' },
      { icon: 'laptopcode', name: 'Frontend Developer', role: 'Vue 3 SPA implementation' },
      { icon: 'paintbrush', name: 'UI / UX Designer', role: 'Wireframes & design system' },
      { icon: 'brain', name: 'AI / Automation Engineer', role: 'n8n, MCP, Ollama, RAG' },
      { icon: 'toolbox', name: 'DevOps / QA', role: 'Docker deploy, tests, audits' },
    ],
    s10_title: 'Timeline',
    s10_subtitle: '12-month project plan, with built-in contingency buffer',
    s10_phases: [
      { n: '1', label: 'Baseline &\nRequirements', weeks: 'Month 1', current: true },
      { n: '2', label: 'SCM Plan &\nConfig. ID', weeks: 'Month 2' },
      { n: '3', label: 'Architecture\n& UX/UI Design', weeks: 'Months 3–4' },
      { n: '4', label: 'Implementation', weeks: 'Months 5–8' },
      { n: '5', label: 'Testing &\nConfig. Audit', weeks: 'Months 9–10' },
      { n: '6', label: 'Buffer /\nContingency', weeks: 'Month 11', buffer: true },
      { n: '7', label: 'Final Delivery\n& Release', weeks: 'Month 12' },
    ],
    s11_title: 'Estimated Resources & Budget',
    s11_subtitle: 'Estimated using average Mexican market rates, 2026 (MXN) — monthly figures',
    s11_rows: [
      ['Project Manager (part-time)', '$10,000 / mo'],
      ['Backend Developer', '$18,000 / mo'],
      ['Frontend Developer', '$16,000 / mo'],
      ['UI / UX Designer (part-time)', '$12,000 / mo'],
      ['AI / Automation Engineer', '$20,000 / mo'],
      ['DevOps / QA (part-time)', '$9,000 / mo'],
      ['Server infrastructure (CUValles)', 'Provided — no direct cost'],
      ['GPU for local LLM inference (Ollama)', '$25,000 one-time'],
      ['Domain & SSL', '$500 / yr'],
    ],
    s11_total_label: 'Estimated team cost',
    s11_total: '≈ $85,000 MXN / month',
    s11_annual: '≈ $1,020,000 MXN for the full 12-month project (team only)',
    s12_title: 'Thank You',
    s12_subtitle: 'Next milestone: SCM Plan & Configuration Identification — Month 2',
    s12_contact: 'Ignacio Andrade Salazar   ·   ignacio.andrade2285@alumnos.udg.mx',
  },
  es: {
    fileOut: 'SMMyE_Baseline_ES_v2.pptx',
    title1: 'SMMyE', title2: 'Sistema de Monitoreo Medioambiental y Edafológico',
    subtitle: 'para la Región Valles, Jalisco, México',
    course: 'Administración de la Configuración del Software — Posgrado',
    deliverable: 'Baseline del Proyecto v1.0',
    presenter: 'Ignacio Andrade Salazar — Project Manager',
    date: '28 de agosto de 2026',
    s2_title: '¿Por Qué Es Importante?',
    s2_items: [
      'La Región Valles carece de datos ambientales y edafológicos continuos y accesibles al público.',
      'Agricultores, investigadores y autoridades locales necesitan información comprensible en tiempo real, no solo registros crudos de sensores.',
      'Las plataformas IoT existentes exponen datos, pero rara vez los explican en lenguaje natural.',
    ],
    s3_title: 'Objetivos',
    s3_general_label: 'Objetivo General',
    s3_general: 'Desarrollar y evaluar una plataforma web que integra un agente inteligente (mediante MCP + LLM) para facilitar el acceso y comprensión de los datos técnicos generados por los nodos IoT del SMMyE a usuarios de distintos niveles de conocimiento en la Región Valles.',
    s3_specific_label: 'Objetivos Específicos',
    s3_specific: [
      'Definir los requerimientos funcionales y no funcionales (ERS)',
      'Diseñar una arquitectura escalable y segura',
      'Construir la API REST, la plataforma web y el servidor MCP',
      'Validar la usabilidad con usuarios reales (meta: SUS ≥ 70)',
    ],
    s4_title: 'Alcance',
    s4_in_label: 'Dentro del Alcance',
    s4_in: [
      'Recepción y almacenamiento continuo de datos de nodos IoT',
      'Visualización en tiempo real: tablas, tarjetas, gráficos',
      'Administración de estaciones, sensores y usuarios',
      'Asistente de chat en lenguaje natural — EcoFlow',
      'Despliegue inicial en nodos de CUValles, Región Valles',
    ],
    s4_out_label: 'Fuera de Alcance / Limitaciones',
    s4_out: [
      'Control o actuación sobre dispositivos físicos',
      'Calibración remota / configuración de hardware',
      'Analítica predictiva o pronósticos (trabajo futuro)',
      'Notificaciones externas automatizadas (email/SMS)',
      'Alta disponibilidad / redundancia (un solo servidor)',
    ],
    s5_title: 'Arquitectura del Sistema',
    s5_subtitle: 'Cinco capas desacopladas',
    s5_layers: [
      { icon: 'raspberrypi', name: 'Adquisición (IoT)', desc: 'Nodos Raspberry Pi 5 con sensores medioambientales y edafológicos' },
      { icon: 'server', name: 'Lógica de Negocio', desc: 'API REST en Laravel 10 con autenticación JWT' },
      { icon: 'database', name: 'Datos', desc: 'MySQL 8 — almacenamiento relacional de todo el sistema' },
      { icon: 'desktop', name: 'Presentación (SPA)', desc: 'Vue 3 — monitoreo, estadísticas, administración y reportes' },
      { icon: 'robot', name: 'Inteligencia Conversacional', desc: 'n8n + servidor MCP + Ollama (LLM local)' },
    ],
    s6_title: 'Red de Sensores IoT',
    s6_subtitle: 'Hardware provisto e instalado por CUValles — replicable a otras regiones',
    s6_groups: [
      { icon: 'wind', name: 'Aire y Clima', vars: 'Temperatura · Humedad · Presión · CO₂ · Material particulado · Lluvia · Velocidad y dirección del viento' },
      { icon: 'sun', name: 'Radiación', vars: 'Radiación UV · Intensidad de luz' },
      { icon: 'flask', name: 'Suelo (Edafológico)', vars: 'Nitrógeno (N) · Fósforo (P) · Potasio (K)' },
    ],
    s7_title: 'Stack Tecnológico',
    s7_rows: [
      ['Backend', 'PHP 8.2 + Laravel 10, autenticación JWT'],
      ['Base de datos', 'MySQL 8'],
      ['Frontend', 'Vue 3 + Vite + Pinia + Tailwind CSS'],
      ['IA / Chat', 'Orquestador n8n + servidor MCP + Ollama (LLM local)'],
      ['Infraestructura', 'Docker + Docker Compose + Nginx'],
    ],
    s8_title: 'EcoFlow — El Asistente Conversacional',
    s8_steps: [
      { icon: 'comments', label: 'Usuario hace\nuna pregunta' },
      { icon: 'network', label: 'n8n\norquesta' },
      { icon: 'robot', label: 'Ollama LLM\nelige herramienta' },
      { icon: 'toolbox', label: 'Servidor MCP\nconsulta datos' },
      { icon: 'comments', label: 'Respuesta en\nlenguaje natural' },
    ],
    s8_note: 'El LLM nunca accede directamente a la base de datos — toda consulta pasa por herramientas MCP de solo lectura.',
    s9_title: 'Equipo',
    s9_subtitle: 'Roles definidos para este ejercicio del curso',
    s9_team: [
      { icon: 'usertie', name: 'Ignacio Andrade', role: 'Project Manager / Líder SCM' },
      { icon: 'code', name: 'Desarrollador Backend', role: 'API Laravel y capa de datos' },
      { icon: 'laptopcode', name: 'Desarrollador Frontend', role: 'Implementación de SPA en Vue 3' },
      { icon: 'paintbrush', name: 'Diseñador UI / UX', role: 'Wireframes y sistema de diseño' },
      { icon: 'brain', name: 'Ingeniero de IA / Automatización', role: 'n8n, MCP, Ollama, RAG' },
      { icon: 'toolbox', name: 'DevOps / QA', role: 'Despliegue Docker, pruebas, auditorías' },
    ],
    s10_title: 'Cronograma',
    s10_subtitle: 'Plan de proyecto de 12 meses, con margen de contingencia incluido',
    s10_phases: [
      { n: '1', label: 'Baseline y\nRequerimientos', weeks: 'Mes 1', current: true },
      { n: '2', label: 'Plan SCM e\nIdent. de Config.', weeks: 'Mes 2' },
      { n: '3', label: 'Arquitectura\ny Diseño UX/UI', weeks: 'Meses 3–4' },
      { n: '4', label: 'Implementación', weeks: 'Meses 5–8' },
      { n: '5', label: 'Pruebas y\nAuditoría', weeks: 'Meses 9–10' },
      { n: '6', label: 'Margen /\nContingencia', weeks: 'Mes 11', buffer: true },
      { n: '7', label: 'Entrega Final\ny Liberación', weeks: 'Mes 12' },
    ],
    s11_title: 'Recursos y Presupuesto Estimado',
    s11_subtitle: 'Estimado con base en precios promedio de mercado en México, 2026 (MXN) — cifras mensuales',
    s11_rows: [
      ['Project Manager (medio tiempo)', '$10,000 / mes'],
      ['Desarrollador Backend', '$18,000 / mes'],
      ['Desarrollador Frontend', '$16,000 / mes'],
      ['Diseñador UI / UX (medio tiempo)', '$12,000 / mes'],
      ['Ingeniero de IA / Automatización', '$20,000 / mes'],
      ['DevOps / QA (medio tiempo)', '$9,000 / mes'],
      ['Infraestructura de servidor (CUValles)', 'Provisto — sin costo directo'],
      ['GPU para inferencia local (Ollama)', '$25,000 pago único'],
      ['Dominio y SSL', '$500 / año'],
    ],
    s11_total_label: 'Costo estimado del equipo',
    s11_total: '≈ $85,000 MXN / mes',
    s11_annual: '≈ $1,020,000 MXN para el proyecto completo de 12 meses (solo equipo)',
    s12_title: 'Gracias',
    s12_subtitle: 'Siguiente hito: Plan SCM e Identificación de Configuración — Mes 2',
    s12_contact: 'Ignacio Andrade Salazar   ·   ignacio.andrade2285@alumnos.udg.mx',
  },
};

function iconCircle(slide, x, y, d, iconName, bg) {
  slide.addShape('ellipse', { x, y, w: d, h: d, fill: { color: bg }, line: { type: 'none' } });
  const pad = d * 0.24;
  slide.addImage({ path: ICON(iconName), x: x + pad / 2, y: y + pad / 2, w: d - pad, h: d - pad });
}

function footer(slide, t, pageNum) {
  slide.addText(t.title1 + '  |  ' + t.deliverable, {
    x: 0.5, y: 7.15, w: 8, h: 0.3, fontFace: FONT_BODY, fontSize: 9, color: C.muted, isTextBox: true, margin: 0,
  });
  slide.addText(String(pageNum), {
    x: 12.6, y: 7.15, w: 0.5, h: 0.3, fontFace: FONT_BODY, fontSize: 9, color: C.muted, align: 'right', isTextBox: true, margin: 0,
  });
}

function build(lang) {
  const t = LANGS[lang];
  const p = new pptxgen();
  p.layout = 'LAYOUT_WIDE'; // 13.3 x 7.5
  const W = 13.333, H = 7.5;
  let page = 1;

  // ---------- Slide 1: Title ----------
  {
    const s = p.addSlide();
    s.background = { color: C.primary };
    // decorative circles motif
    s.addShape('ellipse', { x: 10.7, y: -1.8, w: 5, h: 5, fill: { color: C.primaryDark }, line: { type: 'none' } });
    s.addShape('ellipse', { x: -1.6, y: 5.2, w: 4, h: 4, fill: { color: C.primaryDark }, line: { type: 'none' } });
    iconCircle(s, 0.9, 0.75, 0.9, 'seedling_white', C.secondary);
    s.addText(t.title1, { x: 1.95, y: 0.65, w: 8, h: 1.0, fontFace: FONT_HEAD, fontSize: 44, bold: true, color: C.white, isTextBox: true, margin: 0 });
    s.addText(t.title2, { x: 0.9, y: 2.35, w: 11.2, h: 0.9, fontFace: FONT_HEAD, fontSize: 26, bold: true, color: C.accent, isTextBox: true, margin: 0 });
    s.addText(t.subtitle, { x: 0.9, y: 3.15, w: 11.2, h: 0.5, fontFace: FONT_BODY, fontSize: 16, italic: true, color: C.cream, isTextBox: true, margin: 0 });

    s.addShape('rect', { x: 0.9, y: 4.9, w: 11.53, h: 0.02, fill: { color: 'FFFFFF' }, line: { type: 'none' }, fill: { color: '2F513F' } });
    s.addText(t.course, { x: 0.9, y: 5.15, w: 11.2, h: 0.4, fontFace: FONT_BODY, fontSize: 14, color: C.white, isTextBox: true, margin: 0 });
    s.addText(t.deliverable, { x: 0.9, y: 5.55, w: 11.2, h: 0.4, fontFace: FONT_BODY, fontSize: 14, bold: true, color: C.accent, isTextBox: true, margin: 0 });
    s.addText(t.presenter, { x: 0.9, y: 6.35, w: 8, h: 0.35, fontFace: FONT_BODY, fontSize: 12, color: C.cream, isTextBox: true, margin: 0 });
    s.addText(t.date, { x: 0.9, y: 6.68, w: 8, h: 0.35, fontFace: FONT_BODY, fontSize: 12, color: C.cream, isTextBox: true, margin: 0 });
  }

  // ---------- Slide 2: Why This Matters ----------
  {
    const s = p.addSlide();
    s.background = { color: C.white };
    s.addShape('rect', { x: 0, y: 0, w: W, h: 1.5, fill: { color: C.primary }, line: { type: 'none' } });
    iconCircle(s, 0.6, 0.35, 0.8, 'globe', C.secondary);
    s.addText(t.s2_title, { x: 1.7, y: 0.42, w: 10, h: 0.7, fontFace: FONT_HEAD, fontSize: 30, bold: true, color: C.white, isTextBox: true, margin: 0 });

    const cardY = 2.0, cardH = 1.4, gap = 0.35;
    t.s2_items.forEach((txt, i) => {
      const y = cardY + i * (cardH + gap);
      s.addShape('roundRect', { x: 0.9, y, w: 11.53, h: cardH, rectRadius: 0.12, fill: { color: C.cream }, line: { type: 'none' }, shadow: { type: 'outer', color: '000000', opacity: 0.15, blur: 6, offset: 2, angle: 90 } });
      s.addShape('ellipse', { x: 1.2, y: y + cardH / 2 - 0.18, w: 0.36, h: 0.36, fill: { color: C.primary }, line: { type: 'none' } });
      s.addText(String(i + 1), { x: 1.2, y: y + cardH / 2 - 0.18, w: 0.36, h: 0.36, fontFace: FONT_BODY, fontSize: 14, bold: true, color: C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
      s.addText(txt, { x: 1.85, y: y + 0.15, w: 10.3, h: cardH - 0.3, fontFace: FONT_BODY, fontSize: 15, color: C.text, valign: 'middle', isTextBox: true, margin: 0 });
    });
    footer(s, t, page++);
  }

  // ---------- Slide 3: Objectives ----------
  {
    const s = p.addSlide();
    s.background = { color: C.white };
    s.addShape('rect', { x: 0, y: 0, w: W, h: 1.5, fill: { color: C.primary }, line: { type: 'none' } });
    iconCircle(s, 0.6, 0.35, 0.8, 'bullseye', C.secondary);
    s.addText(t.s3_title, { x: 1.7, y: 0.42, w: 10, h: 0.7, fontFace: FONT_HEAD, fontSize: 30, bold: true, color: C.white, isTextBox: true, margin: 0 });

    s.addShape('roundRect', { x: 0.9, y: 1.9, w: 11.53, h: 1.7, rectRadius: 0.12, fill: { color: C.primary }, line: { type: 'none' } });
    s.addText(t.s3_general_label.toUpperCase(), { x: 1.2, y: 2.05, w: 11, h: 0.35, fontFace: FONT_BODY, fontSize: 12, bold: true, color: C.accent, isTextBox: true, margin: 0, charSpacing: 1 });
    s.addText(t.s3_general, { x: 1.2, y: 2.4, w: 10.9, h: 1.1, fontFace: FONT_BODY, fontSize: 13.5, color: C.white, isTextBox: true, margin: 0, valign: 'top' });

    s.addText(t.s3_specific_label.toUpperCase(), { x: 0.9, y: 3.85, w: 6, h: 0.35, fontFace: FONT_BODY, fontSize: 12, bold: true, color: C.secondary, isTextBox: true, margin: 0, charSpacing: 1 });

    const colW = 5.55, colGap = 0.43, rowH = 1.05, rowGap = 0.28, startY = 4.3;
    t.s3_specific.forEach((txt, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = 0.9 + col * (colW + colGap);
      const y = startY + row * (rowH + rowGap);
      s.addShape('roundRect', { x, y, w: colW, h: rowH, rectRadius: 0.1, fill: { color: C.cream }, line: { type: 'none' } });
      s.addShape('ellipse', { x: x + 0.22, y: y + rowH / 2 - 0.16, w: 0.32, h: 0.32, fill: { color: C.accent }, line: { type: 'none' } });
      s.addText(String(i + 1), { x: x + 0.22, y: y + rowH / 2 - 0.16, w: 0.32, h: 0.32, fontFace: FONT_BODY, fontSize: 12, bold: true, color: C.primary, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
      s.addText(txt, { x: x + 0.7, y: y + 0.08, w: colW - 0.9, h: rowH - 0.16, fontFace: FONT_BODY, fontSize: 12.5, color: C.text, valign: 'middle', isTextBox: true, margin: 0 });
    });
    footer(s, t, page++);
  }

  // ---------- Slide 4: Scope (two column) ----------
  {
    const s = p.addSlide();
    s.background = { color: C.white };
    s.addShape('rect', { x: 0, y: 0, w: W, h: 1.5, fill: { color: C.primary }, line: { type: 'none' } });
    iconCircle(s, 0.6, 0.35, 0.8, 'check', C.secondary);
    s.addText(t.s4_title, { x: 1.7, y: 0.42, w: 10, h: 0.7, fontFace: FONT_HEAD, fontSize: 30, bold: true, color: C.white, isTextBox: true, margin: 0 });

    const colW = 5.55, gap = 0.43, top = 1.95, colH = 5.05;
    // In scope
    s.addShape('roundRect', { x: 0.9, y: top, w: colW, h: colH, rectRadius: 0.12, fill: { color: 'EAF4EC' }, line: { type: 'none' } });
    iconCircle(s, 1.15, top + 0.25, 0.55, 'check', C.primary);
    s.addText(t.s4_in_label, { x: 1.85, y: top + 0.32, w: 4.4, h: 0.45, fontFace: FONT_HEAD, fontSize: 16, bold: true, color: C.primary, isTextBox: true, margin: 0 });
    t.s4_in.forEach((txt, i) => {
      s.addText(txt, { x: 1.15, y: top + 1.05 + i * 0.75, w: colW - 0.5, h: 0.7, fontFace: FONT_BODY, fontSize: 12.5, color: C.text, bullet: { code: '2713', color: C.primary }, valign: 'top', isTextBox: true, margin: 0 });
    });
    // Out of scope
    const x2 = 0.9 + colW + gap;
    s.addShape('roundRect', { x: x2, y: top, w: colW, h: colH, rectRadius: 0.12, fill: { color: 'F3EBE4' }, line: { type: 'none' } });
    iconCircle(s, x2 + 0.25, top + 0.25, 0.55, 'times', C.cream);
    s.addText(t.s4_out_label, { x: x2 + 0.95, y: top + 0.32, w: 4.4, h: 0.45, fontFace: FONT_HEAD, fontSize: 16, bold: true, color: C.secondary, isTextBox: true, margin: 0 });
    t.s4_out.forEach((txt, i) => {
      s.addText(txt, { x: x2 + 0.25, y: top + 1.05 + i * 0.75, w: colW - 0.5, h: 0.7, fontFace: FONT_BODY, fontSize: 12.5, color: C.text, bullet: { code: '2717', color: C.secondary }, valign: 'top', isTextBox: true, margin: 0 });
    });
    footer(s, t, page++);
  }

  // ---------- Slide 5: Architecture ----------
  {
    const s = p.addSlide();
    s.background = { color: C.white };
    s.addShape('rect', { x: 0, y: 0, w: W, h: 1.5, fill: { color: C.primary }, line: { type: 'none' } });
    iconCircle(s, 0.6, 0.35, 0.8, 'network', C.secondary);
    s.addText(t.s5_title, { x: 1.7, y: 0.3, w: 10, h: 0.6, fontFace: FONT_HEAD, fontSize: 28, bold: true, color: C.white, isTextBox: true, margin: 0 });
    s.addText(t.s5_subtitle, { x: 1.7, y: 0.85, w: 10, h: 0.4, fontFace: FONT_BODY, fontSize: 13, italic: true, color: C.cream, isTextBox: true, margin: 0 });

    const rowH = 0.92, gap = 0.14, top = 1.85;
    t.s5_layers.forEach((L, i) => {
      const y = top + i * (rowH + gap);
      const shade = i % 2 === 0 ? C.primary : '2F5D45';
      s.addShape('roundRect', { x: 0.9, y, w: 11.53, h: rowH, rectRadius: 0.1, fill: { color: shade }, line: { type: 'none' } });
      iconCircle(s, 1.12, y + rowH / 2 - 0.3, 0.6, L.icon, C.secondary);
      s.addText(`${i + 1}. ${L.name}`, { x: 2.0, y: y + 0.1, w: 3.6, h: rowH - 0.2, fontFace: FONT_HEAD, fontSize: 14.5, bold: true, color: C.white, valign: 'middle', isTextBox: true, margin: 0 });
      s.addText(L.desc, { x: 5.7, y: y + 0.1, w: 6.5, h: rowH - 0.2, fontFace: FONT_BODY, fontSize: 12.5, color: C.cream, valign: 'middle', isTextBox: true, margin: 0 });
    });
    footer(s, t, page++);
  }

  // ---------- Slide 6: Sensor network ----------
  {
    const s = p.addSlide();
    s.background = { color: C.white };
    s.addShape('rect', { x: 0, y: 0, w: W, h: 1.5, fill: { color: C.primary }, line: { type: 'none' } });
    iconCircle(s, 0.6, 0.35, 0.8, 'raspberrypi', C.secondary);
    s.addText(t.s6_title, { x: 1.7, y: 0.3, w: 10.2, h: 0.6, fontFace: FONT_HEAD, fontSize: 28, bold: true, color: C.white, isTextBox: true, margin: 0 });
    s.addText(t.s6_subtitle, { x: 1.7, y: 0.85, w: 10.2, h: 0.4, fontFace: FONT_BODY, fontSize: 12.5, italic: true, color: C.cream, isTextBox: true, margin: 0 });

    const cardW = 3.62, gap = 0.33, top = 2.05, cardH = 4.5;
    t.s6_groups.forEach((G, i) => {
      const x = 0.9 + i * (cardW + gap);
      s.addShape('roundRect', { x, y: top, w: cardW, h: cardH, rectRadius: 0.14, fill: { color: C.cream }, line: { type: 'none' }, shadow: { type: 'outer', color: '000000', opacity: 0.12, blur: 6, offset: 2, angle: 90 } });
      iconCircle(s, x + cardW / 2 - 0.5, top + 0.4, 1.0, G.icon, C.primary);
      s.addText(G.name, { x: x + 0.2, y: top + 1.65, w: cardW - 0.4, h: 0.6, fontFace: FONT_HEAD, fontSize: 16, bold: true, color: C.primary, align: 'center', isTextBox: true, margin: 0 });
      s.addText(G.vars, { x: x + 0.35, y: top + 2.35, w: cardW - 0.7, h: cardH - 2.55, fontFace: FONT_BODY, fontSize: 12, color: C.text, align: 'center', valign: 'top', isTextBox: true, margin: 0 });
    });
    footer(s, t, page++);
  }

  // ---------- Slide 7: Tech Stack ----------
  {
    const s = p.addSlide();
    s.background = { color: C.white };
    s.addShape('rect', { x: 0, y: 0, w: W, h: 1.5, fill: { color: C.primary }, line: { type: 'none' } });
    iconCircle(s, 0.6, 0.35, 0.8, 'toolbox', C.secondary);
    s.addText(t.s7_title, { x: 1.7, y: 0.42, w: 10, h: 0.7, fontFace: FONT_HEAD, fontSize: 30, bold: true, color: C.white, isTextBox: true, margin: 0 });

    const icons = ['server', 'database', 'desktop', 'robot', 'network'];
    const rowH = 0.85, gap = 0.16, top = 1.95;
    t.s7_rows.forEach((row, i) => {
      const y = top + i * (rowH + gap);
      s.addShape('roundRect', { x: 0.9, y, w: 11.53, h: rowH, rectRadius: 0.1, fill: { color: i % 2 === 0 ? C.cream : 'EAF0EA' }, line: { type: 'none' } });
      iconCircle(s, 1.1, y + rowH / 2 - 0.28, 0.56, icons[i], C.primary);
      s.addText(row[0], { x: 1.95, y: y + 0.08, w: 3.1, h: rowH - 0.16, fontFace: FONT_HEAD, fontSize: 14, bold: true, color: C.primary, valign: 'middle', isTextBox: true, margin: 0 });
      s.addText(row[1], { x: 5.2, y: y + 0.08, w: 7.0, h: rowH - 0.16, fontFace: FONT_BODY, fontSize: 13, color: C.text, valign: 'middle', isTextBox: true, margin: 0 });
    });
    footer(s, t, page++);
  }

  // ---------- Slide 8: EcoFlow flow ----------
  {
    const s = p.addSlide();
    s.background = { color: C.primary };
    iconCircle(s, 0.6, 0.35, 0.8, 'robot', C.secondary);
    s.addText(t.s8_title, { x: 1.7, y: 0.42, w: 10.5, h: 0.7, fontFace: FONT_HEAD, fontSize: 28, bold: true, color: C.white, isTextBox: true, margin: 0 });

    const n = t.s8_steps.length;
    const boxW = 1.9, gap = (11.53 - n * boxW) / (n - 1), top = 2.6, y0 = 0.9 + top;
    const cy = top + 0.55;
    // connecting line
    s.addShape('line', { x: 0.9 + boxW / 2, y: cy, w: 11.53 - boxW, h: 0, line: { color: C.accent, width: 2, dashType: 'dash' } });
    t.s8_steps.forEach((st, i) => {
      const x = 0.9 + i * (boxW + gap);
      iconCircle(s, x + boxW / 2 - 0.55, top, 1.1, st.icon, i % 2 === 0 ? C.secondary : '2F5D45');
      s.addText(st.label, { x: x - 0.15, y: top + 1.25, w: boxW + 0.3, h: 0.9, fontFace: FONT_BODY, fontSize: 11.5, bold: true, color: C.white, align: 'center', valign: 'top', isTextBox: true, margin: 0 });
    });
    s.addShape('roundRect', { x: 1.4, y: 5.7, w: 10.53, h: 0.9, rectRadius: 0.1, fill: { color: C.primaryDark }, line: { type: 'none' } });
    s.addText(t.s8_note, { x: 1.7, y: 5.7, w: 9.93, h: 0.9, fontFace: FONT_BODY, fontSize: 12.5, italic: true, color: C.accent, valign: 'middle', align: 'center', isTextBox: true, margin: 0 });
    footer(s, t, page++);
  }

  // ---------- Slide 9: Team ----------
  {
    const s = p.addSlide();
    s.background = { color: C.white };
    s.addShape('rect', { x: 0, y: 0, w: W, h: 1.5, fill: { color: C.primary }, line: { type: 'none' } });
    iconCircle(s, 0.6, 0.35, 0.8, 'usertie', C.secondary);
    s.addText(t.s9_title, { x: 1.7, y: 0.3, w: 10, h: 0.6, fontFace: FONT_HEAD, fontSize: 28, bold: true, color: C.white, isTextBox: true, margin: 0 });
    s.addText(t.s9_subtitle, { x: 1.7, y: 0.85, w: 10, h: 0.4, fontFace: FONT_BODY, fontSize: 12.5, italic: true, color: C.cream, isTextBox: true, margin: 0 });

    const nMem = t.s9_team.length;
    const cardGap9 = 0.18;
    const cardW = (11.53 - (nMem - 1) * cardGap9) / nMem, top = 2.1, cardH = 4.3;
    t.s9_team.forEach((mem, i) => {
      const x = 0.9 + i * (cardW + cardGap9);
      s.addShape('roundRect', { x, y: top, w: cardW, h: cardH, rectRadius: 0.12, fill: { color: C.cream }, line: { type: 'none' }, shadow: { type: 'outer', color: '000000', opacity: 0.12, blur: 5, offset: 2, angle: 90 } });
      iconCircle(s, x + cardW / 2 - 0.4, top + 0.32, 0.8, mem.icon, C.primary);
      s.addText(mem.name, { x: x + 0.08, y: top + 1.32, w: cardW - 0.16, h: 0.85, fontFace: FONT_HEAD, fontSize: 11.5, bold: true, color: C.primary, align: 'center', valign: 'top', isTextBox: true, margin: 0 });
      s.addText(mem.role, { x: x + 0.12, y: top + 2.3, w: cardW - 0.24, h: cardH - 2.45, fontFace: FONT_BODY, fontSize: 10, color: C.text, align: 'center', valign: 'top', isTextBox: true, margin: 0 });
    });
    footer(s, t, page++);
  }

  // ---------- Slide 10: Timeline ----------
  {
    const s = p.addSlide();
    s.background = { color: C.white };
    s.addShape('rect', { x: 0, y: 0, w: W, h: 1.5, fill: { color: C.primary }, line: { type: 'none' } });
    iconCircle(s, 0.6, 0.35, 0.8, 'calendar', C.secondary);
    s.addText(t.s10_title, { x: 1.7, y: 0.3, w: 10, h: 0.6, fontFace: FONT_HEAD, fontSize: 28, bold: true, color: C.white, isTextBox: true, margin: 0 });
    s.addText(t.s10_subtitle, { x: 1.7, y: 0.85, w: 10, h: 0.4, fontFace: FONT_BODY, fontSize: 12.5, italic: true, color: C.cream, isTextBox: true, margin: 0 });

    const n = t.s10_phases.length;
    const gap10 = 0.13;
    const cardW = (11.53 - (n - 1) * gap10) / n, top = 2.3, cardH = 3.9;
    const cy = top + 0.4;
    s.addShape('line', { x: 0.9 + cardW / 2, y: cy, w: 11.53 - cardW, h: 0, line: { color: 'CBD9CE', width: 2 } });
    t.s10_phases.forEach((ph, i) => {
      const x = 0.9 + i * (cardW + gap10);
      const isBuffer = !!ph.buffer;
      const bg = ph.current ? C.secondary : (isBuffer ? C.accent : C.primary);
      s.addShape('ellipse', { x: x + cardW / 2 - 0.29, y: top, w: 0.58, h: 0.58, fill: { color: bg }, line: { type: 'none' } });
      if (isBuffer) {
        const d = 0.34;
        s.addImage({ path: ICON('hourglass'), x: x + cardW / 2 - d / 2, y: top + 0.29 - d / 2, w: d, h: d });
      } else {
        s.addText(ph.n, { x: x + cardW / 2 - 0.29, y: top, w: 0.58, h: 0.58, fontFace: FONT_HEAD, fontSize: 18, bold: true, color: C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
      }
      s.addShape('roundRect', { x, y: top + 0.88, w: cardW, h: cardH - 0.88, rectRadius: 0.1, fill: { color: ph.current ? 'F3EBE4' : (isBuffer ? 'FBF6E9' : C.cream) }, line: { type: 'none' } });
      s.addText(ph.label, { x: x + 0.06, y: top + 1.02, w: cardW - 0.12, h: 1.3, fontFace: FONT_BODY, fontSize: 10, bold: true, color: C.text, align: 'center', valign: 'top', isTextBox: true, margin: 0 });
      s.addText(ph.weeks, { x: x + 0.06, y: top + cardH - 0.62, w: cardW - 0.12, h: 0.5, fontFace: FONT_BODY, fontSize: 9.5, italic: true, color: C.muted, align: 'center', isTextBox: true, margin: 0 });
    });
    footer(s, t, page++);
  }

  // ---------- Slide 11: Budget ----------
  {
    const s = p.addSlide();
    s.background = { color: C.white };
    s.addShape('rect', { x: 0, y: 0, w: W, h: 1.5, fill: { color: C.primary }, line: { type: 'none' } });
    iconCircle(s, 0.6, 0.35, 0.8, 'moneybill', C.secondary);
    s.addText(t.s11_title, { x: 1.7, y: 0.3, w: 10.5, h: 0.6, fontFace: FONT_HEAD, fontSize: 26, bold: true, color: C.white, isTextBox: true, margin: 0 });
    s.addText(t.s11_subtitle, { x: 1.7, y: 0.85, w: 10.5, h: 0.4, fontFace: FONT_BODY, fontSize: 12, italic: true, color: C.cream, isTextBox: true, margin: 0 });

    const rowH = 0.4, top = 1.75;
    t.s11_rows.forEach((row, i) => {
      const y = top + i * rowH;
      s.addShape('rect', { x: 0.9, y, w: 11.53, h: rowH, fill: { color: i % 2 === 0 ? C.cream : C.white }, line: { type: 'none' } });
      s.addText(row[0], { x: 1.15, y, w: 8.2, h: rowH, fontFace: FONT_BODY, fontSize: 11.5, color: C.text, valign: 'middle', isTextBox: true, margin: 0 });
      s.addText(row[1], { x: 9.3, y, w: 3.0, h: rowH, fontFace: FONT_BODY, fontSize: 11.5, bold: true, color: C.primary, valign: 'middle', align: 'right', isTextBox: true, margin: 0 });
    });
    const totalY = top + t.s11_rows.length * rowH + 0.2;
    s.addShape('roundRect', { x: 0.9, y: totalY, w: 11.53, h: 0.6, rectRadius: 0.1, fill: { color: C.secondary }, line: { type: 'none' } });
    s.addText(t.s11_total_label, { x: 1.15, y: totalY, w: 7, h: 0.6, fontFace: FONT_HEAD, fontSize: 14, bold: true, color: C.white, valign: 'middle', isTextBox: true, margin: 0 });
    s.addText(t.s11_total, { x: 8.3, y: totalY, w: 4.0, h: 0.6, fontFace: FONT_HEAD, fontSize: 15, bold: true, color: C.white, valign: 'middle', align: 'right', isTextBox: true, margin: 0 });
    s.addText(t.s11_annual, { x: 0.9, y: totalY + 0.68, w: 11.53, h: 0.3, fontFace: FONT_BODY, fontSize: 11, italic: true, color: C.muted, align: 'center', isTextBox: true, margin: 0 });
    footer(s, t, page++);
  }

  // ---------- Slide 12: Closing ----------
  {
    const s = p.addSlide();
    s.background = { color: C.primary };
    s.addShape('ellipse', { x: 10.7, y: -1.8, w: 5, h: 5, fill: { color: C.primaryDark }, line: { type: 'none' } });
    s.addShape('ellipse', { x: -1.6, y: 5.2, w: 4, h: 4, fill: { color: C.primaryDark }, line: { type: 'none' } });
    iconCircle(s, W / 2 - 0.55, 2.0, 1.1, 'leaf', C.accent);
    s.addText(t.s12_title, { x: 0, y: 3.35, w: W, h: 0.9, fontFace: FONT_HEAD, fontSize: 40, bold: true, color: C.white, align: 'center', isTextBox: true, margin: 0 });
    s.addText(t.s12_subtitle, { x: 0.9, y: 4.3, w: 11.53, h: 0.5, fontFace: FONT_BODY, fontSize: 15, italic: true, color: C.accent, align: 'center', isTextBox: true, margin: 0 });
    s.addText(t.s12_contact, { x: 0.9, y: 5.9, w: 11.53, h: 0.4, fontFace: FONT_BODY, fontSize: 13, color: C.cream, align: 'center', isTextBox: true, margin: 0 });
  }

  return p.writeFile({ fileName: path.join(__dirname, t.fileOut) });
}

(async () => {
  await build('en');
  console.log('EN done');
  await build('es');
  console.log('ES done');
})();
