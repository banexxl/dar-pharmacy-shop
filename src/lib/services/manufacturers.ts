import { createServiceRoleClient } from '@/lib/supabase/service-role';
import type { Manufacturer } from '@/lib/supabase/types';

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
 * Get all distinct manufacturer names.
 */
export async function getAllManufacturerNames(): Promise<string[]> {
  const { data, error } = await supabase
    .from('manufacturers')
    .select('name');

  if (error) {
    console.error('getAllManufacturerNames error:', error.message);
    return [];
  }
  return (data ?? []).map((m) => m.name);
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
