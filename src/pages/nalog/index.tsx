import { useSession } from "next-auth/react";
import ReCaptchaProviderWrapper from "@/components/common/recaptcha-provider";
import { Seo } from "@/components/seo";
import { Box, Container, Stack, Typography, Paper } from "@mui/material";
import { UIProvider } from "@/context/ui/ui.context";
import ErrorPage from "../autentifikacija/greska";
import { AccountService } from "@/services/accounts.service";
import { OrdersServices } from "@/services/order-service";
import SearchBox from "@/components/search/search";
import Link from "next/link";
import SpinningWheel from "@/components/circularprogress/circular-progress";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";

export default function ProtectedPage(props: any) {
     // Deserialize props data safely because SSR can return null values.
     const parsedUserData = props?.userData ? JSON.parse(props.userData) : null;
     const parsedUserOrders = props?.userOrders ? JSON.parse(props.userOrders) : null;

     const userData =
          parsedUserData && typeof parsedUserData === 'object'
               ? parsedUserData
               : null;

     const userOrders = Array.isArray(parsedUserOrders)
          ? parsedUserOrders
          : null;

     return (
          <ReCaptchaProviderWrapper>
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
                                        mb: 4,
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
                                        {!userData ? (
                                             <Typography variant="body1" color="text.secondary">
                                                  Korisnički podaci trenutno nisu dostupni. Pokušajte ponovo kasnije.
                                             </Typography>
                                        ) : (
                                             <>
                                                  <Typography variant="body1">
                                                       <strong>Ime: </strong> {userData.name || "Nije dostupno"}
                                                  </Typography>
                                                  <Typography variant="body1">
                                                       <strong>Email: </strong> {userData.email || "Nije dostupno"}
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
                                             </>
                                        )}
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
                                        {!userOrders ? (
                                             <Typography variant="body1" color="text.secondary">Narudžbine trenutno nisu dostupne. Pokušajte ponovo kasnije.</Typography>
                                        ) : userOrders.length === 0 ? (
                                             <Typography variant="body1">Nemate nijednu narudžbinu.</Typography>
                                        ) : (
                                             <Box sx={{ flex: 1, overflowY: 'auto', pr: 1, maxHeight: { xs: 400, md: '70vh' } }}>
                                                  {userOrders.map((o: any, i: number) => {
                                                       const orderItems = Array.isArray(o?.items) ? o.items : [];

                                                       return (
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
                                                                      <strong>Narudžbina: </strong>#{o?.orderNumber || 'N/A'}
                                                                 </Typography>
                                                                 <Typography variant="body1">
                                                                      <strong>Datum: </strong> {o?.createdAt ? new Date(o.createdAt).toLocaleDateString() : 'Nije dostupno'}
                                                                 </Typography>
                                                                 <Typography variant="body1">
                                                                      <strong>Ukupan Iznos: </strong> {typeof o?.total === 'number' ? `${o.total} RSD` : 'Nije dostupno'}
                                                                 </Typography>
                                                                 <Typography variant="body2">
                                                                      <strong>Stavke: </strong>{' '}
                                                                      {orderItems.length > 0
                                                                           ? orderItems.map((item: any) => (item?.name || 'Nepoznata stavka') + ' ' + `x${item?.count || 0}`).join(', ')
                                                                           : 'Nema stavki'}
                                                                 </Typography>
                                                            </Paper>
                                                       );
                                                  })}
                                             </Box>
                                        )}
                                   </Box>
                              </Box>


                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>
          </ReCaptchaProviderWrapper>
     );
}

export async function getServerSideProps(context: any) {
     const session = await getServerSession(
          context.req,
          context.res,
          authOptions
     );
     if (!session?.user?.email) {
          return {
               redirect: {
                    destination: '/autentifikacija/prijava',
                    permanent: false,
               },
          };
     }

     const userData = await AccountService().getUserByEmail(
          session.user.email
     );

     console.log('userData', userData);

     const userOrdersResponse =
          await OrdersServices().getOrdersByUserEmail(
               session.user.email
          );

     const userOrders = Array.isArray(userOrdersResponse)
          ? userOrdersResponse
          : [];

     console.log('userOrders', userOrders);

     return {
          props: {
               userData: JSON.stringify(userData),
               userOrders: JSON.stringify(userOrders),
          },
     };
}










