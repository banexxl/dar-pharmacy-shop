# Routing & Authentication

## App Router Structure

The app uses Next.js App Router with **route groups** to organize pages by access level without affecting URL paths.

### Route Groups

| Group | Purpose | Layout |
|-------|---------|--------|
| `(shop)` | Public storefront pages | UIProvider (NavBar + Footer) |
| `(auth)` | Authentication pages | Minimal layout |
| `(account)` | Protected user account pages | Requires authentication |

### URL → File Mapping (Serbian routes)

| URL Path | File Location | Description |
|----------|--------------|-------------|
| `/` | `(shop)/page.tsx` | Home page |
| `/proizvodi` | `(shop)/proizvodi/page.tsx` | Products listing |
| `/proizvod/[slug]` | `(shop)/proizvod/[slug]/page.tsx` | Single product |
| `/proizvodi-proizvodjac-kategorija` | `(shop)/proizvodi-proizvodjac-kategorija/` | Filter by manufacturer/category |
| `/blog` | `(shop)/blog/page.tsx` | Blog listing |
| `/kontakt` | `(shop)/kontakt/page.tsx` | Contact page |
| `/informacije` | `(shop)/informacije/page.tsx` | Info pages |
| `/placanje` | `(shop)/placanje/page.tsx` | Checkout/payment |
| `/autentifikacija` | `(auth)/autentifikacija/page.tsx` | Login page |
| `/autentifikacija/prijava` | `(auth)/autentifikacija/prijava/` | Sign-in form |
| `/autentifikacija/provera` | `(auth)/autentifikacija/provera/` | Auth callback/verify |
| `/autentifikacija/reset-lozinke` | `(auth)/autentifikacija/reset-lozinke/` | Password reset |
| `/registracija` | `(auth)/registracija/page.tsx` | Registration |
| `/greska` | `(auth)/greska/page.tsx` | Error page |
| `/nalog` | `(account)/nalog/page.tsx` | Account dashboard |
| `/404` | `not-found.tsx` | Not found page |

### API Routes

| Endpoint | Purpose |
|----------|---------|
| `/api/products` | Product queries |
| `/api/search` | Product search |
| `/api/cart` | Cart sync (logged-in users) |
| `/api/wishlist` | Wishlist sync (logged-in users) |
| `/api/orders` | Order creation/retrieval |
| `/api/email` | Send emails (contact form, order confirmation) |
| `/api/users` | Customer profile operations |
| `/api/blog` | Blog post queries |

---

## Middleware (`src/proxy.ts`)

The middleware runs on every request (except static assets) and handles:

### 1. Session Refresh
Creates a Supabase server client with cookie handling to keep the auth session fresh on every request.

### 2. Route Protection

```typescript
// Protected routes — require authentication
const PROTECTED_PREFIXES = ['/nalog'];

// Login routes — redirect away if already authenticated
const LOGIN_ROUTES = ['/autentifikacija/prijava'];
```

**Behavior:**
- `/nalog/*` without session → redirect to `/autentifikacija/prijava?callbackUrl=...`
- `/autentifikacija/prijava` with session → redirect to `/nalog`
- `/api/*` protected routes without session → `401 JSON` response

### 3. Matcher Config
Excludes static assets from middleware processing:
```typescript
matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)']
```

---

## Authentication System

### Supported Auth Methods

1. **Email Magic Link (OTP)** — Sends a one-time login link to email
2. **Google OAuth** — Redirects to Google sign-in
3. **Email + Password** — Traditional login/registration

### Auth Server Actions (`src/services/auth/actions.ts`)

All auth operations are Next.js Server Actions (`'use server'`):

| Function | Purpose |
|----------|---------|
| `signInWithEmail(email)` | Send magic link OTP |
| `signInWithGoogle()` | Start Google OAuth flow |
| `signInWithPassword(email, password)` | Password login |
| `resetPassword(email)` | Send password reset email |
| `updatePassword(newPassword)` | Set new password (after reset link) |

### Auth Flow

```
1. User visits /autentifikacija/prijava
2. Chooses auth method (email OTP, Google, or password)
3. After successful auth → redirects to /autentifikacija/provera (callback)
4. Callback page exchanges code for session
5. Session stored in cookies (managed by @supabase/ssr)
6. AuthProvider detects session via onAuthStateChange
7. Fetches customer profile from `customers` table
8. User redirected to /nalog or callbackUrl
```

### Auth Context (`src/context/session/session.context.tsx`)

The `AuthProvider` wraps the entire app and:
- Listens to `supabase.auth.onAuthStateChange`
- Fetches the linked `customers` record on login
- Provides: `session`, `user`, `customer`, `isAuthenticated`, `loading`
- Exposes: `refreshCustomer()`, `updateCustomer()`, `signOut()`

### Hook: `useAuth()` (`src/hooks/useAuth.tsx`)
Convenience hook to access auth context:
```typescript
const { user, customer, isAuthenticated, signOut } = useAuth();
```

---

## SEO & Metadata

- Root layout sets default metadata (`title: 'Apoteka DAR'`, description, Google verification)
- Individual pages override with `export const metadata: Metadata = {...}`
- `robots.ts` generates robots.txt dynamically
- `sitemap.ts` generates sitemap.xml dynamically
- `src/utils/seo-utils.ts` provides SEO helper functions
- `src/components/seo/` contains SEO-related components

---

## Important Notes

- All Serbian route translations are hardcoded — there's no i18n routing
- The middleware (`proxy.ts`) is the **single point** for auth protection logic
- `revalidatePath('/', 'layout')` is called after login/logout to refresh cached pages
- `callbackUrl` query param is used to redirect users back after login
