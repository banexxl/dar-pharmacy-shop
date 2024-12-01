import React from 'react';
import { AppBar, Toolbar, Grid, Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import theme from '@/styles/theme';

const paymentTypes = [
     { name: 'Visa', icon: '/cards/visa.png' },
     { name: 'Mastercard', icon: '/cards/mastercard.png' },
     { name: 'American Express', icon: '/cards/american-express.png' },
     { name: 'Maestro', icon: '/cards/maestro.png' },
     { name: 'Dina card', icon: '/cards/dina-card.png' },
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
                                             paddingBottom: isMobile ? '10px' : '30px'
                                        }}>
                                        <Image
                                             style={{ paddingLeft: isMobile ? '10px' : '80px' }}
                                             src={payment.icon}
                                             alt={`${payment.name} icon`}
                                             title={payment.name}
                                             width={100}
                                             height={100}
                                        />
                                   </Box>
                              ))}
                         </Grid>
                    </Box>
               </Toolbar>
          </AppBar>
     );
};

export default PaymentStrip;
