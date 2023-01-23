import { Button, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner"

export default function Banner() {
          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));

          return (
                    <BannerContainer >
                              <BannerImage src="/images/banner/banner.png" />
                              <BannerContent>
                                        <Typography variant="h6">Pretraga prizvoda</Typography>
                                        <BannerTitle variant="h2">
                                                  Naši proizvodi
                                        </BannerTitle>

                                        <BannerDescription>
                                                  Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
                                                  tempor incididunt ut labore et dolore magna
                                        </BannerDescription>

                                        <BannerShopButton color="primary">Proizvodi</BannerShopButton>
                              </BannerContent>
                    </BannerContainer>
          )
}
