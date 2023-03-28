import { Container, Typography, Box, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import Banner from "../components/banner";
import Products from "../components/products";
import { UIProvider } from "../context/ui/ui.context";
import AppDrawer from "../components/navbar/drawer";
import Promotions from "../components/promotions";
import SearchBox from "../components/search"
import productsServices from '@/services/product.services'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import LoadingWheel from "@/components/loading/loading";
import img1 from '../../public/images/backgrounds/dar1.png'
import img2 from '../../public/images/backgrounds/dar2.png'
import img3 from '../../public/images/backgrounds/dar3.png'
import img4 from '../../public/images/backgrounds/dar4.png'
import img5 from '../../public/images/backgrounds/dar5.png'
import img6 from '../../public/images/backgrounds/dar6.png'
import img7 from '../../public/images/backgrounds/dar7.png'
import img8 from '../../public/images/backgrounds/dar8.png'
import Image from "next/image";




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


export default function Home(props: any) {

          const { products } = props
          const { t } = useTranslation('common')


          //this way next js does not try to render theme provider on server (no hydration error : )
          const DynamicThemeProvider = dynamic(() => import("@mui/system/ThemeProvider"), {
                    loading: () => <LoadingWheel />,
          })

          const [backgroundImageUrl, setBackgroundImageUrl] = useState(img1);

          useEffect(() => {
                    setBackgroundImageUrl(getRandomImageUrl());
          }, []);


          return (
                    <DynamicThemeProvider theme={theme}>
                              <Image src={backgroundImageUrl} width={2000} height={3000}
                                        style={{ position: 'absolute', zIndex: -1000, }}
                                        alt="img" />
                              <Head>
                                        <title>{t('homepage.title')}</title>
                              </Head>
                              <Suspense fallback={<LoadingWheel />}>
                                        <Container
                                                  disableGutters
                                                  maxWidth="lg"
                                                  sx={{
                                                            background: "#fff",
                                                            opacity: '.85'
                                                  }}
                                        >
                                                  <Stack>
                                                            <UIProvider>
                                                                      <Banner />
                                                                      <Promotions />
                                                                      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                                                                                <Typography variant="h4">Deo asortimana</Typography>
                                                                      </Box>

                                                                      <Products data={products} />

                                                                      <SearchBox />
                                                                      <AppDrawer isScreenToMedium={false} />
                                                            </UIProvider>
                                                  </Stack>
                                        </Container>
                              </Suspense>
                    </DynamicThemeProvider>
          )
}


export async function getStaticProps({ locale }: any) {

          const dbData: any = await productsServices().getProductForHomePage().then((data: any) => {
                    return data
          })

          //notFound: true -> ako vratimo ovo umesto ovog dole, vratice na 404 page tj not found page
          //redirect: {
          //           destination: "/nodata"
          // }  mozemo da proverimo da li podaci uopste postoje, ako ne, mozemo da vratimo ovo, i da uradimo redirect na drugu stranicu
          //revalidate bi trebao da ponovo odradi getstaticprops logiku

          return {
                    props: {
                              products: JSON.parse(JSON.stringify(dbData)),
                              ...(await serverSideTranslations(locale ?? 'sr-RS', [
                                        'common',
                              ])),
                    },
          }
}

