import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Typography, Box, Container, useTheme, useMediaQuery } from '@mui/material';
import Button from '@/components/button';
import { Colors } from '@/styles/theme';
import { useRouter } from 'next/router';

export default function Parallax() {
     const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
     const router = useRouter();
     const [bgOffset, setBgOffset] = useState(0);

     useEffect(() => {
          const onScroll = () => setBgOffset(window.scrollY * 0.2);
          window.addEventListener('scroll', onScroll, { passive: true });
          return () => window.removeEventListener('scroll', onScroll);
     }, []);

     return (
          <Box
               sx={{
                    mt: 0,
                    minHeight: { xs: '80vh', md: '100vh' },
                    position: 'relative',
                    overflow: 'hidden',
               }}
          >
               {/* Background image with subtle parallax translate */}
               <Box
                    sx={{
                         position: 'absolute',
                         inset: 0,
                         transform: `translateY(${bgOffset}px)`,
                         transition: 'transform 0.05s linear',
                         willChange: 'transform',
                    }}
               >
                    <Image
                         src="/images/home-page/image1.jpg"
                         alt="Apoteka DAR background"
                         fill
                         style={{ objectFit: 'cover' }}
                         priority
                    />
               </Box>

               {/* Overlay for readability */}
               <Box
                    sx={{
                         position: 'absolute',
                         inset: 0,
                         background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)',
                    }}
               />

               {/* Foreground content */}
               <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
                    <Box sx={{ textAlign: 'center' }}>
                         <Typography
                              variant={isMobile ? 'h3' : 'h2'}
                              sx={{
                                   fontWeight: 800,
                                   color: Colors.white,
                                   textShadow: '0 2px 8px rgba(0,0,0,0.35)',
                                   letterSpacing: '-0.02em',
                              }}
                         >
                              Apoteka DAR
                         </Typography>
                         <Typography
                              variant={isMobile ? 'h5' : 'h4'}
                              sx={{
                                   mt: 1,
                                   color: Colors.white,
                                   opacity: 0.95,
                                   textShadow: '0 1px 6px rgba(0,0,0,0.3)',
                              }}
                         >
                              Radosno srce je pola zdravlja
                         </Typography>
                         <Typography
                              variant="body1"
                              sx={{
                                   mt: 2,
                                   mx: 'auto',
                                   maxWidth: 720,
                                   color: 'rgba(255,255,255,0.92)',
                                   fontSize: { xs: '1rem', md: '1.125rem' },
                                   lineHeight: 1.7,
                              }}
                         >
                              Prirodni proizvodi, savet i briga — sve na jednom mestu. Dostava radnim danima širom Srbije.
                         </Typography>
                         <Button
                              color="primary"
                              variant="contained"
                              size="large"
                              sx={{ mt: 4 }}
                              onClick={async () => {
                                   await router.push('/proizvodi-proizvodjac-kategorija/majana/prirodna-kozmetika');
                              }}
                         >
                              Pogledajte ponudu
                         </Button>
                    </Box>
               </Container>
          </Box>
     );
}
