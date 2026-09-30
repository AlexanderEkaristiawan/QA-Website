# QA-Suite

QA-Suite is a Vue 3 quality-assurance workspace for SEO crawling, performance audits, security scanning, bug tracking, screenshots, test cases, reporting, and AI-assisted Playwright script generation.

## Current Features

- Firebase Authentication and Firestore project workspaces.
- Server-side SEO BFS crawling through Netlify Functions.
- Optional authenticated crawling through the Manifest V3 Chrome extension, including pause/resume and login-loss detection.
- Active-tab audits for SEO, headers, images, links, social metadata, and security checks.
- Browser-based Inspect UI tools, mock data/autofill helpers, and a responsive Screen Simulator.
- Google PageSpeed Insights mobile audits, with scores and Lighthouse metrics stored in Firestore.
- Optional OWASP ZAP security scans through a self-hosted ZAP API.
- Collaborative bug list with comments, statuses, assignees, remediation guides, and screenshot uploads through Cloudinary.
- Manual test case creation plus AI-generated test cases, test data, remediation guides, and Playwright TypeScript scripts for sandboxed CI use.
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
npm --prefix extension install
```

### Configure the frontend

Create `frontend/.env.local` (or another Vite-supported local env file) with the Firebase client settings used by the web app:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_NETLIFY_FUNCTIONS_URL=/.netlify/functions
```

`VITE_NETLIFY_FUNCTIONS_URL` is optional and defaults to `/.netlify/functions`.

### Configure server secrets

Create `netlify/.env` locally. Never commit it or paste its contents into tickets, screenshots, or chat.

```env
FIREBASE_SERVICE_ACCOUNT_KEY={...}
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=optional_private_key
FIREBASE_CLIENT_EMAIL=optional_service_account_email
ALLOWED_ORIGINS=http://localhost:5175
PAGESPEED_API_KEY=AIza...
ZAP_API_URL=http://127.0.0.1:8080
ZAP_API_KEY=your_zap_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
GEMINI_API_KEY=your_gemini_key
OPENAI_API_KEY=optional_fallback_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=your_gmail_app_password
SMTP_FROM=QA-Suite <your_gmail_address@gmail.com>
```

`PAGESPEED_API_KEY` must be a Google API key, not a service-account JSON document or service-account key ID. Enable the PageSpeed Insights API for the same Google Cloud project.

`FIREBASE_SERVICE_ACCOUNT_KEY` may be raw service-account JSON or Base64-encoded JSON. Alternatively, configure `FIREBASE_PRIVATE_KEY` and `FIREBASE_CLIENT_EMAIL` with the Firebase project ID. `GEMINI_API_KEY` is the primary AI credential; `OPENAI_API_KEY` is an optional fallback used by the AI functions.

For Gmail SMTP, use an App Password (not your normal Gmail password). If you are using port `465`, keep `SMTP_SECURE=true`.

### Start every local session

1. Start OWASP ZAP if security scanning is needed and confirm its API is enabled on port `8080`.
2. From the repository root, run:

```powershell
npx netlify dev --port 8888
```

3. Open the website at `http://localhost:5175`.
4. Keep the Netlify process running on port `8888`; Vite proxies `/.netlify/functions/*` to it.

To use the extension locally, open `chrome://extensions`, enable **Developer mode**, choose **Load unpacked**, and select `extension/dist` after building it. Configure the extension with a project ID and a project-scoped extension token issued by the web app.

Do not use `http://localhost:8888` as the browser entry point for this repository. It is the Netlify proxy/backend port and may serve the HTML fallback instead of Vite modules.

Optional checks:

```powershell
Test-NetConnection 127.0.0.1 -Port 8080
Test-NetConnection 127.0.0.1 -Port 8888
```

### Build and type-check

```powershell
npm --prefix frontend run build
npm --prefix frontend run preview
npm --prefix netlify/functions run typecheck
npm --prefix netlify/functions run build
npm --prefix extension run typecheck
npm --prefix extension run build
```

The extension build output is `extension/dist`. The frontend production preview is served by Vite on its reported preview port.

## Audit Flow

1. Sign in and open a project.
2. Confirm domain ownership.
3. Verify domain ownership, then click **Run Audit** and select Server or Chrome Extension crawl mode.
4. Choose the audit scope: `all`, `seo`, `security`, or `performance`.
5. `start-audit` requires `ownershipVerified === true`, creates an `audit_jobs` document, and starts the applicable independent bot functions.
6. The SEO bot crawls up to the configured page limit.
7. The performance bot calls PageSpeed Insights with the mobile strategy and stores scores from `lighthouseResult.categories`.
8. The security bot starts a ZAP scan when ZAP is reachable; the frontend polls its status every 30 seconds.
9. Results and bot errors are written to Firestore and displayed in the project view.

Bot summaries are updated independently. Once all applicable bot summaries reach terminal states, the overall audit job is set to `completed` or `partial-failed`.

## Main Routes

- `/login`
- `/dashboard`
- `/projects`
- `/projects/:id`
- `/projects/:id/audit/:auditId`
- `/projects/:id/bugs`
- `/projects/:id/test-cases`
- `/projects/:id/history`
- `/notifications`

## Project Structure

```text
frontend/                 Vue 3, Vite, Tailwind CSS, Firebase client, views and components
netlify/functions/        TypeScript Netlify Functions and shared Firebase Admin helpers
extension/                Manifest V3 Vue/TypeScript companion extension
device-simulator-extension/ Auxiliary browser screen simulator extension
inspect ui source from visbug/ Reference VisBug-style UI inspection assets
firestore.rules           Firestore security rules
firestore.indexes.json    Firestore composite indexes
storage.rules             Firebase Storage security rules
netlify.toml              Netlify build, functions, redirects, and local dev configuration
firebase.json              Firebase Hosting, Functions, Firestore, Storage, and emulator configuration
```

## Deployment

Netlify is configured to build the frontend from `frontend`, publish `frontend/dist`, and serve `netlify/functions` with SPA fallback redirects. Firebase Hosting is also configured in `firebase.json` with the same `frontend/dist` output, alongside Firebase Functions, Firestore, Storage, and local emulators.

The configured Firebase emulator ports are Auth `9099`, Functions `5001`, Firestore `8080`, Hosting `5000`, and Emulator UI `4000`.

## Available Functions

The main serverless entry points include `start-audit`, `preflight-check`, `bot-seo`, `bot-performance`, `bot-security`, `audit-single-page`, `audit-page-speed`, `audit-page-security`, `crawl-ingest`, `finalize-crawl`, `issue-extension-token`, `verify-extension-token`, `upload-bug-screenshot`, `generate-remediation`, `generate-playwright`, `generate-test-cases`, and `generate-test-data`.

## Security Notes

- Keep Firebase service-account JSON, API keys, Cloudinary secrets, and AI keys in environment variables only.
- Rotate any credential that has appeared in a screenshot or chat message.
- Run ZAP and crawlers only against domains you own or are authorized to test.
- AI-generated Playwright scripts are downloads only and must run in an isolated test environment, never automatically against production.
