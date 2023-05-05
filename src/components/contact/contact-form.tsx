import theme, { Colors } from '@/styles/theme';
import { Container, Grid, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import { IContactForm, initialContactFormValues } from '@/interfaces/contact/contact.interface';
import { contactFormSchema } from '@/schemas/contact-form';
import { ContactButton, ContactFormBox, ContactTitle } from '@/styles/contact/contact';
import { SendContactEmail } from '@/services/email/send-email';

const ContactForm = () => {

          const { t } = useTranslation('common')


          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel isLoading={true} />,
                    ssr: false
          })

          const handleSubmit = (values: IContactForm) => {
                    console.log(values);

                    SendContactEmail({ email: values.email, name: values.name, message: values.message })
          }


          return (
                    <DynamicThemeProvider theme={theme}>
                              <Formik initialValues={initialContactFormValues} onSubmit={(values: IContactForm) => handleSubmit(values)} validationSchema={contactFormSchema(t)}>
                                        {
                                                  formik => (
                                                            <Form style={{
                                                                      width: '50%', display: 'flex', flexDirection: 'column',
                                                                      marginBottom: '20px', alignItems: 'center', background: Colors.dove_gray,
                                                                      borderRadius: '10px', gap: '10px', padding: '10px'
                                                            }}>
                                                                      <ContactTitle variant="h5" component="legend" gutterBottom>
                                                                                {t('contact.contact-form')}
                                                                      </ContactTitle>

                                                                      <TextField
                                                                                value={formik.values.name}
                                                                                label={t('contact.name')}
                                                                                name={'name'}
                                                                                variant="outlined"
                                                                                onChange={formik.handleChange('name')}
                                                                                error={formik.touched.name && !!formik.errors.name}
                                                                                helperText={formik.touched.name && formik.errors.name}
                                                                                fullWidth
                                                                      />

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

                                                                      <TextField
                                                                                value={formik.values.message}
                                                                                onChange={formik.handleChange('message')}
                                                                                label={t('contact.message')}
                                                                                name={'message'}
                                                                                variant="outlined"
                                                                                error={formik.touched?.message && !!formik.errors?.message}
                                                                                helperText={formik.touched?.message && formik.errors?.message}
                                                                                fullWidth
                                                                                multiline
                                                                                minRows={5}
                                                                      />
                                                                      <ContactButton type='submit'> {t('contact.send-message')}</ContactButton>
                                                            </Form>
                                                  )
                                        }
                              </Formik>

                    </DynamicThemeProvider >
          );
};

export default ContactForm

