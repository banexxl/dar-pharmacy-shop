import { getSession, useSession } from "next-auth/react";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Seo } from "@/components/seo";
import { Box, Container, Stack, Typography, Paper } from "@mui/material";
import { UIProvider } from "@/context/ui/ui.context";
import ErrorPage from "../autentifikacija/greska";
import { AccountService } from "@/services/accounts.service";
import { OrdersServices } from "@/services/order-service";
import SearchBox from "@/components/search/search";
import Link from "next/link";

export default function ProtectedPage(props: any) {
     console.log('props', props);

     const { data: session } = useSession();
     // Deserialize props data
     const userData = JSON.parse(props.userData);
     const userOrders = JSON.parse(props.userOrders);
     console.log('userData', userData);


     // If no session exists, display access denied message
     if (!session) {
          return <ErrorPage error="ProtectedRoute" />;
     }

     return (
          <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} useEnterprise>
               <Seo title={"DAR Profil"} description={"DAR profil"} url={"https://www.apoteka-dar.rs/"} />
               <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
                    <Stack>
                         <UIProvider>
                              <Box
                                   sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        gap: { xs: 3, md: 4 },
                                        alignItems: 'stretch',
                                        width: '100%',
                                   }}
                              >
                                   <Box
                                        sx={{
                                             bgcolor: '#fff',
                                             borderRadius: 2,
                                             boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                                             p: 3,
                                             display: 'flex',
                                             flexDirection: 'column',
                                             alignItems: 'flex-start',
                                             gap: 1,
                                             alignSelf: 'flex-start', // prevent stretching
                                             width: { xs: '100%', md: 'auto' }
                                        }}
                                   >
                                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
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
                                        <Link rel='canonical' href="/nalog/izmena-podataka">
                                             <Typography variant="body1" sx={{ cursor: 'pointer', textDecoration: 'underline' }}>
                                                  Izmeni podatke
                                             </Typography>
                                        </Link>
                                   </Box>

                                   <Box
                                        sx={{
                                             flex: 1,
                                             bgcolor: '#fff',
                                             borderRadius: 2,
                                             boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                                             p: 3,
                                             display: 'flex',
                                             flexDirection: 'column',
                                        }}
                                   >
                                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                                             Vaše Narudžbine
                                        </Typography>
                                        {userOrders.length === 0 ? (
                                             <Typography variant="body1">Nemate nijednu narudžbinu.</Typography>
                                        ) : (
                                             <Box sx={{ flex: 1, overflowY: 'auto', pr: 1, maxHeight: { xs: 400, md: '70vh' } }}>
                                                  {userOrders.map((o: any, i: number) => (
                                                       <Paper
                                                            key={i}
                                                            sx={{
                                                                 p: 2,
                                                                 mb: 2,
                                                                 border: '1px solid #ccc',
                                                                 borderRadius: '8px',
                                                            }}
                                                       >
                                                            <Typography variant="h6">
                                                                 <strong>Narudžbina: </strong>#{o.orderNumber}
                                                            </Typography>
                                                            <Typography variant="body1">
                                                                 <strong>Datum: </strong> {new Date(o.createdAt).toLocaleDateString()}
                                                            </Typography>
                                                            <Typography variant="body1">
                                                                 <strong>Ukupan Iznos: </strong> {o.total} RSD
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                 <strong>Stavke: </strong>{' '}
                                                                 {o.items.map((item: any) => item.name + ' ' + `x${item.count}`).join(', ')}
                                                            </Typography>
                                                       </Paper>
                                                  ))}
                                             </Box>
                                        )}
                                   </Box>
                              </Box>


                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>

          </ReCaptchaProvider>
     );
}

export async function getServerSideProps(context: any) {
     const session = await getSession(context);
     console.log('session', session);

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










