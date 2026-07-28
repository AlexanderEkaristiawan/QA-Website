# QA-Suite: Intelligent SEO, Security, Performance & Test Management Platform

An all-in-one Quality Assurance and website auditing platform built with Vue 3, Firebase, and AI.

## Features

- **Authentication**: Email/password auth with Firebase
- **Project Workspaces**: Create and manage multiple audit projects
- **SEO Crawler**: BFS crawl with axios + cheerio for SEO analysis
- **Security Scanner**: OWASP ZAP integration + passive security header checks
- **Performance Audit**: Google PageSpeed Insights API integration
- **AI Remediation**: Auto-generated fix guides (OpenAI/Gemini)
- **Historical Trends**: Chart.js line charts for performance tracking
- **PDF Export**: Professional report generation with jsPDF
- **Test Cases**: AI-generated functional test suites

## Quick Start

```bash
# Install frontend dependencies
cd frontend && npm install

# Install cloud functions dependencies
cd ../functions && npm install

# Configure environment
cp frontend/.env.example frontend/.env
# Edit .env with your Firebase & API credentials

# Run development server
cd frontend && npm run dev
```

## Project Structure

```
QA Website/
├── frontend/                    # Vue 3 + Vite + TypeScript
│   ├── src/
│   │   ├── components/          # Vue components
│   │   │   ├── layout/          # Sidebar, Header, AppLayout
│   │   │   ├── projects/        # ProjectForm
│   │   │   ├── audit/           # TrendChart
│   │   │   └── reports/         # ReportExporter (PDF)
│   │   ├── composables/         # useAuth, useFirestore, usePageSpeed, useAI
│   │   ├── types/               # TypeScript interfaces
│   │   ├── router/              # Vue Router config
│   │   ├── views/               # Page views
│   │   └── firebase/            # Firebase config
│   └── package.json
├── functions/                    # Firebase Cloud Functions
│   ├── src/
│   │   ├── index.ts             # Orchestrator
│   │   ├── crawler.ts           # SEO/Header BFS Crawler
│   │   ├── zap.ts               # OWASP ZAP wrapper
│   │   ├── pagespeed.ts         # PageSpeed Insights
│   │   └── ai.ts               # AI remediation
│   └── package.json
├── firebase.json
├── firestore.rules
└── firestore.indexes.json
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vue 3 (Composition API, TypeScript, Vite) |
| Styling | Tailwind CSS |
| Backend | Firebase (Auth, Firestore, Cloud Functions) |
| Charts | Chart.js + vue-chartjs |
| PDF | jsPDF |
| APIs | Google PageSpeed Insights, OWASP ZAP, OpenAI/Gemini |

