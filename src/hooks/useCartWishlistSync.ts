'use client';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '@/hooks/useAuth';
import { setCart, clearCart } from '@/store/cart/cart.slice';
import { setWishList, clearWishList } from '@/store/wishlist/wishlist.slice';

/**
 * When logged in:
 *   - DB is the single source of truth
 *   - On login/page load: fetch from DB → overwrite Redux state
 *   - On Redux change (user action): diff and push change to DB
 *   - On logout: clear Redux state (no leftover data from the account)
 *
 * When logged out:
 *   - Redux + localStorage is the source of truth (default behavior)
 *   - No DB calls at all
 */
export function useCartWishlistSync() {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading } = useAuth();

  const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer);
  const wishlist = useSelector((state: any) => state.persistReduce.wishListReducer);

  const prevUserIdRef = useRef<string | null>(null);
  const hasLoadedRef = useRef(false);
  const prevCartRef = useRef<any[]>([]);
  const prevWishlistRef = useRef<any[]>([]);
  const skipCartSyncRef = useRef(false);
  const skipWishlistSyncRef = useRef(false);

  // ─── On login: load from DB and overwrite Redux ──────────────
  useEffect(() => {
    if (loading) return;

    const userId = user?.id ?? null;

    // Detect logout → clear Redux
    if (!userId && prevUserIdRef.current) {
      dispatch(clearCart());
      dispatch(clearWishList());
      hasLoadedRef.current = false;
      prevCartRef.current = [];
      prevWishlistRef.current = [];
    }

    // Detect login → load from DB
    if (userId && userId !== prevUserIdRef.current) {
      hasLoadedRef.current = false;
    }

    prevUserIdRef.current = userId;

    if (!isAuthenticated || !userId || hasLoadedRef.current) return;
    hasLoadedRef.current = true;

    const loadFromDB = async () => {
      try {
        const [cartRes, wishlistRes] = await Promise.all([
          fetch('/api/cart'),
          fetch('/api/wishlist'),
        ]);

        let dbCart: any[] = [];
        let dbWishlist: any[] = [];

        if (cartRes.ok) {
          const { items } = await cartRes.json();
          dbCart = items || [];
        }

        if (wishlistRes.ok) {
          const { items } = await wishlistRes.json();
          dbWishlist = items || [];
        }

        // If user had local items before login, push them to DB first
        const localCart = cart as any[];
        const localWishlist = wishlist as any[];

        if (localCart.length > 0 && dbCart.length === 0) {
          // First login with local items — push to DB
          await pushCartToDB(localCart);
          prevCartRef.current = localCart;
          skipCartSyncRef.current = true;
        } else {
          // DB has data (or both empty) — DB wins, overwrite Redux
          // We need product data to display in cart UI.
          // DB only stores product_id + quantity. Fetch full product data.
          const fullCart = await hydrateCartFromDB(dbCart);
          skipCartSyncRef.current = true;
          prevCartRef.current = fullCart;
          dispatch(setCart(fullCart));
        }

        if (localWishlist.length > 0 && dbWishlist.length === 0) {
          await pushWishlistToDB(localWishlist);
          prevWishlistRef.current = localWishlist;
          skipWishlistSyncRef.current = true;
        } else {
          const fullWishlist = await hydrateWishlistFromDB(dbWishlist);
          skipWishlistSyncRef.current = true;
          prevWishlistRef.current = fullWishlist;
          dispatch(setWishList(fullWishlist));
        }
      } catch (error) {
        console.error('Error loading cart/wishlist from DB:', error);
      }
    };

    loadFromDB();
  }, [isAuthenticated, user?.id, loading]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Sync cart changes to DB (diff-based, single API call) ───
  useEffect(() => {
    if (!isAuthenticated || !hasLoadedRef.current) return;

    if (skipCartSyncRef.current) {
      skipCartSyncRef.current = false;
      prevCartRef.current = cart;
      return;
    }

    const prev = prevCartRef.current;
    prevCartRef.current = cart;

    const prevMap = new Map<string, number>();
    prev.forEach((item: any) => prevMap.set(item.id, item.count));

    const currMap = new Map<string, number>();
    cart.forEach((item: any) => currMap.set(item.id, item.count));

    // Added or quantity changed
    cart.forEach((item: any) => {
      const prevCount = prevMap.get(item.id);
      if (prevCount === undefined) {
        fetch('/api/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: item.id, quantity: item.count }),
        }).catch(() => { });
      } else if (prevCount !== item.count) {
        fetch('/api/cart', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: item.id, quantity: item.count }),
        }).catch(() => { });
      }
    });

    // Removed items
    prev.forEach((item: any) => {
      if (!currMap.has(item.id)) {
        fetch('/api/cart', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: item.id }),
        }).catch(() => { });
      }
    });
  }, [cart, isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Sync wishlist changes to DB (diff-based, single API call)
  useEffect(() => {
    if (!isAuthenticated || !hasLoadedRef.current) return;

    if (skipWishlistSyncRef.current) {
      skipWishlistSyncRef.current = false;
      prevWishlistRef.current = wishlist;
      return;
    }

    const prev = prevWishlistRef.current;
    prevWishlistRef.current = wishlist;

    const prevIds = new Set(prev.map((item: any) => item.id));
    const currIds = new Set(wishlist.map((item: any) => item.id));

    // Added
    wishlist.forEach((item: any) => {
      if (!prevIds.has(item.id)) {
        fetch('/api/wishlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: item.id }),
        }).catch(() => { });
      }
    });

    // Removed
    prev.forEach((item: any) => {
      if (!currIds.has(item.id)) {
        fetch('/api/wishlist', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: item.id }),
        }).catch(() => { });
      }
    });
  }, [wishlist, isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps
}

// ─── Helpers ─────────────────────────────────────────────────────

async function hydrateCartFromDB(dbItems: any[]): Promise<any[]> {
  if (dbItems.length === 0) return [];

  // Fetch full product data for each product_id
  const productIds = dbItems.map((item: any) => item.product_id);
  try {
    const res = await fetch('/api/products/by-ids', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: productIds }),
    });

    if (!res.ok) return [];

    const { products } = await res.json();
    if (!products) return [];

    // Map product data with DB quantities
    const quantityMap = new Map<string, number>();
    dbItems.forEach((item: any) => quantityMap.set(item.product_id, item.quantity));

    return products.map((product: any) => ({
      ...product,
      count: quantityMap.get(product.id) || 1,
    }));
  } catch {
    return [];
  }
}

async function hydrateWishlistFromDB(dbItems: any[]): Promise<any[]> {
  if (dbItems.length === 0) return [];

  const productIds = dbItems.map((item: any) => item.product_id);
  try {
    const res = await fetch('/api/products/by-ids', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ids: productIds }),
    });

    if (!res.ok) return [];

    const { products } = await res.json();
    return products || [];
  } catch {
    return [];
  }
}

async function pushCartToDB(cart: any[]): Promise<void> {
  await Promise.all(
    cart.map((item) =>
      fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: item.id, quantity: item.count }),
      })
    )
  ).catch(() => { });
}

async function pushWishlistToDB(wishlist: any[]): Promise<void> {
  await Promise.all(
    wishlist.map((item) =>
      fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: item.id }),
      })
    )
  ).catch(() => { });
}
