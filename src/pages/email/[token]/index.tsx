import { Box, Card, Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import LoadingWheel from "@/components/loading/loading";
import theme from "@/styles/theme";
import Head from "next/head";
import { ContactBox, ContactInfoBox, ContactTitle } from "@/styles/contact/contact";
import { UIProvider } from "@/context/ui/ui.context";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import { GetServerSideProps } from "next";

interface VerifyEmailFormProps {
     success?: string;
     error?: string;
}

export default function VerifyEmailForm({ success, error }: VerifyEmailFormProps) {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     });

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
                                   <ContactInfoBox theme={theme}>
                                        <ContactTitle>
                                             Ako želite, možete da se prijavite ovde. Ako ne, nastavite slobodno sa korišćenjem aplikacije.
                                        </ContactTitle>
                                   </ContactInfoBox>
                              </ContactBox>
                              {success && <p>{success}</p>}
                              {error && <p>{error}</p>}
                              {!success && !error && <p>Loading</p>}
                              <SearchBox />
                              <AppDrawer isScreenToMedium={false} />
                         </UIProvider>
                    </Stack>
               </Container>
          </DynamicThemeProvider>
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
