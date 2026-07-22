import React, { useEffect, useState } from 'react';
import { UIProvider } from '@/context/ui/ui.context';
import { Box, Container, Stack, Typography, Button } from '@mui/material';
import SearchBox from '@/components/search/search';
import ReCaptchaProviderWrapper from '@/components/common/recaptcha-provider';
import { Seo } from '@/components/seo';

const RegisterPage = () => {

     // Read query param from router
     const [message, setMessage] = useState<string>("");
     useEffect(() => {
          if (typeof window !== "undefined") {
               const params = new URLSearchParams(window.location.search);
               const status = params.get("status");
               if (status === "success") {
                    setMessage("Uspešna registracija! Ako je email ispravan, proverite vaš inbox za verifikaciju.");
               } else if (status === "fail") {
                    setMessage("Došlo je do greške pri registraciji. Pokušajte ponovo.");
               } else if (status === "exists") {
                    setMessage("Korisnik sa ovim emailom već postoji.");
               } else {
                    setMessage("");
               }
          }
     }, []);

     return (
          <ReCaptchaProviderWrapper>
               <Seo title={'Registracija'} description={'Registracija korisnika'} url={'https://www.apoteka-dar.rs/'} />
               <Container maxWidth="xl" sx={{ background: '#fff' }}>
                    <Stack>
                         <UIProvider>
                              <Box sx={{ mt: 8, mb: 6, textAlign: 'center' }}>
                                   <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: 'primary.main' }}>
                                        {message || "Nepoznat status registracije."}
                                   </Typography>
                                   <Button variant="contained" href="/">Nazad na početnu</Button>
                              </Box>
                              <SearchBox />
                         </UIProvider>
                    </Stack>
               </Container>
          </ReCaptchaProviderWrapper>
     );
};

export default RegisterPage;

