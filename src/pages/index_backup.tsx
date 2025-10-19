import { Container, Typography, Box, Stack, Divider, Button, Modal, Paper } from "@mui/material";
import Products from "../components/products/products-grid";
import { UIProvider } from "../context/ui/ui.context";
import AppDrawer from "../components/navbar/drawer/drawer";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Promotions from "../components/promotions/promotions";
import SearchBox from "../components/search/search"
import { ProductsServices } from '@/services/product.services'
import dynamic from "next/dynamic";
import LoadingWheel from "@/components/loading/loading";
import IProduct from "@/interfaces/product/product.interface";
import ProductCarousel from "@/components/carousel/carousel";
import CarouselLogo from "@/components/carousel/carousel-logo";
import ProductCard from "@/components/product-presentation/product-presentation";
import { BannerServices } from "@/components/banner/banner-services";
import { BannerCountUp } from "@/components/banner/banner-counter";
import { useEffect, useState } from "react";
import CarouselOnlyImageProduct from "@/components/carousel/carousel-only-image";
import { Seo } from "@/components/seo";
import CarouselPresentationContainer from "@/components/carousel/carousel-presentation-container";
import Paralax from "@/components/paralax/paralax";
import Chatbot from "@/chatbot/chatbot";
import PaymentStrip from "@/components/payment-strip/payment-strip";
import theme from "@/styles/theme";

