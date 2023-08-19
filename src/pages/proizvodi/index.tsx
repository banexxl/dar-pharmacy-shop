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

          let searchedProducts: any = JSON.parse(localStorage.getItem('search-results')!)
          console.log('searchedProducts', searchedProducts);

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
                                                            <ProductsFilter filterObject={searchedProducts} />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}

