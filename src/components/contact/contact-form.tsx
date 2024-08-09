import theme, { Colors } from '@/styles/theme';
import { Box, Button, Checkbox, FormControlLabel, FormHelperText, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Form, Formik, useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import { IContactForm, initialContactFormValues } from '@/interfaces/contact/contact.interface';
import { contactFormSchema } from '@/schemas/contact-form';
import { ContactText, ContactTitle } from '@/styles/contact/contact';
import { SendContactEmail } from '@/services/email/send-email';
import Link from 'next/link';
import { ReCaptcha, ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";

const ContactForm = () => {

     const { executeRecaptcha, loaded } = useReCaptcha();
     const [token, setToken] = useState<string>('');
     const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     useEffect(() => {
          if (loaded) {
               const generateToken = async () => {
                    console.log("Generating token");
                    const newToken = await executeRecaptcha("form_submit");
                    setToken(newToken);
               };
               generateToken();
          }
     }, [loaded, executeRecaptcha]);


     const handleSubmit = async (values: IContactForm) => {
          SendContactEmail({
               email: values.email,
               name: values.name,
               message: values.message,
               dataProcessConsent: values.dataProcessConsent,
               questionSubmissionConsent: values.questionSubmissionConsent,
               token: token
          })
     }



     return (
          <DynamicThemeProvider theme={theme}>
               {/* <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}> */}
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



                                   <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <FormControlLabel
                                             sx={{ marginBottom: '10px', width: isScreenToMedium ? '100%' : '50%' }}
                                             control={
                                                  <Checkbox
                                                       checked={formik.values.dataProcessConsent}
                                                       onChange={formik.handleChange('dataProcessConsent')}
                                                       name={'dataProcessConsent'}
                                                       color="primary"
                                                  />
                                             }
                                             label={<Typography sx={{ display: 'inline', textAlign: 'justify' }}>
                                                  Saglasan/saglasna sam sa obradom mojih podataka o ličnosti navedenih za potrebe savetovanja, za vreme potrebno da se pitanje obradi i da se na njega odgovori. Više informacija možete naći na linku: <br />
                                                  <Typography sx={{ color: Colors.link, display: 'inline', textAlign: 'justify' }}>
                                                       <Link href="/informacije/politika-privatnosti">
                                                            Politika privatnosti.
                                                       </Link>
                                                  </Typography>
                                             </Typography>}
                                        />
                                        {formik.touched.dataProcessConsent && formik.errors.dataProcessConsent && (
                                             <FormHelperText sx={{ marginBottom: '30px' }} error>{formik.errors.dataProcessConsent}</FormHelperText>
                                        )}

                                        <FormControlLabel
                                             sx={{ width: isScreenToMedium ? '100%' : '50%', marginBottom: '10px' }}
                                             control={
                                                  <Checkbox
                                                       checked={formik.values.questionSubmissionConsent}
                                                       onChange={formik.handleChange('questionSubmissionConsent')}
                                                       name={'questionSubmissionConsent'}
                                                       color="primary"
                                                  />
                                             }
                                             label={
                                                  <Typography sx={{ textAlign: 'justify' }}>
                                                       Postavljanjem pitanja potvrđujem da sam pročitao i da sam saglasan sa: <br />
                                                       <Typography sx={{ color: Colors.link, display: 'inline' }}>
                                                            <Link href="/informacije/politika-privatnosti">
                                                                 Pravilima i uslovima korišćenja usluge: Pitajte farmaceuta.
                                                            </Link>
                                                       </Typography>
                                                  </Typography>
                                             }
                                        />
                                        {formik.touched.questionSubmissionConsent && formik.errors.questionSubmissionConsent && (
                                             <FormHelperText sx={{ marginBottom: '30px' }} error>{formik.errors.questionSubmissionConsent}</FormHelperText>
                                        )}
                                   </Box>
                                   <ReCaptcha onValidate={() => { setSubmitEnabled(true) }} action={'form_submit'} reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
                                   <Button type='submit'
                                        sx={{ color: Colors.secondary.custom, backgroundColor: Colors.primary.main, ':hover': { color: Colors.primary.main } }}
                                        disabled={submitEnabled && Object.keys(formik.errors).length > 0 && loaded}>
                                        Pošalji poruku
                                   </Button>
                              </Form>
                         )
                    }
               </Formik>
               {/* </ReCaptchaProvider> */}
          </DynamicThemeProvider >
     );
};

export default ContactForm;
