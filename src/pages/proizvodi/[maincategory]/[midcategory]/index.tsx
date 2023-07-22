import { Inter } from '@next/font/google'
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Navbar from "../../../../components/navbar/navbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../../../styles/theme";
import Banner from "../../../../components/banner/banner";
import Products from "../../../../components/products/products-grid";
import { UIProvider } from "../../../../context/ui/ui.context";
import Footer from "../../../../components/footer/footer";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../../components/navbar/drawer/drawer";
import Promotions from "../../../../components/promotions/promotions";
import SearchBox from "../../../../components/search/search"
import productsServices from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
          getAllMidCategoriesFromApoteka, getAllMidCategoriesFromBebiProgram, getAllMidCategoriesFromDezinfekcijaDezinsekcijaMaske,
          getAllMidCategoriesFromLepotaINega, getAllMidCategoriesFromMedicinskiAparatiOprema, getAllMidCategoriesFromObucaCarapeUlosci,
          getAllMidCategoriesFromOrtopedijaPomagala, getAllMidCategoriesFromPrirodnaKozmetika
} from '../../../../services/product-mid-category-helper.services';

export default function MainCategoryPage(props: any) {

          console.log('props iz mid cat MainCategoryPage', props);

          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

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
                                                            <ProductsFilter filterObject={props.products} />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider>
          )
}


export async function getStaticProps(context: any) {

          const midCategoryListFromApoteka: any = await getAllMidCategoriesFromApoteka()
          // const midCategoryListFromPrirodnaKozmetika: any = getAllMidCategoriesFromPrirodnaKozmetika()
          // const midCategoryListFromLepotaINega: any = getAllMidCategoriesFromLepotaINega()
          // const midCategoryListFromBebiProgram: any = getAllMidCategoriesFromBebiProgram()
          // const midCategoryListFromMedicinskiAparatiOprema: any = getAllMidCategoriesFromMedicinskiAparatiOprema()
          // const midCategoryListFromOrtopedijaPomagala: any = getAllMidCategoriesFromOrtopedijaPomagala()
          // const midCategoryListFromDezinfekcijaDezinsekcijaMaske: any = getAllMidCategoriesFromDezinfekcijaDezinsekcijaMaske()
          // const midCategoryListFromObucaCarapeUlosci: any = getAllMidCategoriesFromObucaCarapeUlosci()

          const finalList = [
                    ...midCategoryListFromApoteka,
                    // ...midCategoryListFromPrirodnaKozmetika,
                    // ...midCategoryListFromLepotaINega,
                    // ...midCategoryListFromBebiProgram,
                    // ...midCategoryListFromMedicinskiAparatiOprema,
                    // ...midCategoryListFromOrtopedijaPomagala,
                    // ...midCategoryListFromDezinfekcijaDezinsekcijaMaske,
                    // ...midCategoryListFromObucaCarapeUlosci,
          ]

          // notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
          redirect: {
                    destination: "/404"
          }
          // mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
          // revalidate bi trebao da ponovo odradi getstaticprops logiku

          return {
                    props: {
                              products: JSON.parse(JSON.stringify(finalList)),
                              ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
                    },
                    revalidate: 10,
          }
}


export const getStaticPaths = async (context: any) => {

          const midCategoryListFromApoteka: any = await getAllMidCategoriesFromApoteka()
          // const midCategoryListFromPrirodnaKozmetika: any = getAllMidCategoriesFromPrirodnaKozmetika()
          // const midCategoryListFromLepotaINega: any = getAllMidCategoriesFromLepotaINega()
          // const midCategoryListFromBebiProgram: any = getAllMidCategoriesFromBebiProgram()
          // const midCategoryListFromMedicinskiAparatiOprema: any = getAllMidCategoriesFromMedicinskiAparatiOprema()
          // const midCategoryListFromOrtopedijaPomagala: any = getAllMidCategoriesFromOrtopedijaPomagala()
          // const midCategoryListFromDezinfekcijaDezinsekcijaMaske: any = getAllMidCategoriesFromDezinfekcijaDezinsekcijaMaske()
          // const midCategoryListFromObucaCarapeUlosci: any = getAllMidCategoriesFromObucaCarapeUlosci()

          const productsByMainCategoryApotekaEnergijaUmor: any = await productsServices().getProductsByMainCategoryMidCategory('apoteka', 'energija-i-umor')

          const finalList: any = [
                    ...midCategoryListFromApoteka,
                    // ...midCategoryListFromPrirodnaKozmetika,
                    // ...midCategoryListFromLepotaINega,
                    // ...midCategoryListFromBebiProgram,
                    // ...midCategoryListFromMedicinskiAparatiOprema,
                    // ...midCategoryListFromOrtopedijaPomagala,
                    // ...midCategoryListFromDezinfekcijaDezinsekcijaMaske,
                    // ...midCategoryListFromObucaCarapeUlosci
          ]

          console.log('aaaaaaaa', productsByMainCategoryApotekaEnergijaUmor);

          const paths = productsByMainCategoryApotekaEnergijaUmor.flatMap((product: any) =>
                    context.locales.map((locale: any) => ({
                              params: {
                                        maincategory: product.mainCategory.toString(),
                                        midcategory: product.midCategory.toString()
                              },
                              locale,
                    }))
          );

          return {
                    paths,
                    fallback: false, // false or "blocking"
          };
}