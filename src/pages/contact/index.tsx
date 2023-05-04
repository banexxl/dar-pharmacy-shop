import { ContactPageProps, ContactMap } from "@/components/contact/contact";
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
                                                  </UIProvider>
                                        </Stack>
                              </Container>
                    </DynamicThemeProvider >
          )
}

export async function getStaticProps({ locale }: any) {

          return {
                    props: {
                              ...(await serverSideTranslations(locale ?? 'sr-RS', [
                                        'common',
                              ])),
                              mapApiKey: process.env.MAP_API_KEY,
                    },
          }
}

export default ContactPage