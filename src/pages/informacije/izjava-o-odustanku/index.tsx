import { ContactPageProps, ContactMap } from "@/components/contact/contact-map";
import ContactForm from "@/components/contact/contact-form";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import { ContactBox, ContactFormBox, ContactInfoBox, ContactStrongText, ContactText, ContactTitle } from "@/styles/contact/contact";
import theme from "@/styles/theme";
import { Box, Container, Stack } from "@mui/material";
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import Link from "next/link";
import { Seo } from "@/components/seo";

const ContactPage = (props: ContactPageProps) => {


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     return (
          <DynamicThemeProvider theme={theme}>
               <Seo title={'Izjava o odustanku'} description={'Izjava o odustanku'} keywords={'apoteka, dar, kragujevac, prirodni proizvodi, zdravlje, rak, tumor, lek, ishrana, priroda'} url={'https://www.apoteka-dar.rs/'} />
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
                                   <ContactInfoBox theme={theme}>
                                        <ContactTitle>
                                             Izjava o odustanku
                                        </ContactTitle>
                                        <Box sx={{ width: '400px', textAlign: 'center' }}>
                                             <ContactStrongText theme={theme} >
                                                  Izjava o odustanku od ugovora o prodaji zaključenog na daljinu možete preuzeti <br />
                                                  <a href='/docs/Izjava_o_odustanku.pdf' download={true}>OVDE!</a>
                                             </ContactStrongText>
                                             <ContactInfoBox theme={theme}>
                                                  <ContactText theme={theme}>
                                                       Adresa:
                                                  </ContactText>
                                                  <ContactStrongText theme={theme} >
                                                       Kragujevac, poštanski broj 34000, ulica Kralja Aleksandra I Karadjordjevica , broj 102, lokal 9
                                                  </ContactStrongText>
                                                  <ContactText theme={theme}>
                                                       Telefon:
                                                  </ContactText>
                                                  <ContactStrongText theme={theme} >
                                                       +381 34 610 4222
                                                  </ContactStrongText>
                                                  <ContactText theme={theme}>
                                                       Matični broj:
                                                  </ContactText>
                                                  <ContactStrongText theme={theme} >
                                                       66597784
                                                  </ContactStrongText>
                                                  <ContactText theme={theme}>
                                                       Poresko identifikacioni broj:
                                                  </ContactText>
                                                  <ContactStrongText theme={theme} >
                                                       113127282
                                                  </ContactStrongText>
                                                  <ContactText theme={theme}>
                                                       Business name of the entrepreneur:
                                                  </ContactText>
                                                  <ContactStrongText theme={theme} >
                                                       Maja Joksovic PR, privatna praksa, apoteka DAR Kragujevac
                                                  </ContactStrongText>
                                                  <ContactText theme={theme}>
                                                       Radno vreme:
                                                  </ContactText>
                                                  <ContactStrongText theme={theme} >
                                                       Radnim danima: 08 - 22h<br />
                                                       Subota: 08 - 22h<br />
                                                       Nedelja: 08 - 20h
                                                  </ContactStrongText>
                                                  <ContactText theme={theme}>
                                                       Pretežna delatnost:
                                                  </ContactText>
                                                  <ContactStrongText theme={theme} >
                                                       4773 - trgovina na malo farmaceutskim proizvodima u prodavnicama - apotekama
                                                  </ContactStrongText>
                                             </ContactInfoBox>
                                        </Box>
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