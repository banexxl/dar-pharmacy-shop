import { useEffect, useState, lazy, Suspense } from "react";
import { Container, Typography, Box, Button, Modal, Paper } from "@mui/material";
const Products = lazy(() => import("../components/products/products-grid"));
const Promotions = lazy(() => import("../components/promotions/promotions"));
const SearchBox = lazy(() => import("../components/search/search"));
const ProductCarousel = lazy(() => import("@/components/carousel/carousel"));
const CarouselLogo = lazy(() => import("@/components/carousel/carousel-logo"));
const ProductCard = lazy(() => import("@/components/product-card/product-card"));
const BannerServices = lazy(() => import("@/components/banner/banner-services").then(module => ({ default: module.BannerServices })));
const BannerCountUp = lazy(() => import("@/components/banner/banner-counter").then(module => ({ default: module.BannerCountUp })));
const CarouselOnlyImageProduct = lazy(() => import("@/components/carousel/carousel-only-image"));
const Seo = lazy(() => import("@/components/seo").then(module => ({ default: module.Seo })));
const CarouselPresentationContainer = lazy(() => import("@/components/carousel/carousel-presentation-container"));
const Paralax = lazy(() => import("@/components/paralax/paralax"));
const LoadOnView = lazy(() => import("@/components/common/load-on-view"));
const Chatbot = lazy(() => import("@/chatbot/chatbot"));
const PaymentStrip = lazy(() => import("@/components/payment-strip/payment-strip"));
import { UIProvider } from "../context/ui/ui.context";
import { ProductsServices } from '@/services/product.services'
import IProduct from "@/interfaces/product/product.interface";
import { Colors } from "@/styles/theme";

