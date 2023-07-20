import { ContactPageProps, ContactMap } from "@/components/contact/contact-map";
import ContactForm from "@/components/contact/contact-form";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import { ContactBox, ContactButton, ContactFormBox, ContactInfoBox, ContactStrongText, ContactText } from "@/styles/contact/contact";
import theme from "@/styles/theme";
import { Container, Stack } from "@mui/material";
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";

const ContactPage = (props: ContactPageProps) => {

          const { t } = useTranslation('common')
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Head>
                                        <title>{t('contact.contact-form')}</title>
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
                                                                      <ContactInfoBox >
                                                                                <ContactText>
                                                                                          {t('contact.street')}
                                                                                </ContactText>
                                                                                <ContactStrongText>
                                                                                          {t('contact.actual-street')}
                                                                                </ContactStrongText>
                                                                                <ContactText>
                                                                                          {t('contact.phone-number')}
                                                                                </ContactText>
                                                                                <ContactStrongText>
                                                                                          {t('contact.actual-phone-number')}
                                                                                </ContactStrongText>
                                                                                <ContactText>
                                                                                          {t('contact.mb')}
                                                                                </ContactText>
                                                                                <ContactStrongText>
                                                                                          {t('contact.actual-mb')}
                                                                                </ContactStrongText>
                                                                                <ContactText>
                                                                                          {t('contact.pib')}
                                                                                </ContactText>
                                                                                <ContactStrongText>
                                                                                          {t('contact.actual-pib')}
                                                                                </ContactStrongText>
                                                                                <ContactText>
                                                                                          {t('contact.bussines-name')}
                                                                                </ContactText>
                                                                                <ContactStrongText>
                                                                                          {t('contact.actual-bussines-name')}
                                                                                </ContactStrongText>
                                                                                <ContactText>
                                                                                          {t('contact.work-days')}
                                                                                </ContactText>
                                                                                <ContactStrongText>
                                                                                          {t('contact.working-days')}<br />
                                                                                          {t('contact.saturday')}<br />
                                                                                          {t('contact.sunday')}
                                                                                </ContactStrongText>
                                                                                <ContactText>
                                                                                          {t('contact.company-activity')}
                                                                                </ContactText>
                                                                                <ContactStrongText>
                                                                                          {t('contact.actual-company-activity')}
                                                                                </ContactStrongText>
                                                                      </ContactInfoBox>
                                                            </ContactBox>
                                                            <SearchBox />
                                                            <AppDrawer isScreenToMedium={false} />
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider >
          )
}

export async function getStaticProps({ locale }: any) {

          return {
                    props: {
                              ...(await serverSideTranslations('sr-RS' ?? locale, ['common'], null, ['en-US', 'sr-RS'])),
                              mapApiKey: process.env.GOOGLE_MAPS_API_KEY,
                    },
          }
}

export default ContactPage