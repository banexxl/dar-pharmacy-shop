import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme, { Colors } from "@/styles/theme";
import { Button, Container, Stack, Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation'
import Link from "next/link";
import { Seo } from "@/components/seo";

const ErrorPage = (props: any) => {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false,
     });

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
               <DynamicThemeProvider theme={theme}>
                    <Seo title={'Greska prilikom prijave'} description={'Greska prilikom prijave'} url={'https://www.apoteka-dar.rs/'} />
                    <Container
                         disableGutters
                         maxWidth="lg"
                         sx={{
                              background: "#fff",
                         }}
                    >
                         <Stack>
                              <UIProvider>
                                   <Box className="AuthBox">
                                        <Box className="AuthFormBox">
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
                                   </Box>
                                   <SearchBox />
                                   <AppDrawer isScreenToMedium={false} />
                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider>
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
