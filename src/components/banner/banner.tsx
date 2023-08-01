import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import LoadingWheel from '@/components/loading/loading'
import { BannerContainer, BannerContent, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner"
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Banner() {

          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"))
          const { t } = useTranslation('common')

          const router = useRouter();
          const [isLoading, setIsLoading] = useState(false);

          const handleClick = (e: any) => {
                    e.preventDefault();
                    setIsLoading(true);
                     setTimeout(
                               () => router.push("/proizvodi/apoteka"), 3000
                     )
                    setIsLoading(false);
          };

          return (
                    <>
                              {
                                        isLoading ? <LoadingWheel /> :
                                                  <BannerContainer>
                                                            <BannerImage src="/Logos/ailogo.png" alt={"banner"} />
                                                            <BannerContent>
                                                                      <BannerTitle>
                                                                                {t('homepage.banner.title')}
                                                                      </BannerTitle>
                                                                      {t('homepage.banner.banner-text')}
                                                                      <BannerShopButton color="primary" onClick={(e: any) => handleClick(e)}>
                                                                                <Link href={"/proizvodi/apoteka"}>
                                                                                          {t('homepage.banner.banner-button')}
                                                                                </Link>
                                                                      </BannerShopButton>
                                                            </BannerContent>
                                                  </BannerContainer >
                              }
                    </>
          )
}
