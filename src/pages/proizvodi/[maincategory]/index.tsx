import { Container, Stack } from "@mui/material";
import theme from "../../../styles/theme";
import { UIProvider } from "../../../context/ui/ui.context";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../components/navbar/drawer/drawer";
import SearchBox from "../../../components/search/search"
import productsServices from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
                                             <ProductsFilter filterObject={props.products} routerQuery={router.asPath} />
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

     const loadedParts = parseInt(query?.part as string) || 1

     const productsByMainCategoryLimited: any = await productsServices().getLimitedProductsByMainCategory(query.maincategory, loadedParts)
     // notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page

     if (!productsByMainCategoryLimited || productsByMainCategoryLimited.length === 0) {
          return {
               redirect: {
                    destination: `/proizvodi/${query.maincategory}?part=1`
               },
          };
     }
     // mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
     // revalidate bi trebao da ponovo odradi getstaticprops logiku

     return {
          props: {
               products: JSON.parse(JSON.stringify(productsByMainCategoryLimited)),
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
          },
     }
}
