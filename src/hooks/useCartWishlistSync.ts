'use client';

import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '@/hooks/useAuth';
import { setCart } from '@/store/cart/cart.slice';
import { setWishList } from '@/store/wishlist/wishlist.slice';

/**
 * Syncs Redux cart/wishlist state with the database.
 *
 * - On login: loads cart + wishlist from DB and merges with local state
 * - On cart/wishlist changes: diffs previous vs current and makes targeted API calls
 */
export function useCartWishlistSync() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth();

  const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer);
  const wishlist = useSelector((state: any) => state.persistReduce.wishListReducer);

  // Track whether we've loaded from DB this session
  const hasLoadedRef = useRef(false);
  // Track previous user to detect login/logout transitions
  const prevUserIdRef = useRef<string | null>(null);
  // Store previous state for diffing
  const prevCartRef = useRef<any[]>([]);
  const prevWishlistRef = useRef<any[]>([]);
  // Skip sync after loading from DB
  const skipNextCartSyncRef = useRef(false);
  const skipNextWishlistSyncRef = useRef(false);

  // ─── Load from DB on login ───────────────────────────────────
  useEffect(() => {
    const userId = user?.id ?? null;

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

        if (cartRes.ok) {
          const { items: dbCartItems } = await cartRes.json();
          if (dbCartItems && dbCartItems.length > 0) {
            const mergedCart = mergeCart(cart, dbCartItems);
            skipNextCartSyncRef.current = true;
            prevCartRef.current = mergedCart;
            dispatch(setCart(mergedCart));
          } else if (cart.length > 0) {
            // No DB data — push local cart to DB (initial sync)
            prevCartRef.current = cart;
            await syncFullCartToDB(cart);
          } else {
            prevCartRef.current = [];
          }
        }

        if (wishlistRes.ok) {
          const { items: dbWishlistItems } = await wishlistRes.json();
          if (dbWishlistItems && dbWishlistItems.length > 0) {
            const mergedWishlist = mergeWishlist(wishlist, dbWishlistItems);
            skipNextWishlistSyncRef.current = true;
            prevWishlistRef.current = mergedWishlist;
            dispatch(setWishList(mergedWishlist));
          } else if (wishlist.length > 0) {
            prevWishlistRef.current = wishlist;
            await syncFullWishlistToDB(wishlist);
          } else {
            prevWishlistRef.current = [];
          }
        }
      } catch (error) {
        console.error('Error loading cart/wishlist from DB:', error);
      }
    };

    loadFromDB();
  }, [isAuthenticated, user?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Sync cart changes to DB (diff-based) ────────────────────
  useEffect(() => {
    if (!isAuthenticated || !hasLoadedRef.current) return;

    if (skipNextCartSyncRef.current) {
      skipNextCartSyncRef.current = false;
      prevCartRef.current = cart;
      return;
    }

    const prev = prevCartRef.current;
    prevCartRef.current = cart;

    // Diff: find what changed
    const prevMap = new Map<string, number>();
    prev.forEach((item: any) => prevMap.set(item.id, item.count));

    const currMap = new Map<string, number>();
    cart.forEach((item: any) => currMap.set(item.id, item.count));

    // Added or quantity changed
    cart.forEach((item: any) => {
      const prevCount = prevMap.get(item.id);
      if (prevCount === undefined) {
        // New item added
        fetch('/api/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: item.id, quantity: item.count }),
        }).catch(() => { });
      } else if (prevCount !== item.count) {
        // Quantity changed
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

  // ─── Sync wishlist changes to DB (diff-based) ────────────────
  useEffect(() => {
    if (!isAuthenticated || !hasLoadedRef.current) return;

    if (skipNextWishlistSyncRef.current) {
      skipNextWishlistSyncRef.current = false;
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

// ─── Helper functions ────────────────────────────────────────────

function mergeCart(localCart: any[], dbItems: any[]): any[] {
  const dbMap = new Map<string, number>();
  dbItems.forEach((item: any) => {
    dbMap.set(item.product_id, item.quantity);
  });

  const merged: any[] = localCart.map((item: any) => {
    if (dbMap.has(item.id)) {
      const dbQty = dbMap.get(item.id)!;
      dbMap.delete(item.id);
      return { ...item, count: dbQty };
    }
    return item;
  });

  return merged;
}

function mergeWishlist(localWishlist: any[], _dbItems: any[]): any[] {
  return localWishlist;
}

async function syncFullCartToDB(cart: any[]): Promise<void> {
  try {
    await Promise.all(
      cart.map((item) =>
        fetch('/api/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: item.id, quantity: item.count }),
        })
      )
    );
  } catch (error) {
    console.error('Error syncing cart to DB:', error);
  }
}

async function syncFullWishlistToDB(wishlist: any[]): Promise<void> {
  try {
    await Promise.all(
      wishlist.map((item) =>
        fetch('/api/wishlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: item.id }),
        })
      )
    );
  } catch (error) {
    console.error('Error syncing wishlist to DB:', error);
  }
}
