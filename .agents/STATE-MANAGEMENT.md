# State Management — Redux, Context & Data Flow

## Overview

The app uses a hybrid state management approach:

| Concern | Solution | Persistence |
|---------|----------|-------------|
| Cart | Redux Toolkit slice | redux-persist → localStorage |
| Wishlist | Redux Toolkit slice | redux-persist → localStorage |
| Checkout form | Redux Toolkit slice | redux-persist → localStorage |
| Auth session | React Context (AuthProvider) | Supabase cookies |
| UI state | React Context (UIProvider) | In-memory only |
| Server data | Server Components + ISR | Next.js cache (60s revalidate) |

---

## Redux Store (`src/store/store.ts`)

```typescript
// Combined reducers with persist
const comboReducer = combineReducers({
  cartSliceReducer,
  wishListReducer,
  userInfoFormSliceReducer,
});

const persistReduce = persistReducer(persistConfig, comboReducer);

const store = configureStore({
  reducer: { persistReduce },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
```

### Accessing state in components:
```typescript
// Cart items
const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer);

// Wishlist items
const wishlist = useSelector((state: any) => state.persistReduce.wishListReducer);

// Checkout user info
const userInfo = useSelector((state: any) => state.persistReduce.userInfoFormSliceReducer);
```

---

## Cart Slice (`src/store/cart/cart.slice.ts`)

State shape: `ICartItem[]` (array of cart items)

### Actions:
| Action | Payload | Effect |
|--------|---------|--------|
| `addToCart` | Product object | Adds item with count=1, or increments existing |
| `increment` | Item ID (string) | count + 1 |
| `decrement` | Item ID (string) | count - 1 |
| `removeAllSingleItems` | Item ID (string) | Removes item entirely |
| `clearCart` | none | Empties the cart |
| `setCart` | ICartItem[] | Replaces entire cart (used for sync) |

### Cart item interface:
```typescript
interface ICartItem {
  id: string;
  name: string;
  price: number;
  discount: boolean;
  discount_amount: number | null;
  image_url: string;
  count: number;
  // ... other product fields
}
```

---

## Wishlist Slice (`src/store/wishlist/wishlist.slice.ts`)

State shape: array of wishlist items (similar to cart but without count)

### Actions:
- `addToWishList` — Adds product if not already in list
- `removeFromWishList` — Removes by ID
- `clearWishList` — Empties wishlist
- `setWishList` — Replaces entire wishlist (used for sync)

---

## Checkout Slice (`src/store/checkout/user-info-form.slice.ts`)

Stores the checkout form data (customer info) so it persists across page navigations during checkout flow.

---

## Cart/Wishlist Sync (`src/hooks/useCartWishlistSync.ts`)

For logged-in users, cart and wishlist state is synced bidirectionally with Supabase:
- On login: fetches server-side cart/wishlist and merges with local Redux state
- On cart/wishlist change: persists updated state to Supabase via API routes

---

## Context Providers

### AuthProvider (`src/context/session/session.context.tsx`)

Provides auth state to the entire app:

```typescript
type AuthContextValue = {
  session: Session | null;      // Supabase session
  user: User | null;            // Supabase auth user
  customer: Customer | null;    // Customer profile from DB
  loading: boolean;             // Initial auth loading state
  isAuthenticated: boolean;     // Convenience boolean
  refreshCustomer: () => Promise<void>;
  updateCustomer: (values: Customer) => Promise<OperationResult>;
  signOut: () => Promise<OperationResult>;
};
```

Access with: `const { user, customer, isAuthenticated } = useAuth();`

### UIProvider (`src/context/ui/ui.context.tsx`)

Manages UI-level state for the shop layout:

```typescript
const value = {
  drawerOpen, setDrawerOpen,         // Mobile nav drawer
  showSearchBox, setShowSearchBox,   // Search overlay
  showLoadingWheel, setShowLoadingWheel,  // Global loading
};
```

Also wraps children with: `<NavBar />`, `<Animate>`, `<Footer />`

Access with: `const { drawerOpen, setDrawerOpen } = useUIContext();`

---

## Provider Composition (`src/app/providers.tsx`)

The root providers are composed in this order (outermost first):

1. **ReduxProvider** — Redux store
2. **ThemeProvider** — MUI theme
3. **AuthProvider** — Supabase auth session
4. **CssBaseline** — MUI CSS reset
5. **SyncManager** — Cart/wishlist sync hook
6. **PersistGate** — Waits for redux-persist rehydration
7. **Toaster** — react-hot-toast notifications
8. **Analytics** — Vercel Analytics

---

## Data Flow Summary

```
User Action → Redux dispatch (addToCart, etc.)
           → Redux state updates
           → redux-persist saves to localStorage
           → useCartWishlistSync detects change
           → API call to sync with Supabase (if logged in)

Page Load → Server Component fetches from Supabase (ISR)
          → Serializes data (JSON.parse/stringify)
          → Passes to Client Component as props
          → Client renders with MUI components

Auth Flow → AuthProvider listens to Supabase onAuthStateChange
          → Updates session/user/customer in context
          → Components re-render based on isAuthenticated
```
