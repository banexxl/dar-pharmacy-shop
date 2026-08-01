'use client';

import { useEffect, useState, lazy, Suspense } from 'react';
import { Container, Typography, Box, Skeleton, Grid, Button } from '@mui/material';
import { Colors } from '@/styles/theme';
import Products from '@/components/products/products-grid';
import Product from '@/interfaces/product/product.interface';
import { Manufacturer } from '@/services/supabase/types';
import Link from 'next/link';

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

function ProductsSkeleton() {
  return (
    <Container sx={{ paddingBottom: '100px' }}>
      <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }} justifyContent="center" sx={{ margin: '20px 4px 10px 4px' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Grid key={i} size={{ xs: 6, sm: 6, md: 4 }} display="flex" flexDirection="column" alignItems="center">
            <Box sx={{ width: '100%', maxWidth: 280 }}>
              <Skeleton variant="rounded" width="100%" height={160} sx={{ borderRadius: '28px', mb: 1 }} />
              <Skeleton variant="text" width="80%" height={24} sx={{ mx: 'auto' }} />
              <Skeleton variant="text" width="50%" height={20} sx={{ mx: 'auto', mt: 0.5 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

interface HomePageClientProps {
  dataForProductCarousel: Product[];
  dataForGrid: Product[];
  dataForNewProducts: Product[];
  manufacturers: Manufacturer[];
  productsOnDiscount: Product[];
  promotionProduct: any;
  popularProducts: Product[];
  promotionProducts: Product[];
}

export function HomePageClient(props: HomePageClientProps) {
  const {
    dataForProductCarousel,
    dataForGrid,
    dataForNewProducts,
    manufacturers,
    productsOnDiscount,
    promotionProduct,
    popularProducts,
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
              {dataForGrid.length > 0 ? <Products data={dataForGrid} /> : <ProductsSkeleton />}
            </Container>
          </Box>

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
                    Proizvodi koji su trenutno najtraženiji među našim kupcima
                  </Typography>
                </Box>
                {popularProducts.length > 0 ? <Products data={popularProducts} /> : <ProductsSkeleton />}
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

          {/* Blog CTA Section */}
          <LoadOnView fallback={<Box sx={{ minHeight: 200 }} />}>
            <Box
              sx={{
                width: '100%',
                py: { xs: 5, md: 8 },
                background: `linear-gradient(135deg, ${Colors.primary[50]} 0%, ${Colors.neutral[50]} 50%, ${Colors.secondary[50]} 100%)`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: '50%',
                  bgcolor: Colors.primary[100],
                  opacity: 0.3,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  bgcolor: Colors.secondary[100],
                  opacity: 0.3,
                }}
              />
              <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main, mb: 2, letterSpacing: '-0.01em' }}>
                    Naš Blog
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6, mb: 4 }}>
                    Pročitajte korisne savete o zdravlju, prirodnim preparatima, ishrani i lepoti
                  </Typography>
                  <Link href="/blog" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: Colors.primary.main,
                        color: '#fff',
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 600,
                        fontSize: '1rem',
                        textTransform: 'none',
                        boxShadow: `0 8px 24px ${Colors.primary.main}40`,
                        '&:hover': {
                          bgcolor: Colors.primary.dark,
                          transform: 'translateY(-2px)',
                          boxShadow: `0 12px 32px ${Colors.primary.main}50`,
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Poseti blog
                    </Button>
                  </Link>
                </Box>
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
