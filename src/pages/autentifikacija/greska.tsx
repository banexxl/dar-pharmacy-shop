import { UIProvider } from "@/context/ui/ui.context";
import { Button, Container, Stack, Box, Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SearchBox from "@/components/search/search";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import Link from "next/link";
import { Seo } from "@/components/seo";

const ErrorPage = (props: any) => {

     // ThemeProvider is applied globally in _app.tsx

     const getErrorMessage = (errorType: string | string[] | undefined) => {
          switch (errorType) {
               case "AccessDenied":
                    return "Nevalidan email ili niste verifikovali token koji smo Vam poslali na email adresu (proverite 'spam' folder, ili ponovo popunite formu za registraciju.).";
               case "ProtectedRoute":
                    return "Za pristup ovoj stranici morate biti prijavljeni na sistem.";
               case "Verification":
                    return "Verifikacija nije uspela. Molimo pokušajte ponovo.";
               case "Configuration":
                    return "Konfiguracija nije pravilno postavljena. Kontaktirajte podršku.";
               case "CredentialsSignin":
                    return "Prijava nije uspela zbog grešaka u podacima. Molimo pokušajte ponovo.";
               default:
                    return "Došlo je do greške prilikom prijave. Molimo pokušajte ponovo.";
          }
     };

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>

               <Seo title={'Greska prilikom prijave'} description={'Greska prilikom prijave'} url={'https://www.apoteka-dar.rs/'} />
               <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
                    <Stack>
                         <UIProvider>
                               <Box className="AuthBox" sx={{ maxWidth: 800, mx: 'auto', bgcolor: '#fff', p: { xs: 3, md: 4 }, borderRadius: 2, boxShadow: '0 6px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}>
                                    <Box className="AuthFormBox">
                                         <ErrorOutlineIcon color="error" sx={{ fontSize: 48, mb: 1, display: 'block', mx: 'auto' }} />
                                        <Typography className="AuthTitle">
                                             Greška prilikom prijave!
                                        </Typography>
                                        <Typography className="AuthText">
                                             {getErrorMessage(props.error)}
                                        </Typography>
                                   </Box>
                                   <Link rel='canonical' href="/autentifikacija/prijava">
                                        <Button className="AuthButton">
                                             Povratak na prijavu
                                        </Button>
                                   </Link>
                                   <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                                        <Link rel='canonical' href="/">
                                             <Button variant="outlined">Pocetna</Button>
                                        </Link>
                                        <Link rel='canonical' href="/kontakt">
                                             <Button variant="text">Kontakt</Button>
                                        </Link>
                                   </Box>
                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>

          </ReCaptchaProvider>
     );
}

export default ErrorPage;

export const getServerSideProps = async (context: any) => {

     return {
          props: {
               error: context.query.error,
          },
     };
}