export default function Home(props: any) {

     const { dataForProductCarousel, dataForGrid, dataForNewProducts, manufacturers, productsOnDiscount, promotionProduct, promotionProducts } = props

     // ThemeProvider is now applied globally in _app.tsx

     const [open, setOpen] = useState(false);

     useEffect(() => {
          // Check if the modal has been shown before
          const hasSeenModal = localStorage.getItem('hasSeenModal');

          if (!hasSeenModal || hasSeenModal !== 'true') {
               setOpen(true);
               localStorage.setItem('hasSeenModal', 'true');
          }

          const handleBeforeUnload = () => {
               localStorage.removeItem('hasSeenModal');
          };

          window.addEventListener('beforeunload', handleBeforeUnload);

          return () => {
               window.removeEventListener('beforeunload', handleBeforeUnload);
          };
     }, []);

     const handleClose = () => {
          setOpen(false);
     };

     return (
          <>
               <Suspense fallback={<Box sx={{ minHeight: 300 }} />}> {/* Suspense for lazy UI components */}
                    <Seo title={'Početna'} description={'Priroda na dohvat ruke'} url={'https://www.apoteka-dar.rs/'} />
                    <UIProvider>
                         {/* Main Content */}
                         <Box component="main" sx={{ width: '100vw', overflow: 'hidden' }}>
                              {/* Hero Section */}
                              <Paralax />
                              <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
                                   <Box sx={{ width: '100%' }}>
                                        <Promotions />
                                   </Box>
                              </LoadOnView>

                              <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
                                   <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)', position: 'relative' }}>
                                        <Container maxWidth="xl">
                                             <Box sx={{ textAlign: 'center', mb: 6, '& > p:first-of-type': { display: 'none' } }}>
                                                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main, mb: 2, letterSpacing: '-0.01em' }}>Izdvajamo iz ponude</Typography>
                                                  <Typography variant="h3" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>Posebno odabrani proizvodi za vaše zdravlje i lepotu</Typography>
                                             </Box>
                                             <Products data={dataForGrid} />
                                        </Container>
                                   </Box>
                              </LoadOnView>

                              <LoadOnView fallback={<Box sx={{ minHeight: 200 }} />}>
                                   <BannerServices />
                              </LoadOnView>

                              <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
                                   <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, backgroundColor: Colors.neutral[50], position: 'relative', borderTop: `1px solid ${Colors.neutral[200]}`, borderBottom: `1px solid ${Colors.neutral[200]}`, '&::before': { display: 'none' } }}>
                                        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                                             <Box sx={{ textAlign: 'center', mb: 6 }}>
                                                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main, mb: 2, letterSpacing: '-0.01em' }}>Popularno</Typography>
                                                  <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>Iskoristite posebne cene i uštedite na omiljenim proizvodima</Typography>
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
                                   <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, backgroundColor: Colors.white, position: 'relative', borderBottom: `1px solid ${Colors.neutral[200]}`, '&::before': { display: 'none' } }}>
                                        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                                             <Box sx={{ textAlign: 'center', mb: 6, '& > p:first-of-type': { display: 'none' } }}>
                                                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main, mb: 2, letterSpacing: '-0.01em' }}>Novo u ponudi</Typography>
                                                  <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>Najnoviji proizvodi koje smo dodali u našu ponudu</Typography>
                                             </Box>
                                             <ProductCarousel products={dataForNewProducts} />
                                        </Container>
                                   </Box>
                              </LoadOnView>

                              <LoadOnView fallback={<Box sx={{ minHeight: 200 }} />}>
                                   <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, backgroundColor: Colors.neutral[50], position: 'relative' }}>
                                        <Container maxWidth="xl">
                                             <Box sx={{ textAlign: 'center', mb: 6, '& > p:first-of-type': { display: 'none' } }}>
                                                  <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main, mb: 2, letterSpacing: '-0.01em' }}>Brendovi</Typography>
                                                  <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>Partneri u kojima imamo poverenje</Typography>
                                             </Box>
                                             <CarouselLogo manufacturers={manufacturers} />
                                        </Container>
                                   </Box>
                              </LoadOnView>

                              {productsOnDiscount.length > 0 && (
                                   <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
                                        <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, backgroundColor: Colors.white, position: 'relative', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(45deg, rgba(254, 242, 242, 0.9) 0%, rgba(251, 113, 133, 0.05) 100%)', pointerEvents: 'none' } }}>
                                             <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                                                  <Box sx={{ textAlign: 'center', mb: 6 }}>
                                                       <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: Colors.primary.main }}>Proizvodi na akciji</Typography>
                                                       <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>Iskoristite posebne cene i uštedite na omiljenim proizvodima</Typography>
                                                  </Box>
                                                  <ProductCarousel products={productsOnDiscount} />
                                             </Container>
                                        </Box>
                                   </LoadOnView>
                              )}

                              {promotionProducts.length > 0 && (
                                   <LoadOnView fallback={<Box sx={{ minHeight: 300 }} />}>
                                        <Box sx={{ width: '100%', py: { xs: 5, md: 8 }, background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.06) 0%, rgba(5, 150, 105, 0.06) 100%)', position: 'relative', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(45deg, rgba(239, 246, 255, 0.9) 0%, rgba(236, 253, 245, 0.9) 100%)', pointerEvents: 'none' } }}>
                                             <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                                                  <Box sx={{ textAlign: 'center', mb: 6 }}>
                                                       <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, background: 'linear-gradient(135deg, #e13d3dff 0%, #960505ff 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 2, textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>Promocije</Typography>
                                                       <Typography variant="body1" sx={{ color: 'rgba(55, 65, 81, 0.8)', maxWidth: 600, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.6 }}>Ekskluzivne ponude koje ne smete propustiti</Typography>
                                                  </Box>
                                                  <CarouselPresentationContainer products={promotionProducts} />
                                             </Container>
                                        </Box>
                                   </LoadOnView>
                              )}

                              {/* <LoadOnView fallback={<Box sx={{ minHeight: 100 }} />}>
                                   <PaymentStrip />
                              </LoadOnView> */}
                         </Box>

                         <Chatbot />
                         <SearchBox />
                    </UIProvider>
               </Suspense>

               <Modal
                    open={open}
                    onClose={handleClose}
               >
                    <Paper
                         sx={{
                              position: 'fixed',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              textAlign: 'center',
                              padding: '10px',
                         }}
                    >
                         <Typography id="first-load-modal-description" sx={{ fontSize: '1rem', display: 'none' }}>
                              Ovaj sajt koriÅ¡Ä‡enjem kolaÄiÄ‡a obezbeÄ‘uje bolje korisniÄko iskustvo.
                         </Typography>
                         <Typography id="first-load-modal-description-corrected" sx={{ fontSize: '1rem' }}>
                              Ovaj sajt korišćenjem kolačića obezbeđuje bolje korisničko iskustvo.
                         </Typography>
                         <Button onClick={handleClose} >
                              Prihvati sve
                         </Button>
                    </Paper>
               </Modal>
          </>
     )
}


export async function getStaticProps() {
     const [
          productsFromManufacturerFitaky,
          productsFromManufacturerGana,
          productsOnDiscount,
          manufacturersLogos,
          homePageProducts,
          newProducts,
          promotionProduct,
          promotionProducts
     ] = await Promise.all([
          ProductsServices().getRandomProductsFromManufacturerURL('fitaky'),
          ProductsServices().getRandomProductsFromManufacturerURL('gana-kozmetika'),
          ProductsServices().getProductsByDiscount(),
          ProductsServices().getAllLogos(),
          ProductsServices().getProductsForHomePage(),
          ProductsServices().getNewProducts(),
          ProductsServices().getProductById('65623269777d0eaba35c87ac'),
          ProductsServices().getAllProductsOnPromotion()
     ])

     const dataForCaruselTop: IProduct[] = [...productsFromManufacturerGana, ...productsFromManufacturerFitaky]
     const dataForGrid: IProduct[] = [...homePageProducts].slice(0, 16)

     return {
          props: {
               dataForProductCarousel: JSON.parse(JSON.stringify(dataForCaruselTop)),
               dataForGrid: JSON.parse(JSON.stringify(dataForGrid)),
               dataForNewProducts: JSON.parse(JSON.stringify(newProducts)),
               manufacturers: JSON.parse(JSON.stringify(manufacturersLogos)),
               productsOnDiscount: JSON.parse(JSON.stringify(productsOnDiscount)),
               promotionProduct: JSON.parse(JSON.stringify(promotionProduct)),
               promotionProducts: JSON.parse(JSON.stringify(promotionProducts)),
          },
          revalidate: 60,
     }
}

