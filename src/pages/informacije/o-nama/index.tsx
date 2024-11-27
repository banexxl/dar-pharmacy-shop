import { ContactPageProps, ContactMap } from "@/components/contact/contact-map";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import { ContactBox, ContactFormBox, ContactInfoBox, ContactStrongText, ContactText, ContactTitle } from "@/styles/contact/contact";
import theme from "@/styles/theme";
import { Box, Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";
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
                                        <Box sx={{ width: '400px' }}>
                                             <ContactStrongText theme={theme}>
                                                  Naš moto: Radosno srce-pola Zdravlja! <br />
                                             </ContactStrongText>
                                             <ContactText theme={theme}>
                                                  Dobrodošli u Apoteku DAR, vašu lokalnu apoteku u srcu Kragujevca, koja se ponosi
                                                  velikom ponudom prirodnih proizvoda. Naša misija je da vam obezbedimo najkvalitetnije
                                                  proizvode za zdravlje, koristeći prirodne sastojke koji podržavaju vaše celokupno blagostanje.
                                             </ContactText>
                                             <ContactText theme={theme}>
                                                  Naš tim stručnjaka posvećen je pružanju personalizovane usluge i savetovanja, kako bismo
                                                  osigurali da svaki proizvod koji izaberete bude prilagođen vašim individualnim potrebama.
                                                  Verujemo u snagu prirode i trudimo se da vam pružimo najbolje iz njenog bogatstva.
                                             </ContactText>
                                             <ContactText theme={theme}>
                                                  Bilo da tražite prirodne dodatke ishrani, biljne čajeve, kozmetiku ili proizvode za negu tela,
                                                  u Apoteci DAR ćete pronaći sve što vam je potrebno za zdrav i uravnotežen život.
                                             </ContactText>
                                             <ContactText theme={theme}>
                                                  Posetite nas u Kragujevcu i otkrijte snagu prirodnih rešenja za vaše zdravlje!
                                             </ContactText>
                                             <ContactStrongText theme={theme}>
                                                  Dostava lekova radnim danima po celoj Srbiji!<br />
                                             </ContactStrongText>
                                             <ContactStrongText theme={theme}>

                                                  Radno Vreme :
                                             </ContactStrongText>
                                             <ContactStrongText theme={theme}>
                                                  Radni dani: od 08 do 22h
                                                  Nedelja: od 08 do 20h
                                             </ContactStrongText >
                                             <ContactStrongText theme={theme}>
                                                  Kralja Aleksnadra Prvog Kardjordjevica 102 lokal 9,u sklopu Tc Prostor., Kragujevac 34000
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