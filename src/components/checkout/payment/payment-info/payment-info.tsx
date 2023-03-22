import { initialUserFormValues, IUserFormValues } from '@/interfaces/checkout/user-form-values.interface';
import { userFormSchema } from '@/schema/user-form.schema';
import theme, { Colors } from '@/styles/theme';
import { Container, FormControlLabel, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import React, { ChangeEvent } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckoutNextPrevButton, ClearFormButton } from '@/styles/checkout/userinfo'
import { checkoutSlice } from '@/store/checkout/checkout.slice';

const PaymentInfo = () => {

          const { t } = useTranslation('common')
          const checkout = checkoutSlice

          const onSubmitForm = (values: IUserFormValues) => {
                    checkout.actions.submitUserForm(values)
          }

          return (
                    <ThemeProvider theme={theme}>
                              <Container
                                        disableGutters
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                                  display: 'flex',
                                                  flexDirection: 'column',
                                                  gap: '20px'
                                        }}
                              >

                                        <Formik initialValues={initialUserFormValues} onSubmit={(values: IUserFormValues) => onSubmitForm(values)} validationSchema={userFormSchema(t)} reset>
                                                  {
                                                            formik => (
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
                                                                                <Grid item xs={12} sm={6}>
                                                                                          <ClearFormButton endIcon={<DeleteIcon />} type='reset' onClick={() => formik.handleReset()}                                                                                          >
                                                                                                    {t('checkout.clearform')}
                                                                                          </ClearFormButton>
                                                                                </Grid>
                                                                      </Grid>
                                                            )
                                                  }
                                        </Formik>

                              </Container>
                    </ThemeProvider >
          );
}

export default PaymentInfo