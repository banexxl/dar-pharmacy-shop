import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {
     Typography,
     Box,
     Container,
     useTheme,
     useMediaQuery
} from '@mui/material';
import { BannerQuotaText, BannerShopButton } from '@/styles/banner';
import { Colors } from '@/styles/theme';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Parallax() {

     const [scrollY, setScrollY] = useState(0);
     const parallaxRef = useRef<HTMLDivElement>(null);
     const theme = useTheme();
     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
     const router = useRouter();
     const [loading, setLoading] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               if (parallaxRef.current) {
                    const rect = parallaxRef.current.getBoundingClientRect();
                    if (rect.top <= 0 && rect.bottom > 0) {
                         setScrollY(-rect.top);
                    }
               }
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return (
          <Box
               ref={parallaxRef}
               sx={{
                    marginTop: isMobile ? '60px' : '100px',
                    height: '100vh',
                    position: 'relative',
                    overflow: 'hidden',
               }}
          >
               <Box
                    sx={{
                         position: 'absolute',
                         inset: 0,
                         zIndex: 0,
                    }}
               >
                    <Image
                         src="/images/home-page/image1.jpg"
                         alt="Background landscape"
                         fill={true} // Updated
                         style={{ objectFit: "cover" }} // Updated
                         quality={100}
                         priority
                    />
               </Box>
               <Box
                    sx={{
                         position: 'absolute',
                         top: 0,
                         left: 0,
                         right: 0,
                         bottom: 0,
                         overflowY: 'auto',
                         zIndex: 10,
                         '&::-webkit-scrollbar': {
                              display: 'none',
                         },
                         scrollbarWidth: 'none',
                    }}
               >
                    <Container
                         maxWidth="lg"
                         sx={{
                              minHeight: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              py: 4,
                         }}
                    >
                         <Typography
                              variant={isMobile ? 'h3' : 'h1'}
                              component="div"
                              color="white"
                              textAlign="center"
                              sx={{
                                   fontWeight: 'bold',
                                   transform: `translateY(${scrollY * 0.5}px)`,
                                   height: '110vh',
                              }}
                         >
                              <h1
                                   style={{
                                        color: Colors.primary.main,
                                        fontStyle: 'italic',
                                        fontFamily: 'monserrat',
                                        marginTop: '50px',
                                   }}
                              >
                                   Apoteka DAR
                              </h1>
                              <h2
                                   style={{
                                        color: Colors.primary.main,
                                        fontStyle: 'italic',
                                        fontFamily: 'monserrat',
                                        marginTop: '50px',
                                   }}
                              >
                                   {'"Radosno srce je pola zdravlja!"'}
                              </h2>
                              <h3
                                   style={{
                                        color: Colors.primary.main,
                                        fontStyle: 'italic',
                                        fontFamily: 'monserrat',
                                        marginTop: '50px',
                                   }}
                              >
                                   Dostava lekova radnim danima po celoj Srbiji!
                              </h3>
                              <BannerQuotaText>
                                   Nudimo pouzdane savete i širok asortiman proizvoda, a za bilo kakva dodatna pitanja ohrabrujemo Vas
                                   da nas kontaktirate putem{' '}
                                   <Link rel="canonical" href={"/kontakt"}>
                                        <Typography
                                             component="span"
                                             sx={{ display: 'inline', fontSize: isMobile ? '1.2rem' : '2rem' }}
                                        >
                                             kontakt forme
                                        </Typography>
                                   </Link>
                              </BannerQuotaText>
                              <BannerQuotaText>
                                   ili pozivom na broj telefona{' '}
                                   <Typography
                                        component="span"
                                        sx={{ display: 'inline', fontSize: isMobile ? '1.2rem' : '2rem' }}
                                   >
                                        <a href={`tel:${+381346104222}`}>+381 34 610 4222</a>
                                   </Typography>
                              </BannerQuotaText>
                              <BannerShopButton
                                   color="primary"
                                   variant="outlined"
                                   loading={loading}
                                   onClick={() => {
                                        setLoading(true);
                                        router.push('/proizvodi-proizvodjac-kategorija/majana/prirodna-kozmetika');
                                   }}
                              >

                                   Pogledajte ponudu
                              </BannerShopButton>
                         </Typography>
                    </Container>
               </Box>
          </Box>
     );
}
