import { ContactPageProps, ContactMap } from "@/components/contact/contact";
import ContactForm from "@/components/contact/contact-form";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import { ContactBox, ContactButton, ContactFormBox, ContactInfoBox } from "@/styles/contact/contact";
import theme from "@/styles/theme";
import { Container, Stack } from "@mui/material";
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
                                                            <ContactBox>
                                                                      <ContactForm />
                                                                      <ContactMap mapApiKey={props.mapApiKey} />
                                                                      <ContactInfoBox >aaaa</ContactInfoBox>
                                                            </ContactBox>
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider >
          )
}

export async function getStaticProps({ locale }: any) {

          return {
                    props: {
                              mapApiKey: process.env.MAP_API_KEY,
                              ...(await serverSideTranslations(locale ?? 'sr-RS', [
                                        'common',
                              ])),
                    },
          }
}

export default ContactPage