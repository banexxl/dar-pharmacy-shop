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
               <title>Apoteka DAR - Kontakt</title>
               <meta name="description" content="Apoteka Dar Kragujevac" />
               <meta name="keywords" content="apoteka, dar, kragujevac" />
               <meta property="og:title" content="Apoteka DAR" />
               <meta property="og:description" content="Apoteka Dar Kragujevac" />
               <meta property="og:image" content="/public/images/home-page/apotekaDar.jpg" />
               <meta property="og:url" content="https://www.apoteka-dar.rs" />
               <meta name="twitter:card" content="/public/images/home-page/apotekaDar.jpg" />
               <meta name="twitter:title" content="Apoteka DAR" />
               <meta name="twitter:description" content="Apoteka DAR - Kontakt" />
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
                              <ContactBox theme={theme}>
                                   <ContactForm />
                                   <ContactMap mapApiKey={props.mapApiKey} />
                                   <ContactInfoBox theme={theme}>
                                        <ContactText sx={{ display: 'flex', justifyContent: 'space-around' }} theme={theme}>
                                             Adresa:
                                        </ContactText>
                                        <ContactStrongText theme={theme} >
                                             Kralja Aleksandra I Karadjordjevica 102, lokal 9
                                        </ContactStrongText>
                                        <ContactText sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} theme={theme}>
                                             Grad:
                                        </ContactText>
                                        <ContactStrongText theme={theme} >
                                             34000 Kragujevac
                                        </ContactStrongText>
                                        <ContactText sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} theme={theme}>
                                             Telefon:
                                        </ContactText>
                                        <ContactStrongText theme={theme}>
                                             +381 34 610 4222
                                        </ContactStrongText>
                                        <ContactText sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} theme={theme}>
                                             Matični broj:
                                        </ContactText>
                                        <ContactStrongText theme={theme}>
                                             66597784
                                        </ContactStrongText>
                                        <ContactText sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} theme={theme}>
                                             Poresko identifikacioni broj:
                                        </ContactText>
                                        <ContactStrongText sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} theme={theme}>
                                             113127282
                                        </ContactStrongText>
                                        <ContactText sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} theme={theme}>
                                             Kontakt osoba:
                                        </ContactText>
                                        <ContactStrongText theme={theme}>
                                             Maja Joksovic PR, privatna praksa, apoteka DAR Kragujevac
                                        </ContactStrongText>
                                        <ContactText sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} theme={theme}>
                                             Radno vreme:
                                        </ContactText>
                                        <ContactStrongText theme={theme}>
                                             Radnim danima: 08 - 22h<br />
                                             Subota: 08 - 22h<br />
                                             Nedelja: 08 - 20h
                                        </ContactStrongText>
                                        <ContactText sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }} theme={theme}>
                                             Pretežna delatnost:
                                        </ContactText>
                                        <ContactStrongText theme={theme}>
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