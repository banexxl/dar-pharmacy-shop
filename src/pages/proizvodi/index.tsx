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

export default function ProductsSearchPage() {

          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
                    ssr: true
          })

          const [loading, setLoading] = useState(false)
          const router = useRouter();
          const data = router.query;
          console.log('page data', data);

          // const dataArray = JSON.parse(serializedData)
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
                                                                                          <ProductsFilter filterObject={data} />
                                                                                          <AppDrawer isScreenToMedium={false} />
                                                                                </UIProvider>
                                                                      </Stack>
                                                            </Container>
                                                  </DynamicThemeProvider>
                              }
                    </>
          )
}

