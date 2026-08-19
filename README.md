# QA-Suite

QA-Suite is a Vue 3 quality-assurance workspace for SEO crawling, performance audits, security scanning, bug tracking, screenshots, test cases, reporting, and AI-assisted Playwright script generation.

## Current Features

- Firebase Authentication and Firestore project workspaces.
- Server-side SEO BFS crawling through Netlify Functions.
- Optional authenticated crawling through the Manifest V3 Chrome extension.
- Google PageSpeed Insights mobile audits, with scores and Lighthouse metrics stored in Firestore.
- Optional OWASP ZAP security scans through a self-hosted ZAP API.
- Collaborative bug list with comments, statuses, assignees, remediation guides, and screenshot uploads through Cloudinary.
- Manual test case creation plus AI-generated Playwright TypeScript scripts for sandboxed CI use.
- Audit history, trend charts, lazy-loaded audit details, and PDF report export.
- Responsive desktop/mobile navigation and project views.

## Local Development

### Prerequisites

- Node.js 18 or newer.
- Netlify CLI available through `npx`.
- A Firebase project with Authentication and Firestore configured.
- Optional: OWASP ZAP desktop running with its API on `127.0.0.1:8080`.

### Install

```powershell
cd "C:\Users\Asus\Documents\QA web 2"
npm --prefix frontend install
npm --prefix netlify/functions install
```

### Configure secrets

Create `netlify/.env` locally. Never commit it or paste its contents into tickets, screenshots, or chat.

```env
FIREBASE_SERVICE_ACCOUNT_KEY={...}
FIREBASE_PROJECT_ID=your_firebase_project_id
PAGESPEED_API_KEY=AIza...
ZAP_API_URL=http://127.0.0.1:8080
ZAP_API_KEY=your_zap_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
GEMINI_API_KEY=your_gemini_key
OPENAI_API_KEY=optional_fallback_key
```

`PAGESPEED_API_KEY` must be a Google API key, not a service-account JSON document or service-account key ID. Enable the PageSpeed Insights API for the same Google Cloud project.

### Start every local session

1. Start OWASP ZAP if security scanning is needed and confirm its API is enabled on port `8080`.
2. From the repository root, run:

```powershell
npx netlify dev --port 8888
```

3. Open the website at `http://localhost:5175`.
4. Keep the Netlify process running on port `8888`; Vite proxies `/.netlify/functions/*` to it.

Do not use `http://localhost:8888` as the browser entry point for this repository. It is the Netlify proxy/backend port and may serve the HTML fallback instead of Vite modules.

Optional checks:

```powershell
Test-NetConnection 127.0.0.1 -Port 8080
Test-NetConnection 127.0.0.1 -Port 8888
```

### Build and type-check

```powershell
npm --prefix frontend run build
npm --prefix netlify/functions run typecheck
npm --prefix netlify/functions run build
```

## Audit Flow

1. Sign in and open a project.
2. Confirm domain ownership.
3. Click **Run Audit** and select Server or Chrome Extension crawl mode.
4. `start-audit` creates an `audit_jobs` document and starts the applicable independent bot functions.
5. The SEO bot crawls up to the configured page limit.
6. The performance bot calls PageSpeed Insights with the mobile strategy and stores scores from `lighthouseResult.categories`.
7. The security bot starts a ZAP scan when ZAP is reachable; the frontend polls its status every 30 seconds.
8. Results and bot errors are written to Firestore and displayed in the project view.

Current limitation: bot summaries are updated independently, but the overall audit job is not yet aggregated to `completed` or `partial-failed`; a job can remain `running` while individual cards show `Failed`, `Completed`, or `ZAP Unavailable`.

## Project Structure

```text
frontend/                 Vue 3, Vite, Tailwind, Firebase client, views and components
netlify/functions/        Netlify backend functions and shared Firebase Admin helpers
extension/                Manifest V3 Vue/TypeScript companion extension
firestore.rules           Firestore security rules
firestore.indexes.json    Firestore composite indexes
netlify.toml              Netlify build, functions, redirects, and local dev configuration
```

## Security Notes

- Keep Firebase service-account JSON, API keys, Cloudinary secrets, and AI keys in environment variables only.
- Rotate any credential that has appeared in a screenshot or chat message.
- Run ZAP and crawlers only against domains you own or are authorized to test.
- AI-generated Playwright scripts are downloads only and must run in an isolated test environment, never automatically against production.
