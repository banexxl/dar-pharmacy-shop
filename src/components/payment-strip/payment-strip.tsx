import React from 'react';
import { AppBar, Toolbar, Grid, Box, useMediaQuery, Divider } from '@mui/material';
import Image from 'next/image';
import theme from '@/styles/theme';
import Link from 'next/link';

const paymentTypes = [
     { name: 'Maestro', icon: '/cards/maestro-card-black-medium.png', link: 'https://www.mastercard.com/content/brandcenter/standard-mastercard/en/brand-requirement/maestro.html' },
     { name: 'Mastercard', icon: '/cards/master-card-black-medium.png', link: 'https://www.mastercard.rs/sr-rs/korisnici/pronadite-karticu.html' },
     { name: 'Dina card', icon: '/cards/dina-card.jpg', link: 'https://dinacard.nbs.rs/cirilica/' },
     { name: 'Visa', icon: '/cards/visa-card.png', link: 'https://rs.visa.com/pay-with-visa/security-and-assistance/protected-everywhere.html' },
     { name: 'American Express', icon: '/cards/american-express.png', link: 'https://www.americanexpress.com/' },
     { name: 'Halk Bank', icon: '/cards/halk-bank-logo.jpg', link: 'https://www.halkbank.rs/' },
     { name: 'ID Check', icon: '/cards/id-check.png', link: 'https://www.idcheck.com/' },
     { name: 'Visa Secure', icon: '/cards/visa-secure.png', link: 'https://www.visasecureservices.com/' },
     { name: 'Chip Card', icon: '/cards/chip-card.jpg', link: 'https://chipcard.rs/e-commerce' }
];
const PaymentStrip: React.FC = () => {

     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

     return (
          <Box width="100%" overflow="hidden" sx={{ backgroundColor: theme.palette.background.paper, py: '30px', margin: '0' }}>
               <Divider sx={{ mb: '30px' }} />
               <Grid container justifyContent="center" alignItems="center" sx={{ padding: '0', margin: '0' }}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? '15px' : '30px', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
                         {paymentTypes.map(payment => (
                              <Box key={payment.name}>
                                   <Link href={payment.link} target='_blank'>
                                        <Image
                                             src={payment.icon}
                                             alt={`${payment.name} icon`}
                                             title={payment.name}
                                             width={isMobile ? 60 : payment.name.toLowerCase().includes('halk') ? 120 : 70}
                                             height={isMobile ? 40 : 50}
                                             style={{
                                                  cursor: 'pointer',
                                                  marginLeft: payment.name.toLowerCase().includes('halk') ? '40px' : '10px',
                                                  marginRight: payment.name.toLowerCase().includes('halk') ? '40px' : '10px'
                                             }}
                                        />
                                   </Link>
                              </Box>
                         ))}
                    </Grid>
               </Grid>
          </Box>
     );
};

export default PaymentStrip;
