/**
 * Category service — queries main_categories, mid_categories, sub_categories from Supabase.
 * Uses service-role client for build-time/server-side data fetching.
 * Results are cached via Next.js fetch cache (revalidate: 3600 = 1 hour).
 */

import { createServiceRoleClient } from './supabase/service-role';
import { MainCategory, MidCategory, SubCategory } from './supabase/types';

const supabase = createServiceRoleClient();

// ---------------------------------------------------------------------------
// Main Categories
// ---------------------------------------------------------------------------

export async function getAllMainCategories(): Promise<MainCategory[]> {
  const { data, error } = await supabase
    .from('main_categories')
    .select('*')
    .order('label', { ascending: true });

  if (error) {
    console.error('getAllMainCategories error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getMainCategoryByValue(value: string): Promise<MainCategory | null> {
  const { data, error } = await supabase
    .from('main_categories')
    .select('*')
    .eq('value', value)
    .single();

  if (error) return null;
  return data;
}

// ---------------------------------------------------------------------------
// Mid Categories
// ---------------------------------------------------------------------------

export async function getMidCategoriesByMainId(mainCategoryId: string): Promise<MidCategory[]> {
  const { data, error } = await supabase
    .from('mid_categories')
    .select('*')
    .eq('main_category_id', mainCategoryId)
    .order('label', { ascending: true });

  if (error) {
    console.error('getMidCategoriesByMainId error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getMidCategoryByValue(
  value: string,
  mainCategoryId: string
): Promise<MidCategory | null> {
  const { data, error } = await supabase
    .from('mid_categories')
    .select('*')
    .eq('value', value)
    .eq('main_category_id', mainCategoryId)
    .single();

  if (error) return null;
  return data;
}

export async function getAllMidCategories(): Promise<MidCategory[]> {
  const { data, error } = await supabase
    .from('mid_categories')
    .select('*')
    .order('label', { ascending: true });

  if (error) {
    console.error('getAllMidCategories error:', error.message);
    return [];
  }
  return data ?? [];
}

// ---------------------------------------------------------------------------
// Sub Categories
// ---------------------------------------------------------------------------

export async function getSubCategoriesByMidId(midCategoryId: string): Promise<SubCategory[]> {
  const { data, error } = await supabase
    .from('sub_categories')
    .select('*')
    .eq('mid_category_id', midCategoryId)
    .order('label', { ascending: true });

  if (error) {
    console.error('getSubCategoriesByMidId error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getSubCategoryByValue(
  value: string,
  midCategoryId: string
): Promise<SubCategory | null> {
  const { data, error } = await supabase
    .from('sub_categories')
    .select('*')
    .eq('value', value)
    .eq('mid_category_id', midCategoryId)
    .single();

  if (error) return null;
  return data;
}

export async function getAllSubCategories(): Promise<SubCategory[]> {
  const { data, error } = await supabase
    .from('sub_categories')
    .select('*')
    .order('label', { ascending: true });

  if (error) {
    console.error('getAllSubCategories error:', error.message);
    return [];
  }
  return data ?? [];
}

// ---------------------------------------------------------------------------
// Resolved Category Labels (for breadcrumbs / SEO)
// ---------------------------------------------------------------------------

export interface ResolvedCategories {
  mainCategory: MainCategory | null;
  midCategory: MidCategory | null;
  subCategory: SubCategory | null;
  siblingMidCategories: MidCategory[];
  siblingSubCategories: SubCategory[];
}

/**
 * Resolve and validate an entire category path from slugs.
 * Returns null for each level that doesn't exist or doesn't belong to its parent.
 * Also returns sibling categories at the deepest resolved level (for sidebar navigation).
 */
export async function resolveCategoryPath(
  mainSlug: string,
  midSlug?: string,
  subSlug?: string
): Promise<ResolvedCategories> {
  const result: ResolvedCategories = {
    mainCategory: null,
    midCategory: null,
    subCategory: null,
    siblingMidCategories: [],
    siblingSubCategories: [],
  };

  // 1. Resolve main category
  const mainCat = await getMainCategoryByValue(mainSlug);
  if (!mainCat) return result;
  result.mainCategory = mainCat;

  // Fetch sibling mid categories for navigation
  result.siblingMidCategories = await getMidCategoriesByMainId(mainCat.id);

  if (!midSlug) return result;

  // 2. Resolve mid category
  const midCat = await getMidCategoryByValue(midSlug, mainCat.id);
  if (!midCat) return result;
  result.midCategory = midCat;

  // Fetch sibling sub categories for navigation
  result.siblingSubCategories = await getSubCategoriesByMidId(midCat.id);

  if (!subSlug) return result;

  // 3. Resolve sub category
  const subCat = await getSubCategoryByValue(subSlug, midCat.id);
  if (!subCat) return result;
  result.subCategory = subCat;

  return result;
}

/**
 * Resolve category labels for a product (used on product detail pages).
 * The product stores category slugs as text; this looks them up to get display labels.
 */
export async function resolveCategoryLabelsForProduct(
  mainSlug: string | null,
  midSlug: string | null,
  subSlug: string | null
): Promise<{ mainLabel: string | null; midLabel: string | null; subLabel: string | null }> {
  const labels = { mainLabel: null as string | null, midLabel: null as string | null, subLabel: null as string | null };

  if (!mainSlug) return labels;

  const mainCat = await getMainCategoryByValue(mainSlug);
  if (!mainCat) return labels;
  labels.mainLabel = mainCat.label;

  if (!midSlug) return labels;

  const midCat = await getMidCategoryByValue(midSlug, mainCat.id);
  if (!midCat) return labels;
  labels.midLabel = midCat.label;

  if (!subSlug) return labels;

  const subCat = await getSubCategoryByValue(subSlug, midCat.id);
  if (!subCat) return labels;
  labels.subLabel = subCat.label;

  return labels;
}

// ---------------------------------------------------------------------------
// Static Params Generation (for generateStaticParams)
// ---------------------------------------------------------------------------

export interface CategoryPath {
  mainCategory: string;
  midCategory?: string;
  subCategory?: string;
}

/**
 * Get all valid category path combinations for static generation.
 */
export async function getAllCategoryPaths(): Promise<CategoryPath[]> {
  const paths: CategoryPath[] = [];

  const mainCats = await getAllMainCategories();

  for (const main of mainCats) {
    paths.push({ mainCategory: main.value });

    const midCats = await getMidCategoriesByMainId(main.id);
    for (const mid of midCats) {
      paths.push({ mainCategory: main.value, midCategory: mid.value });

      const subCats = await getSubCategoriesByMidId(mid.id);
      for (const sub of subCats) {
        paths.push({ mainCategory: main.value, midCategory: mid.value, subCategory: sub.value });
      }
    }
  }

  return paths;
}
