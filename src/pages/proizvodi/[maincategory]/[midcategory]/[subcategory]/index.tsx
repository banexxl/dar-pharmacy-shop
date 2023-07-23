import { Inter } from '@next/font/google'
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import Navbar from "../../../../../components/navbar/navbar";
import { ThemeProvider } from "@mui/system";
import theme from "../../../../../styles/theme";
import Banner from "../../../../../components/banner/banner";
import Products from "../../../../../components/products/products-grid";
import { UIProvider } from "../../../../../context/ui/ui.context";
import Footer from "../../../../../components/footer/footer";
import LoadingWheel from '@/components/loading/loading'
import AppDrawer from "../../../../../components/navbar/drawer/drawer";
import Promotions from "../../../../../components/promotions/promotions";
import SearchBox from "../../../../../components/search/search"
import productsServices from '@/services/product.services'
import dynamic from 'next/dynamic';
import ProductsFilter from '@/components/products-filter/products-filter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
          getAllSubCategoriesFromApotekaAlergije, getAllSubCategoriesFromApotekaAnemije, getAllSubCategoriesFromApotekaBol,
          getAllSubCategoriesFromApotekaHemoroidi, getAllSubCategoriesFromApotekaHolesterol, getAllSubCategoriesFromApotekaImunitet,
          getAllSubCategoriesFromApotekaKosaKozaNokti, getAllSubCategoriesFromApotekaKostiZglobovi,
          getAllSubCategoriesFromApotekaMrsavljenjeCelulit, getAllSubCategoriesFromApotekaOciUsi, getAllSubCategoriesFromApotekaPosebnaIshrana,
          getAllSubCategoriesFromApotekaPreparatiZaKozu, getAllSubCategoriesFromApotekaPrvaPomoc,
          getAllSubCategoriesFromApotekaPutnaApoteka, getAllSubCategoriesFromApotekaStomacneTegobe,
          getAllSubCategoriesFromApotekaVitaminiMinerali, getAllSubCategoriesFromApotekaZdravoSrceCirkulacija,
          getAllSubCategoriesFromBebiProgramAparati, getAllSubCategoriesFromBebiProgramBebiApoteka,
          getAllSubCategoriesFromBebiProgramBebiKozmetika, getAllSubCategoriesFromBebiProgramBebiOprema,
          getAllSubCategoriesFromBebiProgramFlasiceCucleZvecke, getAllSubCategoriesFromBebiProgramHrana,
          getAllSubCategoriesFromBebiProgramPelene, getAllSubCategoriesFromBebiProgramTrudnice,
          getAllSubCategoriesFromDezinfekcijaDezinsekcijaMaskeMaskeZaLice, getAllSubCategoriesFromLepotaNegaBebe,
          getAllSubCategoriesFromLepotaNegaIntimnaNega, getAllSubCategoriesFromLepotaNegaKosaKozaGlave,
          getAllSubCategoriesFromLepotaNegaLice, getAllSubCategoriesFromLepotaNegaOralnaHigijena,
          getAllSubCategoriesFromLepotaNegaPriborZaNegu, getAllSubCategoriesFromLepotaNegaRuke, getAllSubCategoriesFromLepotaNegaStopala,
          getAllSubCategoriesFromLepotaNegaTelo, getAllSubCategoriesFromLepotaNegaZastitaOdSunca,
          getAllSubCategoriesFromMedicinskiAparatiOpremaInhalatori, getAllSubCategoriesFromMedicinskiAparatiOpremaMerenjePritiska,
          getAllSubCategoriesFromMedicinskiAparatiOpremaMerenjeSecera, getAllSubCategoriesFromObucaCarapeUlosciDeca,
          getAllSubCategoriesFromObucaCarapeUlosciOdrasli, getAllSubCategoriesFromOrtopedijaAntidekubitalnaPomagala,
          getAllSubCategoriesFromPrirodnaKozmetikaBebeDeca, getAllSubCategoriesFromPrirodnaKozmetikaKosaKozaGlave,
          getAllSubCategoriesFromPrirodnaKozmetikaLice, getAllSubCategoriesFromPrirodnaKozmetikaTelo
} from '../../../../../services/product-sub-category-helper.services';
import IProduct from '@/interfaces/product/product.interface';

