import { Box, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import { BannerContainer, BannerLeftImageContent, BannerRightImageContent, BannerQuotaText, BannerShopButton, BannerTextContent, BannerTitle } from "../../styles/banner"
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function Banner() {

     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))

     const [loading, setLoading] = useState(false)

     return (
          <BannerContainer>
               {/* <BannerImage src="/images/home-page/darHeroPic.png" alt={"banner"} /> */}
               <BannerLeftImageContent>
                    <BannerTitle>
                         Apoteka DAR
                    </BannerTitle>
                    <BannerQuotaText>
                         {'"Radosno srce je pola zdravlja!"'}
                    </BannerQuotaText>
                    <BannerQuotaText>
                         Kućna dostava lekova, utorkom i subotom, Kragujevac i Okolina...
                    </BannerQuotaText>
                    <BannerQuotaText>
                         Nudimo pouzdane savete i širok asortiman proizvoda a za bilo kakva dodatna pitanja ohrabrujemo Vas
                         da nas kontaktirate putem <br />
                         <Link href={"/kontakt"}>
                              <Typography>
                                   kontakt forme
                              </Typography>
                         </Link> ili pozivom na broj telefona<br />
                         <Typography>
                              <a href={`tel:${+381346104222}`}>
                                   +381 34 610 4222
                              </a>
                         </Typography>
                    </BannerQuotaText>
                    <BannerShopButton color="primary" variant="outlined" loading={loading} onClick={() => setLoading(true)}>
                         <Link href={"/majana/prirodna-kozmetika"}>
                              Pogledajte ponudu
                         </Link>
                    </BannerShopButton>
                    <BannerRightImageContent />
               </BannerLeftImageContent>
          </BannerContainer >
     )
}
