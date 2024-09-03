import { Container, Typography, Box, Stack, Divider, Button, Modal, Paper } from "@mui/material";
import theme from "../styles/theme";
import Banner from "../components/banner/banner";
import Products from "../components/products/products-grid";
import { UIProvider } from "../context/ui/ui.context";
import AppDrawer from "../components/navbar/drawer/drawer";
import Promotions from "../components/promotions/promotions";
import SearchBox from "../components/search/search"
import { ProductsServices } from '@/services/product.services'
import dynamic from "next/dynamic";
import LoadingWheel from "@/components/loading/loading";
import IProduct from "@/interfaces/product/product.interface";
import ProductCarousel from "@/components/carousel/carousel";
import { MessageText } from "@/styles/promotions";
import CarouselLogo from "@/components/carousel/carousel-logo";
import ProductCard from "@/components/product-presentation/product-presentation";
import { BannerServices } from "@/components/banner/banner-services";
import { BannerCountUp } from "@/components/banner/banner-counter";
import { useEffect, useState } from "react";
import CarouselOnlyImageProduct from "@/components/carousel/carousel-only-image";
import { Seo } from "@/components/seo";

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
               <Seo title={'Početna'} description={'Priroda na dohvat ruke'} url={'https://www.apoteka-dar.rs/'} />
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
                              <Banner />
                              <Promotions />
                              <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                                   <MessageText variant="h4">Popularno</MessageText>
                              </Box>
                              <ProductCard product={props.promotionProduct} />
                              <CarouselOnlyImageProduct products={dataForProductCarousel} />
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
                              <Divider variant="middle" sx={{ borderBottomWidth: 5, marginBottom: '20px', marginTop: '20px' }} />
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
          promotionProduct
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
               dataForProductCarousel: JSON.parse(JSON.stringify(productsFromManufacturerGana)),
               dataForGrid: JSON.parse(JSON.stringify(dataForGrid)),
               dataForNewProducts: JSON.parse(JSON.stringify(newProducts)),
               productsOnDiscount: JSON.parse(JSON.stringify(productsOnDiscount)),
               manufacturers: JSON.parse(JSON.stringify(manufacturersLogos)),
               promotionProduct: JSON.parse(JSON.stringify(promotionProduct)),
          },
     }
}



