import { Box, Card, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import LoadingWheel from "@/components/loading/loading";
import theme, { Colors } from "@/styles/theme";
import Head from "next/head";
import { UIProvider } from "@/context/ui/ui.context";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { Seo } from "@/components/seo";

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
                    <Seo title={'Verifikacija tokena'} description={'Verifikacija tokena'} url={'https://www.apoteka-dar.rs/'} />
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
                              <Box className="contact-box">
                                   <Box className="contact-info-box">
                                        {
                                             success &&
                                             <Box>
                                                  <Typography className="contact-title">
                                                       Uspešno ste izvršili registraciju!
                                                       <br />
                                                  </Typography>
                                                  <Box >
                                                       <Typography>
                                                            Ako želite, možete da se prijavite<br />
                                                       </Typography>
                                                       <Typography variant="h6"
                                                            sx={{
                                                                 textAlign: 'center',
                                                                 cursor: 'pointer', // Hand cursor on hover
                                                                 transition: 'transform 0.5s, color 0.2s',
                                                                 transformOrigin: 'center', // Ensure zoom happens from the center
                                                                 ":hover": {
                                                                      color: 'red',
                                                                      transform: 'scale(1.1)', // Slight zoom in
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
                                                  <Typography className="contact-title">
                                                       Greška prilikom verifikacije!
                                                  </Typography>
                                                  <Typography className="contact-text" sx={{ display: 'inline-block' }}>
                                                       {error}
                                                  </Typography>
                                                  <Typography className="contact-text">
                                                       Ako Vam je istekao token, ili ste izgubili email za verifikaciju istog, <br />
                                                       možete zatražiti novi popunjavanjem registracione forme na sledećem linku: <br />
                                                  </Typography>
                                                  <Typography className="contact-text" sx={{ display: 'inline-block', textAlign: 'center' }}>
                                                       <Link rel='canonical' href="/registracija" style={{ color: Colors.primary.main, textAlign: 'justify', textDecoration: 'underline' }}>Registrujte se</Link>
                                                  </Typography>
                                             </Box>
                                        }
                                        {
                                             !success && !error &&
                                             <Card sx={{ padding: '20px', borderRadius: '20px', background: '#f0f0f0' }}>
                                                  <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bolder' }}>Verifikacija nije uspela, probajte ponovo.</Typography>
                                             </Card>
                                        }
                                   </Box>
                              </Box>
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
