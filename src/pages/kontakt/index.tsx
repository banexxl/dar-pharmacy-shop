import { ContactPageProps, ContactMap } from "@/components/contact/contact-map";
import ContactForm from "@/components/contact/contact-form";
import { UIProvider } from "@/context/ui/ui.context";
import { Container, Stack, Box, Typography, Link as MuiLink } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SearchBox from "@/components/search/search";
import ReCaptchaProviderWrapper from "@/components/common/recaptcha-provider";
import { Seo } from "@/components/seo";

const ContactPage = (props: ContactPageProps) => {


     // ThemeProvider is applied globally in _app.tsx

     return (
          <ReCaptchaProviderWrapper>
               <Seo title={'Kontakt forma'} description={'Kontakt forma'} url={'https://www.apoteka-dar.rs/'} />
               <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
                    <Stack>
                         <UIProvider>
                              <Box sx={{ mb: 4, textAlign: 'center', '& > p:first-of-type': { display: 'none' } }} >
                                   <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>Pi&scaron;ite nam ili nas posetite</Typography>
                                   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                             <ContactForm />
                                        </Box>
                                        <Box>
                                             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                  <ContactMap mapApiKey={props.mapApiKey} />
                                             </Box>
                                             <Box className="contact-info-box" sx={{ mt: 3 }}>
                                                  <Typography className="contact-text" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                                       <LocationOnIcon color="primary" /> Adresa:
                                                  </Typography>
                                                  <Typography className="contact-strong-text">
                                                       Kralja Aleksandra I Karađorđevića 102, lokal 9
                                                  </Typography>
                                                  <Typography className="contact-text" sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                                                       Grad:
                                                  </Typography>
                                                  <Typography className="contact-strong-text">
                                                       34000 Kragujevac
                                                  </Typography>
                                                  <Typography className="contact-text" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', marginTop: '20px' }}>
                                                       <PhoneIcon color="primary" /> Telefon:
                                                  </Typography>
                                                  <Typography className="contact-strong-text" sx={{ display: 'flex', justifyContent: 'center' }}>
                                                       <MuiLink href="tel:+381346104222" underline="none" color="inherit">+381 34 610 4222</MuiLink>
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
                                                       Maja Joksović PR, privatna praksa, apoteka DAR Kragujevac
                                                  </Typography>
                                                  <Typography className="contact-text" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', marginTop: '20px' }}>
                                                       <EmailIcon color="primary" /> Email:
                                                  </Typography>
                                                  <Typography className="contact-strong-text" sx={{ display: 'flex', justifyContent: 'center' }}>
                                                       <MuiLink href="mailto:maja@apoteka-dar.rs" underline="none" color="inherit">maja@apoteka-dar.rs</MuiLink>
                                                  </Typography>
                                                  <Typography className="contact-text" sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', marginTop: '20px' }}>
                                                       <AccessTimeIcon color="primary" /> Radno vreme:
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
                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>
          </ReCaptchaProviderWrapper>
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

