'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { Typography, Box, Container } from '@mui/material';
import Button from '@/components/button';
import { Colors } from '@/styles/theme';
import { useRouter } from 'next/navigation';

export default function Parallax() {
     const router = useRouter();
     const [btnLoading, setBtnLoading] = useState(false);
     const containerRef = useRef<HTMLDivElement>(null);

     // Use useLayoutEffect + direct DOM manipulation for parallax
     // to avoid React re-renders on every scroll tick
     useLayoutEffect(() => {
          const bgEl = containerRef.current;
          if (!bgEl) return;

          const onScroll = () => {
               bgEl.style.transform = `translateY(${window.scrollY * 0.2}px)`;
          };

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
               {/* Background image with parallax via ref (no re-renders) */}
               <Box
                    ref={containerRef}
                    sx={{
                         position: 'absolute',
                         inset: 0,
                         willChange: 'transform',
                         backgroundColor: '#2d4a3e',
                    }}
               >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                         src="/images/home-page/image1.jpg"
                         alt="Apoteka DAR background"
                         fetchPriority="high"
                         decoding="async"
                         style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                         }}
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

               {/* Foreground content — responsive via sx, no useMediaQuery */}
               <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
                    <Box sx={{ textAlign: 'center' }}>
                         <Typography
                              component="h1"
                              sx={{
                                   fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                                   fontWeight: 800,
                                   color: Colors.white,
                                   textShadow: '0 2px 8px rgba(0,0,0,0.35)',
                                   letterSpacing: '-0.02em',
                              }}
                         >
                              Apoteka DAR
                         </Typography>
                         <Typography
                              component="h2"
                              sx={{
                                   mt: 1,
                                   fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                                   fontWeight: 600,
                                   color: Colors.white,
                                   opacity: 0.95,
                                   textShadow: '0 1px 6px rgba(0,0,0,0.3)',
                              }}
                         >
                              Radosno srce je pola zdravlja
                         </Typography>
                         <Typography
                              component="p"
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
                              disabled={btnLoading}
                              onClick={() => {
                                   setBtnLoading(true);
                                   router.push('/proizvodi-proizvodjac-kategorija/majana/prirodna-kozmetika');
                              }}
                         >
                              {btnLoading ? 'Učitavanje...' : 'Pogledajte ponudu'}
                         </Button>
                    </Box>
               </Container>
          </Box>
     );
}