export default function Home(props: any) {

     const { dataForProductCarousel, dataForGrid, dataForNewProducts, manufacturers, productsOnDiscount, promotionProduct, promotionProducts } = props

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

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
          <DynamicThemeProvider theme={theme}>
               <Seo title={'Početna'} description={'Priroda na dohvat ruke'} url={'https://www.apoteka-dar.rs/'} />
               <UIProvider>
                    {/* Navbar */}
                    <NavBar />
                    
                    {/* Main Content */}
                    <Box component="main" sx={{ width: '100vw', overflow: 'hidden' }}>
                         {/* Hero Section */}
                         <Paralax />

                         {/* Promotions Section */}
                         <Box sx={{ 
                              width: '100%',
                              py: { xs: 3, md: 4 }, 
                              px: { xs: 2, md: 4 } 
                         }}>
                              <Container maxWidth="xl">
                                   <Promotions />
                              </Container>
                         </Box>

                         {/* Popular Products Section */}
                         <Box sx={{
                              width: '100%',
                              py: { xs: 5, md: 8 },
                              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.02) 0%, rgba(5, 150, 105, 0.02) 100%)',
                              position: 'relative',
                              '&::before': {
                                   content: '""',
                                   position: 'absolute',
                                   top: 0,
                                   left: 0,
                                   right: 0,
                                   bottom: 0,
                                   background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.9) 100%)',
                                   pointerEvents: 'none'
                              }
                         }}>
                              <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                                   <Box sx={{ textAlign: 'center', mb: 6 }}>
                                        <Typography
                                             variant="h2"
                                             sx={{
                                                  fontSize: { xs: '2rem', md: '2.5rem' },
                                                  fontWeight: 700,
                                                  background: 'linear-gradient(135deg, #1E40AF 0%, #059669 100%)',
                                                  backgroundClip: 'text',
                                                  WebkitBackgroundClip: 'text',
                                                  WebkitTextFillColor: 'transparent',
                                                  mb: 2,
                                                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                             }}
                                        >
                                             Popularno
                                        </Typography>
                                        <Typography 
                                             variant="body1" 
                                             sx={{ 
                                                  color: 'rgba(55, 65, 81, 0.8)', 
                                                  maxWidth: 600, 
                                                  mx: 'auto',
                                                  fontSize: '1.1rem',
                                                  lineHeight: 1.6
                                             }}
                                        >
                                             Najtraženiji proizvodi koje naši kupci najviše vole
                                        </Typography>
                                   </Box>
                                   <ProductCard product={promotionProduct} />
                                   <Box sx={{ mt: 6 }}>
                                        <CarouselOnlyImageProduct products={dataForProductCarousel} />
                                   </Box>
                              </Container>
                         </Box>
                         
                         {/* Services Section */}
                         <BannerServices />

                         {/* Featured Products Section */}
                         <Box sx={{
                              width: '100%',
                              py: { xs: 5, md: 8 },
                              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)',
                              position: 'relative'
                         }}>
                              <Container maxWidth="xl">
                                   <Box sx={{ textAlign: 'center', mb: 6 }}>
                                        <Typography
                                             variant="h2"
                                             sx={{
                                                  fontSize: { xs: '2rem', md: '2.5rem' },
                                                  fontWeight: 700,
                                                  background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%)',
                                                  backgroundClip: 'text',
                                                  WebkitBackgroundClip: 'text',
                                                  WebkitTextFillColor: 'transparent',
                                                  mb: 2,
                                                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                             }}
                                        >
                                             Izdvajamo iz ponude
                                        </Typography>
                                        <Typography
                                             variant="body1"
                                             sx={{
                                                  color: 'rgba(55, 65, 81, 0.8)',
                                                  maxWidth: 600,
                                                  mx: 'auto',
                                                  fontSize: '1.1rem',
                                                  lineHeight: 1.6
                                             }}
                                        >
                                             Posebno odabrani proizvodi za vaše zdravlje i lepotu
                                        </Typography>
                                   </Box>
                                   <Products data={dataForGrid} />
                              </Box>

                              {/* Counter Section */}
                              <BannerCountUp />

                              {/* New Products Section */}
                              <Box sx={{
                                   py: { xs: 5, md: 8 },
                                   px: { xs: 2, md: 4 },
                                   background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.04) 0%, rgba(124, 58, 237, 0.04) 100%)',
                                   position: 'relative',
                                   '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(45deg, rgba(248, 250, 252, 0.9) 0%, rgba(243, 244, 246, 0.95) 100%)',
                                        pointerEvents: 'none'
                                   }
                              }}>
                                   <Box sx={{ textAlign: 'center', mb: 6, position: 'relative', zIndex: 1 }}>
                                        <Typography
                                             variant="h2"
                                             sx={{
                                                  fontSize: { xs: '2rem', md: '2.5rem' },
                                                  fontWeight: 700,
                                                  background: 'linear-gradient(135deg, #059669 0%, #7C3AED 100%)',
                                                  backgroundClip: 'text',
                                                  WebkitBackgroundClip: 'text',
                                                  WebkitTextFillColor: 'transparent',
                                                  mb: 2,
                                                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                             }}
                                        >
                                             Novo u ponudi
                                        </Typography>
                                        <Typography
                                             variant="body1"
                                             sx={{
                                                  color: 'rgba(55, 65, 81, 0.8)',
                                                  maxWidth: 600,
                                                  mx: 'auto',
                                                  fontSize: '1.1rem',
                                                  lineHeight: 1.6
                                             }}
                                        >
                                             Najnoviji proizvodi koje smo dodali u našu ponudu
                                        </Typography>
                                   </Box>
                                   <Box sx={{ position: 'relative', zIndex: 1 }}>
                                        <ProductCarousel products={dataForNewProducts} />
                                   </Box>
                              </Box>

                              {/* Brands Section */}
                              <Box sx={{
                                   py: { xs: 5, md: 8 },
                                   px: { xs: 2, md: 4 },
                                   background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(241, 245, 249, 0.95) 100%)',
                                   position: 'relative'
                              }}>
                                   <Box sx={{ textAlign: 'center', mb: 6 }}>
                                        <Typography
                                             variant="h2"
                                             sx={{
                                                  fontSize: { xs: '2rem', md: '2.5rem' },
                                                  fontWeight: 700,
                                                  background: 'linear-gradient(135deg, #7C3AED 0%, #1E40AF 100%)',
                                                  backgroundClip: 'text',
                                                  WebkitBackgroundClip: 'text',
                                                  WebkitTextFillColor: 'transparent',
                                                  mb: 2,
                                                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                             }}
                                        >
                                             Brendovi
                                        </Typography>
                                        <Typography
                                             variant="body1"
                                             sx={{
                                                  color: 'rgba(55, 65, 81, 0.8)',
                                                  maxWidth: 600,
                                                  mx: 'auto',
                                                  fontSize: '1.1rem',
                                                  lineHeight: 1.6
                                             }}
                                        >
                                             Partneri u kojima imamo poverenje
                                        </Typography>
                                   </Box>
                                   <CarouselLogo manufacturers={manufacturers} />
                              </Box>

                              {/* Discounted Products Section */}
                              {productsOnDiscount.length > 0 && (
                                   <Box sx={{
                                        py: { xs: 5, md: 8 },
                                        px: { xs: 2, md: 4 },
                                        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(220, 38, 38, 0.08) 100%)',
                                        position: 'relative',
                                        '&::before': {
                                             content: '""',
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                             right: 0,
                                             bottom: 0,
                                             background: 'linear-gradient(45deg, rgba(254, 242, 242, 0.9) 0%, rgba(251, 113, 133, 0.05) 100%)',
                                             pointerEvents: 'none'
                                        }
                                   }}>
                                        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative', zIndex: 1 }}>
                                             <Typography
                                                  variant="h2"
                                                  sx={{
                                                       fontSize: { xs: '2rem', md: '2.5rem' },
                                                       fontWeight: 700,
                                                       background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
                                                       backgroundClip: 'text',
                                                       WebkitBackgroundClip: 'text',
                                                       WebkitTextFillColor: 'transparent',
                                                       mb: 2,
                                                       textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                                  }}
                                             >
                                                  Proizvodi na akciji
                                             </Typography>
                                             <Typography
                                                  variant="body1"
                                                  sx={{
                                                       color: 'rgba(55, 65, 81, 0.8)',
                                                       maxWidth: 600,
                                                       mx: 'auto',
                                                       fontSize: '1.1rem',
                                                       lineHeight: 1.6
                                                  }}
                                             >
                                                  Iskoristite posebne cene i uštedite na omiljenim proizvodima
                                             </Typography>
                                        </Box>
                                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                                             <ProductCarousel products={productsOnDiscount} />
                                        </Box>
                                   </Box>
                              )}

                              {/* Promotion Products Section */}
                              {promotionProducts.length > 0 && (
                                   <Box sx={{
                                        py: { xs: 5, md: 8 },
                                        px: { xs: 2, md: 4 },
                                        background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.06) 0%, rgba(5, 150, 105, 0.06) 100%)',
                                        position: 'relative',
                                        '&::before': {
                                             content: '""',
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                             right: 0,
                                             bottom: 0,
                                             background: 'linear-gradient(45deg, rgba(239, 246, 255, 0.9) 0%, rgba(236, 253, 245, 0.9) 100%)',
                                             pointerEvents: 'none'
                                        }
                                   }}>
                                        <Box sx={{ textAlign: 'center', mb: 6, position: 'relative', zIndex: 1 }}>
                                             <Typography
                                                  variant="h2"
                                                  sx={{
                                                       fontSize: { xs: '2rem', md: '2.5rem' },
                                                       fontWeight: 700,
                                                       background: 'linear-gradient(135deg, #1E40AF 0%, #059669 100%)',
                                                       backgroundClip: 'text',
                                                       WebkitBackgroundClip: 'text',
                                                       WebkitTextFillColor: 'transparent',
                                                       mb: 2,
                                                       textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                                                  }}
                                             >
                                                  Promocije
                                             </Typography>
                                             <Typography
                                                  variant="body1"
                                                  sx={{
                                                       color: 'rgba(55, 65, 81, 0.8)',
                                                       maxWidth: 600,
                                                       mx: 'auto',
                                                       fontSize: '1.1rem',
                                                       lineHeight: 1.6
                                                  }}
                                             >
                                                  Ekskluzivne ponude koje ne smete propustiti
                                             </Typography>
                                        </Box>
                                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                                             <CarouselPresentationContainer products={promotionProducts} />
                                        </Box>
                                   </Box>
                              )}

                              <PaymentStrip />
                              <Chatbot />
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
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
                              <Typography id="first-load-modal-description" sx={{ fontSize: '1rem' }}>
                                   Ovaj sajt korišćenjem kolačića obezbeđuje bolje korisničko iskustvo.
                              </Typography>
                              <Button onClick={handleClose} >
                                   Prihvati sve
                              </Button>
                         </Paper>
                    </Modal>
               </Container>
          </DynamicThemeProvider>
     )
}


