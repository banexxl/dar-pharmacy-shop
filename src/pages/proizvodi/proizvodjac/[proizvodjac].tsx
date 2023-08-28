import { Container, Stack } from "@mui/material";
import theme from "../../../styles/theme";
import { UIProvider } from "../../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../components/navbar/drawer/drawer";
import SearchBox from "../../../components/search/search"
import productsServices from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MainCategoryPage(props: any) {

          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
                    ssr: true
          })

          const router = useRouter()
          console.log('router sa stranice sa proizvodjacima', router.query.proizvodjac);


          const [loading, setLoading] = useState(false)
          console.log('props sa stranice sa proizvodjacima', props);

          useEffect(() => {
                    const handleRouteChange = (url: any) => {
                              setLoading(true)
                    }

                    const handleRouteChangeComplete = () => {
                              setLoading(false)
                    }

                    router.events.on('routeChangeStart', handleRouteChange)
                    router.events.on('routeChangeComplete', handleRouteChangeComplete)

                    return () => {
                              router.events.off('routeChangeStart', handleRouteChange)
                              router.events.off('routeChangeComplete', handleRouteChangeComplete)
                    }
          }, [router.events])

          return (
                    <>
                              {
                                        loading ?
                                                  <LoadingWheel /> :
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
                                                                                          <ProductsFilter filterObject={props.products} routerQuery={router.query.proizvodjac} />
                                                                                          <AppDrawer isScreenToMedium={false} />
                                                                                </UIProvider>
                                                                      </Stack>
                                                            </Container>
                                                  </DynamicThemeProvider>
                              }
                    </>
          )
}

export async function getStaticProps(context: any) {

          const manufacturer = context.params.proizvodjac; // Access the manufacturer parameter
          console.log('manufacturer from get static props');

          const productsByManufacturer: any = await productsServices().getProductsByManufacturer(manufacturer)

          const finalList = [
                    ...productsByManufacturer
          ]

          redirect: {
                    destination: "/404"
          }


          return {
                    props: {
                              products: JSON.parse(JSON.stringify(finalList)),
                              ...(await serverSideTranslations('sr-RS'))
                              // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
                    },
          }
}


export const getStaticPaths = async (context: any) => {

          const getAllProducts: any = await productsServices().getAllProducts()

          const finalList = [
                    ...getAllProducts,
          ]

          const paths = finalList.flatMap((product: any) =>
                    context.locales.map((locale: any) => ({
                              params: {
                                        proizvodjac: product.manufacturer.toString()
                              },
                              locale,
                    }))
          );

          return {
                    paths,
                    fallback: false, // false or "blocking"
          };
}

