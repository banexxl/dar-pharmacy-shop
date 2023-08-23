import { Container, Stack } from "@mui/material";
import theme from "../../styles/theme";
import { UIProvider } from "../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../components/navbar/drawer/drawer";
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SearchBox from '@/components/search/search';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { tryParseArrayOfObjectsFromLocalStorage } from "@/hooks/useLocalStorage";

export default function ProductsSearchPage() {

          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
                    ssr: true
          })

          const router = useRouter()
          const [loading, setLoading] = useState(false)
          const [searchedProducts, setSearchedProducts] = useState(null);

          let localStorageData: any = tryParseArrayOfObjectsFromLocalStorage('search-results')
          console.log('localStorageData', localStorageData[0]);

          useEffect(() => {
                    const handleRouteChange = (url: any) => {
                              setLoading(true)
                    }

                    const handleRouteChangeComplete = () => {
                              setLoading(false)
                    }

                    router.events.on('routeChangeStart', handleRouteChange)
                    router.events.on('routeChangeComplete', handleRouteChangeComplete)

                    setSearchedProducts(localStorageData)

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
                                                                                          <ProductsFilter filterObject={searchedProducts} />
                                                                                          <AppDrawer isScreenToMedium={false} />
                                                                                </UIProvider>
                                                                      </Stack>
                                                            </Container>
                                                  </DynamicThemeProvider>
                              }
                    </>
          )
}


export async function getServerSideProps(context: any) {

          redirect: {
                    destination: "/404"
          }


          return {
                    props: {
                              ...(await serverSideTranslations('sr-RS'))
                              // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
                    },
          }
}



