import { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Seo } from "@/components/seo";
import { Box, Container, Grid, Stack, Typography, Paper, useMediaQuery } from "@mui/material";
import { UIProvider } from "@/context/ui/ui.context";
import LoadingWheel from "@/components/loading/loading";
import theme from "@/styles/theme";
import dynamic from "next/dynamic";
import { ProfileBox } from "@/styles/profile";
import ErrorPage from "../autentifikacija/greska";
import { AccountService } from "@/services/accounts.service";
import { OrdersServices } from "@/services/order-service";
import SearchBox from "@/components/search/search";
import AppDrawer from "@/components/navbar/drawer/drawer";
import Link from "next/link";

export default function ProtectedPage(props: any) {

     const { data: session, status } = useSession();
     const router = useRouter();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));
     // Deserialize props data
     const userData = JSON.parse(props.userData);
     const userOrders = JSON.parse(props.userOrders);

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false,
     });

     // If no session exists, display access denied message
     if (!session) {
          return <ErrorPage error="ProtectedRoute" />;
     }

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.GOOGLE_CAPTCHA_SITE_KEY} useEnterprise>
               <DynamicThemeProvider theme={theme}>
                    <Seo title={"DAR Profil"} description={"DAR profil"} url={"https://www.apoteka-dar.rs/"} />
                    <Container
                         disableGutters
                         maxWidth="lg"
                         sx={{
                              background: "#fff",
                              padding: 2,
                         }}
                    >
                         <Stack>
                              <UIProvider>
                                   <Grid container spacing={2}>
                                        {/* Left Side: User Information */}
                                        <Grid item xs={12} md={4} >
                                             <ProfileBox
                                                  theme={theme}
                                                  sx={{
                                                       textAlign: 'left', // Align text to the left
                                                       display: 'flex',
                                                       flexDirection: 'column',
                                                       alignItems: 'flex-start', // Align items to the left
                                                       gap: 1, // Add some space between elements
                                                  }}
                                             >
                                                  <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                                       Korisnički Podaci
                                                  </Typography>
                                                  <Typography variant="body1">
                                                       <strong>Ime: </strong> {userData.name}
                                                  </Typography>
                                                  <Typography variant="body1">
                                                       <strong>Email: </strong> {userData.email}
                                                  </Typography>
                                                  <Typography variant="body1">
                                                       <strong>Telefon: </strong> {userData.phoneNumber || "Nije dostupno"}
                                                  </Typography>
                                                  <Typography variant="body1">
                                                       <strong>Adresa: </strong> {userData.streetAddress || "Nije dostupno"}
                                                  </Typography>
                                                  <Typography variant="body1">
                                                       <strong>Grad: </strong> {userData.city || "Nije dostupno"}
                                                  </Typography>
                                                  <Link href="/nalog/izmena-podataka">
                                                       <Typography variant="body1" sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                                            Izmeni Podatke
                                                       </Typography>
                                                  </Link>
                                                  {/* Add more user details here as needed */}
                                             </ProfileBox>
                                        </Grid>

                                        {/* Right Side: User Orders */}
                                        <Grid item xs={12} md={8}>
                                             <Box
                                                  sx={{
                                                       marginTop: isScreenToMedium ? '10px' : '100px',
                                                       maxHeight: '70vh',
                                                       overflowY: 'auto',
                                                       padding: 2,
                                                       border: '1px solid #ddd',
                                                       borderRadius: '8px',
                                                       backgroundColor: '#f9f9f9',
                                                       marginBottom: '100px'
                                                  }}
                                             >
                                                  <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                                       Vaše Narudžbine
                                                  </Typography>
                                                  {userOrders.length === 0 ? (
                                                       <Typography variant="body1">Nemate nijednu narudžbinu.</Typography>
                                                  ) : (
                                                       userOrders.map((order: any, index: number) => (
                                                            <Paper
                                                                 key={index}
                                                                 sx={{
                                                                      padding: 2,
                                                                      marginBottom: 2,
                                                                      border: '1px solid #ccc',
                                                                      borderRadius: '8px',
                                                                 }}
                                                            >
                                                                 <Typography variant="h6"><strong>Narudžbina: </strong>#{order.orderNumber}</Typography>
                                                                 <Typography variant="body1">
                                                                      <strong>Datum: </strong> {new Date(order.createdAt).toLocaleDateString()}
                                                                 </Typography>
                                                                 <Typography variant="body1">
                                                                      <strong>Ukupan Iznos: </strong> {order.total} RSD
                                                                 </Typography>
                                                                 <Typography variant="body2">
                                                                      <strong>Stavke: </strong> {order.items.map((item: any) => item.name + ' ' + `${('x' + item.count)}`).join(", ")}
                                                                 </Typography>
                                                            </Paper>
                                                       ))
                                                  )}
                                             </Box>
                                        </Grid>
                                   </Grid>
                                   <SearchBox />
                                   <AppDrawer isScreenToMedium={false} />
                              </UIProvider>
                         </Stack>
                    </Container>
               </DynamicThemeProvider>
          </ReCaptchaProvider>
     );
}

export async function getServerSideProps(context: any) {
     const session = await getSession(context);
     console.log("ProtectedPage -> session", session);

     // Fetch user data and orders using the user's email
     const userData = await AccountService().getUserByEmail(session?.user?.email!);
     const userOrders = await OrdersServices().getOrdersByUserEmail(session?.user?.email!);

     return {
          props: {
               userData: JSON.stringify(userData),
               userOrders: JSON.stringify(userOrders),
          },
     };
}
