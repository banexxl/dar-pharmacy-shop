import LoadingWheel from '@/components/loading/loading'
import AppDrawer from '@/components/navbar/drawer/drawer'
import SearchBox from '@/components/search/search'
import { Seo } from '@/components/seo'
import { UIProvider } from '@/context/ui/ui.context'
import theme from '@/styles/theme'
import { Container, Stack, Box, Typography, Button } from '@mui/material'
// removed per-page ThemeProvider; using global provider
import Link from 'next/link'
import React from 'react'

const PageNotFount = () => {

     // ThemeProvider is applied globally in _app.tsx

     return (
          <>
               <Seo title={'Stranica nije pronaÄ‘ena'} description={'Stranica nije pronaÄ‘ena'} url={'https://www.apoteka-dar.rs/'} />
               <Container

                    maxWidth="xl"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <Box className="container-404">
                                   <Typography className="heading-404">404 - Stranica nije pronaÄ‘ena {'\u{1F612}'}</Typography>
                                   <Typography className="message-404" variant="body1">
                                        UPS!....Stranica ili proizvod koji ste zahtevali nije pronaÄ‘en! MoÅ¾da iznenadi i pojavi se posle osveÅ¾avanja stranice {'\u{1F609}'}
                                   </Typography>
                                   <Link rel='canonical' href="/" passHref>
                                        <Button className="styled-button-404" variant="contained" color="primary">
                                             Nazad na poÄetnu
                                        </Button>
                                   </Link>
                              </Box>
                              <SearchBox />

                         </UIProvider>
                    </Stack>
               </Container>
          </>
     )
}

export async function getStaticProps({ locale }: any) {
     return {
          props: {
               //...(await serverSideTranslations('sr-RS'))
               // ...(await serverSideTranslations('sr-RS' ?? context.locale, ['common'], null, ['en-US', 'sr-RS'])),
               // Will be passed to the page component as props
          },
     }
}


export default PageNotFount
