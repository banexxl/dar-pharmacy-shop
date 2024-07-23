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
                    <Typography>
                         Kućna dostava lekova, utorkom i subotom, Kragujevac i Okolina...
                    </Typography>
                    <Typography>
                         Nudimo pouzdane savete i širok asortiman proizvoda kako biste ostvarili svoje zdravstvene ciljeve.
                    </Typography>
                    <BannerShopButton color="primary" variant="outlined" loading={loading} onClick={() => setLoading(true)}>
                         <Link href={"/proizvodi/apoteka?part=1"}>
                              Pogledajte ponudu
                         </Link>
                    </BannerShopButton>
                    <BannerRightImageContent />
               </BannerLeftImageContent>
          </BannerContainer >
     )
}
