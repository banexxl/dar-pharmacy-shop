import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Button, FormControlLabel, Radio, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { CreditCard } from './credit-card/credit-card';
import { initialPaymentFormValues, IPaymentFormValues } from '../../../interfaces/checkout/payment-form-values.interface';
import { paymentFormSchema } from '../../../schema/payment-form.schema';
import { isBillingAndShippingCheckbox, PaymentFormControl, paymentOptions } from '@/styles/checkout/payment';
import UserInfoForm from '../userinfo/userinfo-form';
import RadioGroup from '@mui/material/RadioGroup';
import { Colors } from '@/styles/theme';

export const Payment: FunctionComponent<IPaymentFormValues> = (props: IPaymentFormValues) => {

          const { t } = useTranslation();
          const [isCardPayment, setIsCardPayment] = useState(true)

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

                                                            {!values.sameAsShipping && (<UserInfoForm formName="billingAddress" />)}

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
                                        </Form>
                              )}
                    </Formik>
          );
};

export default Payment
