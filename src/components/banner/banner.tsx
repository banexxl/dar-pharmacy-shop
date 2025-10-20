import { Typography, useMediaQuery, Container, Box, Button } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import { useState } from "react";
import { Colors } from "@/styles/theme";

export default function Banner() {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     const [loading, setLoading] = useState(false)

     return (
          <Container className="BannerContainer">
               {/* <BannerImage src="/images/home-page/darHeroPic.png" alt={"banner"} /> */}
               <Box className="BannerLeftImageContent" sx={{ textAlign: isScreenToMedium ? 'center' : 'left', alignItems: isScreenToMedium ? 'center' : 'flex-start' }}>
                    <Typography component="h1" variant="h1" sx={{ color: Colors.primary.main, fontStyle: 'italic', fontFamily: 'Montserrat', mt: { xs: 2, md: '50px' }, fontSize: isScreenToMedium ? '2rem' : undefined }}>
                         Apoteka DAR
                    </Typography>
                    <Typography component="h2" variant="h2" sx={{ color: Colors.primary.main, fontStyle: 'italic', fontFamily: 'Montserrat', mt: { xs: 2, md: '50px' }, fontSize: isScreenToMedium ? '1.6rem' : undefined }}>
                         "Radosno srce je pola zdravlja!"
                    </Typography>
                    <Typography component="h3" variant="h3" sx={{ color: Colors.primary.lighter, fontStyle: 'italic', fontFamily: 'Montserrat', mt: { xs: 2, md: '50px' }, fontSize: isScreenToMedium ? '1.3rem' : undefined }}>
                         Dostava lekova radnim danima po celoj Srbiji!
                    </Typography>
                    <Typography className="BannerQuotaText">
                         Nudimo pouzdane savete i širok asortiman proizvoda a za bilo kakva dodatna pitanja ohrabrujemo Vas
                         da nas kontaktirate putem {'  '}
                         <Link rel='canonical' href={"/kontakt"}>
                              <Typography component={'span'} sx={{ display: 'inline', fontSize: isScreenToMedium ? '1.2rem' : '2rem' }}>
                                   kontakt forme
                              </Typography>
                         </Link>
                    </Typography>
                    <Typography className="BannerQuotaText">
                         ili pozivom na broj telefona {'  '}
                         <Typography component={'span'} sx={{ display: 'inline', fontSize: isScreenToMedium ? '1.2rem' : '2rem' }}>
                              <a href={`tel:${+381346104222}`} >
                                   +381 34 610 4222
                              </a>
                         </Typography>
                    </Typography>
                    <Button className="BannerShopButton" color="primary" variant="outlined" onClick={() => setLoading(true)} fullWidth={isScreenToMedium} sx={{ mt: { xs: 2, md: 0 } }}>
                         <Link rel='canonical' href={"/proizvodi-proizvodjac-kategorija/majana/prirodna-kozmetika"}>
                              Pogledajte ponudu
                         </Link>
                    </Button>
                    <Box className="BannerRightImageContent" sx={{ display: { xs: 'none', md: 'block' } }} />
               </Box>
          </Container>
     )
}
