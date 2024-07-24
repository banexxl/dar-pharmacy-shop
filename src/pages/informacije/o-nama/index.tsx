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

const ContactPage = (props: ContactPageProps) => {


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     return (
          <DynamicThemeProvider theme={theme}>
               <Head>
                    <title>O nama</title>
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
                                   <ContactInfoBox >
                                        <ContactTitle>
                                             O nama
                                        </ContactTitle>
                                        <Box sx={{ width: '400px', textAlign: 'center' }}>
                                             <ContactStrongText>
                                                  Naš moto: Radosno srce-pola Zdravlja!
                                             </ContactStrongText>
                                             <ContactStrongText>
                                                  Kućna dostava Lekova ,Utorkom i Subotom,Kragujevac i Okolina.
                                             </ContactStrongText>
                                             <ContactStrongText>
                                                  Radno Vreme :
                                                  Radni dani: od 08 do 22h
                                                  Nedelja: od 08 do 20h
                                             </ContactStrongText>
                                             <ContactStrongText>
                                                  Kralja Aleksnadra Prvog Kardjordjevica 102 lokal9,u sklopu Tc Prostor., Kragujevac 34000
                                             </ContactStrongText>
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