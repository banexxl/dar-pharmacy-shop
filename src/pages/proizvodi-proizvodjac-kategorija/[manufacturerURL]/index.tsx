import { Container, Stack } from "@mui/material";
import { ProductsServices } from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoadingWheel from "@/components/loading/loading";
import theme from "@/styles/theme";
import { UIProvider } from "@/context/ui/ui.context";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { Seo } from "@/components/seo";

export default function MainCategoryPage(props: any) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: true
     })

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
                              <Seo title={'Kategorija'} description={'Kategorija'} url={'https://www.apoteka-dar.rs/'} />
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
                                             <ProductsFilter filterObject={props.products} routerQuery={router.query} />
                                             <AppDrawer isScreenToMedium={false} />
                                        </UIProvider>
                                   </Stack>
                              </Container>
                         </DynamicThemeProvider>
               }
          </>
     )
}

export async function getServerSideProps({ query }: any) {

     const productsByManufacturer: any = await ProductsServices().getProductsByManufacturer(query.manufacturerURL)

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


