import AppDrawer from '@/components/navbar/drawer';
import SearchBox from '@/components/search';
import { UIProvider } from '@/context/ui';
import theme from '@/styles/theme';
import { Container, Grid, Stack, TextField, ThemeProvider } from '@mui/material';
import { Field, FormikErrors, FormikTouched } from 'formik';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { AddressFormValues } from './address-form-values.interface';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

export interface AddressFormProps {
          formName: string
          errors?: FormikErrors<AddressFormValues>
          touched?: FormikTouched<AddressFormValues>
}

const AddressForm: FunctionComponent<AddressFormProps> = ({ formName = 'address', errors, touched }) => {

          const router = useRouter()
          const { t } = useTranslation('common')



          const onToggleLanguageClick = (newLocale: string) => {
                    const { pathname, asPath, query } = router
                    router.push({ pathname, query }, asPath, { locale: newLocale })
          }

          const changeTo = router.locale === 'en' ? 'sr' : 'en'

          return (
                    <ThemeProvider theme={theme}>
                              <Container
                                        disableGutters
                                        maxWidth="xl"
                                        sx={{
                                                  background: "#fff",
                                        }}
                              >
                                        <Stack>
                                                  <Grid container spacing={2}>
                                                            <Grid item xs={12} sm={6}>
                                                                      <TextField
                                                                                label={t('address.firstName')}
                                                                                name={`${formName}.firstName`}
                                                                                variant="outlined"
                                                                                error={touched?.firstName && !!errors?.firstName}
                                                                                helperText={touched?.firstName && errors?.firstName}
                                                                                fullWidth
                                                                      />
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                      <TextField
                                                                                label={t('address.lastName')}
                                                                                name={`${formName}.lastName`}
                                                                                variant="outlined"
                                                                                error={touched?.lastName && !!errors?.lastName}
                                                                                helperText={touched?.lastName && errors?.lastName}
                                                                                fullWidth
                                                                      />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                      <TextField
                                                                                label={t('address.addressLine1')}
                                                                                name={`${formName}.addressLine1`}
                                                                                variant="outlined"
                                                                                error={touched?.addressLine1 && !!errors?.addressLine1}
                                                                                helperText={touched?.addressLine1 && !!errors?.addressLine1}
                                                                                fullWidth
                                                                      />
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                      <TextField
                                                                                label={t('address.city')}
                                                                                name={`${formName}.city`}
                                                                                variant="outlined"
                                                                                error={touched?.city && !!errors?.city}
                                                                                helperText={touched?.city && errors?.city}
                                                                                fullWidth
                                                                      />
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                      <TextField
                                                                                label={t('address.provinceState')}
                                                                                name={`${formName}.provinceState`}
                                                                                variant="outlined"
                                                                                error={touched?.provinceState && !!errors?.provinceState}
                                                                                helperText={touched?.provinceState && errors?.provinceState}
                                                                                fullWidth
                                                                      />
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                      <TextField
                                                                                label={t('address.country')}
                                                                                name={`${formName}.country`}
                                                                                variant="outlined"
                                                                                error={touched?.country && !!errors?.country}
                                                                                helperText={touched?.country && errors?.country}
                                                                                fullWidth
                                                                      />
                                                            </Grid>
                                                            <Grid item xs={12} sm={6}>
                                                                      <TextField
                                                                                label={t('address.zipPostalCode')}
                                                                                name={`${formName}.zipPostalCode`}
                                                                                variant="outlined"
                                                                                error={touched?.zipPostalCode && !!errors?.zipPostalCode}
                                                                                helperText={touched?.zipPostalCode && errors?.zipPostalCode}
                                                                                fullWidth
                                                                      />
                                                            </Grid>
                                                  </Grid>
                                        </Stack>
                              </Container>
                    </ThemeProvider>

          );
};

export default AddressForm


