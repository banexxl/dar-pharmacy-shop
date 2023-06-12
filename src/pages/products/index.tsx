import { Inter } from '@next/font/google'
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Navbar from "../../components/navbar/navbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import Banner from "../../components/banner/banner";
import Products from "../../components/products/products-grid";
import { UIProvider } from "../../context/ui/ui.context";
import Footer from "../../components/footer/footer";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../components/navbar/drawer/drawer";
import Promotions from "../../components/promotions/promotions";
import SearchBox from "../../components/search/search"
import productsServices from '@/services/product.services'
import dynamic from 'next/dynamic';
import { ProductsFilterContainer } from '@/styles/products-filter/products-filter';

const inter = Inter({ subsets: ['latin'] })

export default function Home(props: any) {

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
                                                            <ProductsFilterContainer />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}


export async function getStaticProps() {

          const dbData: any = await productsServices().getProductsForHomePage().then((data: any) => {
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
                              products: JSON.parse(JSON.stringify(dbData))
                    },
                    revalidate: 10,
          }
}
