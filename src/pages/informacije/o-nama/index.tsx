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
import { Seo } from "@/components/seo";

const ContactPage = (props: ContactPageProps) => {


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     return (
          <DynamicThemeProvider theme={theme}>
               <Seo title={'O nama'} description={'O nama'} url={'https://www.apoteka-dar.rs/'} />
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
                                             O nama
                                        </ContactTitle>
                                        <Box sx={{ width: '400px', textAlign: 'center' }}>
                                             <ContactStrongText theme={theme}>
                                                  Naš moto: Radosno srce-pola Zdravlja! <br />
                                             </ContactStrongText>
                                             <ContactStrongText theme={theme}>
                                                  Dostava lekova radnim danima po celoj Srbiji!<br />
                                             </ContactStrongText>
                                             <ContactStrongText theme={theme}>
                                                  Radno Vreme :
                                                  Radni dani: od 08 do 22h
                                                  Nedelja: od 08 do 20h
                                             </ContactStrongText >
                                             <ContactStrongText theme={theme}>
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

export default ContactPage;