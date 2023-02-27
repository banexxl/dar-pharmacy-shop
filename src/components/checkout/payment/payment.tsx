import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ClearAll from '@mui/icons-material/ClearAll';
import { Box, Button, FormControl, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Field, Form, Formik } from 'formik';
import { CheckboxWithLabel } from 'formik-mui';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'next-i18next';
import { connect } from 'react-redux';

import AddressForm from '../userinfo/userinfo-form';
import { CreditCard } from '../credit-card/credit-card';

import { PaymentFormValues } from '../../../interfaces/checkout/payment-form-values.interface';
import { paymentFormSchema } from '../../../schema/payment-form.schema';
import {
          mapDispatchToProps,
          mapStateToProps,
          PaymentFormProps,
} from './payment.props';

const PaymentFormControl = styled(FormControl)(({ theme }) => ({
          display: 'block',
          marginTop: theme.spacing(2),
}));

export const Payment: FunctionComponent<PaymentFormProps> = ({
          paymentForm,
          submitPaymentForm,
          clearPaymentForm,
}) => {
          const { t } = useTranslation();
          // const history = useHistory();
          // const goBack = () => {
          //           history.push(AppRoutePath.Checkout + CheckoutRoutePath.Delivery);
          // };
          // const submitForm = (values: PaymentFormValues) => {
          //           submitPaymentForm(values);
          //           history.push(AppRoutePath.Checkout + CheckoutRoutePath.Confirmation);
          // };

          return (
                    <>

                              <Formik
                                        validationSchema={paymentFormSchema(t)}
                                        initialValues={paymentForm}
                                        onSubmit={() => console.log("aaaa")}
                              >
                                        {({ errors, touched, values, handleChange, setFieldTouched }) => (
                                                  <Form>
                                                            <PaymentFormControl>
                                                                      <Button
                                                                                type="reset"
                                                                                variant="contained"
                                                                                endIcon={<ClearAll />}
                                                                                size="large"
                                                                                onClick={clearPaymentForm}
                                                                      >
                                                                                {t('checkout.clear')}
                                                                      </Button>
                                                            </PaymentFormControl>
                                                            <PaymentFormControl>
                                                                      <Typography variant="h5" component="legend" gutterBottom>
                                                                                {t('checkout.billingAddress')}
                                                                      </Typography>
                                                                      <Field
                                                                                component={CheckboxWithLabel}
                                                                                type="checkbox"
                                                                                name="sameAsShipping"
                                                                                Label={{ label: t('checkout.sameAsShipping') }}
                                                                      />
                                                                      {!values.sameAsShipping && (
                                                                                <AddressForm
                                                                                          formName="billingAddress"
                                                                                          errors={errors.billingAddress}
                                                                                          touched={touched.billingAddress}
                                                                                />
                                                                      )}
                                                            </PaymentFormControl>
                                                            <PaymentFormControl>
                                                                      <Typography variant="h5" component="legend" gutterBottom>
                                                                                {t('checkout.creditCard')}
                                                                      </Typography>
                                                                      <CreditCard
                                                                                formName="creditCard"
                                                                                errors={errors.creditCard}
                                                                                touched={touched.creditCard}
                                                                                values={values.creditCard}
                                                                                handleChange={handleChange}
                                                                      />
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
                                                                                endIcon={<ArrowBackIcon />}
                                                                                size="large"
                                                                                onClick={() => console.log("aaaa")}
                                                                      >
                                                                                {t('checkout.previous')}
                                                                      </Button>
                                                                      <Button
                                                                                type="submit"
                                                                                variant="contained"
                                                                                color="primary"
                                                                                endIcon={<ArrowRightIcon />}
                                                                                size="large"
                                                                      >
                                                                                {t('checkout.continue')}
                                                                      </Button>
                                                            </Box>
                                                  </Form>
                                        )}
                              </Formik>
                    </>
          );
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
