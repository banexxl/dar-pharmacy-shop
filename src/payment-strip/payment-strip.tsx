import React from 'react';
import { AppBar, Toolbar, Grid, Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import theme from '@/styles/theme';
import Link from 'next/link';

const paymentTypes = [
     { name: 'Visa', icon: '/cards/visa.png', link: 'https://rs.visa.com/' },
     { name: 'Mastercard', icon: '/cards/mastercard.png', link: 'https://www.mastercard.com/global/en.html' },
     { name: 'American Express', icon: '/cards/american-express.png', link: 'https://www.americanexpress.com/' },
     { name: 'Maestro', icon: '/cards/maestro.png', link: 'https://www.mastercard.com/content/brandcenter/standard-mastercard/en/brand-requirement/maestro.html' },
     { name: 'Halk Bank', icon: '/cards/halkbank.png', link: 'https://www.halkbank.rs/Pocetna.1.html' },
     { name: 'Dina card', icon: '/cards/dina-card.png', link: 'https://dinacard.nbs.rs/cirilica/' },
];
const PaymentStrip: React.FC = () => {

     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

     return (
          <AppBar position="static" color="default" elevation={0}>
               <Toolbar variant="dense">
                    <Box width="100%" overflow="hiddenbn">
                         <Grid container justifyContent="center" alignItems="center">
                              {paymentTypes.map((payment) => (
                                   <Box key={payment.name}
                                        sx={{
                                             gap: isMobile ? '10px' : '30px',
                                             display: 'flex',
                                             justifyContent: 'center',
                                             alignItems: 'center',
                                             alignContent: isMobile ? 'center' : 'flex-end',
                                             paddingBottom: isMobile ? '10px' : '30px',
                                        }}>
                                        <Link href={payment.link} target='_blank'>
                                             <Image
                                                  style={{
                                                       paddingLeft: isMobile ? '10px' : '80px',
                                                       marginTop: payment.name === 'Halk Bank' ? '10px' : '0px',
                                                       borderRadius: payment.name === 'Halk Bank' ? '10px' : '0px',
                                                  }}
                                                  src={payment.icon}
                                                  alt={`${payment.name} icon`}
                                                  title={payment.name}
                                                  width={100}
                                                  height={100}
                                             />
                                        </Link>
                                   </Box>
                              ))}
                         </Grid>
                    </Box>
               </Toolbar>
          </AppBar>
     );
};

export default PaymentStrip;
