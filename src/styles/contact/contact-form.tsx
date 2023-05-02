import theme from '@/styles/theme';
import { Container, Grid, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import { IContactForm, initialContactFormValues } from '@/interfaces/contact/contact.interface';
import { contactFormSchema } from '@/schemas/contact-form';

const ContactForm: FunctionComponent<IContactForm> = () => {

          const { t } = useTranslation('common')


          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          const handleSubmit = (values: IContactForm) => {
                    console.log("aaaaaaaaa");

          }

          return (
                    <DynamicThemeProvider theme={theme}>
                              <Container disableGutters maxWidth="md" sx={{ background: "#fff", display: 'flex', flexDirection: 'column', gap: '20px' }}>

                                        <Formik initialValues={initialContactFormValues} onSubmit={(values: IContactForm) => handleSubmit(values)} validationSchema={contactFormSchema(t)}>
                                                  {
                                                            formik => (
                                                                      <Form>
                                                                                <Typography variant="h5" component="legend" gutterBottom>
                                                                                          {t('contact.contact-form')}
                                                                                </Typography>
                                                                                <Grid container spacing={2}>
                                                                                          <Grid item xs={12} sm={6}>
                                                                                                    <TextField
                                                                                                              value={formik.values.firstName}
                                                                                                              label={t('contact.firstName')}
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
                                                                                                              value={formik.values.email}
                                                                                                              onChange={formik.handleChange('email')}
                                                                                                              label={t('contact.email')}
                                                                                                              name={'email'}
                                                                                                              variant="outlined"
                                                                                                              error={formik.touched?.email && !!formik.errors?.email}
                                                                                                              helperText={formik.touched?.email && formik.errors?.email}
                                                                                                              fullWidth
                                                                                                    />
                                                                                          </Grid>
                                                                                          <Grid item xs={12} sm={6}>
                                                                                                    <TextField
                                                                                                              value={formik.values.contactMessage}
                                                                                                              onChange={formik.handleChange('contactMessage')}
                                                                                                              label={t('contact.contactMessage')}
                                                                                                              name={'contactMessage'}
                                                                                                              variant="outlined"
                                                                                                              error={formik.touched?.contactMessage && !!formik.errors?.contactMessage}
                                                                                                              helperText={formik.touched?.contactMessage && formik.errors?.contactMessage}
                                                                                                              fullWidth
                                                                                                    />
                                                                                          </Grid>
                                                                                </Grid>
                                                                      </Form>
                                                            )
                                                  }
                                        </Formik>
                              </Container>
                    </DynamicThemeProvider >
          );
};

export default ContactForm

