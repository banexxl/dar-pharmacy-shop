# Folder Structure

## Root

```
dar-pharmacy-shop/
├── .agents/              # Agent documentation (you are here)
├── .kiro/                # Kiro IDE config (steering, hooks)
├── .next/                # Next.js build output (gitignored)
├── node_modules/         # Dependencies (gitignored)
├── public/               # Static assets served at /
├── src/                  # All application source code
├── .env                  # Environment variables (gitignored)
├── .gitignore
├── next.config.ts        # Next.js config (images, bundle analyzer)
├── next-env.d.ts         # Next.js TypeScript declarations
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript config (strict, @/* alias)
└── README.md
```

## src/ — Application Source

```
src/
├── app/                  # Next.js App Router (pages, layouts, API routes)
│   ├── (shop)/           # Public shop route group
│   │   ├── page.tsx              # Home page (/)
│   │   ├── home-client.tsx       # Home page client component
│   │   ├── layout.tsx            # Shop layout (wraps with UIProvider)
│   │   ├── blog/                 # /blog
│   │   ├── informacije/          # /informacije (info pages)
│   │   ├── kontakt/              # /kontakt (contact)
│   │   ├── placanje/             # /placanje (checkout/payment)
│   │   ├── proizvod/             # /proizvod/[slug] (single product)
│   │   ├── proizvodi/            # /proizvodi (products listing)
│   │   └── proizvodi-proizvodjac-kategorija/  # /proizvodi-proizvodjac-kategorija (manufacturer/category filter)
│   │
│   ├── (auth)/           # Authentication route group
│   │   ├── layout.tsx            # Auth layout
│   │   ├── autentifikacija/      # /autentifikacija (login/OTP/verify)
│   │   ├── greska/               # /greska (error page)
│   │   └── registracija/         # /registracija (registration)
│   │
│   ├── (account)/        # Protected account route group
│   │   ├── layout.tsx            # Account layout (requires auth)
│   │   └── nalog/                # /nalog (account dashboard, orders, profile)
│   │
│   ├── api/              # API Route Handlers
│   │   ├── blog/                 # Blog CRUD
│   │   ├── cart/                  # Cart sync endpoints
│   │   ├── email/                 # Email sending
│   │   ├── orders/                # Order creation/retrieval
│   │   ├── products/              # Product queries
│   │   ├── search/                # Product search
│   │   ├── users/                 # User/customer endpoints
│   │   └── wishlist/              # Wishlist sync
│   │
│   ├── layout.tsx        # Root layout (html, body, Providers)
│   ├── providers.tsx     # All context providers composed
│   ├── ui-wrapper.tsx    # UIProvider wrapper for shop routes
│   ├── loading.tsx       # Global loading state
│   ├── not-found.tsx     # 404 page
│   ├── robots.ts         # robots.txt generation
│   └── sitemap.ts        # sitemap.xml generation
│
├── chatbot/              # Chatbot feature (if present)
│
├── components/           # Reusable UI components
│   ├── animate/          # Animation wrapper (Framer Motion)
│   ├── banner/           # Hero banners
│   ├── blog-card/        # Blog post cards
│   ├── button/           # Custom button components
│   ├── carousel/         # Product carousels (react-multi-carousel)
│   ├── cart/             # Cart drawer/modal
│   ├── checkout/         # Checkout flow components
│   ├── circularprogress/ # Loading spinners
│   ├── common/           # Shared small components
│   ├── contact/          # Contact form
│   ├── cookie-consent/   # Cookie consent banner
│   ├── footer/           # Site footer
│   ├── iconify/          # Icon wrapper (@iconify/react)
│   ├── loading/          # Loading states/skeletons
│   ├── login/            # Login form components
│   ├── navbar/           # Navigation bar + mobile drawer
│   ├── paralax/          # Parallax scroll effects
│   ├── payment-strip/    # Payment method strip/banner
│   ├── product-card/     # Product card component
│   ├── product-details/  # Single product detail view
│   ├── product-dropdown/ # Category dropdown
│   ├── products/         # Products grid/list
│   ├── products-filter/  # Filtering sidebar/controls
│   ├── promotions/       # Promotion banners/cards
│   ├── search/           # Search overlay/results
│   ├── seo/              # SEO meta components
│   ├── social/           # Social share buttons (next-share)
│   ├── svg/              # SVG illustrations
│   └── wishlist/         # Wishlist components
│
├── context/              # React Context providers
│   ├── session/          # AuthProvider (Supabase session + customer)
│   └── ui/               # UIProvider (drawer, search, loading state)
│
├── hooks/                # Custom React hooks
│   ├── screenSize.ts             # Responsive breakpoint hook
│   ├── use-slide-transition.tsx  # Slide animation hook
│   ├── useAuth.tsx               # Auth context consumer hook
│   ├── useCartWishlistSync.ts    # Syncs Redux cart/wishlist with Supabase
│   ├── useDialogModal.tsx        # Dialog/modal state hook
│   ├── useLocalStorage.ts        # localStorage hook
│   └── useVisibility.ts          # Intersection observer hook
│
├── interfaces/           # TypeScript interfaces (legacy, pre-Supabase types)
│   ├── blog/             # Blog interfaces
│   ├── cart/             # Cart item interface
│   ├── checkout/         # Checkout interfaces
│   ├── contact/          # Contact form interfaces
│   ├── db/               # Database model interfaces
│   ├── email/            # Email interfaces
│   ├── loading/          # Loading state interfaces
│   ├── product/          # Product interfaces
│   ├── subscribe/        # Newsletter subscription
│   ├── wishlist/         # Wishlist item interface
│   └── local-storage.ts  # Local storage type
│
├── schemas/              # Yup validation schemas
│   ├── contact-form.ts
│   ├── customer.ts
│   ├── email-form.schema.ts
│   ├── order.ts
│   ├── payment-form.schema.ts
│   └── user-form.schema.ts
│
├── services/             # Data access layer (server-side)
│   ├── supabase/         # Supabase client setup
│   │   ├── browser.ts            # Browser client (anon key)
│   │   ├── server.ts             # Server client (cookie-based)
│   │   ├── service-role.ts       # Service role client (bypasses RLS)
│   │   └── types.ts              # Database schema types
│   ├── auth/             # Auth server actions
│   │   └── actions.ts            # signIn, signOut, resetPassword, etc.
│   ├── email/            # Email service (Nodemailer)
│   ├── blogs.ts          # Blog queries
│   ├── customer-cart.ts  # Cart persistence (Supabase)
│   ├── customer-wishlist.ts  # Wishlist persistence (Supabase)
│   ├── logger.ts         # Action logging utility
│   ├── manufacturers.ts  # Manufacturer queries
│   ├── orders.ts         # Order queries/creation
│   └── products.ts       # Product queries (main data service)
│
├── store/                # Redux Toolkit store
│   ├── store.ts          # Store config with redux-persist
│   ├── cart/             # Cart slice (add, remove, increment, decrement)
│   ├── checkout/         # Checkout user info form slice
│   └── wishlist/         # Wishlist slice
│
├── styles/               # Styling
│   └── theme/            # MUI theme (colors, typography, overrides)
│       └── index.ts
│
├── types/                # Additional TypeScript declarations
│   └── styles.d.ts       # Style module declarations
│
├── utils/                # Utility functions
│   ├── counter/          # Counter utility
│   ├── currency-formatter.ts  # Price formatting (Serbian dinars)
│   ├── format-number.ts       # Number formatting
│   └── seo-utils.ts           # SEO helper utilities
│
├── globals.css           # Global CSS (reset, scrollbar, focus styles)
└── proxy.ts              # Middleware (auth routing, session refresh)
```

## public/ — Static Assets

```
public/
├── cards/                # Payment method card images
├── docs/                 # Static documents
├── images/               # Static images (banners, backgrounds)
├── Logos/                # Brand logos
├── favicon.ico
├── google-review-card.jpg
├── google576ebf70db61ba3a.html  # Google site verification
├── index.html            # Fallback HTML
└── robots.txt            # Static robots.txt (also generated dynamically)
```

## Key Conventions

- **Route groups** `(shop)`, `(auth)`, `(account)` organize pages without affecting URL paths
- **Serbian route names** — all URL segments are in Serbian (proizvodi, kontakt, nalog, etc.)
- **Server vs Client** — files with `'use client'` directive are client components; everything else is server by default
- **Component folders** — each component has its own directory under `components/`
- **Services** — all database access goes through `src/services/`, never directly from components
