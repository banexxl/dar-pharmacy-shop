import { Container, Typography, Box, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Banner from "../components/banner";
import Products from "../components/products";
import { UIProvider } from "../context/ui";
import AppDrawer from "../components/navbar/drawer";
import Promotions from "../components/promotions";
import SearchBox from "../components/search"
import productsServices from '@/services/product.services'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";



export default function Home(props: any) {

          const { products } = props
          const { t } = useTranslation('common')


          //this way next js does not try to render theme provider on server (no hydration error : )
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <>Loading...</>,
          })


          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('homepage.title')}</title>
                              </Head>
                              <Container
                                        disableGutters
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <UIProvider>
                                                            <Banner />
                                                            <Promotions />
                                                            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                                                                      <Typography variant="h4">Deo asortimana</Typography>
                                                            </Box>
                                                            <Products data={products} />
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}


export async function getStaticProps({ locale }: any) {

          const dbData: any = await productsServices().getProductForHomePage().then((data: any) => {
                    return data
          })

          //notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
          //redirect: {
          //           destination: "/nodata"
          // }  mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
          //revalidate bi trebao da ponovo odradi getstaticprops logiku

          return {
                    props: {
                              products: JSON.parse(JSON.stringify(dbData)),
                              ...(await serverSideTranslations(locale ?? 'sr-RS', [
                                        'common',
                              ])),
                    },
          }
}

