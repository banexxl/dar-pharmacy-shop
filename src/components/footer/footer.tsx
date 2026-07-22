import {
     Typography,
     Button,
     Container,
     Box,
     FormControlLabel,
     Checkbox,
     TextField,
     CircularProgress,
} from "@mui/material";
import { Colors } from "@/styles/theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import useDialogModal from "@/hooks/useDialogModal";
import WishList from "../wishlist/wishlist";
import Cart from "../cart/cart";
import LoginRegister from "../login/login";
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
     const currentYear = new Date().getFullYear();

     const handleSubmit = async (data: ISubscribeEmailForm): Promise<boolean> => {
          if (!data.agreedToTerms) {
               toast.error("Morate prihvatiti uslove koriscenja!", {
                    duration: 3000,
                    position: "top-center",
               });
               return false;
          } else {
               return await fetch("/api/email/subscribe-user-api", {
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
                              return true;
                         } else if (!response.ok) {
                              toast.error("Vaš mejl je već registrovan!", {
                                   duration: 3000,
                                   position: "top-center",
                              });
                              return false;
                         } else {
                              console.error("Unexpected response:", response);
                              return false;
                         }
                    })
                    .catch((error) => {
                         console.error("Subscription failed:", error);
                         toast.error("Došlo je do greške. Pokušajte ponovo.", {
                              duration: 3000,
                              position: "top-center",
                         });
                         return false;
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
                         py: { xs: 3, md: 5 },
                         px: { xs: 2, md: 0 },
                    }}
               >
                    <Box
                         sx={{
                              position: "relative",
                              overflow: "hidden",
                              borderRadius: { xs: 3, md: 4 },
                              border: `1px solid ${Colors.primary[700]}`,
                              background: `linear-gradient(140deg, ${Colors.primary[400]} 0%, ${Colors.primary[500]} 60%, ${Colors.primary[600]} 100%)`,
                              px: { xs: 2, sm: 3, md: 5 },
                              py: { xs: 3, md: 4 },
                              "&::before": {
                                   content: '""',
                                   position: "absolute",
                                   top: -90,
                                   right: -90,
                                   width: 240,
                                   height: 240,
                                   borderRadius: "50%",
                                   background: "rgba(255,255,255,0.08)",
                              },
                              "&::after": {
                                   content: '""',
                                   position: "absolute",
                                   bottom: -120,
                                   left: -120,
                                   width: 300,
                                   height: 300,
                                   borderRadius: "50%",
                                   background: "rgba(255,255,255,0.05)",
                              },
                         }}
                    >
                         <Box
                              sx={{
                                   position: "relative",
                                   zIndex: 1,
                                   display: "grid",
                                   gridTemplateColumns: {
                                        xs: "1fr",
                                        md: "minmax(260px, 1fr) minmax(0, 2fr)",
                                   },
                                   gap: { xs: 3, md: 4 },
                                   pb: { xs: 3, md: 4 },
                                   borderBottom: `1px solid rgba(255,255,255,0.18)`,
                              }}
                         >
                              <Box>
                                   <Typography
                                        component="p"
                                        sx={{
                                             fontSize: { xs: "1.35rem", md: "1.6rem" },
                                             fontWeight: 700,
                                             letterSpacing: "0.01em",
                                        }}
                                   >
                                        Apoteka Dar
                                   </Typography>
                                   <Typography
                                        sx={{
                                             mt: 1.5,
                                             color: "rgba(255,255,255,0.82)",
                                             maxWidth: 380,
                                             lineHeight: 1.65,
                                             fontSize: "0.95rem",
                                        }}
                                   >
                                        Vaša online apoteka za sigurnu i brzu kupovinu proizvoda
                                        za zdravlje, negu i svakodnevnu podršku.
                                   </Typography>

                                   <Box sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 1.5 }}>
                                        <Typography
                                             component="p"
                                             sx={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" }}
                                        >
                                             Pratite nas:
                                        </Typography>
                                        <Box
                                             onClick={() =>
                                                  window.open("https://instagram.com/apoteka_dar")
                                             }
                                             sx={{
                                                  width: 42,
                                                  height: 42,
                                                  borderRadius: "50%",
                                                  display: "grid",
                                                  placeItems: "center",
                                                  background: "rgba(255,255,255,0.15)",
                                                  border: "1px solid rgba(255,255,255,0.24)",
                                                  cursor: "pointer",
                                                  transition: "transform 0.2s ease, background 0.2s ease",
                                                  "&:hover": {
                                                       transform: "translateY(-2px)",
                                                       background: "rgba(255,255,255,0.24)",
                                                  },
                                             }}
                                        >
                                             <InstagramIcon sx={{ color: Colors.white, fontSize: "1.4rem" }} />
                                        </Box>
                                   </Box>
                              </Box>

                              <Box
                                   className="FooterInfoAccount"
                                   sx={{
                                        display: "grid",
                                        gridTemplateColumns: {
                                             xs: "1fr",
                                             sm: "repeat(2, minmax(0, 1fr))",
                                             lg: "repeat(3, minmax(0, 1fr))",
                                        },
                                        gap: 2,
                                   }}
                              >
                                   <Box
                                        sx={{
                                             p: 2,
                                             borderRadius: 2,
                                             background: "rgba(0,0,0,0.08)",
                                             border: "1px solid rgba(255,255,255,0.12)",
                                        }}
                                   >
                                        <Typography
                                             component="p"
                                             sx={{ fontWeight: 700, mb: 1.5, fontSize: "1rem" }}
                                        >
                                             Informacije
                                        </Typography>
                                        <Box sx={{ display: "grid", gap: 1 }}>
                                             <Link href="/" style={{ color: Colors.white, textDecoration: "none" }}>
                                                  Početna
                                             </Link>
                                             <Link
                                                  href="/kontakt"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  Kontakt
                                             </Link>
                                             <Link
                                                  href="/informacije/o-nama"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  O nama
                                             </Link>
                                             <Link
                                                  href="/informacije/isporuka-i-placanje"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  Isporuka i plaćanje
                                             </Link>
                                             <Link
                                                  href="/informacije/politika-privatnosti"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  Politika privatnosti
                                             </Link>
                                             <Link
                                                  href="/informacije/uslovi-koriscenja"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  Uslovi korišćenja
                                             </Link>
                                             <Link
                                                  href="/informacije/politika-kolacica"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  Politika kolačića
                                             </Link>
                                        </Box>
                                   </Box>

                                   <Box
                                        sx={{
                                             p: 2,
                                             borderRadius: 2,
                                             background: "rgba(0,0,0,0.08)",
                                             border: "1px solid rgba(255,255,255,0.12)",
                                        }}
                                   >
                                        <Typography
                                             component="p"
                                             sx={{ fontWeight: 700, mb: 1.5, fontSize: "1rem" }}
                                        >
                                             Nalog
                                        </Typography>
                                        <Box sx={{ display: "grid", gap: 1 }}>
                                             <Typography
                                                  component="p"
                                                  onClick={showLoginDialog}
                                                  sx={{
                                                       color: Colors.white,
                                                       cursor: "pointer",
                                                       width: "fit-content",
                                                  }}
                                             >
                                                  Prijava
                                             </Typography>
                                             <Link
                                                  href="/nalog"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  Moj profil
                                             </Link>
                                        </Box>
                                   </Box>

                                   <Box
                                        sx={{
                                             p: 2,
                                             borderRadius: 2,
                                             background: "rgba(0,0,0,0.08)",
                                             border: "1px solid rgba(255,255,255,0.12)",
                                        }}
                                   >
                                        <Typography
                                             component="p"
                                             sx={{ fontWeight: 700, mb: 1.5, fontSize: "1rem" }}
                                        >
                                             Korisnički servis
                                        </Typography>
                                        <Box sx={{ display: "grid", gap: 1 }}>
                                             <Link
                                                  href="/informacije/odustanak"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  Izjava o odustanku
                                             </Link>
                                             <Link
                                                  href="/informacije/reklamacije"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  Reklamacije
                                             </Link>
                                             <Link
                                                  href="/docs/Ugovor-o-prodaji-na-daljinu.docx"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  Ugovor o prodaji na daljinu
                                             </Link>
                                             <Link
                                                  href="/informacije/dar-savetnik"
                                                  style={{ color: Colors.white, textDecoration: "none" }}
                                             >
                                                  DAR savetnik
                                             </Link>
                                        </Box>
                                   </Box>
                              </Box>
                         </Box>

                         <Formik
                              initialValues={initialSubscribeEmailFormValues}
                              onSubmit={async (values: ISubscribeEmailForm, { resetForm }) => {
                                   const isSuccess = await handleSubmit(values);
                                   if (isSuccess) {
                                        resetForm();
                                   }
                              }}
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
                                                  mt: 3,
                                                  mb: 2,
                                                  maxWidth: 720,
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
                                                       "& .MuiFilledInput-root": {
                                                            borderRadius: 1.5,
                                                            background: "rgba(255,255,255,0.92)",
                                                       },
                                                  }}
                                             />
                                             <Button
                                                  type="submit"
                                                  disabled={formik.isSubmitting}
                                                  startIcon={
                                                       formik.isSubmitting ? (
                                                            <CircularProgress size={18} sx={{ color: Colors.white }} />
                                                       ) : (
                                                            <SendIcon />
                                                       )
                                                  }
                                                  sx={{
                                                       minHeight: 56,
                                                       px: 3,
                                                       background: "rgba(0,0,0,0.18)",
                                                       color: Colors.white,
                                                       border: "1px solid rgba(255,255,255,0.2)",
                                                       opacity: formik.isSubmitting ? 0.85 : 1,
                                                       "&:hover": {
                                                            background: "rgba(0,0,0,0.28)",
                                                       },
                                                  }}
                                             >
                                                  {formik.isSubmitting ? "Slanje..." : "Prijavi se"}
                                             </Button>
                                        </Box>

                                        <Box
                                             sx={{
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  mb: 2,
                                                  maxWidth: 720,
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
                                                  color: "rgba(255,255,255,0.9)",
                                                  fontSize: "0.9rem",
                                                  mt: 1,
                                             }}
                                        >
                                             Copyright © {currentYear} Apoteka Dar | Sva prava zadržana.
                                        </Typography>
                                   </Form>
                              )}
                         </Formik>
                    </Box>

                    <WishListDialog />
                    <CartDialog />
                    <LoginDialog />
               </Container>
          </Box>
     );
}
