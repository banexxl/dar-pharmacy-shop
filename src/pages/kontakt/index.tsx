import { ContactPageProps, ContactMap } from "@/components/contact/contact-map";
import ContactForm from "@/components/contact/contact-form";
import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme, { Colors } from "@/styles/theme";
import { Container, Stack, Box, Typography } from "@mui/material";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Seo } from "@/components/seo";

const ContactPage = (props: ContactPageProps) => {


     // ThemeProvider is applied globally in _app.tsx

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>
               <Seo title={'Kontakt forma'} description={'Kontakt forma'} url={'https://www.apoteka-dar.rs/'} />
               <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
                    <Stack>
                         <UIProvider>
                              <Box sx={{ mb: 4, textAlign: 'center', '& > p:first-of-type': { display: 'none' } }} >
                                   <Typography variant="h2" sx={{ fontWeight: 700, color: Colors.primary.main }}>Kontakt</Typography>
                                   <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>Pi�ite nam ili nas posetite</Typography>
                              </Box>
                              <Box className="contact-box" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
                                   <ContactForm />
                                   <Box>
                                        <ContactMap mapApiKey={props.mapApiKey} />
                                        <Box className="contact-info-box" sx={{ mt: 3 }}>
                                             <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                                  Adresa:
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  Kralja Aleksandra I Karadjordjevica 102, lokal 9
                                             </Typography>
                                             <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                  Grad:
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  34000 Kragujevac
                                             </Typography>
                                             <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                  Telefon:
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  +381 34 610 4222
                                             </Typography>
                                             <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                  Matični broj:
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  66597784
                                             </Typography>
                                             <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                  Poresko identifikacioni broj:
                                             </Typography>
                                             <Typography className="contact-strong-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                  113127282
                                             </Typography>
                                             <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                  Kontakt osoba:
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  Maja Joksovic PR, privatna praksa, apoteka DAR Kragujevac
                                             </Typography>
                                             <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                  Email:
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  maja@apoteka-dar.rs
                                             </Typography>
                                             <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                  Radno vreme:
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  Radnim danima: 08 - 22h<br />
                                                  Subota: 08 - 22h<br />
                                                  Nedelja: 08 - 20h
                                             </Typography>
                                             <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                  Pretežna delatnost:
                                             </Typography>
                                             <Typography className="contact-strong-text">
                                                  4773 - trgovina na malo farmaceutskim proizvodima u prodavnicama - apotekama
                                             </Typography>
                                        </Box>
                                   </Box>
                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>
          </ReCaptchaProvider >
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

