import Contact, { ContactPageProps } from "@/components/contact/contact";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme from "@/styles/theme";
import { Container, Stack } from "@mui/material";
import { useTranslation } from "next-i18next"
import dynamic from "next/dynamic";
import Head from "next/head";

const ContactPage = (props: ContactPageProps) => {

          const { t } = useTranslation('common')
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

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
                                                            <Contact mapApiKey={props.mapApiKey} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider >
          )
}

export async function getStaticProps() {

          return {
                    props: {
                              mapApiKey: process.env.MAP_API_KEY
                    },
          }
}

export default ContactPage