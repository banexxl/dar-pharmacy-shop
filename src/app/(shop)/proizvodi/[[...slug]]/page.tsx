import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getAllActiveProducts,
  getProductsByMainCategory,
  getProductsByMainAndMidCategory,
  getProductsByAllCategories,
} from '@/services/products';
import {
  resolveCategoryPath,
  getAllMainCategories,
  getAllMidCategories,
  getAllSubCategories,
} from '@/services/categories';
import { CategoryClient } from './category-client';

const BASE_URL = process.env.BASE_URL || 'https://www.apoteka-dar.rs';

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export const revalidate = 300;
export const dynamicParams = true;

// ─── generateStaticParams ───────────────────────────────────────────────────────
export async function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  const mainCategories = await getAllMainCategories();
  const midCategories = await getAllMidCategories();
  const subCategories = await getAllSubCategories();

  for (const main of mainCategories) {
    params.push({ slug: [main.value] });

    const mids = midCategories.filter((m) => m.main_category_id === main.id);
    for (const mid of mids) {
      params.push({ slug: [main.value, mid.value] });

      const subs = subCategories.filter((s) => s.mid_category_id === mid.id);
      for (const sub of subs) {
        params.push({ slug: [main.value, mid.value, sub.value] });
      }
    }
  }

  return params;
}

// ─── generateMetadata ───────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const segments = slug ?? [];

  if (segments.length === 0) {
    return {
      title: 'Svi proizvodi | Apoteka DAR - Online Apoteka',
      description: 'Pogledajte sve proizvode u ponudi Apoteke DAR. Širok izbor prirodnih preparata. Brza dostava širom Srbije.',
      alternates: { canonical: `${BASE_URL}/proizvodi` },
      openGraph: {
        title: 'Svi proizvodi - Apoteka DAR',
        description: 'Kompletna ponuda Apoteke DAR. Priroda na dohvat ruke.',
        url: `${BASE_URL}/proizvodi`,
        type: 'website',
        locale: 'sr_RS',
        siteName: 'Apoteka DAR',
      },
      robots: { index: true, follow: true },
    };
  }

  if (segments.length > 3) return {};

  const resolved = await resolveCategoryPath(segments[0], segments[1], segments[2]);

  if (segments.length >= 1 && !resolved.mainCategory) return {};
  if (segments.length >= 2 && !resolved.midCategory) return {};
  if (segments.length >= 3 && !resolved.subCategory) return {};

  const { mainCategory, midCategory, subCategory } = resolved;

  let title = '';
  let description = '';
  let canonicalPath = '/proizvodi';

  if (segments.length === 3 && subCategory && midCategory && mainCategory) {
    title = `${subCategory.label} - ${midCategory.label} | Apoteka DAR`;
    description = `Kupite ${subCategory.label} (${midCategory.label}, ${mainCategory.label}) online u Apoteci DAR. Brza dostava širom Srbije.`;
    canonicalPath = `/proizvodi/${mainCategory.value}/${midCategory.value}/${subCategory.value}`;
  } else if (segments.length === 2 && midCategory && mainCategory) {
    title = `${midCategory.label} - ${mainCategory.label} | Apoteka DAR`;
    description = `Kupite ${midCategory.label} iz kategorije ${mainCategory.label} online. Širok izbor u Apoteci DAR. Brza dostava.`;
    canonicalPath = `/proizvodi/${mainCategory.value}/${midCategory.value}`;
  } else if (segments.length === 1 && mainCategory) {
    title = `${mainCategory.label} | Apoteka DAR - Online Apoteka`;
    description = `Kupite ${mainCategory.label} online u Apoteci DAR. Širok izbor proizvoda. Brza dostava širom Srbije.`;
    canonicalPath = `/proizvodi/${mainCategory.value}`;
  }

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}${canonicalPath}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${canonicalPath}`,
      type: 'website',
      locale: 'sr_RS',
      siteName: 'Apoteka DAR',
    },
    robots: { index: true, follow: true },
  };
}

// ─── Page Component ─────────────────────────────────────────────────────────────
export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const segments = slug ?? [];

  if (segments.length > 3) notFound();

  const [mainSlug, midSlug, subSlug] = segments;

  // /proizvodi — all products
  if (segments.length === 0) {
    const [products, allMainCategories] = await Promise.all([
      getAllActiveProducts(),
      getAllMainCategories(),
    ]);

    return (
      <CategoryClient
        products={JSON.parse(JSON.stringify(products))}
        mainCategory={null}
        midCategory={null}
        subCategory={null}
        siblingCategories={JSON.parse(JSON.stringify(allMainCategories))}
        level="all"
      />
    );
  }

  // Validate categories against DB
  const resolved = await resolveCategoryPath(mainSlug, midSlug, subSlug);

  if (segments.length >= 1 && !resolved.mainCategory) notFound();
  if (segments.length >= 2 && !resolved.midCategory) notFound();
  if (segments.length >= 3 && !resolved.subCategory) notFound();

  // Fetch products based on depth
  let products;
  if (segments.length === 3) {
    products = await getProductsByAllCategories(mainSlug, midSlug, subSlug);
  } else if (segments.length === 2) {
    products = await getProductsByMainAndMidCategory(mainSlug, midSlug);
  } else {
    products = await getProductsByMainCategory(mainSlug);
  }

  // Determine sidebar siblings and level
  let siblingCategories;
  let level: 'main' | 'mid' | 'sub';

  if (segments.length === 3) {
    level = 'sub';
    siblingCategories = resolved.siblingSubCategories;
  } else if (segments.length === 2) {
    level = 'mid';
    siblingCategories = resolved.siblingSubCategories;
  } else {
    level = 'main';
    siblingCategories = resolved.siblingMidCategories;
  }

  return (
    <CategoryClient
      products={JSON.parse(JSON.stringify(products))}
      mainCategory={resolved.mainCategory ? JSON.parse(JSON.stringify(resolved.mainCategory)) : null}
      midCategory={resolved.midCategory ? JSON.parse(JSON.stringify(resolved.midCategory)) : null}
      subCategory={resolved.subCategory ? JSON.parse(JSON.stringify(resolved.subCategory)) : null}
      siblingCategories={JSON.parse(JSON.stringify(siblingCategories))}
      level={level}
    />
  );
}
