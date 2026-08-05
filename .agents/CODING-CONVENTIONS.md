# Coding Conventions & Development Patterns

## TypeScript

- **Strict mode** enabled (`strict: true` in tsconfig)
- **Target**: ES2022
- **Module resolution**: Bundler
- **Path alias**: `@/*` → `./src/*` (always use this, never relative `../../`)
- **No `any`** where avoidable — use proper types from `src/services/supabase/types.ts` or `src/interfaces/`

---

## File & Folder Naming

| Type | Convention | Example |
|------|-----------|---------|
| Components | kebab-case folder, kebab-case file | `product-card/product-card.tsx` |
| Hooks | camelCase with `use` prefix | `useCartWishlistSync.ts` |
| Services | kebab-case | `customer-cart.ts` |
| Schemas | kebab-case with `.schema` suffix (some) | `payment-form.schema.ts` |
| Interfaces | kebab-case folder | `interfaces/cart/cart.interface.ts` |
| Slices | kebab-case with `.slice` suffix | `cart.slice.ts` |
| Context | kebab-case with `.context` suffix | `session.context.tsx` |
| Utils | kebab-case | `currency-formatter.ts` |

---

## Component Patterns

### Server Components (default)
```typescript
// No 'use client' directive — runs on server
import { getProducts } from '@/services/products';

export const revalidate = 60; // ISR every 60 seconds

export default async function ProductsPage() {
  const products = await getProducts();
  return <ClientComponent data={JSON.parse(JSON.stringify(products))} />;
}
```

### Client Components
```typescript
'use client';

import { useState } from 'react';
import { Box, Typography } from '@mui/material';

export function ProductCard({ product }: { product: Product }) {
  // Interactive logic here
}
```

### Key Rules:
1. Server components fetch data, client components handle interactivity
2. Always serialize data with `JSON.parse(JSON.stringify(data))` when passing from server to client
3. Mark client components with `'use client'` at the top of the file
4. Keep client components as lean as possible — push data fetching up to server components

---

## Data Fetching Patterns

### For pages (ISR):
```typescript
export const revalidate = 60;

export default async function Page() {
  const data = await serviceFunction();
  return <ClientComponent data={JSON.parse(JSON.stringify(data))} />;
}
```

### For client-initiated operations:
```typescript
// Via API routes
const res = await fetch('/api/search?q=vitamin');
const data = await res.json();

// Via server actions (auth)
import { signInWithEmail } from '@/services/auth/actions';
const result = await signInWithEmail(email);
```

---

## Redux Patterns

### Dispatching actions:
```typescript
import { useDispatch } from 'react-redux';
import { addToCart, increment } from '@/store/cart/cart.slice';

const dispatch = useDispatch();
dispatch(addToCart(product));
dispatch(increment(productId));
```

### Selecting state:
```typescript
import { useSelector } from 'react-redux';

const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer);
```

### Slice pattern:
```typescript
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'sliceName',
  initialState,
  reducers: {
    actionName(state, { payload }) {
      // Return new state (immutable pattern)
      return [...state, payload];
    },
  },
});
```

---

## Form Handling

- **Formik** for form state management
- **Yup** for validation schemas (defined in `src/schemas/`)

```typescript
import { useFormik } from 'formik';
import { contactFormSchema } from '@/schemas/contact-form';

const formik = useFormik({
  initialValues: { name: '', email: '', message: '' },
  validationSchema: contactFormSchema,
  onSubmit: async (values) => { /* ... */ },
});
```

---

## Error Handling

### Service functions:
```typescript
// Return empty/null on error, log to console
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select('*');
  if (error) {
    console.error('getProducts error:', error.message);
    return [];
  }
  return data ?? [];
}
```

### Server actions:
```typescript
// Return { success, error } objects
export async function signIn(email: string) {
  const { error } = await supabase.auth.signInWithOtp({ email });
  if (error) return { error: error.message };
  return { success: true };
}
```

### Client-side:
```typescript
// Use react-hot-toast for user feedback
import toast from 'react-hot-toast';

toast.success('Proizvod dodat u korpu');
toast.error('Greska pri prijavi');
```

---

## Import Order Convention

```typescript
// 1. React/Next.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// 2. Third-party libraries
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

// 3. Internal — services/hooks/context
import { useAuth } from '@/hooks/useAuth';
import { getProducts } from '@/services/products';

// 4. Internal — components
import { ProductCard } from '@/components/product-card/product-card';

// 5. Internal — types/interfaces/schemas
import { Product } from '@/services/supabase/types';

// 6. Internal — styles/constants
import { Colors } from '@/styles/theme';
```

---

## Key Do's and Don'ts

### Do:
- Use `@/*` path aliases for all imports
- Use MUI components instead of raw HTML
- Use theme colors/tokens instead of hardcoded values
- Use server components for data fetching
- Serialize data before passing to client components
- Use `useAuth()` hook for auth state
- Return `{ success, error }` from server actions
- Use `react-hot-toast` for notifications
- Write Serbian text for all user-facing strings

### Don't:
- Don't install Tailwind or use utility classes
- Don't query Supabase directly from components (use services layer)
- Don't use `getServerSideProps` or `getStaticProps` (this is App Router)
- Don't use relative imports like `../../components` (use `@/`)
- Don't store secrets in client-accessible code
- Don't skip the `JSON.parse(JSON.stringify())` step for server→client data
- Don't use `any` type without good reason
- Don't add English text to the UI (everything is Serbian)

---

## Development Workflow

```bash
npm run dev        # Starts Next.js dev server with Turbopack
npm run build      # Production build (catches type errors)
npm run typecheck  # Quick type check without building
npm run lint       # ESLint check
```

### Before committing:
1. Run `npm run typecheck` to catch type errors
2. Run `npm run lint` to check for linting issues
3. Test the page you changed in the browser
