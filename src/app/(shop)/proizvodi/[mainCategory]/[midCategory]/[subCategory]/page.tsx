import { getProductsByAllCategories } from '@/lib/services/products';
import { CategoryPageClient } from '../../category-client';

interface Props {
  params: Promise<{ mainCategory: string; midCategory: string; subCategory: string }>;
}

export default async function SubCategoryPage({ params }: Props) {
  const { mainCategory, midCategory, subCategory } = await params;
  const products = await getProductsByAllCategories(mainCategory, midCategory, subCategory);

  return (
    <CategoryPageClient
      products={JSON.parse(JSON.stringify(products))}
      mainCategory={mainCategory}
    />
  );
}
