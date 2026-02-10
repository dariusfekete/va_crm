# VA-CRM — Value Architecture Go-to-Market Tracker

Personal CRM and execution tracker for the Value Architecture consulting practice. Built for Vercel deployment.

## Features

- **Pipeline Management**: Kanban board tracking companies through pipeline stages (Identified → Outreach → Discovery Call → Executive Briefing → Proposal → Assessment → Retainer → Closed)
- **Contact Management**: Track contacts per company with roles (Champion, Economic Buyer, Influencer, Blocker)
- **Task Management**: Execution plan pre-loaded with all GTM phases, filtered by phase/status/priority
- **Content Calendar**: 12-week content plan tracking LinkedIn articles, posts, carousels, and campaigns
- **Activity Logging**: Track all outreach, calls, meetings, briefings, and proposals
- **Dashboard**: Pipeline funnel visualization, task overview, and activity feed

## Pre-loaded Data

The app comes pre-loaded with:
- 13 target companies from the GTM strategy (Tier 1, Tier 2, and PE Funds)
- 28 execution tasks across 4 phases
- 10-item content calendar from the 12-week plan

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **localStorage** for data persistence (no database required)

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js — no configuration needed
4. Click **Deploy**

That's it. No environment variables, no database setup.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data Persistence

All data is stored in the browser's `localStorage` under the key `va-crm-data`. This means:
- Data persists across sessions on the same browser
- Data does **not** sync across devices
- Clearing browser data will reset to defaults
- Click "Reset Data" in the sidebar to restore the pre-loaded seed data

## Future Enhancements

To add cross-device sync, consider:
- **Vercel KV** (Redis) — simplest addition for key-value storage
- **Vercel Postgres** — for relational queries
- **Supabase** — for real-time sync + auth
