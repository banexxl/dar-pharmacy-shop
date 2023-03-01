import theme, { Colors } from '@/styles/theme';
import { Container, FormControlLabel, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers, FormikValues, useFormik } from 'formik';
import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { UserFormProps, UserFormValues } from '../../../interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schema/user-form.schema';
import { initialUserFormValues } from './userinfo-form-values.initial';
import { CheckoutNextPrevButton, ClearFormButton, ShouldCreateAccountCheckBox } from '@/styles/checkout';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import EmailAddon from './email-addon';

const AddressForm: FunctionComponent<UserFormProps> = () => {

          const { t } = useTranslation('common')

          const onSubmitHandler = () => {
                    console.log("Form submitted");
          }

          return (
                    <ThemeProvider theme={theme}>
                              <Container
                                        disableGutters
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Formik initialValues={initialUserFormValues} onSubmit={() => onSubmitHandler()} validationSchema={userFormSchema(t)} reset>
                                                  {
                                                            formik => (
                                                                      <Grid container spacing={2}>
                                                                                <Grid item xs={12} sm={6}>
                                                                                          <TextField
                                                                                                    value={formik.values.firstName}
                                                                                                    label={t('address.firstName')}
                                                                                                    name={'address.firstName'}
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
                                                                                                    label={t('address.lastName')}
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
                                                                                                    label={t('address.phoneNumber')}
                                                                                                    name={'phoneNumber'}
                                                                                                    variant="outlined"
                                                                                                    error={formik.touched?.phoneNumber && !!formik.errors?.phoneNumber}
                                                                                                    helperText={formik.touched?.phoneNumber && !!formik.errors?.phoneNumber}
                                                                                                    fullWidth
                                                                                          />
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                          <TextField
                                                                                                    value={formik.values.streetAddress}
                                                                                                    onChange={formik.handleChange('streetAddress')}
                                                                                                    label={t('address.streetAddress')}
                                                                                                    name={'streetAddress'}
                                                                                                    variant="outlined"
                                                                                                    error={formik.touched?.streetAddress && !!formik.errors?.streetAddress}
                                                                                                    helperText={formik.touched?.streetAddress && !!formik.errors?.streetAddress}
                                                                                                    fullWidth
                                                                                          />
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                          <TextField
                                                                                                    value={formik.values.city}
                                                                                                    onChange={formik.handleChange('city')}
                                                                                                    label={t('address.city')}
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
                                                                                                    label={t('address.provinceState')}
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
                                                                                                    label={t('address.country')}
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
                                                                                                    label={t('address.zipPostalCode')}
                                                                                                    name={'zipPostalCode'}
                                                                                                    variant="outlined"
                                                                                                    error={formik.touched?.zipPostalCode && !!formik.errors?.zipPostalCode}
                                                                                                    helperText={formik.touched?.zipPostalCode && formik.errors?.zipPostalCode}
                                                                                                    fullWidth
                                                                                          />
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                          <EmailAddon />
                                                                                </Grid>
                                                                                <Grid item xs={12} sm={6}>
                                                                                          <ClearFormButton endIcon={<DeleteIcon />} type='reset' onClick={() => formik.handleReset()}>
                                                                                                    {t('checkout.clearform')}
                                                                                          </ClearFormButton>
                                                                                          <CheckoutNextPrevButton type='submit' sx={{ maxWidth: '100px' }}
                                                                                                    endIcon={<NavigateNextIcon />}
                                                                                                    onClick={() => formik.handleSubmit()}
                                                                                                    disabled={!!formik.errors}
                                                                                          >
                                                                                                    {t('checkout.nextbutton')}
                                                                                          </CheckoutNextPrevButton>
                                                                                </Grid>
                                                                      </Grid>
                                                            )
                                                  }
                                        </Formik>

                              </Container>
                    </ThemeProvider >

          );
};

export default AddressForm


