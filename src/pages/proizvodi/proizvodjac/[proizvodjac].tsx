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
     const [filteredProducts, setFilteredProducts] = useState();
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
                              <title>Apoteka DAR - Proizvodi</title>
                              <meta name="description" content="Apoteka Dar Kragujevac" />
                              <meta name="keywords" content="apoteka, dar, kragujevac" />
                              <meta property="og:title" content="Apoteka DAR" />
                              <meta property="og:description" content="Apoteka Dar Kragujevac" />
                              <meta property="og:image" content="/public/images/home-page/apotekaDar.jpg" />
                              <meta property="og:url" content="https://www.apoteka-dar.rs" />
                              <meta name="twitter:card" content="/public/images/home-page/apotekaDar.jpg" />
                              <meta name="twitter:title" content="Apoteka DAR" />
                              <meta name="twitter:description" content="Apoteka DAR - Proizvodi" />
                              <meta name="twitter:image" content="/public/images/home-page/apotekaDar.jpg" />
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

export async function getServerSideProps(context: any) {

     const manufacturer = context.params.proizvodjac; // Access the manufacturer parameter

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
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
          },
     }
}


