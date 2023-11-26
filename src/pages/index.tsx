import { Container, Typography, Box, Stack, Divider } from "@mui/material";
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

export default function Home(props: any) {

          const { dataForGrid, productsOnDiscount, manufacturers } = props


          //this way next js does not try to render theme provider on server (no hydration error : )
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
                    ssr: false
          })

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>Apoteka DAR</title>
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
                                                            <Banner />
                                                            <Promotions />
                                                            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                                                                      <MessageText variant="h4">Popularno</MessageText>
                                                            </Box>
                                                            <ProductCard />
                                                            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                                                                      <MessageText variant="h4">Izdvajamo iz ponude</MessageText>
                                                            </Box>
                                                            <Products data={dataForGrid} />
                                                            <Divider variant="middle" sx={{ borderBottomWidth: 5, marginTop: '30px' }} />
                                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                                      <Typography sx={{ fontSize: '2rem' }}>Novo u ponudi</Typography>
                                                            </Box>
                                                            <Divider variant="middle" sx={{ borderBottomWidth: 5, marginTop: '10px' }} />
                                                            <ProductCarousel products={dataForGrid} />
                                                            <Divider variant="middle" sx={{ borderBottomWidth: 5, marginTop: '30px' }} />
                                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                                      <Typography sx={{ fontSize: '2rem' }}>Brendovi</Typography>
                                                            </Box>
                                                            <Divider variant="middle" sx={{ borderBottomWidth: 5, marginTop: '10px' }} />
                                                            <CarouselLogo manufacturers={manufacturers} />
                                                            <Divider variant="middle" sx={{ borderBottomWidth: 5, marginTop: '30px' }} />
                                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                                      <Typography sx={{ fontSize: '2rem' }}>Proizvodi na akciji</Typography>
                                                            </Box>
                                                            <Divider variant="middle" sx={{ borderBottomWidth: 5, marginTop: '10px' }} />
                                                            <ProductCarousel products={productsOnDiscount} />
                                                            {/* <CarouselBlog /> */}
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}


export async function getStaticProps({ locale }: any) {

          const productsFromManufacturerHerbalab: IProduct[] = await productsServices().getProductsByManufacturer("Herbalab").then((data: any) => {
                    return data
          })

          const productsByName: IProduct[] = await productsServices().getProductsByNameAndOrManufacturer("Crux kolagen").then((data: any) => {
                    return data
          })

          const dataForGrid = productsFromManufacturerHerbalab.concat(productsByName)

          const productsOnDiscount: IProduct[] = await productsServices().getProductsByDiscount().then((data: any) => {
                    return data
          })

          const productsByMainCategoryApoteka: IProduct[] = await productsServices().getProductsByMainCategory("apoteka").then((data: any) => {
                    return data
          })

          const manufacturersLogos: string[] = await productsServices().getAllLogos().then((logos: any) => {
                    return logos
          })

          //notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
          //redirect: {
          //           destination: "/nodata"
          // }  mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
          //revalidate bi trebao da ponovo odradi getstaticprops logiku

          return {
                    props: {
                              dataForGrid: JSON.parse(JSON.stringify(dataForGrid)),
                              productsOnDiscount: JSON.parse(JSON.stringify(productsOnDiscount)),
                              manufacturers: JSON.parse(JSON.stringify(manufacturersLogos)),
                              productsByMainCategoryApoteka: JSON.parse(JSON.stringify(productsByMainCategoryApoteka)),
                              //...(await serverSideTranslations('sr-RS'))
                              // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
                              // ...(await serverSideTranslations(locale ?? 'sr-RS', [
                              //           'common',
                              // ])),
                    },
          }
}



