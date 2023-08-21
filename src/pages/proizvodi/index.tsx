import { Container, Stack } from "@mui/material";
import theme from "../../styles/theme";
import { UIProvider } from "../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../components/navbar/drawer/drawer";
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import SearchBox from '@/components/search/search';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ProductsSearchPage() {

          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
                    ssr: true
          })

          const [searchedProducts, setSearchedProducts] = useState(null); // Initially set to null

          const fetchDataFromLocalStorage = async () => {
                    try {
                              const products: any = await retryLocalStorageGetItem('search-results', 2, 500);
                              products !== 'undefined' ?
                                        setSearchedProducts(JSON.parse(products))
                                        :
                                        setSearchedProducts(null)
                    } catch (error) {
                              console.error('Error fetching products from local storage:', error);
                    }
          };

          useEffect(() => {
                    fetchDataFromLocalStorage();
          }, []);

          const retryLocalStorageGetItem = (key: any, maxRetries: any, retryDelay: any) => {
                    return new Promise((resolve, reject) => {
                              let retries = 0;

                              function attemptGetItem() {
                                        const item = localStorage.getItem(key);

                                        if (item !== null) {
                                                  resolve(item);
                                        } else {
                                                  retries++;
                                                  if (retries < maxRetries) {
                                                            setTimeout(attemptGetItem, retryDelay);
                                                  } else {
                                                            reject(new Error(`Failed to retrieve item after ${maxRetries} retries.`));
                                                  }
                                        }
                              }

                              attemptGetItem();
                    });
          }

          const router = useRouter()
          const [loading, setLoading] = useState(false)

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



