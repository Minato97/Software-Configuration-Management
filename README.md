# SMMyE — Sistema de Monitoreo Medioambiental y Edafológico

Plataforma web para adquirir, almacenar, visualizar e interpretar datos ambientales y edafológicos capturados por nodos IoT distribuidos en la Región Valles, Jalisco. Integra un asistente conversacional llamado **EcoFlow**, que combina un modelo de lenguaje local (Ollama) con un servidor MCP para responder preguntas en lenguaje natural sobre los datos reales del sistema.

## Contexto académico

| | |
|---|---|
| **Materia** | Administración de la Configuración del Software |
| **Programa** | Maestría en Ingeniería de Software |
| **Institución** | Universidad de Guadalajara — CUValles |
| **Profesor** | Dr. Omar Alí Zatarain Durán |
| **Autor** | Ignacio Andrade Salazar — 215822856 |

## Estado actual del proyecto

🔹 **Entregable actual: Baseline v1.0** — primera entrega del curso.

Este repositorio contiene únicamente el Baseline del proyecto por el momento. Las siguientes entregas del curso (Plan SCM, identificación de configuración, control de cambios, status accounting, auditoría y el proyecto final) se agregarán conforme avance el semestre.

### Roadmap del curso

- [x] Baseline v1.0
- [ ] SCM Plan (Plan de Administración de la Configuración)
- [ ] Configuration Identification
- [ ] Configuration Control (Change Requests / CCB)
- [ ] Configuration Status Accounting
- [ ] Configuration Audit
- [ ] Reporte final del proyecto

## Estructura del repositorio

```
├── Baseline_Documento/
│   ├── Baseline_SMMyE_V1.docx       # Documento de baseline (inglés)
│   └── Baseline_SMMyE_V1_ES.docx    # Documento de baseline (español)
│
└── Baseline_Presentation/
    ├── SMMyE_Baseline_EN_v3.pptx    # Presentación del baseline (inglés)
    └── SMMyE_Baseline_ES_v3.pptx    # Presentación del baseline (español)
```

## Resumen del Baseline

- **Metodología de desarrollo:** Scrum — 26 sprints de 2 semanas a lo largo de un plan de 12 meses, con un Product Backlog de 13 historias de usuario (66 story points) y una etapa explícita de contingencia (~15% del cronograma).
- **Arquitectura:** cinco capas — nodos IoT (Raspberry Pi 5 + sensores) → API REST (Laravel 10) → base de datos (MySQL 8) → SPA de presentación (Vue 3) → capa de inteligencia conversacional (n8n + servidor MCP + Ollama).
- **Alcance:** recepción y almacenamiento continuo de datos, visualización en tiempo real, administración de estaciones/sensores/usuarios, y el asistente conversacional EcoFlow. No incluye control remoto de hardware, predicciones ni alta disponibilidad en esta versión.
- **Equipo y presupuesto:** equipo de 6 roles (Project Manager, Backend Senior/Fullstack, Frontend Junior, Diseñador UI/UX, Ingeniero de IA/Automatización Senior, DevOps/QA Junior). Costo base de $1,285,500 MXN + margen de utilidad del 15% = presupuesto total de $1,478,325 MXN.

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Backend | PHP 8.2 + Laravel 10, JWT |
| Base de datos | MySQL 8 |
| Frontend | Vue 3 + Vite + Pinia + Tailwind CSS |
| IA / Chat | n8n + servidor MCP + Ollama (LLM local) |
| Infraestructura | Docker + Docker Compose + Nginx |
