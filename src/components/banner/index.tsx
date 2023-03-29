import { Button, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import Link from "next/link";
import Image from "next/image";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner"
import img1 from '../../../public/images/backgrounds/dar1.png'
import img2 from '../../../public/images/backgrounds/dar2.png'
import img3 from '../../../public/images/backgrounds/dar3.png'
import img4 from '../../../public/images/backgrounds/dar4.png'
import img5 from '../../../public/images/backgrounds/dar5.png'
import img6 from '../../../public/images/backgrounds/dar6.png'
import img7 from '../../../public/images/backgrounds/dar7.png'
import img8 from '../../../public/images/backgrounds/dar8.png'
import { useEffect, useState } from "react";

const backgroundImageUrls = [
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img7,
          img8,
];

const getRandomImageUrl = () => {
          return backgroundImageUrls[Math.floor(Math.random() * backgroundImageUrls.length)];
};



export default function Banner() {
          const theme = useTheme();
          const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));

          const [backgroundImageUrl, setBackgroundImageUrl] = useState(img1);

          useEffect(() => {
                    setBackgroundImageUrl(getRandomImageUrl());
          }, []);

          return (
                    <BannerContainer>
                              <BannerImage src="/Logos/ailogo.png" />
                              <BannerContent>
                                        <Image src={backgroundImageUrl} height={500} width={500} placeholder="blur"
                                                  style={{ position: 'absolute' }}
                                                  alt="img" />
                                        <Typography variant="h6">Apoteka DAR</Typography>

                                        <BannerTitle variant="h2">

                                        </BannerTitle>

                                        <BannerDescription>
                                                  Dobro došli u našu apoteku, gde se pružaju visokokvalitetni proizvodi i usluge.
                                                  Mi smo tu da Vam pomognemo da pronađete ono što Vam je potrebno, bilo da se radi o lekovima ili osvežavajućim proizvodima za negu.
                                                  Imamo stručan tim koji će Vam pružiti savet i pomoć u bilo kojem trenutku. Posetite nas i uverite se u našu kvalitet i uslugu. Hvala što ste nas odabrali!
                                        </BannerDescription>

                                        <BannerShopButton color="primary" >
                                                  <Link href="/products">Proizvodi</Link>
                                        </BannerShopButton>

                              </BannerContent>
                    </BannerContainer >
          )
}
