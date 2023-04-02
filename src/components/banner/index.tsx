import { Button, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import Image from "next/image";
import { BannerContainer, BannerContent, BannerImage, BannerShopButton, BannerText, BannerTitle } from "../../styles/banner"
import { Colors } from "@/styles/theme";


export default function Banner() {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

          return (
                    <BannerContainer>

                              <BannerImage src="/Logos/ailogo.png" alt={"banner"} />
                              <BannerContent>
                                        <BannerText>
                                                  <BannerTitle sx={{ textAlign: 'right' }}>
                                                            Apoteka DAR
                                                  </BannerTitle>
                                                  Dobro došli u <Typography sx={{ color: 'darkred', textAlign: 'justify', display: 'inline', fontSize: '.9rem', fontWeight: 'bold' }}>našu i Vašu apoteku</Typography>, gde se pružaju
                                                  <Typography sx={{ color: 'darkred', textAlign: 'justify', display: 'inline', fontSize: '.9rem', fontWeight: 'bold' }}> visokokvalitetni proizvodi i usluge.</Typography>
                                                  <Typography sx={{ color: 'darkred', textAlign: 'justify', display: 'inline', fontSize: '.9rem', fontWeight: 'bold' }}>Mi smo tu da Vam pomognemo</Typography> da pronađete ono što Vam je potrebno, bilo da se radi o lekovima ili osvežavajućim proizvodima za negu.
                                                  Imamo stručan tim koji će Vam pružiti <Typography sx={{ color: 'darkred', textAlign: 'justify', display: 'inline', fontSize: '.9rem', fontWeight: 'bold' }}>savet i pomoć </Typography>u bilo kojem trenutku. Posetite nas i uverite se u našu kvalitet i uslugu. Hvala što ste nas odabrali!
                                        </BannerText>
                                        <BannerShopButton color="primary" >
                                                  <Link href="/products">Proizvodi</Link>
                                        </BannerShopButton>
                              </BannerContent>
                    </BannerContainer >
          )
}
