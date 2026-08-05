# Project Overview — Apoteka DAR

## What Is This?

**Apoteka DAR** (apoteka-dar.rs) is a Serbian online pharmacy e-commerce application. The name "DAR" translates to "gift" in Serbian, and the slogan is "Priroda na dohvat ruke" (Nature within reach). The entire UI is in Serbian with Serbian route names.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack for dev) |
| Language | TypeScript 5.8 (strict mode) |
| UI Library | MUI (Material UI) v7 + Emotion |
| State | Redux Toolkit + redux-persist |
| Auth & DB | Supabase (PostgreSQL + Auth) |
| Forms | Formik + Yup validation |
| Animations | Framer Motion |
| Email | Nodemailer (server-side) |
| Maps | Google Maps API + MapLibre GL |
| Anti-spam | reCAPTCHA v3 |
| Analytics | Vercel Analytics, Google Tag Manager, Google Ads |
| Carousel | react-multi-carousel |
| Hosting | Vercel |
| Images | AWS S3 (dar-pharmacy.s3.eu-central-1.amazonaws.com) |

## Architecture at a Glance

```
Browser → Next.js App Router → Server Components (data fetching via Supabase)
                             → Client Components (MUI, Redux, Context)
                             → API Routes (orders, email, search, cart sync)
                             → Supabase (PostgreSQL + Auth + Row Level Security)
```

### Key Architectural Decisions

1. **Server Components by default** — Pages fetch data server-side (ISR with `revalidate = 60`), then pass serialized data to client components.
2. **Supabase for everything** — Auth (email OTP, Google OAuth, password), database (PostgreSQL), and real-time if needed.
3. **Redux for client-side state** — Cart, wishlist, and checkout form are persisted via redux-persist to localStorage.
4. **MUI for all UI** — No Tailwind. Custom theme with pharmacy color palette (red primary, green secondary, purple accent).
5. **Serbian language throughout** — No i18n library, all strings and route names are hardcoded Serbian.
6. **Middleware for auth protection** — `src/proxy.ts` handles route protection, session refresh, and redirects.

## Scripts

```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Production build
npm run start      # Start production server on port 3000
npm run lint       # ESLint for .ts/.tsx files
npm run typecheck  # TypeScript type checking (tsc --noEmit)
```

## Environment Variables (keys only)

- `BASE_URL` — Site base URL
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` — Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key (server-only)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` — reCAPTCHA v3 site key
- `EMAIL_SERVER_*` — SMTP config for Nodemailer
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — Google Maps
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager
- `NEXT_PUBLIC_GADS_ID` — Google Ads
- `ANALYZE` — Enable bundle analyzer (true/false)

## Path Aliases

The project uses `@/*` mapped to `./src/*` (configured in tsconfig.json). All imports use this alias pattern:

```typescript
import { Product } from '@/services/supabase/types';
import theme from '@/styles/theme';
```
