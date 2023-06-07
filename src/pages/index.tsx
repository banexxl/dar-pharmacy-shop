import { Container, Typography, Box, Stack } from "@mui/material";
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



export default function Home(props: any) {

          const { products, manufacturers } = props
          const { t } = useTranslation('common')


          //this way next js does not try to render theme provider on server (no hydration error : )
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('homepage.title')}</title>
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
                                                                      <MessageText variant="h4">{t('homepage.featured-products')}</MessageText>
                                                            </Box>
                                                            <Products data={products} />
                                                            <ProductCarousel products={products} />
                                                            <CarouselLogo manufacturers={manufacturers} />
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}


export async function getStaticProps({ locale }: any) {

          const dbData: IProduct[] = await productsServices().getProductsByManufacturer("Herbalab").then((data: any) => {
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
                              products: JSON.parse(JSON.stringify(dbData)),
                              manufacturers: JSON.parse(JSON.stringify(manufacturersLogos)),
                              //...(await serverSideTranslations(locale, ['common'], null, ['en-US', 'sr-RS'])),
                              ...(await serverSideTranslations(locale ?? 'sr-RS', [
                                        'common',
                              ])),
                    },
          }
}


