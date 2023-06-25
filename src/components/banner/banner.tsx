import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import { BannerContainer, BannerContent, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner"
import { useTranslation } from "next-i18next";


export default function Banner() {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
          const { t } = useTranslation('common')

          return (
                    <BannerContainer>

                              <BannerImage src="/Logos/ailogo.png" alt={"banner"} />
                              <BannerContent>
                                        <BannerTitle>
                                                  {t('homepage.banner.title')}
                                        </BannerTitle>
                                        {t('homepage.banner.banner-text')}
                                        <BannerShopButton color="primary" >
                                                  <Link href="/products">{t('homepage.banner.banner-button')}</Link>
                                        </BannerShopButton>
                              </BannerContent>
                    </BannerContainer >
          )
}
