import LoadingWheel from "@/components/loading/loading";
import { UIProvider } from "@/context/ui/ui.context";
import theme, { Colors } from "@/styles/theme";
import { Button, Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { AuthBox, AuthButton, AuthFormBox, AuthText, AuthTitle } from "@/styles/auth/auth";
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation'
import Link from "next/link";

const ErrorPage = (props: any) => {

     console.log("props", props);


     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false,
     });

     const getErrorMessage = (errorType: string | string[] | undefined) => {
          switch (errorType) {
               case "AccessDenied":
                    return "Nevalidan email ili niste verifikovali token koji smo Vam poslali na email adresu (proverite 'spam' folder, ili ponovo popunite formu za registraciju.).";
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
                    <title>Apoteka DAR - Greška prilikom prijave</title>
                    <meta name="description" content="Apoteka Dar Kragujevac" />
                    <meta name="keywords" content="apoteka, dar, kragujevac" />
                    <meta property="og:title" content="Apoteka DAR" />
                    <meta property="og:description" content="Apoteka Dar Kragujevac" />
                    <meta property="og:image" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta property="og:url" content="https://www.apoteka-dar.rs" />
                    <meta name="twitter:card" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta name="twitter:title" content="Apoteka DAR" />
                    <meta name="twitter:description" content="Apoteka DAR - Greška prilikom prijave" />
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
                                   <AuthBox theme={theme}>
                                        <AuthFormBox>
                                             <AuthTitle>
                                                  Greška prilikom prijave!
                                             </AuthTitle>
                                             <AuthText theme={theme}>
                                                  {getErrorMessage(props.error)}
                                             </AuthText>
                                        </AuthFormBox>
                                        <Link href="/autentifikacija/prijava">
                                             <AuthButton theme={theme}>
                                                  Povratak na prijavu
                                             </AuthButton>
                                        </Link>
                                   </AuthBox>
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
