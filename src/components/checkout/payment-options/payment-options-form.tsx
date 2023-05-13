import { Box, Container, FormControlLabel, FormLabel, Grid, Input, InputAdornment, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Form, Formik, FormikErrors, FormikTouched } from 'formik';
import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { IPaymentOptionsForm, IPaymentOptionsFormProps } from '../../../interfaces/checkout/payment-options-form-values.interface';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import theme, { Colors } from '@/styles/theme';
import { creditCardSchema } from '@/schemas/payment-form.schema';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutNextPrevButton } from '@/styles/checkout/userinfo';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers/';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { submitPaymentOptionsForm } from '@/store/checkout/payment-options-form.slice';

export const CreditCard: FunctionComponent<IPaymentOptionsFormProps> = (props: IPaymentOptionsFormProps) => {

          const { t } = useTranslation();
          const [paymentOption, setPaymentOption] = useState('onDelivery')
          const dispatch = useDispatch()
          const paymentOptionsFormSelector = useSelector((state: any) => ({ ...state.persistReduce.paymentOptionsFormSliceReducer }))
          const initialPaymentOptionsValues: IPaymentOptionsForm = {
                    cardNumber: paymentOptionsFormSelector.cardNumber,
                    expirationDate: paymentOptionsFormSelector.expirationDate,
                    securityCode: paymentOptionsFormSelector.securityCode
          };
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          const handleSubmit = (values: IPaymentOptionsForm) => {
                    dispatch(submitPaymentOptionsForm(values))
                    props.tabIndex === 2 ? props.setTab?.(props.tabIndex + 1) : null
          };

          const handleBack = () => {
                    props.tabIndex === 2 ? props.setTab?.(props.tabIndex - 1) : null
          };

          const handleNext = () => {
                    props.tabIndex === 2 ? props.setTab?.(props.tabIndex + 1) : null
          };


          return (
                    <DynamicThemeProvider theme={theme}>

                              <Container disableGutters maxWidth="md" sx={{
                                        background: "#fff", display: 'flex', flexDirection: 'column', gap: '20px'
                              }}
                              >
                                        <Typography variant="h5" component="legend">{t('checkout.payment-options')}</Typography>
                                        <RadioGroup
                                                  aria-labelledby="demo-controlled-radio-buttons-group"
                                                  name="controlled-radio-buttons-group"
                                                  value={paymentOption}
                                                  onChange={(e: any) => setPaymentOption(e.target.value)}
                                                  sx={{ display: 'flex', flexDirection: 'row' }}
                                        >
                                                  <FormControlLabel value="onDelivery" defaultChecked control={<Radio />} label={t('checkout.on-delivery-payment')} />
                                                  <FormControlLabel value="cardPayment" control={<Radio />} label={t('checkout.card-payment')} />
                                        </RadioGroup>
                                        {
                                                  paymentOption === 'cardPayment' ?
                                                            <Formik initialValues={initialPaymentOptionsValues} onSubmit={(values: IPaymentOptionsForm) => handleSubmit(values)} validationSchema={creditCardSchema(t)}>
                                                                      {
                                                                                formik => (
                                                                                          <Form>
                                                                                                    <Typography variant="h6" component="legend" gutterBottom>
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
                                                                                                              < Grid item xs={12} sm={6} sx={{ marginTop: '20px' }}>
                                                                                                                        <CheckoutNextPrevButton sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                                                                                                                  {t('checkout.previousbutton')}
                                                                                                                        </CheckoutNextPrevButton>
                                                                                                                        <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />}>
                                                                                                                                  {t('checkout.nextbutton')}
                                                                                                                        </CheckoutNextPrevButton>
                                                                                                              </Grid>
                                                                                                    </Grid>
                                                                                          </Form>
                                                                                )
                                                                      }
                                                            </Formik>
                                                            :
                                                            < Grid item xs={12} sm={6} sx={{ marginTop: '20px' }}>
                                                                      <CheckoutNextPrevButton sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                                                                {t('checkout.previousbutton')}
                                                                      </CheckoutNextPrevButton>
                                                                      <CheckoutNextPrevButton onClick={() => handleNext()} sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />}>
                                                                                {t('checkout.nextbutton')}
                                                                      </CheckoutNextPrevButton>
                                                            </Grid>
                                        }

                              </Container>
                    </DynamicThemeProvider >
          );
};
