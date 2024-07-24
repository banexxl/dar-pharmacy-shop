import { ContactPageProps, ContactMap } from "@/components/contact/contact-map";
import ContactForm from "@/components/contact/contact-form";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import { ContactBox, ContactFormBox, ContactInfoBox, ContactStrongText, ContactText } from "@/styles/contact/contact";
import theme from "@/styles/theme";
import { Container, Stack } from "@mui/material";
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";

const ContactPage = (props: ContactPageProps) => {


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     return (
          <DynamicThemeProvider theme={theme}>
               <Head>
                    <title>Kontakt forma</title>
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
                                             Adresa:
                                        </ContactText>
                                        <ContactStrongText>
                                             Kragujevac, poštanski broj 34000, ulica Kralja Aleksandra I Karadjordjevica , broj 102, lokal 9
                                        </ContactStrongText>
                                        <ContactText>
                                             Telefon:
                                        </ContactText>
                                        <ContactStrongText>
                                             +381 34 610 4222
                                        </ContactStrongText>
                                        <ContactText>
                                             Matični broj:
                                        </ContactText>
                                        <ContactStrongText>
                                             66597784
                                        </ContactStrongText>
                                        <ContactText>
                                             Poresko identifikacioni broj:
                                        </ContactText>
                                        <ContactStrongText>
                                             113127282
                                        </ContactStrongText>
                                        <ContactText>
                                             Business name of the entrepreneur:
                                        </ContactText>
                                        <ContactStrongText>
                                             Maja Joksovic PR, privatna praksa, apoteka DAR Kragujevac
                                        </ContactStrongText>
                                        <ContactText>
                                             Radno vreme:
                                        </ContactText>
                                        <ContactStrongText>
                                             Radnim danima: 08 - 22h<br />
                                             Subota: 08 - 22h<br />
                                             Nedelja: 08 - 20h
                                        </ContactStrongText>
                                        <ContactText>
                                             Pretežna delatnost:
                                        </ContactText>
                                        <ContactStrongText>
                                             4773 - trgovina na malo farmaceutskim proizvodima u prodavnicama - apotekama
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
               //...(await serverSideTranslations('sr-RS')),
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
               mapApiKey: process.env.GOOGLE_MAPS_API_KEY,
          },
     }
}

export default ContactPage