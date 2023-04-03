import { Button, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import Image from "next/image";
import { BannerContainer, BannerContent, BannerImage, BannerShopButton, BannerText, BannerTextInner, BannerTitle } from "../../styles/banner"
import { Colors } from "@/styles/theme";


export default function Banner() {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

          return (
                    <BannerContainer>

                              <BannerImage src="/Logos/ailogo.png" alt={"banner"} />
                              <BannerContent>
                                        <BannerText>
                                                  <BannerTitle>
                                                            Apoteka DAR
                                                  </BannerTitle>
                                                  Dobro došli u <BannerTextInner>našu i Vašu apoteku</BannerTextInner>, gde se pružaju
                                                  <BannerTextInner > visokokvalitetni proizvodi i usluge.</BannerTextInner>
                                                  <BannerTextInner > Mi smo tu da Vam pomognemo</BannerTextInner> da pronađete ono što Vam je potrebno, bilo da se radi o lekovima ili osvežavajućim proizvodima za negu.
                                                  Imamo stručan tim koji će Vam pružiti <BannerTextInner>savet i pomoć </BannerTextInner>u bilo kojem trenutku. Posetite nas i uverite se u naš kvalitet i uslugu. Hvala što ste nas odabrali!
                                                  <BannerShopButton color="primary" >
                                                            <Link href="/products">Proizvodi</Link>
                                                  </BannerShopButton>
                                        </BannerText>
                              </BannerContent>
                    </BannerContainer >
          )
}
