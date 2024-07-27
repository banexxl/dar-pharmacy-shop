import theme, { Colors } from '@/styles/theme';
import { Button, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import { IContactForm, initialContactFormValues } from '@/interfaces/contact/contact.interface';
import { contactFormSchema } from '@/schemas/contact-form';
import { ContactText, ContactTitle } from '@/styles/contact/contact';
import { SendContactEmail } from '@/services/email/send-email';
import Link from 'next/link';

const ContactForm = () => {

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     const handleSubmit = (values: IContactForm) => {
          SendContactEmail({ email: values.email, name: values.name, message: values.message })
     }


     return (
          <DynamicThemeProvider theme={theme}>
               <Formik initialValues={initialContactFormValues} onSubmit={(values: IContactForm) => handleSubmit(values)} validationSchema={contactFormSchema}>
                    {
                         formik => (
                              <Form style={{
                                   width: '80%', display: 'flex', flexDirection: 'column',
                                   marginBottom: '20px', alignItems: 'center', background: Colors.dove_gray,
                                   borderRadius: '10px', gap: '10px', padding: '10px',
                              }}>
                                   <ContactTitle variant="h5" component="legend" gutterBottom>
                                        Kontakt forma
                                   </ContactTitle>

                                   <ContactText theme={theme}>
                                        Ako ste u potrazi za <Typography fontWeight={'bold'} color={Colors.primary.main}>deficitarnim</Typography> lekovima, možemo vam pomoći.<br /><br />
                                        Takođe smo tu da rešimo bilo kakve nedoumice vezane za naše proizvode.<br /><br />
                                        Slobodno nas kontaktirajte!
                                   </ContactText>
                                   <TextField
                                        value={formik.values.name}
                                        label={"Ime"}
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
                                        label={"Email"}
                                        name={'email'}
                                        variant="outlined"
                                        error={formik.touched?.email && !!formik.errors?.email}
                                        helperText={formik.touched?.email && formik.errors?.email}
                                        fullWidth
                                   />

                                   <TextField
                                        value={formik.values.message}
                                        onChange={formik.handleChange('message')}
                                        label={"Poruka"}
                                        name={'message'}
                                        variant="outlined"
                                        error={formik.touched?.message && !!formik.errors?.message}
                                        helperText={formik.touched?.message && formik.errors?.message}
                                        fullWidth
                                        multiline
                                        minRows={5}
                                   />
                                   <Button type='submit' sx={{ color: Colors.primary.lighter }}>
                                        Pošalji poruku
                                   </Button>
                              </Form>
                         )
                    }
               </Formik>

          </DynamicThemeProvider >
     );
};

export default ContactForm

