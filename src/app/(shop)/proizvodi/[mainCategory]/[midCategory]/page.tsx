import { getProductsByMainAndMidCategory } from '@/services/products';
import { CategoryPageClient } from '../category-client';

interface Props {
  params: Promise<{ mainCategory: string; midCategory: string }>;
}

export default async function MidCategoryPage({ params }: Props) {
  const { mainCategory, midCategory } = await params;
  const products = await getProductsByMainAndMidCategory(mainCategory, midCategory);

  return (
    <CategoryPageClient
      products={JSON.parse(JSON.stringify(products))}
      mainCategory={mainCategory}
    />
  );
}
