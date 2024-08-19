import { Container, Typography, Box, Stack, Divider, Button, Modal, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Banner from "../components/banner/banner";
import Products from "../components/products/products-grid";
import { UIProvider } from "../context/ui/ui.context";
import AppDrawer from "../components/navbar/drawer/drawer";
import Promotions from "../components/promotions/promotions";
import SearchBox from "../components/search/search"
import productsServices from '@/services/product.services'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import LoadingWheel from "@/components/loading/loading";
import IProduct from "@/interfaces/product/product.interface";
import ProductCarousel from "@/components/carousel/carousel";
import { MessageText } from "@/styles/promotions";
import CarouselLogo from "@/components/carousel/carousel-logo";
import CarouselBlog from "@/components/carousel/carousel-blog";
import { useSelector } from "react-redux";
import ProductCard from "@/components/product-presentation/product-presentation";
import { BannerServices } from "@/components/banner/banner-services";
import { BannerCountUp } from "@/components/banner/banner-counter";
import { useEffect, useState } from "react";
import CarouselOnlyImageProduct from "@/components/carousel/carousel-only-image";

export default function Home(props: any) {

     const { dataForGrid, dataForProductCarousel, manufacturers, dataForNewProducts } = props

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
               <Head>
                    <title>Apoteka DAR</title>
                    <meta name="description" content="Apoteka Dar Kragujevac" />
                    <meta name="keywords" content="apoteka, dar, kragujevac" />
                    <meta property="og:title" content="Apoteka DAR" />
                    <meta property="og:description" content="Apoteka Dar Kragujevac" />
                    <meta property="og:image" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta property="og:url" content="https://www.apoteka-dar.rs" />
                    <meta name="twitter:card" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta name="twitter:title" content="Apoteka DAR" />
                    <meta name="twitter:description" content="Apoteka Dar Kragujevac" />
                    <meta name="twitter:image" content="/public/images/home-page/apotekaDar.jpg" />
               </Head>
               <Container
                    disableGutters
                    maxWidth="lg"
                    sx={{
                         background: "#fff",
                         opacity: '.85'
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <CarouselOnlyImageProduct products={dataForProductCarousel} />
                              <Banner />
                              <Promotions />
                              <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                                   <MessageText variant="h4">Popularno</MessageText>
                              </Box>
                              <ProductCard />
                              <BannerServices />
                              <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                                   <MessageText variant="h4">Izdvajamo iz ponude</MessageText>
                              </Box>
                              <Products data={dataForGrid} />
                              <BannerCountUp />
                              <Divider variant="middle" sx={{ borderBottomWidth: 5, marginTop: '30px' }} />
                              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                   <Typography sx={{ fontSize: '2rem' }}>Novo u ponudi</Typography>
                              </Box>
                              <Divider variant="middle" sx={{ borderBottomWidth: 5 }} />
                              <ProductCarousel products={dataForNewProducts} />
                              <Divider variant="middle" sx={{ borderBottomWidth: 5 }} />
                              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                   <Typography sx={{ fontSize: '2rem', marginTop: '5px' }}>Brendovi</Typography>
                              </Box>
                              <Divider variant="middle" sx={{ borderBottomWidth: 5, marginTop: '10px' }} />
                              <CarouselLogo manufacturers={manufacturers} />
                              <Divider variant="middle" sx={{ borderBottomWidth: 5 }} />
                              {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                   <Typography sx={{ fontSize: '2rem', marginTop: '5px' }}>Proizvodi na akciji</Typography>
                              </Box>
                              <Divider variant="middle" sx={{ borderBottomWidth: 5, marginTop: '10px' }} />
                              <ProductCarousel products={productsOnDiscount} /> */}
                              {/* <CarouselBlog /> */}
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
                              }}
                         >
                              <Typography id="first-load-modal-description" sx={{ fontSize: '1rem' }}>
                                   Ovaj sajt korsišćenjem kolačića obezbeđuje bolje korisničko iskustvo.
                              </Typography>
                              <Button onClick={handleClose}>
                                   U redu
                              </Button>
                         </Paper>
                    </Modal>
               </Container>
          </DynamicThemeProvider>
     )
}


export async function getServerSideProps() {

     const productsFromManufacturerGana: IProduct[] = await productsServices().getRandomProductsFromManufacturerURL('gana-kozmetika').then((data: any) => {
          return data
     })

     const productsFromManufacturerFitaky: IProduct[] = await productsServices().getRandomProductsFromManufacturerURL('fitaky').then((data: any) => {
          return data
     })

     const productsOnDiscount: IProduct[] = await productsServices().getProductsByDiscount().then((data: any) => {
          return data
     })

     const manufacturersLogos: string[] = await productsServices().getAllLogos().then((logos: any) => {
          return logos
     })

     const gloriaProducts: IProduct[] = await productsServices().getProductsByNameAndOrManufacturer('Gloria').then((data: any) => {
          return data
     })

     const searchedByNameORManufacturer: IProduct[] = await productsServices().getProductsByNameAndOrManufacturer('Lavlje').then((data: any) => {
          return data
     })

     const searchedByNameORManufacturerI: IProduct[] = await productsServices().getProductsByNameAndOrManufacturer('jazavca').then((data: any) => {
          return data
     })

     const dataForGrid: IProduct[] = searchedByNameORManufacturer
          .concat(searchedByNameORManufacturerI)
          .concat(gloriaProducts)
          .concat(productsFromManufacturerFitaky)

     const dataForCarouselProducts: IProduct[] = productsFromManufacturerGana.concat(gloriaProducts)

     const newProducts: IProduct[] = await productsServices().getNewProducts().then((data: any) => {
          return data
     })

     //notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
     //redirect: {
     //           destination: "/nodata"
     // }  mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
     //revalidate bi trebao da ponovo odradi getstaticprops logiku

     return {
          props: {
               dataForProductCarousel: JSON.parse(JSON.stringify(dataForCarouselProducts)),
               dataForGrid: JSON.parse(JSON.stringify(dataForGrid)),
               dataForNewProducts: JSON.parse(JSON.stringify(newProducts)),
               productsOnDiscount: JSON.parse(JSON.stringify(productsOnDiscount)),
               manufacturers: JSON.parse(JSON.stringify(manufacturersLogos)),
          },
     }
}