export default function MainCategoryPage(props: any) {

          console.log('props iz sub cat MainCategoryPage', props);

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

          let productsInMainCategoryApotekaAndSubcategoryAlergije: any = []
          getAllSubCategoriesFromApotekaAlergije().then((data: any) => {
                    productsInMainCategoryApotekaAndSubcategoryAlergije = data
          })
          // const productsByMainCategoryPrirodnaKozmetika: any = await productsServices().getProductsByMainCategory('prirodna-kozmetika')
          // const productsByMainCategoryLepotaNega: any = await productsServices().getProductsByMainCategory('lepota-i-nega')
          // const productsByMainCategoryBebiProgram: any = await productsServices().getProductsByMainCategory('bebi-program')
          // const productsByMainCategoryMedicinskiAparatiOprema: any = await productsServices().getProductsByMainCategory('medicinski-aparati-oprema')
          // const productsByMainCategoryOrtopedijaPomagala: any = await productsServices().getProductsByMainCategory('ortopedija-i-pomagala')
          // const productsByMainCategoryDezinfekcijaDezinsekcijaMaske: any = await productsServices().getProductsByMainCategory('dezinfekcija-dezinsekcija-maske')
          // const productsByMainCategoryObucaCarapeUlosci: any = await productsServices().getProductsByMainCategory('obuca-carape-ulosci')

          const finalList = [
                    ...productsInMainCategoryApotekaAndSubcategoryAlergije,
                    // ...productsByMainCategoryPrirodnaKozmetika,
                    // ...productsByMainCategoryLepotaNega,
                    // ...productsByMainCategoryBebiProgram,
                    // ...productsByMainCategoryMedicinskiAparatiOprema,
                    // ...productsByMainCategoryOrtopedijaPomagala,
                    // ...productsByMainCategoryDezinfekcijaDezinsekcijaMaske,
                    // ...productsByMainCategoryObucaCarapeUlosci,
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

          let productsInMainCategoryApotekaAndSubcategoryAlergije: any = []
          getAllSubCategoriesFromApotekaAlergije().then((data: any) => {
                    productsInMainCategoryApotekaAndSubcategoryAlergije = data
          })
          //const productsByMainCategoryApotekaAndMidCategoryAnemija: any = getAllSubCategoriesFromApotekaAnemije()
          // const productsByMainCategoryApotekaAndMidCategoryBol: any = getAllSubCategoriesFromApotekaBol()
          // const productsByMainCategoryApotekaAndMidCategoryHemoroidi: any = getAllSubCategoriesFromApotekaHemoroidi()
          // const productsByMainCategoryApotekaAndMidCategoryHolesterol: any = getAllSubCategoriesFromApotekaHolesterol()
          // const productsByMainCategoryApotekaAndMidCategoryImunitet: any = getAllSubCategoriesFromApotekaImunitet()
          // const productsByMainCategoryApotekaAndMidCategoryKosaKozaNokti: any = getAllSubCategoriesFromApotekaKosaKozaNokti()
          // const productsByMainCategoryApotekaAndMidCategoryKosti: any = getAllSubCategoriesFromApotekaKostiZglobovi()
          // const productsByMainCategoryApotekaAndMidCategoryMrsavljenje: any = getAllSubCategoriesFromApotekaMrsavljenjeCelulit()
          // const productsByMainCategoryApotekaAndMidCategoryPosebnaIshrana: any = getAllSubCategoriesFromApotekaPosebnaIshrana()
          // const productsByMainCategoryApotekaAndMidCategoryPutnaApoteka: any = getAllSubCategoriesFromApotekaPutnaApoteka()
          // const productsByMainCategoryApotekaAndMidCategoryStomacneTegobe: any = getAllSubCategoriesFromApotekaStomacneTegobe()
          // const productsByMainCategoryApotekaAndMidCategoryZdravoSrce: any = getAllSubCategoriesFromApotekaZdravoSrceCirkulacija()
          // const productsByMainCategoryApotekaAndMidCategoryVitamini: any = getAllSubCategoriesFromApotekaVitaminiMinerali()
          // const productsByMainCategoryApotekaAndMidCategoryPreparatiZaKozu: any = getAllSubCategoriesFromApotekaPreparatiZaKozu()
          // const productsByMainCategoryApotekaAndMidCategoryOciUsi: any = getAllSubCategoriesFromApotekaOciUsi()
          // const productsByMainCategoryApotekaAndMidCategoryPrvaPomoc: any = getAllSubCategoriesFromApotekaPrvaPomoc()

          // const productsByMainCategoryPrirodnaKozmetikaAndMidCategoryLice: any = getAllSubCategoriesFromPrirodnaKozmetikaLice()
          // const productsByMainCategoryPrirodnaKozmetikaAndMidCategoryTelo: any = getAllSubCategoriesFromPrirodnaKozmetikaTelo()
          // const productsByMainCategoryPrirodnaKozmetikaAndMidCategoryKosaKozaGlave: any = getAllSubCategoriesFromPrirodnaKozmetikaKosaKozaGlave()
          // const productsByMainCategoryPrirodnaKozmetikaAndMidCategoryBebeDeca: any = getAllSubCategoriesFromPrirodnaKozmetikaBebeDeca()

          // const productsByMainCategoryLepotaNegaAndMidCategoryPribor: any = getAllSubCategoriesFromLepotaNegaPriborZaNegu()
          // const productsByMainCategoryLepotaNegaAndMidCategoryLice: any = getAllSubCategoriesFromLepotaNegaLice()
          // const productsByMainCategoryLepotaNegaAndMidCategoryTelo: any = getAllSubCategoriesFromLepotaNegaTelo()
          // const productsByMainCategoryLepotaNegaAndMidCategoryIntimnaNega: any = getAllSubCategoriesFromLepotaNegaIntimnaNega()
          // const productsByMainCategoryLepotaNegaAndMidCategoryOralnaHigijena: any = getAllSubCategoriesFromLepotaNegaOralnaHigijena()
          // const productsByMainCategoryLepotaNegaAndMidCategoryKosaKozaGlave: any = getAllSubCategoriesFromLepotaNegaKosaKozaGlave()
          // const productsByMainCategoryLepotaNegaAndMidCategoryRuke: any = getAllSubCategoriesFromLepotaNegaRuke()
          // const productsByMainCategoryLepotaNegaAndMidCategoryStopala: any = getAllSubCategoriesFromLepotaNegaStopala()
          // const productsByMainCategoryLepotaNegaAndMidCategoryBebe: any = getAllSubCategoriesFromLepotaNegaBebe()
          // const productsByMainCategoryLepotaNegaAndMidCategorySunce: any = getAllSubCategoriesFromLepotaNegaZastitaOdSunca()

          // const productsByMainCategoryBebiProgramAndMidCategoryBebiApoteka: any = getAllSubCategoriesFromBebiProgramBebiApoteka()
          // const productsByMainCategoryBebiProgramAndMidCategoryBebiKozmetika: any = getAllSubCategoriesFromBebiProgramBebiKozmetika()
          // const productsByMainCategoryBebiProgramAndMidCategoryBebiOprema: any = getAllSubCategoriesFromBebiProgramBebiOprema()
          // const productsByMainCategoryBebiProgramAndMidCategoryFlasiceCucleZvecke: any = getAllSubCategoriesFromBebiProgramFlasiceCucleZvecke()
          // const productsByMainCategoryBebiProgramAndMidCategoryPelene: any = getAllSubCategoriesFromBebiProgramPelene()
          // const productsByMainCategoryBebiProgramAndMidCategoryHrana: any = getAllSubCategoriesFromBebiProgramHrana()
          // const productsByMainCategoryBebiProgramAndMidCategoryTrudnice: any = getAllSubCategoriesFromBebiProgramTrudnice()
          // const productsByMainCategoryBebiProgramAndMidCategoryAparati: any = getAllSubCategoriesFromBebiProgramAparati()

          // const productsByMainCategoryMedicinskiAparatiOpremaAndMidCategoryInhalatori: any = getAllSubCategoriesFromMedicinskiAparatiOpremaInhalatori()
          // const productsByMainCategoryMedicinskiAparatiOpremaAndMidCategoryPritisak: any = getAllSubCategoriesFromMedicinskiAparatiOpremaMerenjePritiska()
          // const productsByMainCategoryMedicinskiAparatiOpremaAndMidCategorySecer: any = getAllSubCategoriesFromMedicinskiAparatiOpremaMerenjeSecera()

          // const productsByMainCategoryOrtopedijaOpremaAndMidCategoryAntidekubitalnaPomagala: any = getAllSubCategoriesFromOrtopedijaAntidekubitalnaPomagala()

          // const productsByMainCategoryDezinfekcijaDezinsekcijaMaskeAndMidCategoryMaskeZaLizce: any = getAllSubCategoriesFromDezinfekcijaDezinsekcijaMaskeMaskeZaLice()

          // const productsByMainCategoryObucaCarapeUlosciAndMidCategoryDeca: any = getAllSubCategoriesFromObucaCarapeUlosciDeca()

          // const productsByMainCategoryObucaCarapeUlosciAndMidCategoryOdrasli: any = getAllSubCategoriesFromObucaCarapeUlosciOdrasli()

          let finalList = productsInMainCategoryApotekaAndSubcategoryAlergije

          const paths = finalList.flatMap((product: any) => {
                    context.locales.map((locale: any) => ({
                              params: {
                                        maincategory: product.mainCategory.toString(),
                                        midcategory: product.midCategory.toString(),
                                        subcategory: product.subCategory.toString()
                              },
                              locale,
                    }))
          }
          );

          return {
                    paths,
                    fallback: false, // false or "blocking"
          };
}