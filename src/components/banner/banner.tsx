import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import { BannerContainer, BannerContent, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner"
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function Banner() {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

          const [loading, setLoading] = useState(false)

          return (
                    <BannerContainer>
                              <BannerImage src="/Logos/ailogo.png" alt={"banner"} />
                              <BannerContent>
                                        <BannerTitle>
                                                  Apoteka DAR
                                        </BannerTitle>
                                        Dobro došli u našu i Vašu apoteku, gde se pružaju visokokvalitetni proizvodi i usluge. Mi smo tu da Vam pomognemo da pronađete ono što Vam je potrebno, bilo da se radi o lekovima ili osvežavajućim proizvodima za negu. Imamo stručan tim koji će Vam pružiti savet i pomoć u bilo kojem trenutku. Posetite nas i uverite se u naš kvalitet i uslugu. Hvala što ste nas odabrali!
                                        <BannerShopButton color="primary" variant="outlined" loading={loading} onClick={() => setLoading(true)}>
                                                  <Link href={"/proizvodi/apoteka/"}>
                                                            Pogledajte ponudu
                                                  </Link>
                                        </BannerShopButton>
                              </BannerContent>
                    </BannerContainer >
          )
}
