import styled from "@emotion/styled";
import { List, ListItemText, Typography, Button, Stack, Container, ListItemButton, ListItemIcon, Box, FormControlLabel, Alert } from "@mui/material"
import { Colors } from "../../styles/theme";
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
import { Form, Formik } from "formik";
import { subscriptionEmailSchema } from "@/schemas/email-form.schema";
import { ISubscribeEmailForm, initialSubscribeEmailFormValues } from "@/interfaces/subscribe/subscription-interface";
import SubscribeClientService from "@/pages/api/email/subscribe-user-api";
import { NextResponse } from "next/server";
import Swal from "sweetalert2";

export default function Footer() {

     ;
     const [agreedWarning, setAgreedWarning] = useState(false)
     const [WishListDialog, showWishListDialog, closeWishListDialog] = useDialogModal(WishList)
     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart)
     const [LoginDialog, showLoginDialog, closeLoginDialog] = useDialogModal(LoginRegister)

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
          <FooterContainer>
               <FooterInfoAccount >
                    <Box >
                         <FooterTitle >Informacije</FooterTitle>
                         <List sx={{ color: Colors.primary.lighter, display: 'flex', flexDirection: 'column' }}>
                              <ListItemText >
                                   <FooterItem lineHeight={2}>
                                        <Link href={"/"} >
                                             Početna
                                        </Link>
                                   </FooterItem>
                              </ListItemText>
                              <ListItemText >
                                   <Link href='/informacije/o-nama'  >
                                        <FooterItem lineHeight={2} >
                                             O nama
                                        </FooterItem>
                                   </Link>
                              </ListItemText>
                              <ListItemText>
                                   <Link href='/informacije/politika-privatnosti'>
                                        <FooterItem lineHeight={2} >
                                             Politika privatnosti
                                        </FooterItem>
                                   </Link>
                              </ListItemText>
                              <ListItemText>
                                   <Link href='/informacije/uslovi-koriscenja'>
                                        <FooterItem lineHeight={2} >
                                             Uslovi korišćenja
                                        </FooterItem>
                                   </Link>
                              </ListItemText>
                         </List>
                    </Box>
                    <Box>
                         <FooterTitle variant="body1">Nalog</FooterTitle>
                         <List sx={{ textAlign: 'center', color: Colors.primary.lighter }}>
                              <ListItemText onClick={showLoginDialog}>
                                   <FooterItem lineHeight={2} >
                                        Prijava
                                   </FooterItem>
                              </ListItemText>
                              <ListItemText onClick={showCartDialog}>
                                   <FooterItem lineHeight={2} >
                                        Korpa
                                   </FooterItem>
                              </ListItemText>
                              <ListItemText onClick={showLoginDialog}>
                                   <FooterItem lineHeight={2} >
                                        Moj profil
                                   </FooterItem>
                              </ListItemText>
                              <ListItemText onClick={showWishListDialog}>
                                   <FooterItem lineHeight={2} >
                                        List želja
                                   </FooterItem>
                              </ListItemText>
                         </List>
                    </Box>
                    {/* <Box>
                         <FooterTitle variant="body1">Nalog</FooterTitle>
                         <List sx={{ textAlign: 'center', color: Colors.primary.lighter }}>
                              <ListItemText onClick={showLoginDialog}>
                                   <FooterItem lineHeight={2} >
                                        Prijava
                                   </FooterItem>
                              </ListItemText>
                              <ListItemText onClick={showCartDialog}>
                                   <FooterItem lineHeight={2} >
                                        Korpa
                                   </FooterItem>
                              </ListItemText>
                              <ListItemText onClick={showLoginDialog}>
                                   <FooterItem lineHeight={2} >
                                        Moj profil
                                   </FooterItem>
                              </ListItemText>
                              <ListItemText onClick={showWishListDialog}>
                                   <FooterItem lineHeight={2} >
                                        List želja
                                   </FooterItem>
                              </ListItemText>
                         </List>
                    </Box> */}
               </FooterInfoAccount>

               <FooterSocial>
                    <InstagramIcon onClick={() => window.open('https://instagram.com/apoteka_dar')} sx={{ cursor: 'pointer' }} />
               </FooterSocial>

               <Formik initialValues={initialSubscribeEmailFormValues} onSubmit={(values: ISubscribeEmailForm) => handleSubmit(values)} validationSchema={subscriptionEmailSchema}>
                    {
                         formik => (
                              <Form>
                                   <FooterSubscribe>
                                        <FooterTitle variant="body1">Bilten</FooterTitle>
                                        <SubscribeTf
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
