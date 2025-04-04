import { Box, Button, CircularProgress, Container, FormControlLabel, Grid, Link, Radio, RadioGroup, ThemeProvider, Typography } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import theme from '@/styles/theme';
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalPriceSelector } from '@/store/cart/cart.selector';
import { SendCheckoutConfirmationEmailToAdmin, SendCheckoutConfirmationEmailToUser } from '@/services/email/send-email';
import { ReCaptcha } from 'next-recaptcha-v3';
import { clearCart } from '@/store/cart/cart.slice';
import { clearUserForm } from '@/store/checkout/user-info-form.slice';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface OrderConfirmationProps {
     setTab: (tabIndex: number) => number;
     formName: string;
     tabIndex: number;
}

export const OrderConfirmation: FunctionComponent<OrderConfirmationProps> = (props: OrderConfirmationProps) => {

     const [paymentOption, setPaymentOption] = useState('onDelivery')
     const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
     const [loading, setLoading] = useState<boolean>(false)
     const session = useSession()
     const router = useRouter()
     const userFormSelector = useSelector((state: any) => state.persistReduce.userInfoFormSliceReducer)
     const totalItemPrice: any = useSelector(cartTotalPriceSelector(450))
     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)
     const dispatch = useDispatch()

     const handleBack = () => {
          props.tabIndex === 2 ? props.setTab?.(props.tabIndex - 1) : null
     };

     const handleNext = () => {
          props.tabIndex === 0 ? props.setTab?.(props.tabIndex + 1) : null
     };


     return (
          <ThemeProvider theme={theme}>

               <Container disableGutters maxWidth="md" sx={{
                    background: "#fff", display: 'flex', flexDirection: 'column', gap: '20px'
               }}
               >

               </Container>
               <ReCaptcha onValidate={() => { setSubmitEnabled(true) }} action={'form_submit'} reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
          </ThemeProvider >
     );
};
