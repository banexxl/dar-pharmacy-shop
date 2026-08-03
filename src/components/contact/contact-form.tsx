import theme, { Colors } from '@/styles/theme';
import { Box, Button, Checkbox, FormControlLabel, FormHelperText, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import LoadingWheel from '@/components/loading/loading';
import { IContactForm, initialContactFormValues } from '@/interfaces/contact/contact.interface';
import { contactFormSchema } from '@/schemas/contact-form';
import { SendContactEmail } from '@/services/email/send-email';
import Link from 'next/link';
import { ReCaptcha, ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

function ContactSuccess() {
     return (
          <Box
               sx={{
                    width: '100%',
                    maxWidth: '760px',
                    margin: '0 auto 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2.5,
                    padding: { xs: '32px 24px', sm: '48px 40px' },
                    background: '#ffffff',
                    borderRadius: '16px',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                    textAlign: 'center',
               }}
          >
               <CheckCircleOutlineIcon sx={{ fontSize: 72, color: Colors.secondary.main }} />
               <Typography variant="h5" sx={{ fontWeight: 700, color: Colors.neutral[800] }}>
                    Poruka je uspešno poslata!
               </Typography>
               <Typography variant="body1" sx={{ color: Colors.neutral[600], maxWidth: 480, lineHeight: 1.7 }}>
                    Hvala vam što ste nas kontaktirali. Odgovorićemo vam u najkraćem mogućem roku.
               </Typography>
               <Box sx={{ display: 'flex', gap: 3, mt: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: Colors.neutral[500] }}>
                         <MarkEmailReadOutlinedIcon sx={{ fontSize: 20 }} />
                         <Typography variant="body2">Email primljen</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: Colors.neutral[500] }}>
                         <SupportAgentOutlinedIcon sx={{ fontSize: 20 }} />
                         <Typography variant="body2">Odgovor u roku od 24h</Typography>
                    </Box>
               </Box>
          </Box>
     );
}

const ContactForm = ({ recaptchaKey }: { recaptchaKey: string }) => {

     const { executeRecaptcha, loaded } = useReCaptcha();
     const [token, setToken] = useState<string>('');
     const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
     const [submitted, setSubmitted] = useState<boolean>(false);
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
          loading: () => <LoadingWheel />,
          ssr: false
     })

     useEffect(() => {
          if (loaded) {
               const generateToken = async () => {
                    const newToken = await executeRecaptcha("form_submit");
                    setToken(newToken);
               };
               generateToken();
          }
     }, [loaded, executeRecaptcha]);


     const handleSubmit = async (values: IContactForm) => {
          await SendContactEmail({
               email: values.email,
               name: values.name,
               message: values.message,
               dataProcessConsent: values.dataProcessConsent,
               questionSubmissionConsent: values.questionSubmissionConsent,
               token: token
          });
          setSubmitted(true);
     }

     if (submitted) {
          return (
               <DynamicThemeProvider theme={theme}>
                    <ContactSuccess />
               </DynamicThemeProvider>
          );
     }

     return (
          <DynamicThemeProvider theme={theme}>
               <ReCaptchaProvider reCaptchaKey={recaptchaKey}>
                    <Formik initialValues={initialContactFormValues} onSubmit={(values: IContactForm) => handleSubmit(values)} validationSchema={contactFormSchema}>
                         {
                              formik => (
                                   <Form style={{
                                        width: '100%',
                                        maxWidth: '760px',
                                        margin: '0 auto 24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'stretch',
                                        gap: '16px',
                                        padding: '24px',
                                        background: '#ffffff',
                                        borderRadius: '12px',
                                        boxShadow: '0 6px 20px rgba(0,0,0,0.08)'
                                   }}>
                                        <Typography variant="h5" component="legend" gutterBottom className="ContactTitle">
                                             Kontakt forma
                                        </Typography>

                                        <Typography component="div">
                                             Ako ste u potrazi za <Typography component="span" sx={{ fontWeight: 'bold', display: 'inline' }}>deficitarnim</Typography> lekovima, možemo vam pomoći.<br />
                                             Takođe smo tu da rešimo bilo kakve nedoumice vezane za naše proizvode.<br /><br />
                                             Slobodno nas kontaktirajte!
                                        </Typography>
                                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, width: '100%' }}>
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
                                        </Box>

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
                                                  sx={{ width: '100%', maxWidth: 680, alignSelf: 'center', marginBottom: '10px' }}
                                                  control={
                                                       <Checkbox
                                                            checked={formik.values.dataProcessConsent}
                                                            onChange={formik.handleChange('dataProcessConsent')}
                                                            name={'dataProcessConsent'}
                                                            color="primary"
                                                       />
                                                  }
                                                  label={<Box component="span" sx={{ textAlign: 'center' }}>
                                                       Saglasan/saglasna sam sa obradom mojih podataka o ličnosti navedenih za potrebe savetovanja, za vreme potrebno da se pitanje obradi i da se na njega odgovori. Više informacija možete naći na linku: <br />
                                                       <span style={{ color: Colors.link }}>
                                                            <Link rel='canonical' href="/informacije/politika-privatnosti">
                                                                 Politika privatnosti.
                                                            </Link>
                                                       </span>
                                                  </Box>}
                                             />
                                             {formik.touched.dataProcessConsent && formik.errors.dataProcessConsent && (
                                                  <FormHelperText sx={{ marginBottom: '30px' }} error>{formik.errors.dataProcessConsent}</FormHelperText>
                                             )}

                                             <FormControlLabel
                                                  sx={{ width: '100%', maxWidth: 680, alignSelf: 'center', marginBottom: '10px' }}
                                                  control={
                                                       <Checkbox
                                                            checked={formik.values.questionSubmissionConsent}
                                                            onChange={formik.handleChange('questionSubmissionConsent')}
                                                            name={'questionSubmissionConsent'}
                                                            color="primary"
                                                       />
                                                  }
                                                  label={
                                                       <Box component="span" sx={{ textAlign: 'center' }}>
                                                            Postavljanjem pitanja potvrđujem da sam pročitao i da sam saglasan sa: <br />
                                                            <span style={{ color: Colors.link }}>
                                                                 <Link rel='canonical' href="/informacije/politika-privatnosti">
                                                                      Pravilima i uslovima korišćenja usluge: Pitajte farmaceuta.
                                                                 </Link>
                                                            </span>
                                                       </Box>
                                                  }
                                             />
                                             {formik.touched.questionSubmissionConsent && formik.errors.questionSubmissionConsent && (
                                                  <FormHelperText sx={{ marginBottom: '30px' }} error>{formik.errors.questionSubmissionConsent}</FormHelperText>
                                             )}
                                        </Box>
                                        <ReCaptcha onValidate={(test) => {
                                             setSubmitEnabled(true)
                                        }} action={'form_submit'} reCaptchaKey={recaptchaKey} />
                                        <Button type='submit'
                                             fullWidth={isScreenToMedium}
                                             sx={{ alignSelf: { xs: 'stretch', sm: 'flex-end' }, mt: 1, color: Colors.secondary[50], backgroundColor: Colors.primary.main, ':hover': { color: Colors.primary.main } }}
                                             disabled={!submitEnabled || Object.keys(formik.errors).length > 0 || loaded}>
                                             Pošalji poruku
                                        </Button>
                                   </Form>
                              )
                         }
                    </Formik>
               </ReCaptchaProvider>
          </DynamicThemeProvider >
     );
};

export default ContactForm;

