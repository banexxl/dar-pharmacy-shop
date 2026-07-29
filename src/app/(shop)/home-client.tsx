'use client';

import { useEffect, useState, lazy, Suspense } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Colors } from '@/styles/theme';

const Products = lazy(() => import('@/components/products/products-grid'));
const Promotions = lazy(() => import('@/components/promotions/promotions'));
const SearchBox = lazy(() => import('@/components/search/search'));
const ProductCarousel = lazy(() => import('@/components/carousel/carousel'));
const CarouselLogo = lazy(() => import('@/components/carousel/carousel-logo'));
const ProductCard = lazy(() => import('@/components/product-card/product-card'));
const BannerServices = lazy(() =>
  import('@/components/banner/banner-services').then((module) => ({
    default: module.BannerServices,
  }))
);
const BannerCountUp = lazy(() =>
  import('@/components/banner/banner-counter').then((module) => ({
    default: module.BannerCountUp,
  }))
);
const CarouselOnlyImageProduct = lazy(
  () => import('@/components/carousel/carousel-only-image')
);
const CarouselPresentationContainer = lazy(
  () => import('@/components/carousel/carousel-presentation-container')
);
const Paralax = lazy(() => import('@/components/paralax/paralax'));
const LoadOnView = lazy(() => import('@/components/common/load-on-view'));
const Chatbot = lazy(() => import('@/chatbot/chatbot'));

interface HomePageClientProps {
  dataForProductCarousel: any[];
  dataForGrid: any[];
  dataForNewProducts: any[];
  manufacturers: any[];
  productsOnDiscount: any[];
  promotionProduct: any;
  promotionProducts: any[];
}

export function HomePageClient(props: HomePageClientProps) {
  const {
    dataForProductCarousel,
    dataForGrid,
    dataForNewProducts,
    manufacturers,
    productsOnDiscount,
    promotionProduct,
    promotionProducts,
  } = props;

  return (
    <>
      <Suspense fallback={<Box sx={{ minHeight: 300 }} />}>
        <Box component="main" sx={{ width: '100vw', overflow: 'hidden' }}>
          <Paralax />

          <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
            <Box sx={{ width: '100%' }}>
              <Promotions />
            </Box>
          </LoadOnView>

          <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
            <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)', position: 'relative' }}>
              <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main, mb: 2, letterSpacing: '-0.01em' }}>
                    Izdvajamo iz ponude
                  </Typography>
                  <Typography variant="h3" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    Posebno odabrani proizvodi za vaše zdravlje i lepotu
                  </Typography>
                </Box>
                <Products data={dataForGrid} />
              </Container>
            </Box>
          </LoadOnView>

          <LoadOnView fallback={<Box sx={{ minHeight: 200 }} />}>
            <BannerServices />
          </LoadOnView>

          <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
            <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, backgroundColor: Colors.neutral[50], position: 'relative', borderTop: `1px solid ${Colors.neutral[200]}`, borderBottom: `1px solid ${Colors.neutral[200]}` }}>
              <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main, mb: 2, letterSpacing: '-0.01em' }}>
                    Popularno
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    Iskoristite posebne cene i uštedite na omiljenim proizvodima
                  </Typography>
                </Box>
                <ProductCard product={promotionProduct} />
                <Box sx={{ mt: 6 }}>
                  <CarouselOnlyImageProduct products={dataForProductCarousel} />
                </Box>
              </Container>
            </Box>
          </LoadOnView>

          <LoadOnView fallback={<Box sx={{ minHeight: 100 }} />}>
            <BannerCountUp />
          </LoadOnView>

          <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
            <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, backgroundColor: Colors.white, position: 'relative', borderBottom: `1px solid ${Colors.neutral[200]}` }}>
              <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main, mb: 2, letterSpacing: '-0.01em' }}>
                    Novo u ponudi
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    Najnoviji proizvodi koje smo dodali u našu ponudu
                  </Typography>
                </Box>
                <ProductCarousel products={dataForNewProducts} />
              </Container>
            </Box>
          </LoadOnView>

          <LoadOnView fallback={<Box sx={{ minHeight: 200 }} />}>
            <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, backgroundColor: Colors.neutral[50], position: 'relative' }}>
              <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main, mb: 2, letterSpacing: '-0.01em' }}>
                    Brendovi
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    Partneri u kojima imamo poverenje
                  </Typography>
                </Box>
                <CarouselLogo manufacturers={manufacturers} />
              </Container>
            </Box>
          </LoadOnView>

          {productsOnDiscount.length > 0 && (
            <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
              <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, backgroundColor: Colors.white, position: 'relative' }}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                  <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main }}>
                      Proizvodi na akciji
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                      Iskoristite posebne cene i uštedite na omiljenim proizvodima
                    </Typography>
                  </Box>
                  <ProductCarousel products={productsOnDiscount} />
                </Container>
              </Box>
            </LoadOnView>
          )}

          {promotionProducts.length > 0 && (
            <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
              <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.06) 0%, rgba(5, 150, 105, 0.06) 100%)', position: 'relative' }}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                  <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, background: 'linear-gradient(135deg, #e13d3dff 0%, #960505ff 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2 }}>
                      Promocije
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
                      Ekskluzivne ponude koje ne smete propustiti
                    </Typography>
                  </Box>
                  <CarouselPresentationContainer products={promotionProducts} />
                </Container>
              </Box>
            </LoadOnView>
          )}
        </Box>

        <Chatbot />
        <SearchBox />
      </Suspense>
    </>
  );
}
