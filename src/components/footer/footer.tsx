import {
     List,
     ListItemText,
     Typography,
     Button,
     Container,
     Box,
     FormControlLabel,
     Checkbox,
     Accordion,
     AccordionDetails,
     AccordionSummary,
     useMediaQuery,
     TextField,
} from "@mui/material";
import theme, { Colors } from "@/styles/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import useDialogModal from "@/hooks/useDialogModal";
import WishList from "../wishlist/wishlist";
import Cart from "../cart/cart";
import LoginRegister from "../login/login";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Form, Formik } from "formik";
import { subscriptionEmailSchema } from "@/schemas/email-form.schema";
import {
     ISubscribeEmailForm,
     initialSubscribeEmailFormValues,
} from "@/interfaces/subscribe/subscription-interface";
import toast from "react-hot-toast";

export default function Footer() {
     const [WishListDialog, showWishListDialog, closeWishListDialog] =
          useDialogModal(WishList);
     const [CartDialog, showCartDialog, closeCartDialog] = useDialogModal(Cart);
     const [LoginDialog, showLoginDialog, closeLoginDialog] =
          useDialogModal(LoginRegister);
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));

     const handleSubmit = async (data: any) => {
          if (!data.agreedToTerms) {
               toast.error("Morate prihvatiti uslove koriscenja!", {
                    duration: 3000,
                    position: "top-center",
               });
               return;
          } else {
               await fetch("/api/email/subscribe-user-api", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                         "Content-Type": "application/json",
                         "Access-Control-Allow-Origin": "*",
                         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    },
               })
                    .then((response: any) => response.json())
                    .then((response: any) => {
                         if (response.message === "Email successfully registered!") {
                              toast.success("Vaš mejl je uspešno registrovan!", {
                                   duration: 3000,
                                   position: "top-center",
                              });
                         } else if (!response.ok) {
                              toast.error("Vaš mejl je već registrovan!", {
                                   duration: 3000,
                                   position: "top-center",
                              });
                         } else {
                              console.error("Unexpected response:", response);
                         }
                    });
          }
     };

     return (
          <Box
               sx={{
                    position: "relative",
                    left: "50%",
                    right: "50%",
                    marginLeft: "-50vw",
                    marginRight: "-50vw",
                    width: "100vw",
               }}
          >
               <Container
                    className="FooterContainer"
                    maxWidth="xl"
                    disableGutters
                    sx={{
                         color: Colors.white,
                         py: { xs: 4, md: 6 },
                         px: { xs: 2, md: 0 },
                    }}
               >
                    {isScreenToMedium ? (
                         // MOBILE ACCORDIONS
                         <Box
                              sx={{
                                   "& .MuiAccordion-root": {
                                        background: Colors.primary[900],
                                        boxShadow: "none",
                                        "&:before": { display: "none" },
                                        borderBottom: `1px solid ${Colors.primary[700]}`,
                                   },
                              }}
                         >
                              <Accordion disableGutters>
                                   <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: Colors.primary.main }} />}
                                   >
                                        <Typography
                                             variant="h6"
                                             component="p"
                                             fontWeight={600}
                                             sx={{ color: Colors.white }}
                                        >
                                             Informacije
                                        </Typography>
                                   </AccordionSummary>
                                   <AccordionDetails>
                                        <Link href="/">Početna</Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/kontakt">Kontakt</Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/informacije/o-nama">O nama</Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/informacije/isporuka-i-placanje">
                                             Isporuka i plaćanje
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/informacije/politika-privatnosti">
                                             Politika privatnosti
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/informacije/uslovi-koriscenja">
                                             Uslovi korišćenja
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/informacije/politika-kolacica">
                                             Politika kolačića
                                        </Link>
                                   </AccordionDetails>
                              </Accordion>

                              <Accordion disableGutters>
                                   <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: Colors.primary.main }} />}
                                   >
                                        <Typography
                                             variant="h6"
                                             component="p"
                                             fontWeight={600}
                                             sx={{ color: Colors.white }}
                                        >
                                             Nalog
                                        </Typography>
                                   </AccordionSummary>
                                   <AccordionDetails>
                                        <Link href="/autentifikacija/prijava">Prijava</Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/nalog">Moj profil</Link>
                                   </AccordionDetails>
                              </Accordion>

                              <Accordion disableGutters>
                                   <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{ color: Colors.primary.main }} />}
                                   >
                                        <Typography
                                             variant="h6"
                                             component="p"
                                             fontWeight={600}
                                             sx={{ color: Colors.white }}
                                        >
                                             Korisnički servis
                                        </Typography>
                                   </AccordionSummary>
                                   <AccordionDetails>
                                        <Link href="/informacije/odustanak">Izjava o odustanku</Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/informacije/reklamacije">Reklamacije</Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/docs/Ugovor-o-prodaji-na-daljinu.docx">
                                             Ugovor o prodaji na daljinu
                                        </Link>
                                   </AccordionDetails>
                                   <AccordionDetails>
                                        <Link href="/informacije/dar-savetnik">DAR savetnik</Link>
                                   </AccordionDetails>
                              </Accordion>
                         </Box>
                    ) : (
                         // DESKTOP
                         <Box
                              className="FooterInfoAccount"
                              sx={{
                                   display: "flex",
                                   gap: 6,
                                   justifyContent: "space-between",
                                   flexWrap: "wrap",
                              }}
                         >
                              {/* INFO SECTION */}
                              <Box sx={{ display: "flex", flexDirection: "column", minWidth: 200 }}>
                                   <Typography
                                        variant="h6"
                                        component="p"
                                        sx={{
                                             color: Colors.white,
                                             fontWeight: 600,
                                             mb: 2,
                                             fontSize: "1.1rem",
                                        }}
                                   >
                                        Informacije
                                   </Typography>
                                   <List sx={{ p: 0 }}>
                                        <ListItemText>
                                             <Link href="/">Početna</Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href="/kontakt">Kontakt</Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href="/informacije/o-nama">O nama</Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href="/informacije/isporuka-i-placanje">
                                                  Isporuka i plaćanje
                                             </Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href="/informacije/politika-privatnosti">
                                                  Politika privatnosti
                                             </Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href="/informacije/uslovi-koriscenja">
                                                  Uslovi korišćenja
                                             </Link>
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href="/informacije/politika-kolacica">
                                                  Politika kolačića
                                             </Link>
                                        </ListItemText>
                                   </List>
                              </Box>

                              {/* ACCOUNT SECTION */}
                              <Box sx={{ display: "flex", flexDirection: "column", minWidth: 150 }}>
                                   <Typography
                                        variant="h6"
                                        component="p"
                                        sx={{
                                             color: Colors.white,
                                             fontWeight: 600,
                                             mb: 2,
                                             fontSize: "1.1rem",
                                        }}
                                   >
                                        Nalog
                                   </Typography>
                                   <List sx={{ p: 0 }}>
                                        <ListItemText
                                             onClick={showLoginDialog}
                                             sx={{ cursor: "pointer", m: 0 }}
                                        >
                                             Prijava
                                        </ListItemText>
                                        <ListItemText>
                                             <Link href="/nalog">Moj profil</Link>
                                        </ListItemText>
                                   </List>
                              </Box>

                              {/* CUSTOMER SERVICE SECTION */}
                              <Box sx={{ display: "flex", flexDirection: "column", minWidth: 200 }}>
                                   <Typography
                                        variant="h6"
                                        component="p"
                                        sx={{
                                             color: Colors.white,
                                             fontWeight: 600,
                                             mb: 2,
                                             fontSize: "1.1rem",
                                             textAlign: "right",
                                        }}
                                   >
                                        Korisnički servis
                                   </Typography>
                                   <List sx={{ p: 0, textAlign: "right" }}>
                                        <ListItemText sx={{ textAlign: "right" }}>
                                             <Link href="/informacije/odustanak">Izjava o odustanku</Link>
                                        </ListItemText>
                                        <ListItemText sx={{ textAlign: "right" }}>
                                             <Link href="/informacije/reklamacije">Reklamacije</Link>
                                        </ListItemText>
                                        <ListItemText sx={{ textAlign: "right" }}>
                                             <Link href="/docs/Ugovor-o-prodaji-na-daljinu.docx">
                                                  Ugovor o prodaji na daljinu
                                             </Link>
                                        </ListItemText>
                                        <ListItemText sx={{ textAlign: "right" }}>
                                             <Link href="/informacije/dar-savetnik">DAR Savetnik</Link>
                                        </ListItemText>
                                   </List>
                              </Box>
                         </Box>
                    )}

                    {/* SOCIAL */}
                    <Box
                         sx={{
                              mt: 4,
                              pt: 3,
                              borderTop: `1px solid ${Colors.primary[700]}`,
                              display: "flex",
                              justifyContent: "center",
                         }}
                    >
                         <InstagramIcon
                              onClick={() => window.open("https://instagram.com/apoteka_dar")}
                              sx={{
                                   cursor: "pointer",
                                   color: Colors.white,
                                   fontSize: "2rem",
                                   transition: "color 0.3s ease",
                              }}
                         />
                    </Box>

                    {/* SUBSCRIBE FORM */}
                    <Formik
                         initialValues={initialSubscribeEmailFormValues}
                         onSubmit={(values: ISubscribeEmailForm) => handleSubmit(values)}
                         validationSchema={subscriptionEmailSchema}
                    >
                         {(formik) => (
                              <Form>
                                   <Box
                                        sx={{
                                             display: "flex",
                                             flexDirection: { xs: "column", sm: "row" },
                                             alignItems: { xs: "stretch", sm: "center" },
                                             gap: 2,
                                             mt: 4,
                                             mb: 2,
                                             maxWidth: 600,
                                             mx: "auto",
                                        }}
                                   >
                                        <TextField
                                             label="Email adresa"
                                             variant="filled"
                                             value={formik.values.email}
                                             onChange={formik.handleChange("email")}
                                             error={formik.touched.email && !!formik.errors.email}
                                             helperText={formik.touched.email && formik.errors.email}
                                             sx={{
                                                  flex: 1,
                                                  background: Colors.primary[50],
                                                  borderRadius: 1,
                                             }}
                                        />
                                        <Button startIcon={<SendIcon />} type="submit">
                                             Prijavi se
                                        </Button>
                                   </Box>

                                   <Box
                                        sx={{
                                             display: "flex",
                                             justifyContent: "center",
                                             mb: 2,
                                             maxWidth: 600,
                                             mx: "auto",
                                        }}
                                   >
                                        <FormControlLabel
                                             control={
                                                  <Checkbox
                                                       checked={formik.values.agreedToTerms}
                                                       onChange={formik.handleChange("agreedToTerms")}
                                                       name="agreedToTerms"
                                                  />
                                             }
                                             label={
                                                  <Typography variant="body2" sx={{ color: Colors.white }}>
                                                       Prihvatam uslove politike privatnosti
                                                  </Typography>
                                             }
                                        />
                                   </Box>

                                   <Typography
                                        sx={{
                                             textAlign: "center",
                                             color: Colors.white,
                                             fontSize: "0.95rem",
                                             mt: 2,
                                        }}
                                   >
                                        Copyright © Apoteka Dar | Sva prava zadržana.
                                   </Typography>
                              </Form>
                         )}
                    </Formik>

                    <WishListDialog />
                    <CartDialog />
                    <LoginDialog />
               </Container>
          </Box>
     );
}
