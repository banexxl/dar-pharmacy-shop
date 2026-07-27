/**
 * Utility functions for SEO optimization
 */

const BASE_URL = process.env.BASE_URL || 'https://www.apoteka-dar.rs';

/**
 * Converts a slug (kebab-case) to a readable Serbian title
 * Example: "prirodna-kozmetika" -> "Prirodna kozmetika"
 */
export function slugToTitle(slug: string): string {
  if (!slug) return '';

  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generates SEO-friendly title for category pages
 */
export function generateCategoryTitle(categoryName: string, subCategory?: string, subSubCategory?: string): string {
  let title = categoryName;

  if (subCategory) {
    title = `${subCategory} - ${categoryName}`;
  }

  if (subSubCategory) {
    title = `${subSubCategory} - ${subCategory} - ${categoryName}`;
  }

  return `${title} | Apoteka DAR Kragujevac`;
}

/**
 * Generates SEO-friendly description for category pages
 */
export function generateCategoryDescription(
  categoryName: string,
  productCount: number,
  subCategory?: string,
  subSubCategory?: string
): string {
  let categoryPath = categoryName;

  if (subCategory) {
    categoryPath = `${subCategory} u kategoriji ${categoryName}`;
  }

  if (subSubCategory) {
    categoryPath = `${subSubCategory} u kategoriji ${subCategory} - ${categoryName}`;
  }

  return `Kupite ${categoryPath.toLowerCase()} u Apoteci DAR Kragujevac. ${productCount > 0 ? `Pronađite ${productCount} ${productCount === 1 ? 'proizvod' : productCount < 5 ? 'proizvoda' : 'proizvoda'} ` : ''}prirodnih proizvoda za zdravlje i lepotu. Besplatna dostava za narudžbine preko 3000 RSD.`;
}

/**
 * Generates SEO-friendly title for manufacturer pages
 */
export function generateManufacturerTitle(manufacturerName: string, categoryName?: string): string {
  if (categoryName) {
    return `${manufacturerName} - ${categoryName} | Apoteka DAR Kragujevac`;
  }
  return `${manufacturerName} proizvodi | Apoteka DAR Kragujevac`;
}

/**
 * Generates SEO-friendly description for manufacturer pages
 */
export function generateManufacturerDescription(
  manufacturerName: string,
  productCount: number,
  categoryName?: string
): string {
  if (categoryName) {
    return `Kupite ${manufacturerName} ${categoryName.toLowerCase()} u Apoteci DAR Kragujevac. ${productCount > 0 ? `Pronađite ${productCount} ${productCount === 1 ? 'proizvod' : productCount < 5 ? 'proizvoda' : 'proizvoda'} ` : ''}prirodnih proizvoda marke ${manufacturerName}. Besplatna dostava za narudžbine preko 3000 RSD.`;
  }
  return `Kupite ${manufacturerName} proizvode u Apoteci DAR Kragujevac. ${productCount > 0 ? `Pronađite ${productCount} ${productCount === 1 ? 'proizvod' : productCount < 5 ? 'proizvoda' : 'proizvoda'} ` : ''}prirodnih proizvoda marke ${manufacturerName}. Besplatna dostava za narudžbine preko 3000 RSD.`;
}

/**
 * Builds canonical URL from path segments
 */
export function buildCanonicalUrl(...pathSegments: string[]): string {
  const path = pathSegments
    .filter(segment => segment && segment.trim())
    .map(segment => segment.trim().replace(/^\/+|\/+$/g, ''))
    .join('/');

  return `${BASE_URL}/${path}`;
}

/**
 * Generates product structured data (JSON-LD)
 */
export function generateProductStructuredData(product: {
  name: string;
  description: string;
  image_url: string;
  price: number;
  slug: string;
  manufacturer?: string;
  available_stock: number;
  category?: string;
}) {
  // Ensure image URL is absolute
  const imageUrl = product.image_url
    ? (product.image_url.startsWith('http') ? product.image_url : `${BASE_URL}${product.image_url}`)
    : `${BASE_URL}/images/home-page/apotekaDar.jpg`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: imageUrl,
    brand: product.manufacturer ? {
      '@type': 'Brand',
      name: product.manufacturer
    } : undefined,
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/proizvod/${product.slug}`,
      priceCurrency: 'RSD',
      price: product.price,
      availability: product.available_stock > 0
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      itemCondition: 'https://schema.org/NewCondition'
    },
    category: product.category
  };
}

/**
 * Generates breadcrumb structured data (JSON-LD)
 */
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generates collection page structured data (JSON-LD) for category/listing pages
 */
export function generateCollectionPageStructuredData(
  name: string,
  description: string,
  url: string,
  productCount: number
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: productCount
    }
  };
}
