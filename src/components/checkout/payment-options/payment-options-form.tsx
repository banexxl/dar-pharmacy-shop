import { Box, Container, FormControlLabel, Grid, Radio, RadioGroup, ThemeProvider, Typography } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import theme from '@/styles/theme';
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface CreditCardProps {
     setTab: (tabIndex: number) => number;
     formName: string;
     tabIndex: number;
}

export const CreditCard: FunctionComponent<CreditCardProps> = (props: CreditCardProps) => {

     const [paymentOption, setPaymentOption] = useState('onDelivery')

     // const handleSubmit = (values: IPaymentOptionsForm) => {
     //      dispatch(submitPaymentOptionsForm(values))
     //      props.tabIndex === 1 ? props.setTab?.(props.tabIndex + 1) : null
     // };

     const handleBack = () => {
          props.tabIndex === 1 ? props.setTab?.(props.tabIndex - 1) : null
     };

     const handleNext = () => {
          props.tabIndex === 1 ? props.setTab?.(props.tabIndex + 1) : null
     };


     return (
          <ThemeProvider theme={theme}>

               <Container disableGutters maxWidth="md" sx={{
                    background: "#fff", display: 'flex', flexDirection: 'column', gap: '20px'
               }}
               >
                    <RadioGroup
                         aria-labelledby="demo-controlled-radio-buttons-group"
                         name="controlled-radio-buttons-group"
                         value={paymentOption}
                         onChange={(e: any) => setPaymentOption(e.target.value)}
                         sx={{ display: 'flex', flexDirection: 'row' }}
                    >
                         <FormControlLabel value="onDelivery" defaultChecked control={<Radio />} label={"Plaćanje pouzećem"} />
                         <FormControlLabel disabled value="cardPayment" control={<Radio />} label={"Kartično plaćanje - Uskoro"} />
                    </RadioGroup>
                    {
                         paymentOption === 'cardPayment' ?
                              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                                   <Typography variant="body1">
                                        Izabrali ste kartično plaćanje. Bićete preusmereni na drugu platformu za završetak transakcije.
                                   </Typography>
                                   <CheckoutNextPrevButton onClick={() => handleNext()} sx={{ maxWidth: '100px', marginTop: '10px' }} endIcon={<NavigateNextIcon />}>
                                        Potvrdi
                                   </CheckoutNextPrevButton>
                              </Box>
                              :
                              < Grid item xs={12} sm={6} sx={{ marginTop: '20px' }}>
                                   <CheckoutNextPrevButton sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                        Nazad
                                   </CheckoutNextPrevButton>
                                   <CheckoutNextPrevButton onClick={() => handleNext()} sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />}>
                                        Dalje
                                   </CheckoutNextPrevButton>
                              </Grid>
                    }

               </Container>
          </ThemeProvider >
     );
};
