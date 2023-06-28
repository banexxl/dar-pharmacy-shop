import { Inter } from '@next/font/google'
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Navbar from "../../../components/navbar/navbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../../styles/theme";
import Banner from "../../../components/banner/banner";
import Products from "../../../components/products/products-grid";
import { UIProvider } from "../../../context/ui/ui.context";
import Footer from "../../../components/footer/footer";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../components/navbar/drawer/drawer";
import Promotions from "../../../components/promotions/promotions";
import SearchBox from "../../../components/search/search"
import productsServices from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const MainCategoryPage = (props: any) => {

          console.log('sdsdsdsddsdsds', props);

          const { products } = props


          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Container
                                        disableGutters
                                        maxWidth="lg"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <UIProvider>
                                                            <SearchBox />
                                                            aaaaaaaaaaaa
                                                            <ProductsFilter filterObject={props.filterObject} />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}


export async function getStaticProps({ locale }: any) {

          const dbData: any = await productsServices().getProductsByManufacturer('Herbalab').then((data: any) => {
                    return data
          })

          // notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
          redirect: {
                    destination: "/nodata"
          }
          // mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
          // revalidate bi trebao da ponovo odradi getstaticprops logiku

          return {
                    props: {
                              products: JSON.parse(JSON.stringify(dbData)),
                              ...(await serverSideTranslations(locale ?? 'sr-RS', ['common'], null, ['en-US', 'sr-RS'])),
                    },
                    revalidate: 10,
          }
}


export const getStaticPaths = async (context: any) => {

          //context { locales: ['sr-RS', 'en-US'], defaultLocale: 'sr-RS' }

          const productsByManufacturer: any = await productsServices().getProductsByManufacturer('Herbalab')

          const finalList = [
                    ...productsByManufacturer,
          ]

          const paths = finalList.flatMap((product: any) =>
                    context.locales.map((locale: any) => ({
                              params: {
                                        mainCategory: product.mainCategory.toString()
                              },
                              locale,
                    }))
          );

          return {
                    paths,
                    fallback: false, // false or "blocking"
          };
}