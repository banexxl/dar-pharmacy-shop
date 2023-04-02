import { Button, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import Image from "next/image";
import { BannerContainer, BannerContent, BannerImage, BannerShopButton, BannerText, BannerTitle } from "../../styles/banner"


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
                                                  Dobro došli u našu apoteku, gde se pružaju visokokvalitetni proizvodi i usluge.
                                                  Mi smo tu da Vam pomognemo da pronađete ono što Vam je potrebno, bilo da se radi o lekovima ili osvežavajućim proizvodima za negu.
                                                  Imamo stručan tim koji će Vam pružiti savet i pomoć u bilo kojem trenutku. Posetite nas i uverite se u našu kvalitet i uslugu. Hvala što ste nas odabrali!
                                        </BannerText>
                                        <BannerShopButton color="primary" >
                                                  <Link href="/products">Proizvodi</Link>
                                        </BannerShopButton>
                              </BannerContent>
                    </BannerContainer >
          )
}
