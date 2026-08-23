/**
 * Navigation service — builds the accordion category tree dynamically from Supabase.
 * Queries main_categories, mid_categories, and sub_categories to build a full nav tree.
 */

import { createServiceRoleClient } from './supabase/service-role';
import { MainCategory, MidCategory, SubCategory } from './supabase/types';

const supabase = createServiceRoleClient();

export interface AccordionItem {
  id: string;
  title: string;
  link: string;
  children?: AccordionItem[];
}

/**
 * Build the full accordion navigation panels from the database.
 *
 * Structure:
 * - Top level: "Proizvodi" wrapper
 *   - Each main_category as a child
 *     - Each mid_category under that main as a grandchild
 *       - Each sub_category under that mid as a great-grandchild
 */
export async function buildAccordionPanels(): Promise<AccordionItem[]> {
  // 1. Fetch all main categories
  const { data: mainCategories, error: mainError } = await supabase
    .from('main_categories')
    .select('*')
    .order('label', { ascending: true });

  if (mainError || !mainCategories) {
    console.error('buildAccordionPanels: Failed to fetch main_categories', mainError?.message);
    return [];
  }

  // 2. Fetch all mid categories
  const { data: midCategories, error: midError } = await supabase
    .from('mid_categories')
    .select('*')
    .order('label', { ascending: true });

  if (midError) {
    console.error('buildAccordionPanels: Failed to fetch mid_categories', midError.message);
  }

  // 3. Fetch all sub categories
  const { data: subCategories, error: subError } = await supabase
    .from('sub_categories')
    .select('*')
    .order('label', { ascending: true });

  if (subError) {
    console.error('buildAccordionPanels: Failed to fetch sub_categories', subError.message);
  }

  const mids = midCategories ?? [];
  const subs = subCategories ?? [];

  // 4. Build the tree
  const categoryChildren: AccordionItem[] = mainCategories.map((main: MainCategory) => {
    // Find mid categories belonging to this main
    const midChildren = mids
      .filter((mid: MidCategory) => mid.main_category_id === main.id)
      .map((mid: MidCategory) => {
        // Find sub categories belonging to this mid
        const subChildren = subs
          .filter((sub: SubCategory) => sub.mid_category_id === mid.id)
          .map((sub: SubCategory) => ({
            id: `${main.value}-${mid.value}-${sub.value}`,
            title: sub.label,
            link: `/proizvodi/${main.value}/${mid.value}/${sub.value}`,
          }));

        const midItem: AccordionItem = {
          id: `${main.value}-${mid.value}`,
          title: mid.label,
          link: `/proizvodi/${main.value}/${mid.value}`,
        };

        if (subChildren.length > 0) {
          midItem.children = subChildren;
        }

        return midItem;
      });

    const mainItem: AccordionItem = {
      id: main.value,
      title: main.label,
      link: `/proizvodi/${main.value}`,
    };

    if (midChildren.length > 0) {
      mainItem.children = midChildren;
    }

    return mainItem;
  });

  // 5. Wrap in top-level "Proizvodi" node
  return [
    {
      id: 'svi-proizvodi',
      title: 'Proizvodi',
      link: '/proizvodi',
      children: categoryChildren,
    },
  ];
}
