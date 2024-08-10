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
import { useState } from 'react';

export default function MainCategoryPage(props: any) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: true
     })

     const router = useRouter()
     const [loading, setLoading] = useState(false)

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

     const loadedParts = parseInt(query?.part as string) || 1

     const productsByMainCategoryLimited: any = await productsServices().getLimitedProductsByMainCategory(query.mainCategory, loadedParts)
     // notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page

     // if (!productsByMainCategoryLimited || productsByMainCategoryLimited.length === 0) {
     //      return {
     //           redirect: {
     //                destination: `/proizvodi/${query.mainCategory}?part=1`
     //           },
     //      };
     // }
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
