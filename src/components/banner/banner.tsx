import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import { BannerContainer, BannerContent, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner"
import { useTranslation } from "next-i18next";
import { useLoading } from '../../context/loading.context';

export default function Banner() {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
          const { setLoading } = useLoading();
          const { t } = useTranslation('common')
          const handleLinkClick = () => {
                    setLoading(true);
          };

          return (
                    <BannerContainer>
                              <BannerImage src="/Logos/ailogo.png" alt={"banner"} />
                              <BannerContent>
                                        <BannerTitle>
                                                  {t('homepage.banner.title')}
                                        </BannerTitle>
                                        {t('homepage.banner.banner-text')}
                                        <Link href={"/proizvodi/apoteka/alergije/irigacioni-set"}>
                                                  <BannerShopButton color="primary" onTouchStart={() => handleLinkClick()}>
                                                            {t('homepage.banner.banner-button')}
                                                  </BannerShopButton>
                                        </Link>
                              </BannerContent>
                    </BannerContainer >
          )
}
