import { getProductsByMainCategory } from '@/lib/services/products';
import { CategoryPageClient } from './category-client';

interface Props {
  params: Promise<{ mainCategory: string }>;
}

export default async function MainCategoryPage({ params }: Props) {
  const { mainCategory } = await params;
  const products = await getProductsByMainCategory(mainCategory);

  return (
    <CategoryPageClient
      products={JSON.parse(JSON.stringify(products))}
      mainCategory={mainCategory}
    />
  );
}
