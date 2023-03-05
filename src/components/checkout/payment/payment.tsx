import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { connect } from 'react-redux';
import { CreditCard } from './credit-card/credit-card';
import { IPaymentFormValues } from '../../../interfaces/checkout/payment-form-values.interface';
import { paymentFormSchema } from '../../../schema/payment-form.schema';
import { mapDispatchToProps, mapStateToProps, PaymentFormProps, } from './payment.props';
import { isBillingAndShippingCheckbox, PaymentFormControl, paymentOptions } from '@/styles/checkout/payment';
import { initialPaymentFormValues } from './payment-form-values.initial';
import UserInfoForm from '../userinfo/userinfo-form';
import RadioGroup from '@mui/material/RadioGroup';
import { Colors } from '@/styles/theme';

export const Payment: FunctionComponent<PaymentFormProps> = ({ paymentForm, submitPaymentForm, clearPaymentForm, }) => {

          const { t } = useTranslation();
          const [isCardPayment, setIsCardPayment] = useState(true)

          // const history = useHistory();
          // const goBack = () => {
          //           history.push(AppRoutePath.Checkout + CheckoutRoutePath.Delivery);
          // };
          // const submitForm = (values: IPaymentFormValues) => {
          //           submitPaymentForm(values);
          //           history.push(AppRoutePath.Checkout + CheckoutRoutePath.Confirmation);
          // };

          console.log(isCardPayment);


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
                                                            {!values.sameAsShipping && (
                                                                      <UserInfoForm
                                                                                formName="billingAddress"
                                                                                errors={errors.billingAddress}
                                                                                touched={touched.billingAddress}
                                                                      />
                                                            )}

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
                                                                                          <CreditCard
                                                                                                    formName="creditCard"
                                                                                                    errors={errors.creditCard}
                                                                                                    touched={touched.creditCard}
                                                                                                    values={values.creditCard}
                                                                                                    handleChange={handleChange}
                                                                                          />
                                                                                </Typography>
                                                                                :
                                                                                null

                                                            }
                                                  </PaymentFormControl>
                                                  <Box
                                                            textAlign="right"
                                                            display="flex"
                                                            justifyContent="space-between"
                                                            mt={2}
                                                  >
                                                            <Button
                                                                      type="button"
                                                                      variant="contained"
                                                                      color="secondary"
                                                                      startIcon={<ArrowBackIcon />}
                                                                      size="large"
                                                                      onClick={() => console.log("aaaa")}
                                                            >
                                                                      {t('checkout.previous')}
                                                            </Button>
                                                            <Button
                                                                      type="submit"
                                                                      variant="contained"
                                                                      color="secondary"
                                                                      endIcon={<ArrowRightIcon />}
                                                                      size="large"
                                                            >
                                                                      {t('checkout.continue')}
                                                            </Button>
                                                  </Box>
                                        </Form>
                              )}
                    </Formik>
          );
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
