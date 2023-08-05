import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import { BannerContainer, BannerContent, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner"
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function Banner() {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
          const { t } = useTranslation('common')
          const [loading, setLoading] = useState(false)

          return (
                    <BannerContainer>
                              <BannerImage src="/Logos/ailogo.png" alt={"banner"} />
                              <BannerContent>
                                        <BannerTitle>
                                                  {t('homepage.banner.title')}
                                        </BannerTitle>
                                        {t('homepage.banner.banner-text')}
                                        <Link href={"/proizvodi/apoteka/bol/bolovi-u-zglobovima-i-misicima"}>
                                                  <BannerShopButton color="primary" variant="outlined" loading={loading} onClick={() => setLoading(true)}>
                                                            {t('homepage.banner.banner-button')}
                                                  </BannerShopButton>
                                        </Link>
                              </BannerContent>
                    </BannerContainer >
          )
}
