import { Container, Grid, Input, InputAdornment, TextField, Typography } from '@mui/material';
import { Field, Form, Formik, FormikErrors, FormikTouched } from 'formik';
import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import dayjs, { Dayjs } from 'dayjs';
import { ICreditCardForm, ICreditCardFormProps, initialCreditCardValues } from '../../../interfaces/checkout/credit-card-form-values.interface';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import theme, { Colors } from '@/styles/theme';
import { creditCardSchema } from '@/schemas/credit-card-form.schema';
import { useDispatch } from 'react-redux';
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers/';
import { FieldChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/useField/useField.types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const CreditCard: FunctionComponent<ICreditCardFormProps> = (props: ICreditCardFormProps) => {

          const { t } = useTranslation();
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })
          const dispatch = useDispatch()

          const handleSubmit = (values: ICreditCardForm) => {

                    console.log(values)
                    console.log("usao u handle next, vrednosti su: ", values);


                    //dispatch(submitPaymentForm(values))

                    props.tabIndex === 2 ? props.setTab?.(props.tabIndex + 1) : null
          };

          const handleBack = () => {
                    props.tabIndex === 2 ? props.setTab?.(props.tabIndex - 1) : null
          };


          return (
                    <DynamicThemeProvider theme={theme}>

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
                                        <Formik initialValues={initialCreditCardValues} onSubmit={(values: ICreditCardForm) => handleSubmit(values)} validationSchema={creditCardSchema(t)}>
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
                                                                                                              value={formik.values.cardNumber}
                                                                                                              error={formik.touched?.cardNumber && !!formik.errors?.cardNumber}
                                                                                                              helperText={formik.touched?.cardNumber && formik.errors?.cardNumber}
                                                                                                              onChange={formik.handleChange('cardNumber')}
                                                                                                              fullWidth
                                                                                                              inputProps={{
                                                                                                                        maxLength: 16
                                                                                                              }}
                                                                                                              type='number'
                                                                                                              required
                                                                                                    />
                                                                                          </Grid>
                                                                                          <Grid item xs={12} sm={6}>
                                                                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                                                              <MobileDatePicker
                                                                                                                        views={['year', 'month']}
                                                                                                                        label={t('credit-card.expiry-date')}
                                                                                                                        disablePast
                                                                                                                        onAccept={(date: ChangeEvent<HTMLInputElement> | null) => formik.setFieldValue('expirationDate', date)}
                                                                                                                        format='MM/YY'
                                                                                                                        slotProps={{
                                                                                                                                  layout: {
                                                                                                                                            sx: {
                                                                                                                                                      backgroundColor: Colors.dove_gray,

                                                                                                                                            }
                                                                                                                                  }
                                                                                                                        }}
                                                                                                              />
                                                                                                    </LocalizationProvider>
                                                                                          </Grid>
                                                                                          <Grid item xs={12} sm={6}>
                                                                                                    <TextField
                                                                                                              label={t('credit-card.security-code')}
                                                                                                              variant="outlined"
                                                                                                              name="securityCode"
                                                                                                              value={formik.values.securityCode}
                                                                                                              error={formik.touched?.securityCode && !!formik.errors?.securityCode}
                                                                                                              helperText={formik.touched?.securityCode && formik.errors?.securityCode}
                                                                                                              fullWidth
                                                                                                              maxRows={1}
                                                                                                              type='password'
                                                                                                              inputProps={{
                                                                                                                        maxLength: 4
                                                                                                              }}
                                                                                                              onChange={formik.handleChange('securityCode')}
                                                                                                              required
                                                                                                    />
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
