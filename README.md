# SMMyE — Environmental and Soil Monitoring System

Web platform to acquire, store, visualize and interpret environmental and soil data captured by IoT nodes distributed across the Región Valles, Jalisco. It integrates a conversational assistant called **EcoFlow**, which combines a local language model (Ollama) with an MCP server to answer natural-language questions about the system's real data.

## Academic context

| | |
|---|---|
| **Course** | Software Configuration Management |
| **Program** | Master's in Software Engineering |
| **Institution** | Universidad de Guadalajara — CUValles |
| **Professor** | Dr. Omar Alí Zatarain Durán |
| **Author** | Ignacio Andrade Salazar — 215822856 |

## Current status

🔹 **Current deliverable: Baseline v2** — the course's first deliverable, plus the assigned essay on "Elements of Software Configuration Management" (Bersoff, 1984). Baseline v1 is kept alongside v2 so the course's evolution stays visible.

All documents in this repository are in **English**, the language used for submission to the professor. The course's later deliverables (SCM Plan, configuration identification, change control, status accounting, auditing, and the final project) will be added as the semester progresses.

### Course roadmap

- [x] Baseline v1
- [x] Baseline v2
- [x] Essay: Elements of Software Configuration Management (Bersoff, 1984)
- [ ] SCM Plan
- [ ] Configuration Identification
- [ ] Configuration Control (Change Requests / CCB)
- [ ] Configuration Status Accounting
- [ ] Configuration Audit
- [ ] Final project report

## Repository structure

```
├── Baseline_Documento/
│   ├── Baseline_SMMyE_V1.docx        # Baseline document, v1
│   ├── Baseline_SMMyE_V1.pdf
│   └── Baseline_SMMyE_V2.docx        # Baseline document, v2 (current)
│
├── Baseline_Presentation/
│   └── SMMyE_Baseline_EN_v3.pptx     # Baseline presentation
│
└── Essay_SCM_Elements/
    ├── Essay_SCM_Elements_EN.docx    # Essay: the 4 SCM tasks (Bersoff, 1984)
    └── Essay_SCM_Elements_EN.pdf
```

> Generator scripts and non-English drafts are kept outside this repository (local `local_only/` folder, excluded via `.gitignore`).

## Baseline summary (v2)

- **Development methodology:** Scrum — 26 two-week sprints across a 12-month plan, with an explicit contingency stage (~15% of the schedule).
- **Module communication:** a flow diagram contrasting a regular user's path (Authentication → Monitoring & Ingestion → AI Assistant) with an administrator's path (Authentication → Users & Access → Catalog → Monitoring & Ingestion → AI Assistant).
- **Architecture:** five layers — IoT nodes (Raspberry Pi 5 + sensors) → REST API (Laravel 10) → database (MySQL 8) → presentation SPA (Vue 3) → conversational AI layer (n8n + MCP server + Ollama).
- **Scope:** continuous data reception and storage, real-time visualization, station/sensor/user administration, and the EcoFlow conversational assistant. Does not include remote hardware control, predictions, or high availability in this version.
- **Team and budget:** a 6-role team (Project Manager, Backend Senior/Fullstack, Frontend Junior, UI/UX Designer, AI/Automation Engineer Senior, DevOps/QA Junior). Base cost of $1,285,500 MXN + 15% profit margin = total budget of $1,478,325 MXN.

## Technology stack

| Layer | Technology |
|---|---|
| Backend | PHP 8.2 + Laravel 10, JWT |
| Database | MySQL 8 |
| Frontend | Vue 3 + Vite + Pinia + Tailwind CSS |
| AI / Chat | n8n + MCP server + Ollama (local LLM) |
| Infrastructure | Docker + Docker Compose + Nginx |
