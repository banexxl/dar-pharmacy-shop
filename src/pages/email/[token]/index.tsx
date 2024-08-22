import { Box, Card, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import LoadingWheel from "@/components/loading/loading";
import theme, { Colors } from "@/styles/theme";
import Head from "next/head";
import { ContactBox, ContactInfoBox, ContactText, ContactTitle } from "@/styles/contact/contact";
import { UIProvider } from "@/context/ui/ui.context";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

interface VerifyEmailFormProps {
     success?: string;
     error?: string;
}

export default function VerifyEmailForm({ success, error }: VerifyEmailFormProps) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     });

     const router = useRouter();

     return (
          <DynamicThemeProvider theme={theme}>
               <Head>
                    <title>Apoteka DAR - O nama</title>
                    <meta name="description" content="Apoteka Dar Kragujevac" />
                    <meta name="keywords" content="apoteka, dar, kragujevac" />
                    <meta property="og:title" content="Apoteka DAR" />
                    <meta property="og:description" content="Apoteka Dar Kragujevac" />
                    <meta property="og:image" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta property="og:url" content="https://www.apoteka-dar.rs" />
                    <meta name="twitter:card" content="/public/images/home-page/apotekaDar.jpg" />
                    <meta name="twitter:title" content="Apoteka DAR" />
                    <meta name="twitter:description" content="Apoteka DAR - O nama" />
                    <meta name="twitter:image" content="/public/images/home-page/apotekaDar.jpg" />
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
                              <ContactBox theme={theme}>
                                   <ContactInfoBox theme={theme} >
                                        {
                                             success &&
                                             <Box>
                                                  <ContactTitle theme={theme} >
                                                       Uspešno ste izvršili registraciju!
                                                       <br />
                                                  </ContactTitle>
                                                  <Box sx={{ display: 'flex' }}>
                                                       <ContactText theme={theme} >
                                                            Ako želite, možete da se prijavite &nbsp;
                                                       </ContactText>
                                                       <Typography variant="h6"
                                                            sx={{
                                                                 textAlign: 'justify',
                                                                 cursor: 'pointer', // Hand cursor on hover
                                                                 transition: 'transform 0.5s, color 0.2s',
                                                                 transformOrigin: 'center', // Ensure zoom happens from the center
                                                                 ":hover": {
                                                                      color: 'red',
                                                                      transform: 'scale(1.3)', // Slight zoom in
                                                                 }
                                                            }}
                                                            onClick={() => router.push('/autentifikacija/prijava')}
                                                       >
                                                            Ovde.
                                                       </Typography>
                                                  </Box>
                                             </Box>
                                        }
                                        {
                                             error &&
                                             <Box>
                                                  <ContactTitle theme={theme} >
                                                       Greška prilikom verifikacije!
                                                  </ContactTitle>
                                                  <ContactText theme={theme} sx={{ display: 'inline-block' }}>
                                                       {error}
                                                  </ContactText>
                                                  <ContactText theme={theme}>
                                                       Ako Vam je istekao token, ili ste izgubili email za verifikaciju istog, <br />
                                                       možete zatražiti novi popunjavanjem registracione forme na sledećem linku: <br />
                                                  </ContactText>
                                                  <ContactText theme={theme} sx={{ display: 'inline-block', textAlign: 'center' }}>
                                                       <Link href="/registracija" style={{ color: Colors.primary.main, textAlign: 'justify', textDecoration: 'underline' }}>Registrujte se</Link>
                                                  </ContactText>
                                             </Box>
                                        }
                                        {
                                             !success && !error &&
                                             <Card sx={{ padding: '20px', borderRadius: '20px', background: '#f0f0f0' }}>
                                                  <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bolder' }}>Verifikacija nije uspela, probajte ponovo.</Typography>
                                             </Card>
                                        }
                                   </ContactInfoBox>
                              </ContactBox>
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container>
          </DynamicThemeProvider >
     );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
     const token = query.token as string;

     if (!token) {
          return {
               props: {
                    error: "No token provided",
               },
          };
     }

     try {
          const response = await fetch(`${process.env.BASE_URL}/api/verify-email`, {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({ token }),
          });

          const data = await response.json();

          if (data.success) {
               return {
                    props: {
                         success: data.success,
                    },
               };
          }

          return {
               props: {
                    error: data.error || "Verification failed",
               },
          };
     } catch (error) {
          console.error('Error during verification:', error);
          return {
               props: {
                    error: "An unexpected error occurred",
               },
          };
     }
};
