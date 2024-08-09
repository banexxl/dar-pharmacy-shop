import styled from "@emotion/styled";
import { List, ListItemText, Typography, Button, Stack, Container, ListItemButton, ListItemIcon, Box, FormControlLabel, Alert, useMediaQuery, Accordion, AccordionDetails, AccordionSummary, AccordionActions } from "@mui/material"
import theme, { Colors } from "../../styles/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle, FooterContainer, FooterInfoAccount, FooterSocial, FooterSubscribe, PrivacyPolicyCheckBox, FooterItem, Copyright } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import useDialogModal from "@/hooks/useDialogModal";
import WishList from "../wishlist/wishlist";
import Cart from "../cart/cart";
import LoginRegister from "../login/login";
import { useRouter } from "next/router";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Form, Formik } from "formik";
import { subscriptionEmailSchema } from "@/schemas/email-form.schema";
import { ISubscribeEmailForm, initialSubscribeEmailFormValues } from "@/interfaces/subscribe/subscription-interface";
import SubscribeClientService from "@/pages/api/email/subscribe-user-api";
import { NextResponse } from "next/server";
import Swal from "sweetalert2";

export default function Footer() {

     const [agreedWarning, setAgreedWarning] = useState(false)
     const [WishListDialog, showWishListDialog, closeWishListDialog] = useDialogModal(WishList)
     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)
     const [LoginDialog, showLoginDialog, closeLoginDialog] = useDialogModal(LoginRegister)
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     const callAlert = () => {
          setAgreedWarning(true)
          const timeId = setTimeout(() => {
               // After 3 seconds set the show value to false
               setAgreedWarning(false)
          }, 3000)

          return () => {
               clearTimeout(timeId)
          }
     }

     const handleSubmit = async (data: any) => {

          if (!data.agreedToTerms) {
               callAlert();
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
                              Swal.fire({
                                   title: 'Hvala Vam puno na prijavi!',
                                   text: 'Nećemo Vas puno gnjaviti :)',
                                   icon: 'success',
                                   background: Colors.secondary.custom, // Update the background property to a string value
                                   confirmButtonText: '<b >OK!</b> ',
                                   showCloseButton: true,
                                   timer: 3000
                              });
                         } else if (!response.ok) {
                              Swal.fire({
                                   title: 'Eh! Nismo uspeli da upišemo vaš email!',
                                   text: 'Vaš email je već upisan kod nas :)',
                                   icon: 'error',
                                   confirmButtonText: 'OK!',
                                   showCloseButton: true,
                                   background: Colors.primary.main, // Update the background property to a string value
                                   timer: 3000
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
                                        <Link href={"/"} >
                                             Početna
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/kontakt"} >
                                             Pitajte nas...
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/informacije/o-nama"} >
                                             O nama
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/informacije/isporuka-i-placanje"} >
                                             Isporuka i plaćanje
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Politika privatnosti
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Uslovi korišćenja
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
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
                                        <Link href={"/"} >
                                             Prijava
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Korpa
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Moj profil
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Lista želja
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
                                        <Link href={"/informacije/izjava-o-odustanku"} >
                                             Izjava o odustanku
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Odustanak
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Zahtev za reklamaciju
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Reklamacije
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Ugovor o prodaji na daljinu
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Pravila i uslovi korišćenja usluge PITAJTE DAR SAVETNIKA
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href={"/"} >
                                             Prijava neželjenih dejstava leka ili medicinskog sredstva
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
                                                  <Link href={"/"} >
                                                       Početna
                                                  </Link>
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText >
                                             <FooterItem theme={theme} lineHeight={2}>
                                                  <Link href={"/kontakt"} >
                                                       Pitajte nas...
                                                  </Link>
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText >
                                             <Link href='/informacije/o-nama'  >
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       O nama
                                                  </FooterItem>
                                             </Link>
                                        </ListItemText>
                                        <ListItemText onClick={showLoginDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  <Link href={"/informacije/isporuka-i-placanje"} >
                                                       Isporuka i plaćanje
                                                  </Link>
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href='/informacije/politika-privatnosti'>
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       Politika privatnosti
                                                  </FooterItem>
                                             </Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href='/informacije/uslovi-koriscenja'>
                                                  <FooterItem theme={theme} lineHeight={2} >
                                                       Uslovi korišćenja
                                                  </FooterItem>
                                             </Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href='/informacije/politika-kolacica'>
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
                                        <ListItemText onClick={showCartDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Korpa
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText onClick={showLoginDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Moj profil
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText onClick={showWishListDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Lista želja
                                             </FooterItem>
                                        </ListItemText>
                                   </List>
                              </Box>
                              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                   <FooterTitle theme={theme} variant="body1">Korisnički servis</FooterTitle>
                                   <List sx={{ textAlign: 'center', color: Colors.primary.lighter }}>
                                        <Link href='/informacije/izjava-o-odustanku'>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Izjava o odustanku
                                             </FooterItem>
                                        </Link>
                                        <ListItemText onClick={showLoginDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Reklamacije
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText onClick={showWishListDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Ugovor o prodaji na daljinu
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText onClick={showWishListDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Zahtev za reklamaciju
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText onClick={showWishListDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Odustanak
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText onClick={showWishListDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Pravila i uslovi korišćenja usluge PITAJTE DAR SAVETNIKA
                                             </FooterItem>
                                        </ListItemText>
                                        <ListItemText onClick={showWishListDialog}>
                                             <FooterItem theme={theme} lineHeight={2} >
                                                  Prijava neželjenih dejstava leka ili medicinskog sredstva
                                             </FooterItem>
                                        </ListItemText>
                                   </List>
                              </Box>
                         </FooterInfoAccount>
               }

               <FooterSocial>
                    <InstagramIcon onClick={() => window.open('https://instagram.com/apoteka_dar')} sx={{ cursor: 'pointer' }} />
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
               {
                    agreedWarning && (
                         <Alert variant="filled" severity="error" sx={{ position: 'fixed', bottom: '0px', left: '50%', transform: 'translateX(-50%)', width: '250px' }}>
                              Upozorenje: Morate prihvatiti Politiku privatnosti!
                         </Alert>
                    )
               }
               <WishListDialog />
               <CartDialog />
               <LoginDialog />
          </FooterContainer >
     );
}
