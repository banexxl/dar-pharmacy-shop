import { List, ListItemText, Typography, Button, Stack, Container, ListItemButton, ListItemIcon, Box, FormControlLabel, Alert, useMediaQuery, Accordion, AccordionDetails, AccordionSummary, AccordionActions, TextField, Checkbox } from "@mui/material"
import theme, { Colors } from "@/styles/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
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
          <Box component="footer" sx={{ width: '100vw', backgroundColor: Colors.neutral[200], borderTop: `1px solid ${Colors.neutral[800]}`, mt: 8 }}>
               <Container
                    className="FooterContainer"
                    maxWidth="xl"
                    sx={{
                         color: Colors.neutral[100],
                         py: { xs: 4, md: 6 },
                    }}
               >
                    {
                         isScreenToMedium ?
                              <Box sx={{
                                   '& .MuiAccordion-root': {
                                        background: 'transparent',
                                        boxShadow: 'none',
                                        '&:before': { display: 'none' },
                                        borderBottom: `1px solid ${Colors.neutral[700]}`,
                                   }
                              }}>
                                   <Accordion disableGutters sx={{
                                        background: 'transparent',
                                        color: Colors.neutral[100],
                                   }}>
                                        <AccordionSummary
                                             expandIcon={<ExpandMoreIcon sx={{ color: Colors.neutral[300] }} />}
                                             aria-controls="panel1-content"
                                             id="panel1-header"
                                             sx={{
                                                  color: Colors.neutral[100],
                                                  fontWeight: 600,
                                                  '&:hover': {
                                                       bgcolor: Colors.neutral[800],
                                                  }
                                             }}
                                        >
                                             <Typography variant="h6" fontWeight={600}>Informacije</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Početna
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/kontakt"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Kontakt
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/informacije/o-nama"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  O nama
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/informacije/isporuka-i-placanje"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Isporuka i plaćanje
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/informacije/politika-privatnosti"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Politika privatnosti
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/informacije/uslovi-koriscenja"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Uslovi korišćenja
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/informacije/politika-kolacica"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Politika kolačića
                                             </Link>
                                        </AccordionDetails>
                                   </Accordion>
                                   <Accordion disableGutters sx={{
                                        background: 'transparent',
                                        color: Colors.neutral[100],
                                   }}>
                                        <AccordionSummary
                                             expandIcon={<ExpandMoreIcon sx={{ color: Colors.neutral[300] }} />}
                                             aria-controls="panel2-content"
                                             id="panel2-header"
                                             sx={{
                                                  color: Colors.neutral[100],
                                                  fontWeight: 600,
                                                  '&:hover': {
                                                       bgcolor: Colors.neutral[800],
                                                  }
                                             }}
                                        >
                                             <Typography variant="h6" fontWeight={600}>Nalog</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/autentifikacija/prijava"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Prijava
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/nalog"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Moj profil
                                             </Link>
                                        </AccordionDetails>
                                   </Accordion>
                                   <Accordion disableGutters sx={{
                                        background: 'transparent',
                                        color: Colors.neutral[100],
                                   }}>
                                        <AccordionSummary
                                             expandIcon={<ExpandMoreIcon sx={{ color: Colors.neutral[300] }} />}
                                             aria-controls="panel3-content"
                                             id="panel3-header"
                                             sx={{
                                                  color: Colors.neutral[100],
                                                  fontWeight: 600,
                                                  '&:hover': {
                                                       bgcolor: Colors.neutral[800],
                                                  }
                                             }}
                                        >
                                             <Typography variant="h6" fontWeight={600}>Korisnički servis</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/informacije/odustanak"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Izjava o odustanku
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/informacije/reklamacije"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Reklamacije
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/docs/Ugovor-o-prodaji-na-daljinu.docx"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  Ugovor o prodaji na daljinu
                                             </Link>
                                        </AccordionDetails>
                                        <AccordionDetails sx={{ px: 2, py: 1 }}>
                                             <Link rel='canonical' href={"/informacije/dar-savetnik"} style={{
                                                  color: Colors.neutral[300],
                                                  textDecoration: 'none',
                                                  display: 'block',
                                                  padding: '8px 0',
                                                  transition: 'color 0.3s ease'
                                             }}>
                                                  DAR savetnik
                                             </Link>
                                        </AccordionDetails>
                                   </Accordion>
                              </Box>
                              :
                              <Box className="FooterInfoAccount" sx={{
                                   display: 'flex',
                                   gap: 6,
                                   justifyContent: 'space-between',
                                   flexWrap: 'wrap'
                              }}>
                                   <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 200 }}>
                                        <Typography variant="h6" sx={{
                                             color: Colors.neutral[100],
                                             fontWeight: 600,
                                             mb: 2,
                                             fontSize: '1.1rem'
                                        }}>
                                             Informacije
                                        </Typography>
                                        <List sx={{
                                             color: Colors.neutral[300],
                                             display: 'flex',
                                             flexDirection: 'column',
                                             gap: 0.5,
                                             p: 0
                                        }}>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href={"/"}>
                                                            Početna
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href={"/kontakt"}>
                                                            Kontakt
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href='/informacije/o-nama'>
                                                            O nama
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href={"/informacije/isporuka-i-placanje"}>
                                                            Isporuka i plaćanje
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href='/informacije/politika-privatnosti'>
                                                            Politika privatnosti
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href='/informacije/uslovi-koriscenja'>
                                                            Uslovi korišćenja
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href='/informacije/politika-kolacica'>
                                                            Politika kolačića
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                        </List>
                                   </Box>
                                   <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 150 }}>
                                        <Typography variant="h6" sx={{
                                             color: Colors.neutral[100],
                                             fontWeight: 600,
                                             mb: 2,
                                             fontSize: '1.1rem'
                                        }}>
                                             Nalog
                                        </Typography>
                                        <List sx={{
                                             color: Colors.neutral[300],
                                             display: 'flex',
                                             flexDirection: 'column',
                                             gap: 0.5,
                                             p: 0
                                        }}>
                                             <ListItemText onClick={showLoginDialog} sx={{
                                                  m: 0,
                                                  cursor: 'pointer',
                                                  '&:hover': {
                                                       color: Colors.primary.light
                                                  }
                                             }}>
                                                  <Typography sx={{
                                                       color: 'inherit',
                                                       transition: 'color 0.3s ease'
                                                  }}>
                                                       Prijava
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href={"/nalog"}>
                                                            Moj profil
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                        </List>
                                   </Box>
                                   <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 200 }}>
                                        <Typography variant="h6" sx={{
                                             color: Colors.neutral[100],
                                             fontWeight: 600,
                                             mb: 2,
                                             fontSize: '1.1rem'
                                        }}>
                                             Korisnički servis
                                        </Typography>
                                        <List sx={{
                                             color: Colors.neutral[300],
                                             display: 'flex',
                                             flexDirection: 'column',
                                             gap: 0.5,
                                             p: 0
                                        }}>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href='/informacije/odustanak'>
                                                            Izjava o odustanku
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href='/informacije/reklamacije'>
                                                            Reklamacije
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href='/docs/Ugovor-o-prodaji-na-daljinu.docx'>
                                                            Ugovor o prodaji na daljinu
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                             <ListItemText sx={{ m: 0 }}>
                                                  <Typography sx={{
                                                       '& a': {
                                                            color: Colors.neutral[300],
                                                            textDecoration: 'none',
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                 color: Colors.primary.light
                                                            }
                                                       }
                                                  }}>
                                                       <Link rel='canonical' href='/informacije/dar-savetnik'>
                                                            DAR Savetnik
                                                       </Link>
                                                  </Typography>
                                             </ListItemText>
                                        </List>
                                   </Box>
                              </Box>
                    }

                    <Box className="FooterSocial" sx={{
                         mt: 4,
                         pt: 3,
                         borderTop: `1px solid ${Colors.neutral[700]}`,
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center'
                    }}>
                         <InstagramIcon
                              onClick={() => window.open('https://instagram.com/apoteka_dar')}
                              sx={{
                                   cursor: 'pointer',
                                   color: Colors.neutral[300],
                                   fontSize: '2rem',
                                   transition: 'color 0.3s ease',
                                   '&:hover': {
                                        color: Colors.primary.light
                                   }
                              }}
                         />
                    </Box>

                    <Formik initialValues={initialSubscribeEmailFormValues} onSubmit={(values: ISubscribeEmailForm) => handleSubmit(values)} validationSchema={subscriptionEmailSchema}>
                         {
                              formik => (
                                   <Form>
                                        <Box className="FooterSubscribe">
                                             <Typography className="FooterTitle" variant="body1">Bilten</Typography>
                                             <TextField
                                                  className="SubscribeTf"
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
                                                  control={<Checkbox className="PrivacyPolicyCheckBox" checked={formik.values.agreedToTerms} />}
                                                  onChange={
                                                       formik.handleChange('agreedToTerms')
                                                  }
                                                  label={"Prihvatam uslove politike privatnosti"}
                                                  name="agreedToTerms"
                                             />
                                        </Box>
                                        <Typography className="Copyright">
                                             Copyright © Apoteka Dar | Sva prava zadržana.
                                        </Typography>
                                   </Form>
                              )
                         }
                    </Formik>
                    <WishListDialog />
                    <CartDialog />
                    <LoginDialog />
               </Container>
          </Box>
     );
}
