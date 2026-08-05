# Data Layer — Supabase Schema, Services & Patterns

## Database (Supabase / PostgreSQL)

All types are defined in `src/services/supabase/types.ts`.

### Tables

#### `products`
The core table. Each product has:
- `id` (UUID), `name`, `slug` (URL-friendly), `description`
- Categories: `main_category`, `mid_category`, `sub_category`
- Stock: `available_stock`
- Content: `ingredients`, `instructions`, `warning`
- Sizing: `quantity`, `quantity_unit`
- Media: `image_url` (primary), `media_urls` (gallery array)
- Pricing: `price`, `discount` (boolean), `discount_amount`
- Flags: `new_arrival`, `best_seller`, `is_active`, `promoting`, `display_on_home`
- `promotion_text` — optional text for promoted products
- `manufacturer_id` — FK to `manufacturers`
- Timestamps: `created_at`, `updated_at`

#### `manufacturers`
- `id`, `name`, `value` (slug), `url` (logo URL)

#### `customers`
Linked to Supabase Auth users:
- `id`, `user_id` (FK to auth.users)
- Contact: `full_name`, `phone_number`, `email`
- Address: `street_address`, `city`, `province_state`, `country`, `zip_postal_code`
- `avatar`, `is_banned`, `banned_until`
- Timestamps: `created_at`, `updated_at`

#### `orders`
- `id`, `order_number`, `customer_id` (FK to `customers`)
- `payment_method`, `payment_status`, `order_status`
- `transaction_number`, `total`
- Timestamps: `created_at`, `updated_at`

#### `order_items`
- `id`, `order_id` (FK to `orders`), `product_id` (FK to `products`)
- Snapshot fields: `name`, `description`, categories, `ingredients`, `instructions`, `warning`, `quantity`, `quantity_unit`, `manufacturer`, `manufacturer_value`, `image_url`, `media_urls`
- Pricing: `unit_price`, `count`, `discount`, `discount_amount`, `final_unit_price`
- `created_at`

### Relationships
- `products.manufacturer_id` → `manufacturers.id`
- `orders.customer_id` → `customers.id`
- `order_items.order_id` → `orders.id`
- `order_items.product_id` → `products.id`

---

## Supabase Client Setup

Three clients exist for different contexts (`src/services/supabase/`):

| File | Purpose | Auth Level |
|------|---------|-----------|
| `browser.ts` | Client-side (browser) | Anon key (respects RLS) |
| `server.ts` | Server components / route handlers | Cookie-based session (respects RLS) |
| `service-role.ts` | Build-time / ISR data fetching | Service role key (bypasses RLS) |

### When to use which:
- **`browser.ts`** — In `'use client'` components that need to talk to Supabase (e.g., AuthProvider, cart sync)
- **`server.ts`** — In server components, server actions, and API route handlers that need the current user's session
- **`service-role.ts`** — In service functions that fetch data for ISR/SSG pages (no user context needed, bypasses RLS)

---

## Services Layer (`src/services/`)

All database access is encapsulated in service files. Components never query Supabase directly.

### `products.ts` — Product queries
Uses `service-role` client. Key functions:
- `getAllActiveProducts()` — All active products
- `getProductBySlug(slug)` — Single product by URL slug
- `getProductById(id)` — Single product by UUID
- `getProductsForHomePage()` — Products with `display_on_home = true`
- `getNewArrivals()` — Products with `new_arrival = true`
- `getDiscountedProducts()` — Products with `discount = true`
- `getPromotionProducts()` — Products with `promoting = true`
- `getRandomProductsByManufacturer(value, limit)` — Random products from a manufacturer
- `getTopNSellingProducts(n)` — Top N best sellers

### `manufacturers.ts` — Manufacturer queries
- `getAllManufacturerLogos()` — All manufacturers (for logo carousel)

### `orders.ts` — Order operations
- Order creation with order items
- Order retrieval by customer

### `customer-cart.ts` — Server-side cart persistence
- Syncs Redux cart state to Supabase for logged-in users

### `customer-wishlist.ts` — Server-side wishlist persistence
- Syncs Redux wishlist state to Supabase for logged-in users

### `blogs.ts` — Blog post queries

### `email/` — Nodemailer email service
- Sends order confirmations, contact form submissions

### `logger.ts` — Action logging utility
- Logs auth and order actions with metadata

---

## Data Fetching Patterns

### Server Components (ISR)
Pages fetch data at build/request time with `revalidate = 60`:

```typescript
// src/app/(shop)/page.tsx
export const revalidate = 60;

export default async function HomePage() {
  const [products, manufacturers] = await Promise.all([
    getProductsForHomePage(),
    getAllManufacturerLogos(),
  ]);
  
  // Serialize for client component (removes class instances, dates → strings)
  return <ClientComponent data={JSON.parse(JSON.stringify(products))} />;
}
```

### API Routes
For client-initiated operations (search, cart sync, orders):

```typescript
// src/app/api/search/route.ts
export async function GET(request: NextRequest) {
  // Uses server client or service-role client
}
```

### Server Actions
For auth operations (defined in `src/services/auth/actions.ts`):

```typescript
'use server';
export async function signInWithEmail(email: string) {
  const supabase = await createClient(); // server client
  // ...
}
```

---

## Important Notes

- **Always use `JSON.parse(JSON.stringify(data))`** when passing Supabase data from server to client components (strips non-serializable fields)
- **Service role client** bypasses Row Level Security — use only for public data fetching (products, manufacturers)
- **Server client** respects RLS — use for user-specific operations (orders, profile)
- **Error handling pattern**: All service functions return empty arrays `[]` or `null` on error, logging to console
- **No ORM** — Raw Supabase query builder is used throughout
