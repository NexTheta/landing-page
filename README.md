# Theta Sound landing page

Marketing site for Theta Sound, a screenless AI executive assistant built into TWS earbuds. Live at [nextheta.com](https://nextheta.com).

## Stack

Next.js 15 (App Router), React 19, Tailwind CSS 4, Framer Motion. Package manager is pnpm (`pnpm-lock.yaml`).

## Deployment

Every push to `main` deploys automatically through Vercel's GitHub integration:

- Vercel project: `landing-page`, team `thetasounddevs-projects`
- Domains: `nextheta.com`, `www.nextheta.com`, `landing-page-three-theta-52.vercel.app`

There is no GitHub Actions deployment.

## Local development

```bash
pnpm install
pnpm dev
```

Create `.env.local` with the waitlist's Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
```

The same two variables must be set in the Vercel project for production.

## Waitlist backend

Signups go to a `waitlist` table in Supabase. To create it, run `create-waitlist-table.sql` in the Supabase SQL Editor. It enables row level security with an insert-only policy, so visitors can add themselves but can't read other signups. Never disable RLS on this table. See `SUPABASE_SETUP.md` for the full walkthrough.

## Pages and SEO routes

| Route | Source |
| --- | --- |
| `/` | `app/page.tsx` |
| `/the-constant` | `app/the-constant/page.tsx` |
| `/sitemap.xml` | `app/sitemap.ts` |
| `/robots.txt` | `app/robots.ts` |
| `/llms.txt` | `public/llms.txt` |
| `/opengraph-image` | `app/opengraph-image.tsx` |

Site-wide metadata and structured data (Organization, WebSite, Product) live in `app/layout.tsx`. The FAQ and its FAQPage schema share one data array in `components/sections/faq-section.tsx`.
