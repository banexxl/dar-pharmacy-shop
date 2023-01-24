import { Dialog, DialogTitle, Slide, Box, IconButton, DialogContent, Typography, Button, Stack, TextField, } from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { ProductAddToCart, Product, ProductImage } from "../../styles/product";
import { BannerShopButton } from "../../styles/banner";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { padding } from "polished";

function SlideTransition(props: any) {
          return <Slide direction="down" {...props} />;
}

const LoginWrapper = styled(Box)(({ theme }: any) => ({
          display: "flex",
          padding: theme.spacing(4),
})) as typeof Box

const ProductDetailInfoWrapper = styled(Box)(() => ({
          display: "flex",
          flexDirection: "column",
          maxWidth: 500,
          lineHeight: 1.5,
}));

export default function LoginRegister({ open, onClose, product }: any) {


          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));


          return (
                    <Dialog
                              TransitionComponent={SlideTransition}
                              open={open}
                              fullScreen
                    >
                              <DialogTitle
                                        sx={{
                                                  background: Colors.secondary,
                                        }}
                              >
                                        <Box
                                                  display="flex"
                                                  alignItems="center"
                                                  justifyContent={"space-between"}
                                        >
                                                  Prijava
                                                  <IconButton onClick={onClose}>
                                                            <CloseIcon />
                                                  </IconButton>
                                        </Box>
                              </DialogTitle>
                              <DialogContent>
                                        <Box sx={{
                                                  ml: '50%', mt: '10%',
                                                  transform: 'translateX(-50%)',
                                                  display: 'flex', flexDirection: 'column',
                                                  width: { xs: '200px', sm: '250px', md: '400px', xl: '600px' },
                                                  alignItems: 'center', justifyContent: 'center', borderRadius: '5x',
                                                  boxShadow: '5px 5px 10px #c62828', ":hover": { boxShadow: '10px 10px 20px #c62828' }
                                        }}>
                                                  <Typography>
                                                            Prijava
                                                  </Typography>
                                                  <TextField sx={{ pb: '20px' }}></TextField>
                                                  <TextField sx={{ pb: '20px' }}></TextField>
                                                  <TextField sx={{ pb: '20px' }}></TextField>
                                                  <Button>Prijava</Button>
                                        </Box>
                              </DialogContent>
                    </Dialog >
          );
}
