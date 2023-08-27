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
          console.log('router sa stranice sa proizvodjacima', router);


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
                                                                                          <ProductsFilter filterObject={props.products} />
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

          console.log('kontext iz getstaticprops', context);

          const productsByManufacturer: any = await productsServices().getProductsByManufacturer('Herbalab')
          const allManufacturers: any = await productsServices().getAllManufacturers()
          // const productsByMainCategoryPrirodnaKozmetika: any = await productsServices().getProductsByMainCategory('prirodna-kozmetika')
          // const productsByMainCategoryLepotaNega: any = await productsServices().getProductsByMainCategory('lepota-i-nega')
          // const productsByMainCategoryBebiProgram: any = await productsServices().getProductsByMainCategory('bebi-program')
          // const productsByMainCategoryMedicinskiAparatiOprema: any = await productsServices().getProductsByMainCategory('medicinski-aparati-oprema')
          // const productsByMainCategoryOrtopedijaPomagala: any = await productsServices().getProductsByMainCategory('ortopedija-i-pomagala')
          // const productsByMainCategoryDezinfekcijaDezinsekcijaMaske: any = await productsServices().getProductsByMainCategory('dezinfekcija-dezinsekcija-maske')
          // const productsByMainCategoryObucaCarapeUlosci: any = await productsServices().getProductsByMainCategory('obuca-carape-ulosci')
          console.log('allManufacturers', allManufacturers);


          // notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
          redirect: {
                    destination: "/404"
          }
          // mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
          // revalidate bi trebao da ponovo odradi getstaticprops logiku

          return {
                    props: {
                              products: JSON.parse(JSON.stringify(productsByManufacturer)),
                              // ...(await serverSideTranslations('sr-RS'))
                              // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
                    },
          }
}


export const getStaticPaths = async (context: any) => {

          console.log('kontext iz getStaticPaths', context);

          const productsByManufacturer: any = await productsServices().getProductsByManufacturer('apoteka')
          const allManufacturers: any = await productsServices().getAllManufacturers()

          //           const productsByMainCategoryPrirodnaKozmetika: any = await productsServices().getProductsByMainCategory('prirodna-kozmetika')
          //           const productsByMainCategoryLepotaNega: any = await productsServices().getProductsByMainCategory('lepota-i-nega')
          //           const productsByMainCategoryBebiProgram: any = await productsServices().getProductsByMainCategory('bebi-program')
          //           const productsByMainCategoryMedicinskiAparatiOprema: any = await productsServices().getProductsByMainCategory('medicinski-aparati-oprema')
          //           const productsByMainCategoryOrtopedijaPomagala: any = await productsServices().getProductsByMainCategory('ortopedija-i-pomagala')
          //           const productsByMainCategoryDezinfekcijaDezinsekcijaMaske: any = await productsServices().getProductsByMainCategory('dezinfekcija-dezinsekcija-maske')
          //           const productsByMainCategoryObucaCarapeUlosci: any = await productsServices().getProductsByMainCategory('obuca-carape-ulosci')

          const finalList = [
                    ...productsByManufacturer,
                    // ...productsByMainCategoryPrirodnaKozmetika,
                    // ...productsByMainCategoryLepotaNega,
                    // ...productsByMainCategoryBebiProgram,
                    // ...productsByMainCategoryMedicinskiAparatiOprema,
                    // ...productsByMainCategoryOrtopedijaPomagala,
                    // ...productsByMainCategoryDezinfekcijaDezinsekcijaMaske,
                    // ...productsByMainCategoryObucaCarapeUlosci,
          ]

          const paths = finalList.flatMap((product: any) =>
                    context.locales.map((locale: any) => ({
                              params: {
                                        maincategory: product.mainCategory.toString()
                              },
                              locale,
                    }))
          );

          return {
                    paths,
                    fallback: false, // false or "blocking"
          };
}

