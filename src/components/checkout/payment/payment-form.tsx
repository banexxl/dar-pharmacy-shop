import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Button, FormControlLabel, Radio, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { CreditCard } from './credit-card/credit-card-form';
import { initialPaymentFormValues, IPaymentForm } from '../../../interfaces/checkout/payment-form-values.interface';
import { paymentFormSchema } from '../../../schema/payment-form.schema';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { CheckoutNextPrevButton, ClearFormButton } from '@/styles/checkout/userinfo'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { isBillingAndShippingCheckbox, PaymentFormControl, paymentOptions } from '@/styles/checkout/payment';
import RadioGroup from '@mui/material/RadioGroup';
import { Colors } from '@/styles/theme';
import PaymentInfo from './payment-info/payment-info';
import { checkoutSlice } from '@/store/checkout/checkout.slice';
import { useSelector } from 'react-redux';
import { checkoutSelectors } from '@/store/checkout/checkout.selectors';

export const Payment: FunctionComponent<IPaymentForm> = (props: IPaymentForm) => {

          const { t } = useTranslation();
          const [isCardPayment, setIsCardPayment] = useState(true)
          const [tabIndex, setTabIndex] = useState(1)

          const handleNext = () => {
                    tabIndex === 0 || tabIndex === 1 ? props.setTab?.(tabIndex + 1) : null
          };

          const handleBack = () => {
                    tabIndex === 1 || tabIndex === 2 ? props.setTab?.(tabIndex - 1) : null
          };

          return (
                    <Formik
                              validationSchema={paymentFormSchema(t)}
                              initialValues={initialPaymentFormValues}
                              onSubmit={() => console.log("aaaa")}
                    >
                              {({ errors, touched, values, handleChange, setFieldTouched }) => (
                                        <Form>
                                                  <PaymentFormControl>
                                                            <Typography variant="h5" component="legend" gutterBottom>
                                                                      {t('checkout.billingAddress')}
                                                            </Typography>
                                                            <Field
                                                                      component={isBillingAndShippingCheckbox}
                                                                      type="checkbox"
                                                                      name="sameAsShipping"
                                                                      Label={{ label: t('checkout.sameAsShipping') }}
                                                            />

                                                            {!values.sameAsShipping && (<PaymentInfo />)}

                                                            <Typography variant="h5" component="legend" gutterBottom>
                                                                      {t('checkout.payment-options')}
                                                            </Typography>
                                                            <RadioGroup
                                                                      name="CardPayment"
                                                                      row
                                                                      onChange={() => setIsCardPayment(!isCardPayment)}
                                                            >
                                                                      <FormControlLabel checked={isCardPayment} value="card-payment" control={<Radio sx={{ bgcolor: Colors.light_gray }} />} label={t('checkout.card-payment')} />
                                                                      <FormControlLabel checked={!isCardPayment} value="on-delivery-payment" control={<Radio sx={{ bgcolor: Colors.light_gray }} />} label={t('checkout.on-delivery-payment')} />
                                                            </RadioGroup>

                                                            {
                                                                      isCardPayment ?
                                                                                <Typography variant="h5" component="legend" gutterBottom>
                                                                                          {t('checkout.creditCard')}
                                                                                          {/* <CreditCard
                                                                                                    formName="creditCard"
                                                                                                    values={undefined}
                                                                                                    handleChange={function (event: React.ChangeEvent<HTMLInputElement>): void {
                                                                                                              throw new Error('Function not implemented.');
                                                                                                    }} /> */}
                                                                                </Typography>
                                                                                :
                                                                                null
                                                            }
                                                  </PaymentFormControl>
                                                  <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />} onClick={() => handleNext()}>
                                                            {t('checkout.nextbutton')}
                                                  </CheckoutNextPrevButton>
                                                  <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                                            {t('checkout.previousbutton')}
                                                  </CheckoutNextPrevButton>
                                        </Form>
                              )}
                    </Formik>
          );
};

export default Payment
