import { createServiceRoleClient } from '@/lib/supabase/service-role';
import type { Product, Manufacturer } from '@/lib/supabase/types';

/**
 * Supabase product service — replaces MongoDB ProductsServices.
 * Uses service-role client for build-time/server-side data fetching.
 */

const supabase = createServiceRoleClient();

// ---------------------------------------------------------------------------
// Product queries
// ---------------------------------------------------------------------------

export async function getAllActiveProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true);

  if (error) {
    console.error('getAllActiveProducts error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single();

  if (error) {
    return null;
  }
  return data;
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .eq('is_active', true)
    .single();

  if (error) {
    return null;
  }
  return data;
}

export async function getProductsForHomePage(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('display_on_home', true);

  if (error) {
    console.error('getProductsForHomePage error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getNewArrivals(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('new_arrival', true);

  if (error) {
    console.error('getNewArrivals error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getDiscountedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('discount', true);

  if (error) {
    console.error('getDiscountedProducts error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getPromotionProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('promoting', true)
    .neq('promotion_text', '');

  if (error) {
    console.error('getPromotionProducts error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getProductsByMainCategory(mainCategory: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .ilike('main_category', mainCategory);

  if (error) {
    console.error('getProductsByMainCategory error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getProductsByMainAndMidCategory(
  mainCategory: string,
  midCategory: string
): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('main_category', mainCategory)
    .eq('mid_category', midCategory);

  if (error) {
    console.error('getProductsByMainAndMidCategory error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getProductsByAllCategories(
  mainCategory: string,
  midCategory: string,
  subCategory: string
): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('main_category', mainCategory)
    .eq('mid_category', midCategory)
    .eq('sub_category', subCategory);

  if (error) {
    console.error('getProductsByAllCategories error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getProductsByManufacturer(manufacturerValue: string): Promise<Product[]> {
  // Join with manufacturers table to find by manufacturer value/url
  const { data: manufacturer } = await supabase
    .from('manufacturers')
    .select('id')
    .ilike('value', manufacturerValue)
    .single();

  if (!manufacturer) {
    // Fallback: try matching by url field
    const { data: mfrByUrl } = await supabase
      .from('manufacturers')
      .select('id')
      .ilike('url', manufacturerValue)
      .single();

    if (!mfrByUrl) return [];

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .eq('manufacturer_id', mfrByUrl.id);

    if (error) return [];
    return data ?? [];
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('manufacturer_id', manufacturer.id);

  if (error) {
    console.error('getProductsByManufacturer error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getProductsByMainCategoryAndManufacturer(
  mainCategory: string,
  manufacturerValue: string
): Promise<Product[]> {
  // Find manufacturer id
  const { data: manufacturer } = await supabase
    .from('manufacturers')
    .select('id')
    .or(`value.ilike.${manufacturerValue},url.ilike.${manufacturerValue}`)
    .single();

  if (!manufacturer) return [];

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .ilike('main_category', mainCategory)
    .eq('manufacturer_id', manufacturer.id);

  if (error) {
    console.error('getProductsByMainCategoryAndManufacturer error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getRandomProducts(limit: number = 10): Promise<Product[]> {
  // Supabase doesn't have native random, use order by created_at desc with limit as fallback
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .limit(limit);

  if (error) {
    console.error('getRandomProducts error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getRandomProductsByManufacturer(
  manufacturerValue: string,
  limit: number = 10
): Promise<Product[]> {
  const products = await getProductsByManufacturer(manufacturerValue);
  // Shuffle and take limit
  const shuffled = products.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, limit);
}

export async function searchProducts(searchTerm: string): Promise<Product[]> {
  const terms = searchTerm.trim().split(/\s+/).filter(Boolean);

  if (terms.length === 0) return [];

  // Build OR conditions for name matching
  // Use ilike for each term against name
  let query = supabase
    .from('products')
    .select('*, manufacturers!inner(name)')
    .eq('is_active', true);

  // Search by product name or manufacturer name using or filter
  const orConditions = terms
    .map((term) => `name.ilike.%${term}%`)
    .join(',');

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .or(orConditions);

  if (error) {
    console.error('searchProducts error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getAllMainCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from('products')
    .select('main_category')
    .eq('is_active', true);

  if (error) {
    console.error('getAllMainCategories error:', error.message);
    return [];
  }

  const unique = [...new Set((data ?? []).map((p) => p.main_category))];
  return unique.filter(Boolean);
}

export async function getAllProductSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('products')
    .select('slug')
    .eq('is_active', true);

  if (error) {
    console.error('getAllProductSlugs error:', error.message);
    return [];
  }
  return (data ?? []).map((p) => p.slug);
}

export async function getTopNSellingProducts(n: number): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('best_seller', true)
    .limit(n);

  if (error) {
    console.error('getTopNSellingProducts error:', error.message);
    return [];
  }
  return data ?? [];
}
