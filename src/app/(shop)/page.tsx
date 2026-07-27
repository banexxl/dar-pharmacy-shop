import type { Metadata } from 'next';
import {
  getRandomProductsByManufacturer,
  getDiscountedProducts,
  getProductsForHomePage,
  getNewArrivals,
  getPromotionProducts,
} from '@/lib/services/products';
import { getAllManufacturerLogos } from '@/lib/services/manufacturers';
import { HomePageClient } from './home-client';

export const metadata: Metadata = {
  title: 'Početna',
  description: 'Priroda na dohvat ruke',
  openGraph: {
    url: 'https://www.apoteka-dar.rs/',
  },
};

export const revalidate = 60;

export default async function HomePage() {
  const [
    productsFromManufacturerFitaky,
    productsFromManufacturerGana,
    productsOnDiscount,
    manufacturersLogos,
    homePageProducts,
    newProducts,
    promotionProducts,
  ] = await Promise.all([
    getRandomProductsByManufacturer('fitaky', 10),
    getRandomProductsByManufacturer('gana-kozmetika', 10),
    getDiscountedProducts(),
    getAllManufacturerLogos(),
    getProductsForHomePage(),
    getNewArrivals(),
    getPromotionProducts(),
  ]);

  const dataForProductCarousel = [
    ...productsFromManufacturerGana,
    ...productsFromManufacturerFitaky,
  ];
  const dataForGrid = [...homePageProducts].slice(0, 16);
  const promotionProduct =
    promotionProducts.length > 0 ? promotionProducts[0] : null;

  return (
    <HomePageClient
      dataForProductCarousel={JSON.parse(JSON.stringify(dataForProductCarousel))}
      dataForGrid={JSON.parse(JSON.stringify(dataForGrid))}
      dataForNewProducts={JSON.parse(JSON.stringify(newProducts))}
      manufacturers={JSON.parse(JSON.stringify(manufacturersLogos))}
      productsOnDiscount={JSON.parse(JSON.stringify(productsOnDiscount))}
      promotionProduct={JSON.parse(JSON.stringify(promotionProduct))}
      promotionProducts={JSON.parse(JSON.stringify(promotionProducts))}
    />
  );
}
