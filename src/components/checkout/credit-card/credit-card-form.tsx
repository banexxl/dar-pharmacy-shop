import { Container, Grid, TextField, Typography } from '@mui/material';
import { Field, Form, Formik, FormikErrors, FormikTouched } from 'formik';
import React, { ChangeEvent, FunctionComponent } from 'react';
import { useTranslation } from 'next-i18next';
import InputMask from 'react-input-mask';
import { ICreditCardForm, ICreditCardFormProps, initialCreditCardValues } from '../../../interfaces/checkout/credit-card-form-values.interface';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import theme from '@/styles/theme';
import { creditCardSchema } from '@/schemas/credit-card-form.schema';
import { useDispatch } from 'react-redux';
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


export const CreditCard: FunctionComponent<ICreditCardFormProps> = (props: ICreditCardFormProps) => {

          const { t } = useTranslation();
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          const dispatch = useDispatch()

          const handleSubmit = (values: ICreditCardForm) => {

                    console.log("usao u handle next, vrednosti su: ", values);

                    //dispatch(submitPaymentForm(values))

                    props.tabIndex === 2 ? props.setTab?.(props.tabIndex + 1) : null
          };

          const handleBack = () => {
                    props.tabIndex === 2 ? props.setTab?.(props.tabIndex - 1) : null
          };

          return (
                    <DynamicThemeProvider theme={theme}>
                              <LoadingWheel isLoading={false} />
                              <Container
                                        disableGutters
                                        maxWidth="md"
                                        sx={{
                                                  background: "#fff",
                                                  display: 'flex',
                                                  flexDirection: 'column',
                                                  gap: '20px'
                                        }}
                              >
                                        <Formik validationSchema={creditCardSchema(t)} onSubmit={(values: ICreditCardForm) => handleSubmit(values)} initialValues={initialCreditCardValues} >
                                                  {
                                                            formik => (
                                                                      <Form>
                                                                                <Typography variant="h5" component="legend" gutterBottom>
                                                                                          {t('credit-card.credit-card')}
                                                                                </Typography>


                                                                                <Grid container spacing={2}>
                                                                                          <Grid item xs={12} sm={12}>
                                                                                                    <TextField
                                                                                                              label={t('credit-card.card-number')}
                                                                                                              variant="outlined"
                                                                                                              error={formik.touched?.cardNumber && !!formik.errors?.cardNumber}
                                                                                                              helperText={formik.touched?.cardNumber && formik.errors?.cardNumber}
                                                                                                              fullWidth
                                                                                                    >
                                                                                                              <InputMask
                                                                                                                        mask="9999-9999-9999-9999"
                                                                                                                        maskPlaceholder="####-####-####-####"
                                                                                                                        name={`cardNumber`}
                                                                                                                        value={formik.values.cardNumber}
                                                                                                                        onChange={formik.handleChange}
                                                                                                              />
                                                                                                    </TextField>

                                                                                          </Grid>
                                                                                          <Grid item xs={12} sm={6}>
                                                                                                    <TextField
                                                                                                              label={t('credit-card.expiry-date')}
                                                                                                              variant="outlined"
                                                                                                              error={formik.touched?.expiryDate && !!formik.errors?.expiryDate}
                                                                                                              helperText={formik.touched?.expiryDate && formik.errors?.expiryDate}
                                                                                                              fullWidth
                                                                                                    >
                                                                                                              <InputMask
                                                                                                                        mask="99/9999"
                                                                                                                        maskPlaceholder="mm/yyyy"
                                                                                                                        name={`expiryDate`}
                                                                                                                        value={formik.values.expiryDate}
                                                                                                                        onChange={formik.handleChange}
                                                                                                              />
                                                                                                    </TextField>
                                                                                          </Grid>
                                                                                          <Grid item xs={12} sm={6}>
                                                                                                    <TextField
                                                                                                              label={t('credit-card.security-code')}
                                                                                                              variant="outlined"
                                                                                                              error={formik.touched?.securityCode && !!formik.errors?.securityCode}
                                                                                                              helperText={formik.touched?.securityCode && formik.errors?.securityCode}
                                                                                                              fullWidth
                                                                                                    >
                                                                                                              <InputMask
                                                                                                                        mask="999"
                                                                                                                        name={`securityCode`}
                                                                                                                        value={formik.values.securityCode}
                                                                                                                        onChange={formik.handleChange}
                                                                                                              />
                                                                                                    </TextField>
                                                                                          </Grid>
                                                                                </Grid>
                                                                                < Grid item xs={12} sm={6} sx={{ marginTop: '20px' }}>
                                                                                          <CheckoutNextPrevButton sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                                                                                    {t('checkout.previousbutton')}
                                                                                          </CheckoutNextPrevButton>
                                                                                          <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />}>
                                                                                                    {t('checkout.nextbutton')}
                                                                                          </CheckoutNextPrevButton>
                                                                                </Grid>
                                                                      </Form>
                                                            )
                                                  }
                                        </Formik>
                              </Container>
                    </DynamicThemeProvider >
          );
};
