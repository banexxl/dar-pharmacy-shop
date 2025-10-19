import { ContactPageProps, ContactMap } from "@/components/contact/contact-map";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme from "@/styles/theme";
import { Box, Container, Stack, Typography } from "@mui/material";
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
                              <Box className="contact-box">
                                   <Box className="contact-info-box">
                                        <Typography className="contact-title">
                                             O nama
                                        </Typography>
                                        <Box sx={{ width: '400px' }}>
                                             <Typography className="contact-strong-text">
                                                  Naš moto: Radosno srce-pola Zdravlja! <br />
                                             </Typography>
                                             <Typography className="contact-text">
                                                  Dobrodošli u Apoteku DAR, vašu lokalnu apoteku u srcu Kragujevca, koja se ponosi
                                                  velikom ponudom prirodnih proizvoda. Naša misija je da vam obezbedimo najkvalitetnije
                                                  proizvode za zdravlje, koristeći prirodne sastojke koji podržavaju vaše celokupno blagostanje.
                                             </Typography>
                                             <Typography className="contact-text">
                                                  Naš tim stručnjaka posvećen je pružanju personalizovane usluge i savetovanja, kako bismo
                                                  osigurali da svaki proizvod koji izaberete bude prilagođen vašim individualnim potrebama.
                                                  Verujemo u snagu prirode i trudimo se da vam pružimo najbolje iz njenog bogatstva.
                                             </Typography>
                                             <Typography className="contact-text">
                                                  Bilo da tražite prirodne dodatke ishrani, biljne čajeve, kozmetiku ili proizvode za negu tela,
                                                  u Apoteci DAR ćete pronaći sve što vam je potrebno za zdrav i uravnotežen život.
                                             </Typography>
                                             <Typography className="contact-text">
                                                  Posetite nas u Kragujevcu i otkrijte snagu prirodnih rešenja za vaše zdravlje!
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  Dostava lekova radnim danima po celoj Srbiji!<br />
                                             </Typography>
                                             <Typography className="contact-strong-text">

                                                  Radno Vreme :
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  Radni dani: od 08 do 22h
                                                  Nedelja: od 08 do 20h
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  Kralja Aleksnadra Prvog Kardjordjevica 102 lokal 9,u sklopu Tc Prostor., Kragujevac 34000
                                             </Typography>
                                        </Box>
                                   </Box>
                              </Box>
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container>
          </DynamicThemeProvider >
     )
}

export default ContactPage;