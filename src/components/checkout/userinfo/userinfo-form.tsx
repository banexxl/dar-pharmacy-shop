import theme, { Colors } from '@/styles/theme';
import { Container, FormControlLabel, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { UserFormProps, UserFormValues } from '../../../interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schema/user-form.schema';
import { initialUserFormValues } from './userinfo-form-values.initial';
import { CheckoutNextPrevButton, ShouldCreateAccountCheckBox } from '@/styles/checkout';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const AddressForm: FunctionComponent<UserFormProps> = () => {

          const { t } = useTranslation('common')
          const [shouldCreateAccount, setShouldCreateAccount] = useState(false)

          const onShouldCreateAccount = (currentState: boolean) => {
                    setShouldCreateAccount(currentState)
          }


          const onSubmit = () => {
                    console.log("Form submitted");
          }

          const {
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handleBlur,
                    handleChange,
                    handleSubmit,
          }: any = useFormik({
                    initialValues: initialUserFormValues,
                    validationSchema: userFormSchema(t),
                    onSubmit,
          });


          return (
                    <ThemeProvider theme={theme}>
                              <Container
                                        disableGutters
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Formik
                                                  initialValues={initialUserFormValues}
                                                  validationSchema={userFormSchema(t)}
                                                  onSubmit={values => {
                                                            // same shape as initial values
                                                            console.log(values);
                                                  }}
                                        >
                                                  <Form>
                                                            <Grid container spacing={2}>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.firstName')}
                                                                                          name={'firstname'}
                                                                                          variant="outlined"
                                                                                          error={touched.firstName && Boolean(errors.firstName)}
                                                                                          helperText={touched.firstName && errors.firstName}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.lastName')}
                                                                                          name={'lastName'}
                                                                                          variant="outlined"
                                                                                          error={touched?.lastName && !!errors?.lastName}
                                                                                          helperText={touched?.lastName && errors?.lastName}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.phoneNumber')}
                                                                                          name={'phonenumber'}
                                                                                          variant="outlined"
                                                                                          error={touched?.phoneNumber && !!errors?.phoneNumber}
                                                                                          helperText={touched?.phoneNumber && !!errors?.phoneNumber}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.streetAddress')}
                                                                                          name={'streetAddress'}
                                                                                          variant="outlined"
                                                                                          error={touched?.streetAddress && !!errors?.streetAddress}
                                                                                          helperText={touched?.streetAddress && !!errors?.streetAddress}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.city')}
                                                                                          name={'city'}
                                                                                          variant="outlined"
                                                                                          error={touched?.city && !!errors?.city}
                                                                                          helperText={touched?.city && errors?.city}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.provinceState')}
                                                                                          name={'provinceState'}
                                                                                          variant="outlined"
                                                                                          error={touched?.provinceState && !!errors?.provinceState}
                                                                                          helperText={touched?.provinceState && errors?.provinceState}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.country')}
                                                                                          name={'country'}
                                                                                          variant="outlined"
                                                                                          error={touched?.country && !!errors?.country}
                                                                                          helperText={touched?.country && errors?.country}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                          label={t('address.zipPostalCode')}
                                                                                          name={'zipPostalCode'}
                                                                                          variant="outlined"
                                                                                          error={touched?.zipPostalCode && !!errors?.zipPostalCode}
                                                                                          helperText={touched?.zipPostalCode && errors?.zipPostalCode}
                                                                                          fullWidth
                                                                                />
                                                                      </Grid>
                                                                      <Grid item xs={12} sm={6}>
                                                                                <FormControlLabel control={
                                                                                          <ShouldCreateAccountCheckBox onChange={(e: ChangeEvent<HTMLInputElement>) => { onShouldCreateAccount(e.target.checked) }} />}
                                                                                          label={<Typography sx={{
                                                                                                    fontFamily: 'inherit', color: Colors.secondary
                                                                                          }}>{t('checkout.shouldcreateaccount')}</Typography>} />
                                                                                <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }} endIcon={<NavigateNextIcon />} onClick={() => handleSubmit()}>
                                                                                          {t('checkout.nextbutton')}
                                                                                </CheckoutNextPrevButton>
                                                                      </Grid>
                                                                      {
                                                                                shouldCreateAccount ?
                                                                                          <Grid item xs={12} sm={6}>
                                                                                                    <TextField
                                                                                                              label={t('signup.email')}
                                                                                                              name={'email'}
                                                                                                              variant="outlined"
                                                                                                              error={touched?.email && !!errors?.email}
                                                                                                              helperText={touched?.email && errors?.email}
                                                                                                              fullWidth
                                                                                                    />
                                                                                          </Grid>
                                                                                          : null
                                                                      }
                                                            </Grid>
                                                  </Form>
                                        </Formik>
                              </Container>
                    </ThemeProvider>

          );
};

export default AddressForm


