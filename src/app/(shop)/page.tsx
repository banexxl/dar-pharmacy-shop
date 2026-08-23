import type { Metadata } from 'next';
import {
  getRandomProductsByManufacturer,
  getDiscountedProducts,
  getProductsForHomePage,
  getNewArrivals,
  getPromotionProducts,
  getTopNSellingProducts,
} from '@/services/products';
import { getAllManufacturerLogos } from '@/services/manufacturers';
import { HomePageClient } from './home-client';
import { ParalaxScroll } from '@/components/paralax/paralax-scroll';

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
    popularProducts,
    promotionProducts,
  ] = await Promise.all([
    getRandomProductsByManufacturer('fitaky', 10),
    getRandomProductsByManufacturer('gana-kozmetika', 10),
    getDiscountedProducts(),
    getAllManufacturerLogos(),
    getProductsForHomePage(),
    getNewArrivals(),
    getTopNSellingProducts(10),
    getPromotionProducts(),
  ]);

  const dataForProductCarousel = [
    ...productsFromManufacturerGana,
    ...productsFromManufacturerFitaky,
  ];
  const dataForGrid = [...homePageProducts].slice(0, 16);
  const promotionProduct = promotionProducts.length > 0 ? promotionProducts[0] : null;

  return (
    <>
      {/* Hero section — server-rendered HTML, no hydration delay */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '80vh',
        }}
      >
        <div
          id="hero-bg"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#2d4a3e',
            willChange: 'transform',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/home-page/image1.jpg"
            alt="Apoteka DAR background"
            fetchPriority="high"
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '80px 24px',
            textAlign: 'center',
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: '#fff',
              textShadow: '0 2px 8px rgba(0,0,0,0.35)',
              letterSpacing: '-0.02em',
              margin: 0,
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
            }}
          >
            Apoteka DAR
          </h1>
          <h2
            style={{
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              fontWeight: 600,
              color: '#fff',
              opacity: 0.95,
              textShadow: '0 1px 6px rgba(0,0,0,0.3)',
              marginTop: 8,
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
            }}
          >
            Radosno srce je pola zdravlja
          </h2>
          <p
            style={{
              marginTop: 16,
              maxWidth: 720,
              marginLeft: 'auto',
              marginRight: 'auto',
              color: 'rgba(255,255,255,0.92)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: 1.7,
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
            }}
          >
            Prirodni proizvodi, savet i briga — sve na jednom mestu. Dostava radnim danima širom Srbije.
          </p>
          <a
            href="/proizvodi"
            style={{
              display: 'inline-block',
              marginTop: 32,
              padding: '12px 32px',
              backgroundColor: '#EF4444',
              color: '#fff',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
            }}
          >
            Pogledajte ponudu
          </a>
        </div>
        <ParalaxScroll />
      </section>

      <HomePageClient
        dataForProductCarousel={JSON.parse(JSON.stringify(dataForProductCarousel))}
        dataForGrid={JSON.parse(JSON.stringify(dataForGrid))}
        dataForNewProducts={JSON.parse(JSON.stringify(newProducts))}
        manufacturers={JSON.parse(JSON.stringify(manufacturersLogos))}
        productsOnDiscount={JSON.parse(JSON.stringify(productsOnDiscount))}
        promotionProduct={JSON.parse(JSON.stringify(promotionProduct))}
        popularProducts={JSON.parse(JSON.stringify(popularProducts))}
        promotionProducts={JSON.parse(JSON.stringify(promotionProducts))}
      />
    </>
  );
}
