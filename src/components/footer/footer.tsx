import { List, ListItemText, Typography, Button, Stack, Container, ListItemButton, ListItemIcon, Box, FormControlLabel, Alert, useMediaQuery, Accordion, AccordionDetails, AccordionSummary, AccordionActions } from "@mui/material"
import theme, { Colors } from "../../styles/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle, FooterContainer, FooterInfoAccount, FooterSocial, FooterSubscribe, PrivacyPolicyCheckBox, FooterItem, Copyright } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Link from "next/link";
import useDialogModal from "@/hooks/useDialogModal";
import WishList from "../wishlist/wishlist";
import Cart from "../cart/cart";
import LoginRegister from "../login/login";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Form, Formik } from "formik";
import { subscriptionEmailSchema } from "@/schemas/email-form.schema";
import { ISubscribeEmailForm, initialSubscribeEmailFormValues } from "@/interfaces/subscribe/subscription-interface";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function Footer() {

     const [WishListDialog, showWishListDialog, closeWishListDialog] = useDialogModal(WishList)
     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)
     const [LoginDialog, showLoginDialog, closeLoginDialog] = useDialogModal(LoginRegister)
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     const handleSubmit = async (data: any) => {

          if (!data.agreedToTerms) {
               toast.error('Morate prihvatiti uslove koriscenja!', {
                    duration: 3000,
                    position: "top-center"
               })
               return;
          } else {
               await fetch('/api/email/subscribe-user-api', {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                         'Content-Type': 'application/json',
                         'Access-Control-Allow-Origin': '*',
                         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                    },
               }).then((response: any) => response.json())
                    .then((response: any) => {
                         if (response.message === "Email successfully registered!") {
                              toast.success('Vaš mejl je uspešno registrovan!', {
                                   duration: 3000,
                                   position: "top-center"
                              });
                         } else if (!response.ok) {
                              toast.error('Vaš mejl je već registrovan!', {
                                   duration: 3000,
                                   position: "top-center"
                              });
                         } else {
                              console.error('Unexpected response:', response);
                         }
                    })
          }
     }


     return (
          <FooterContainer theme={theme}>
               {
                    isScreenToMedium ?
                         <Box>
                              <Accordion disableGutters>
                                   <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                   >
                                        Informacije
                                   </AccordionSummary>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/"} >
                                             Početna
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/kontakt"} >
                                             Kontakt
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/informacije/o-nama"} >
                                             O nama
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/informacije/isporuka-i-placanje"} >
                                             Isporuka i plaćanje
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/informacije/politika-privatnosti"} >
                                             Politika privatnosti
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/informacije/uslovi-koriscenja"} >
                                             Uslovi korišćenja
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/informacije/politika-kolacica"} >
                                             Politika kolačića
                                        </Link>
                                   </AccordionDetails>
                              </Accordion>
                              <Accordion disableGutters>
                                   <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2-content"
                                        id="panel2-header"
                                   >
                                        Nalog
                                   </AccordionSummary>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/autentifikacija/prijava"} >
                                             Prijava
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/nalog"} >
                                             Moj profil
                                        </Link>
                                   </AccordionDetails>
                              </Accordion>
                              <Accordion disableGutters>
                                   <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3-content"
                                        id="panel3-header"
                                   >
                                        Korisnički servis
                                   </AccordionSummary>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/informacije/odustanak"} >
                                             Izjava o odustanku
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/informacije/reklamacije"} >
                                             Reklamacije
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/docs/Ugovor-o-prodaji-na-daljinu.docx"} >
                                             Ugovor o prodaji na daljinu
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link rel='canonical' href={"/informacije/dar-savetnik"} >
                                             DAR savetnik
                                        </Link>
                                   </AccordionDetails>
                              </Accordion>
                         </Box>
                         :
                         <FooterInfoAccount theme={theme}>
                              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                   <FooterTitle theme={theme}>Informacije</FooterTitle>
                                   <List sx={{ color: Colors.primary.lighter, display: 'flex', flexDirection: 'column' }}>
                                        <ListItemText >
                                             <FooterItem theme={theme} lineHeight={2}>
                                                  <Link rel='canonical' href={"/"} >
                                                       Početna
                                                  </Link>
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText >
                                             <FooterItem theme={theme} lineHeight={2}>
                                                  <Link rel='canonical' href={"/kontakt"} >
                                                       Kontakt
                                                  </Link>
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText >
                                             <Link rel='canonical' href='/informacije/o-nama'  >
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       O nama
                                                  </FooterItem>
                                             </Link>
                                        </ListItemText>
                                        <ListItemText >
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  <Link rel='canonical' href={"/informacije/isporuka-i-placanje"} >
                                                       Isporuka i plaćanje
                                                  </Link>
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link rel='canonical' href='/informacije/politika-privatnosti'>
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       Politika privatnosti
                                                  </FooterItem>
                                             </Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link rel='canonical' href='/informacije/uslovi-koriscenja'>
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       Uslovi korišćenja
                                                  </FooterItem>
                                             </Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link rel='canonical' href='/informacije/politika-kolacica'>
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       Politika kolačića
                                                  </FooterItem>
                                             </Link>
                                        </ListItemText>
                                   </List>
                              </Box>
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                   <FooterTitle theme={theme} variant="body1">Nalog</FooterTitle>
                                   <List sx={{ textAlign: 'center', alignItems: 'center', color: Colors.primary.lighter }}>
                                        <ListItemText onClick={showLoginDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Prijava
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText >
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  <Link rel='canonical' href={"/nalog"} >
                                                       Moj profil
                                                  </Link>
                                             </FooterItem>
                                        </ListItemText>
                                   </List>
                              </Box>
                              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                   <FooterTitle theme={theme} variant="body1">Korisnički servis</FooterTitle>
                                   <List sx={{ textAlign: 'center', color: Colors.primary.lighter }}>
                                        <Link rel='canonical' href='/informacije/odustanak'>
                                             <ListItemText>
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       Izjava o odustanku
                                                  </FooterItem>
                                             </ListItemText>
                                        </Link>
                                        <Link rel='canonical' href='/informacije/reklamacije'>
                                             <ListItemText>
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       Reklamacije
                                                  </FooterItem>
                                             </ListItemText>
                                        </Link>
                                        <Link rel='canonical' href='/docs/Ugovor-o-prodaji-na-daljinu.docx'>
                                             <ListItemText >
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       Ugovor o prodaji na daljinu
                                                  </FooterItem>
                                             </ListItemText>
                                        </Link>

                                        <Link rel='canonical' href='/informacije/dar-savetnik'>
                                             <ListItemText >
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       DAR Savetnik
                                                  </FooterItem>
                                             </ListItemText>
                                        </Link>
                                   </List>
                              </Box>
                         </FooterInfoAccount>
               }

               <FooterSocial>
                    <InstagramIcon onClick={() => window.open('https://instagram.com/apoteka_dar')} sx={{ cursor: 'pointer', color: Colors.primary.main }} />
               </FooterSocial>

               <Formik initialValues={initialSubscribeEmailFormValues} onSubmit={(values: ISubscribeEmailForm) => handleSubmit(values)} validationSchema={subscriptionEmailSchema}>
                    {
                         formik => (
                              <Form>
                                   <FooterSubscribe theme={theme}>
                                        <FooterTitle theme={theme} variant="body1">Bilten</FooterTitle>
                                        <SubscribeTf
                                             theme={theme}
                                             color="secondary"
                                             label={"Email adresa"}
                                             variant="filled"
                                             value={formik.values.email}
                                             onChange={formik.handleChange('email')}
                                             error={formik.touched.email && !!formik.errors.email}
                                             helperText={formik.touched.email && formik.errors.email}
                                        />
                                        <Button
                                             startIcon={<SendIcon />}
                                             // variant="contained"
                                             type="submit"
                                        //disabled={formik.errors ? true : false}
                                        >
                                             Prijavi se
                                        </Button>
                                        <FormControlLabel
                                             control={<PrivacyPolicyCheckBox checked={formik.values.agreedToTerms} />}
                                             onChange={
                                                  formik.handleChange('agreedToTerms')
                                             }
                                             label={"Prihvatam uslove politike privatnosti"}
                                             name="agreedToTerms"
                                        />
                                   </FooterSubscribe>
                                   <Copyright>
                                        Copyright © Apoteka Dar | Sva prava zadržana.
                                   </Copyright>
                              </Form>
                         )
                    }
               </Formik>
               <WishListDialog />
               <CartDialog />
               <LoginDialog />
          </FooterContainer >
     );
}
