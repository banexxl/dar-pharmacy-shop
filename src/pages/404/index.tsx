import SearchBox from '@/components/search/search'
import { Seo } from '@/components/seo'
import { UIProvider } from '@/context/ui/ui.context'
import { Colors } from '@/styles/theme'
import { Container, Stack, Typography, Button, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const PageNotFount = () => {

     // ThemeProvider is applied globally in _app.tsx

     return (
          <>
               <Seo title={'Stranica nije pronađena'} description={'Stranica nije pronađena'} url={'https://www.apoteka-dar.rs/'} />
               <Container

                    maxWidth="xl"
                    sx={{
                         background: "#fff",
                    }}
               >
                    <Stack>
                         <UIProvider>
                              <Box className="Container404" sx={{ textAlign: 'center', py: { xs: 6, md: 10 }, '& .Heading404, & .Message404': { display: 'none' } }}>
                                   <Typography className="Heading404">404 - Stranica nije pronaÄ‘ena {'\u{1F612}'}</Typography>
                                   <Typography className="Message404" variant="body1">
                                        UPS!....Stranica ili proizvod koji ste zahtevali nije pronaÄ‘en! MoÅ¾da iznenadi i pojavi se posle osveÅ¾avanja stranice {'\u{1F609}'}
                                   </Typography>
                                   <Box sx={{ mt: 4 }}>
                                        <Typography variant="h2" sx={{ fontWeight: 800, color: Colors.primary.main, mb: 1 }}>
                                             404 — Stranica nije pronađena
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                                             Ups! Stranica ili proizvod koji ste zahtevali nije pronađen.
                                        </Typography>
                                        <Link rel='canonical' href="/" passHref>
                                             <Button className="StyledButton404" variant="contained" color="primary">
                                                  Nazad na početnu
                                             </Button>
                                        </Link>
                                   </Box>
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
