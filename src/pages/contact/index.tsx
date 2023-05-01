import Contact from "@/components/contact/contact";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import IProduct from "@/interfaces/product/product.interface";
import productsServices from "@/services/product.services";
import theme from "@/styles/theme";
import { Container, Stack } from "@mui/material";
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";

const ContactPage = () => {

          const { t } = useTranslation('common')


          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          const steps = [t("checkout.shippingAddress"), t("checkout.payment-info"), t("checkout.card-payment"), t("checkout.confirmation")];

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('checkout.title')}</title>
                              </Head>
                              <Container
                                        disableGutters
                                        maxWidth="lg"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <UIProvider>
                                                            <Contact />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider >
          )
}

export async function getStaticProps({ locale }: any) {

          const dbData: IProduct[] = await productsServices().getProductForHomePage().then((data: any) => {
                    return data
          })

          //notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
          //redirect: {
          //           destination: "/nodata"
          // }  mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
          //revalidate bi trebao da ponovo odradi getstaticprops logiku

          return {
                    props: {
                              products: JSON.parse(JSON.stringify(dbData)),
                              ...(await serverSideTranslations(locale ?? 'sr-RS', [
                                        'common',
                              ])),
                    },
          }
}

export default ContactPage