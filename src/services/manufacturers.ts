import { createServiceRoleClient } from "./supabase/service-role";
import { Manufacturer } from "./supabase/types";

const supabase = createServiceRoleClient();

/**
 * Get all manufacturers that have a non-empty URL (for logo carousel).
 */
export async function getAllManufacturerLogos(): Promise<Manufacturer[]> {
  const { data, error } = await supabase
    .from('manufacturers')
    .select('*')
    .neq('url', '');

  if (error) {
    console.error('getAllManufacturerLogos error:', error.message);
    return [];
  }
  return data ?? [];
}

/**
 * Get all manufacturer URL slugs (the `value` field, not the display `name`).
 * Used for building manufacturer page URLs — `name` is not URL-safe
 * (spaces, "&", punctuation) and does not match what `getManufacturerByValue` looks up.
 */
export async function getAllManufacturerValues(): Promise<string[]> {
  const { data, error } = await supabase
    .from('manufacturers')
    .select('value');

  if (error) {
    console.error('getAllManufacturerValues error:', error.message);
    return [];
  }
  return (data ?? []).map((m) => m.value);
}

/**
 * Get all (manufacturer slug, main category slug) pairs that actually have
 * at least one active product — used to build manufacturer+category URLs
 * without generating thousands of empty/404 combinations.
 */
export async function getManufacturerCategoryPairs(): Promise<{ manufacturerValue: string; mainCategory: string }[]> {
  const { data: products, error } = await supabase
    .from('products')
    .select('manufacturer_id, main_category')
    .eq('is_active', true)
    .not('manufacturer_id', 'is', null)
    .not('main_category', 'is', null);

  if (error) {
    console.error('getManufacturerCategoryPairs error:', error.message);
    return [];
  }

  const { data: manufacturers, error: mfrError } = await supabase
    .from('manufacturers')
    .select('id, value');

  if (mfrError) {
    console.error('getManufacturerCategoryPairs (manufacturers) error:', mfrError.message);
    return [];
  }

  const idToValue = new Map((manufacturers ?? []).map((m) => [m.id, m.value]));
  const seen = new Set<string>();
  const pairs: { manufacturerValue: string; mainCategory: string }[] = [];

  for (const p of products ?? []) {
    const manufacturerValue = idToValue.get(p.manufacturer_id);
    if (!manufacturerValue || !p.main_category) continue;

    const key = `${manufacturerValue}/${p.main_category}`;
    if (seen.has(key)) continue;
    seen.add(key);
    pairs.push({ manufacturerValue, mainCategory: p.main_category });
  }

  return pairs;
}

/**
 * Get a single manufacturer by its value/slug.
 */
export async function getManufacturerByValue(value: string): Promise<Manufacturer | null> {
  const { data, error } = await supabase
    .from('manufacturers')
    .select('*')
    .ilike('value', value)
    .single();

  if (error) return null;
  return data;
}

/**
 * Get manufacturer name for a product (by manufacturer_id).
 */
export async function getManufacturerById(id: string): Promise<Manufacturer | null> {
  const { data, error } = await supabase
    .from('manufacturers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data;
}