export async function getServerSideProps() {

     const [
          productsFromManufacturerFitaky,
          productsFromManufacturerGana,
          productsOnDiscount,
          manufacturersLogos,
          customSearchedProducts,
          customSearchedProducts1,
          customSearchedProducts2,
          newProducts,
          promotionProduct,
          promotionProducts
     ] = await Promise.all([
          ProductsServices().getRandomProductsFromManufacturerURL('fitaky'),
          ProductsServices().getRandomProductsFromManufacturerURL('gana-kozmetika'),
          ProductsServices().getProductsByDiscount(),
          ProductsServices().getAllLogos(),
          ProductsServices().getProductsByNameAndOrManufacturer('Gloria'),
          ProductsServices().getProductsByNameAndOrManufacturer('Lavlje'),
          ProductsServices().getProductsByNameAndOrManufacturer('jazavca'),
          ProductsServices().getNewProducts(),
          ProductsServices().getProductById('65623269777d0eaba35c87ac'),
          ProductsServices().getAllProductsOnPromotion()
     ])

     // const productsFromManufacturerGana: IProduct[] = await ProductsServices().getRandomProductsFromManufacturerURL('gana-kozmetika').then((data: any) => {
     //      return data
     // })

     // const productsFromManufacturerFitaky: IProduct[] = await ProductsServices().getRandomProductsFromManufacturerURL('fitaky').then((data: any) => {
     //      return data
     // })

     // const productsOnDiscount: IProduct[] = await ProductsServices().getProductsByDiscount().then((data: any) => {
     //      return data
     // })

     // const manufacturersLogos: string[] = await ProductsServices().getAllLogos().then((logos: any) => {
     //      return logos
     // })

     // const gloriaProducts: IProduct[] = await ProductsServices().getProductsByNameAndOrManufacturer('Gloria').then((data: any) => {
     //      return data
     // })

     // const searchedByNameORManufacturer: IProduct[] = await ProductsServices().getProductsByNameAndOrManufacturer('Lavlje').then((data: any) => {
     //      return data
     // })

     // const searchedByNameORManufacturerI: IProduct[] = await ProductsServices().getProductsByNameAndOrManufacturer('jazavca').then((data: any) => {
     //      return data
     // })

     const dataForCaruselTop: IProduct[] = [
          ...(Array.isArray(productsFromManufacturerFitaky) ? productsFromManufacturerFitaky : []),
          ...(Array.isArray(productsFromManufacturerGana) ? productsFromManufacturerGana : []),
     ]

     const dataForGrid: IProduct[] = [
          ...(Array.isArray(customSearchedProducts) ? customSearchedProducts : []),
          ...(Array.isArray(customSearchedProducts1) ? customSearchedProducts1 : []),
          ...(Array.isArray(customSearchedProducts2) ? customSearchedProducts2 : []),
     ]

     // const dataForCarouselProducts: IProduct[] = productsFromManufacturerGana.concat(gloriaProducts)

     // const newProducts: IProduct[] = await ProductsServices().getNewProducts().then((data: any) => {
     //      return data
     // })

     //notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
     //redirect: {
     //           destination: "/nodata"
     // }  mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
     //revalidate bi trebao da ponovo odradi getstaticprops logiku

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
     }
}



