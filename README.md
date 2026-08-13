# Content Turbine website

The Content Turbine website is a React single-page application for the
company's AI-visibility and expert content services. It explains the service
offering, publishes thought leadership, showcases client work, and converts
visitors into qualified leads.

## What the website includes

- A homepage focused on brand visibility in AI answer engines such as
  ChatGPT, Gemini, and Perplexity.
- Service, about, contact, legal, and freelance pages.
- A blog with data-driven posts, topic pages, and individual article routes.
- Case-study and client-trust content.
- A Citable product landing page with a lightweight website-audit experience.
- A Calendly booking experience on the contact page.
- A homepage lead form that sends qualified work-email submissions to a
  server-side notification endpoint.

## Technology

- React and TypeScript
- Vite for local development and production builds
- React Router for client-side routes
- styled-components for component styling
- React Helmet Async for page metadata and structured data
- Vercel Analytics
- Playwright for browser smoke tests

## Local development

### Prerequisites

- Node.js 20 or newer
- npm

Install dependencies and run the local development server:

```bash
npm install
npm run dev
```

Vite prints the local address when it starts. Use that address in your
browser. To create a production build, run:

```bash
npm run build
npm run preview
```

## Configuration

Copy `.env.example` to `.env.local` and set only the integrations you plan to
use.

| Variable | Purpose |
| --- | --- |
| `VITE_CITABLE_API_URL` | Public base URL for the Citable quick-audit API. |
| `SLACK_WEBHOOK_URL` | Server-side Slack webhook used for homepage lead notifications. Never prefix this value with `VITE_`. |

The Citable waitlist also requires a LaunchList form key. Set it in
`components/citable/config.ts` as described in `WAITLIST_SETUP.md`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build. |
| `npm run build:dev` | Create a development-mode build. |
| `npm run preview` | Serve the production build locally. |
| `npm run test:smoke` | Run the Playwright browser smoke suite. |

For the first local smoke-test run, install the Playwright browser:

```bash
npx playwright install chromium
```

## Project structure

- `src/pages/` — route-level page components
- `components/` — reusable site sections and feature components
- `src/data/` — blog, service, client, and case-study data
- `styles/` — global, responsive, and component CSS
- `public/` — static fonts, images, icons, and social assets
- `api/` — server-side endpoints used by the hosted site
- `tests/` — browser smoke tests

## Deployment

The frontend is a Vite build. The `api/lead-notify.ts` endpoint is intended
for a serverless host that supports the repository's `api/` functions, with
`SLACK_WEBHOOK_URL` configured as a server-side environment variable.
