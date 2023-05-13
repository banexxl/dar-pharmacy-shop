import { Container, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { initialPaymentFormValues, IPaymentInfoForm, IPaymentInfoFormProps } from '../../../interfaces/checkout/payment-info-form-values.interface';
import { userFormSchema } from '../../../schemas/user-form.schema';
import { CheckoutNextPrevButton, ClearFormButton } from '@/styles/checkout/userinfo'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import theme from '@/styles/theme';
import { isBillingAndShippingCheckbox } from '@/styles/checkout/payment';
import { clearPaymentInfoForm, submitPaymentInfoForm } from '@/store/checkout/payment-info-form.slice';

export const Payment: FunctionComponent<IPaymentInfoFormProps> = (props: IPaymentInfoFormProps) => {

          const { t } = useTranslation();
          const dispatch = useDispatch()



          const [sameAsShippingCB, setSameAsShippingCB] = useState(false)

          const handleSubmit = (values: IPaymentInfoForm) => {

                    dispatch(submitPaymentInfoForm(values))

                    props.tabIndex === 1 ? props.setTab?.(props.tabIndex + 1) : null
          };

          const handleNext = () => {
                    props.tabIndex === 1 ? props.setTab?.(props.tabIndex + 1) : null
          };

          const handleBack = () => {
                    props.tabIndex === 1 ? props.setTab?.(props.tabIndex - 1) : null
          };

          const handleSameAsShippingCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
                    setSameAsShippingCB(event.target.checked)
          }

          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

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
                                        <Formik validationSchema={userFormSchema(t)} onSubmit={(values: IPaymentInfoForm) => handleSubmit(values)} initialValues={initialPaymentFormValues} >
                                                  {
                                                            formik => (
                                                                      <Form>
                                                                                <Typography variant="h5" component="legend" gutterBottom>
                                                                                          {t('checkout.billingAddress')}
                                                                                </Typography>
                                                                                <Field
                                                                                          checked={sameAsShippingCB}
                                                                                          component={isBillingAndShippingCheckbox}
                                                                                          type="checkbox"
                                                                                          name="sameAsShipping"
                                                                                          Label={{ label: t('checkout.sameAsShipping') }}
                                                                                          onChange={handleSameAsShippingCheckBoxChange}
                                                                                />

                                                                                {
                                                                                          sameAsShippingCB && (
                                                                                                    <Grid item xs={12} sm={6}>
                                                                                                              <CheckoutNextPrevButton sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                                                                                                        {t('checkout.previousbutton')}
                                                                                                              </CheckoutNextPrevButton>
                                                                                                              <CheckoutNextPrevButton onClick={() => handleNext()} type='submit' sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />}>
                                                                                                                        {t('checkout.nextbutton')}
                                                                                                              </CheckoutNextPrevButton>
                                                                                                    </Grid>
                                                                                          )
                                                                                }

                                                                                {!sameAsShippingCB && (
                                                                                          <Grid container spacing={2}>
                                                                                                    <Grid item xs={12} sm={6}>
                                                                                                              <TextField
                                                                                                                        value={formik.values.firstName}
                                                                                                                        label={t('userinfo.firstName')}
                                                                                                                        name={'firstName'}
                                                                                                                        variant="outlined"
                                                                                                                        onChange={formik.handleChange('firstName')}
                                                                                                                        error={formik.touched.firstName && !!formik.errors.firstName}
                                                                                                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                                                                                                        fullWidth
                                                                                                              />
                                                                                                    </Grid>
                                                                                                    <Grid item xs={12} sm={6}>
                                                                                                              <TextField
                                                                                                                        value={formik.values.lastName}
                                                                                                                        onChange={formik.handleChange('lastName')}
                                                                                                                        label={t('userinfo.lastName')}
                                                                                                                        name={'lastName'}
                                                                                                                        variant="outlined"
                                                                                                                        error={formik.touched?.lastName && !!formik.errors?.lastName}
                                                                                                                        helperText={formik.touched?.lastName && formik.errors?.lastName}
                                                                                                                        fullWidth
                                                                                                              />
                                                                                                    </Grid>
                                                                                                    <Grid item xs={12} sm={6}>
                                                                                                              <TextField
                                                                                                                        value={formik.values.phoneNumber}
                                                                                                                        onChange={formik.handleChange('phoneNumber')}
                                                                                                                        label={t('userinfo.phoneNumber')}
                                                                                                                        name={'phoneNumber'}
                                                                                                                        variant="outlined"
                                                                                                                        error={formik.touched?.phoneNumber && !!formik.errors?.phoneNumber}
                                                                                                                        helperText={formik.touched?.phoneNumber && formik.errors?.phoneNumber}
                                                                                                                        fullWidth
                                                                                                              />
                                                                                                    </Grid>
                                                                                                    <Grid item xs={12} sm={6}>
                                                                                                              <TextField
                                                                                                                        value={formik.values.streetAddress}
                                                                                                                        onChange={formik.handleChange('streetAddress')}
                                                                                                                        label={t('userinfo.streetAddress')}
                                                                                                                        name={'streetAddress'}
                                                                                                                        variant="outlined"
                                                                                                                        error={formik.touched?.streetAddress && !!formik.errors?.streetAddress}
                                                                                                                        helperText={formik.touched?.streetAddress && formik.errors?.streetAddress}
                                                                                                                        fullWidth
                                                                                                              />
                                                                                                    </Grid>
                                                                                                    <Grid item xs={12} sm={6}>
                                                                                                              <TextField
                                                                                                                        value={formik.values.city}
                                                                                                                        onChange={formik.handleChange('city')}
                                                                                                                        label={t('userinfo.city')}
                                                                                                                        name={'city'}
                                                                                                                        variant="outlined"
                                                                                                                        error={formik.touched?.city && !!formik.errors?.city}
                                                                                                                        helperText={formik.touched?.city && formik.errors?.city}
                                                                                                                        fullWidth
                                                                                                              />
                                                                                                    </Grid>
                                                                                                    <Grid item xs={12} sm={6}>
                                                                                                              <TextField
                                                                                                                        value={formik.values.provinceState}
                                                                                                                        onChange={formik.handleChange('provinceState')}
                                                                                                                        label={t('userinfo.provinceState')}
                                                                                                                        name={'provinceState'}
                                                                                                                        variant="outlined"
                                                                                                                        error={formik.touched?.provinceState && !!formik.errors?.provinceState}
                                                                                                                        helperText={formik.touched?.provinceState && formik.errors?.provinceState}
                                                                                                                        fullWidth
                                                                                                              />
                                                                                                    </Grid>
                                                                                                    <Grid item xs={12} sm={6}>
                                                                                                              <TextField
                                                                                                                        value={formik.values.country}
                                                                                                                        onChange={formik.handleChange('country')}
                                                                                                                        label={t('userinfo.country')}
                                                                                                                        name={'country'}
                                                                                                                        variant="outlined"
                                                                                                                        error={formik.touched?.country && !!formik.errors?.country}
                                                                                                                        helperText={formik.touched?.country && formik.errors?.country}
                                                                                                                        fullWidth
                                                                                                              />
                                                                                                    </Grid>
                                                                                                    <Grid item xs={12} sm={6}>
                                                                                                              <TextField
                                                                                                                        value={formik.values.zipPostalCode}
                                                                                                                        onChange={formik.handleChange('zipPostalCode')}
                                                                                                                        label={t('userinfo.zipPostalCode')}
                                                                                                                        name={'zipPostalCode'}
                                                                                                                        variant="outlined"
                                                                                                                        error={formik.touched?.zipPostalCode && !!formik.errors?.zipPostalCode}
                                                                                                                        helperText={formik.touched?.zipPostalCode && formik.errors?.zipPostalCode}
                                                                                                                        fullWidth
                                                                                                              />
                                                                                                    </Grid>
                                                                                                    < Grid item xs={12} sm={6}>
                                                                                                              <ClearFormButton endIcon={<DeleteIcon />} type='reset' onClick={() => { formik.handleReset(); dispatch(clearPaymentInfoForm()) }}                                                                                          >
                                                                                                                        {t('checkout.clearform')}
                                                                                                              </ClearFormButton>
                                                                                                              <CheckoutNextPrevButton sx={{ maxWidth: '100px' }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                                                                                                                        {t('checkout.previousbutton')}
                                                                                                              </CheckoutNextPrevButton>
                                                                                                              <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />}>
                                                                                                                        {t('checkout.nextbutton')}
                                                                                                              </CheckoutNextPrevButton>
                                                                                                    </Grid>
                                                                                          </Grid>
                                                                                )}

                                                                      </Form>
                                                            )
                                                  }
                                        </Formik>
                              </Container>

                    </DynamicThemeProvider >
          );
};

export default Payment
