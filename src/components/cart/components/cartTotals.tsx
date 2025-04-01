import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledTotalsBox, StyledTotalsPrice, StyledTotalsTitle } from '@/styles/cart'
import { Box, Button, Divider, LinearProgress, Typography } from '@mui/material'
import theme, { Colors } from '@/styles/theme'
import { useRouter } from 'next/router'

interface ICartTotalsProps {
     onClose: () => void
}

function CartTotals({ onClose }: ICartTotalsProps) {

     const totalItemPrice: any = useSelector(cartTotalPriceSelector(450))
     const router = useRouter()

     return (
          <StyledTotalsBox theme={theme}>
               <Divider sx={{ width: '60%', border: `1px solid ${theme.palette.primary.main}`, my: 2 }} />
               <StyledTotalsTitle theme={theme}>
                    Ukupno u korpi
               </StyledTotalsTitle>
               <StyledTotalsPrice>
                    {
                         !isNaN(parseFloat(totalItemPrice)) && parseFloat(totalItemPrice) < 8000 ? (
                              <Box>
                                   {(parseFloat(totalItemPrice).toFixed(2) + ' RSD')}
                                   <Box display="flex" alignItems="center" height={'20px'} gap={2}>
                                        <LinearProgress
                                             variant="determinate"
                                             value={(parseFloat(totalItemPrice) / 8000) * 100}
                                             color="error"
                                             sx={{
                                                  height: '10px',
                                                  borderRadius: '10px',
                                                  flexGrow: 1,
                                                  width: '100px'
                                             }}
                                        />
                                        <Typography color="text.secondary" fontSize={'.8rem'} sx={{ color: Colors.primary.main }}>
                                             Dostava: +450RSD
                                        </Typography>
                                   </Box>
                              </Box>
                         )
                              :
                              (
                                   <Box >
                                        {(parseFloat(totalItemPrice).toFixed(2) + ' RSD')}
                                        <Box display="flex" alignItems="center" height={'20px'}>
                                             <Typography sx={{
                                                  color: Colors.success,
                                                  fontSize: '1rem',
                                                  textAlign: 'center',
                                             }}>
                                                  Besplatna dostava
                                             </Typography>
                                        </Box>
                                   </Box>
                              )
                    }

               </StyledTotalsPrice>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1rem', textAlign: 'center' }}>
                    PDV uračunat u cenu i nema skrivenih troškova.
               </Typography>
               <Divider sx={{ width: '60%', border: `1px solid ${theme.palette.primary.main}`, my: 2 }} />
               <Box
                    sx={{
                         display: 'flex',
                         flexDirection: 'row',
                         [theme.breakpoints.down('md')]: {
                              flexDirection: 'column',
                         },
                         justifyContent: 'space-between',
                         alignItems: 'center',
                         width: '50%',
                         gap: '5px',
                    }}
               >
                    <Button onClick={onClose}>
                         <Link rel='canonical' href='/'>
                              Nazad u apoteku
                         </Link>
                    </Button>
                    <Button
                         disabled={parseFloat(totalItemPrice) === 0}
                         onClick={() => router.push('/placanje')}
                    >
                         KREIRAJ PORUDŽBENICU
                    </Button>

               </Box>
               <Divider sx={{ width: '60%', border: `1px solid ${theme.palette.primary.main}`, my: 2 }} />
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'center', mt: '30px', mb: '30px' }}>
                    Detalje isporuke i plaćanja možete pogledati <Link rel='canonical' href='/informacije/isporuka-i-placanje'>OVDE!</Link>
               </Typography>
               <Divider sx={{ width: '60%', border: `1px solid ${theme.palette.primary.main}`, my: 2 }} />
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'justify', mt: '30px', mb: '30px', maxWidth: '500px' }}>
                    Ako je neki od proizvoda na promociji (npr. kupi 2 dobiješ 3, ili na 3 kutije dobiješ 10% popusta, itd.), popust će biti obračunat prilikom slanja paketa(ne prilikom kreiranja PORUDŽBENICE).
               </Typography>
          </StyledTotalsBox>
     )
}
export default CartTotals

