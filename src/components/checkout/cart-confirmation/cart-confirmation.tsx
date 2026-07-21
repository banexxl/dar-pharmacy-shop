import CartItem from '@/components/cart/components/cartItem'
import ICartItem from '@/interfaces/cart/cart.interface'
import { cartTotalPriceSelector } from '@/store/cart/cart.selector'
import { Box, TableRow, Typography, Container, Table, TableHead, TableCell, TableBody, Button, TableContainer } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IConfirmationProps } from '@/interfaces/checkout/confirmation.interface'
import Link from 'next/link'
import theme, { Colors } from '@/styles/theme'
import { ReCaptcha, useReCaptcha } from 'next-recaptcha-v3'

export const Confirmation: FunctionComponent<IConfirmationProps> = (props: IConfirmationProps) => {

     const cart = useSelector((state: any) => state.persistReduce.cartSliceReducer)
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down('md'))
     const totalItemPrice: any = useSelector(cartTotalPriceSelector)


     const [submitEnabled, setSubmitEnabled] = useState<boolean>(false)
     const { executeRecaptcha, loaded } = useReCaptcha();
     const [token, setToken] = useState<string>('');

     useEffect(() => {
          if (loaded) {
               const generateToken = async () => {
                    const newToken = await executeRecaptcha("form_submit");
                    setToken(newToken);
               };
               generateToken();
          }
     }, [loaded, executeRecaptcha]);

     const handleBack = () => {
          props.tabIndex === 1 ? props.setTab?.(props.tabIndex - 1) : null
     };

     const handleNext = () => {
          props.tabIndex === 1 ? props.setTab?.(props.tabIndex + 1) : null
     };

     return (
          <Container className="CartWrapper" disableGutters sx={{ px: { xs: 1, sm: 0 }, width: '100%', maxWidth: '100%' }}>
               <TableContainer sx={{
                    maxHeight: isScreenToMedium ? '60vh' : 'none',
                    overflowY: isScreenToMedium ? 'auto' : 'visible',
                    overflowX: isScreenToMedium ? 'auto' : 'visible',
                    mb: { xs: 2, md: 0 }
               }}>
                    <Table size={isScreenToMedium ? 'small' : 'medium'} className="StyledTable" sx={{ minWidth: isScreenToMedium ? 640 : 'auto' }}>
                         <TableHead className="StyledHeader">
                              <TableRow>
                                   <TableCell sx={{ width: { xs: 72, md: 88 }, color: Colors.primary.main }}>Slika</TableCell>
                                   <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Naziv</TableCell>
                                   <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Pakovanje</TableCell>
                                   <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Kod</TableCell>
                                   <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Količina</TableCell>
                                   <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Cena sa PDV</TableCell>
                                   <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Ukupno sa popustom</TableCell>
                                   <TableCell className="StyledHeaderCell" sx={{ color: Colors.primary.main }}>Obriši</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody className="StyledTableBody">
                              {cart.map((cartItem: ICartItem) => (
                                   <CartItem discount={cartItem.discount} key={cartItem._id} count={cartItem.count} _id={cartItem._id}
                                        name={cartItem.name} description={cartItem.description} category={cartItem.category}
                                        availableStock={cartItem.availableStock} ingredients={cartItem.ingredients}
                                        discountAmount={cartItem.discountAmount}
                                        instructions={cartItem.instructions} quantity={cartItem.quantity}
                                        warning={cartItem.warning} imageURL={cartItem.imageURL} price={cartItem.price}
                                        quantityUnit={cartItem.quantityUnit} mediaURLs={[]} slug={cartItem.slug} />
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
               <Typography sx={{ color: Colors.primary.main }}>
                    {totalItemPrice < 8000 ? `Ukupno sa PDV: ${parseFloat(totalItemPrice).toFixed(2)} RSD` : `Ukupno sa PDV, besplatna dostava: ${parseFloat(totalItemPrice).toFixed(2)} RSD`}
               </Typography>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1rem', textAlign: 'center' }}>
                    PDV uračunat u cenu i nema skrivenih troškova
               </Typography>
               {totalItemPrice < 8000 ? (
                    <Typography>
                         Troškove dostave požete videti {' '}
                         <Link rel='canonical' href='http://www.postexpress.rs/struktura/lat/cenovnik/cenovnik-unutrasnji-saobracaj.asp' target='_blank'>OVDE!</Link>
                    </Typography>
               ) : (
                    <Typography sx={{ color: Colors.primary.main }}>Dostava besplatna</Typography>
               )}
               <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', mt: 1 }}>
                    <Button className="CheckoutNextPrevButton" type='submit' sx={{ maxWidth: '100px', width: { xs: '100%', sm: 'auto' } }} startIcon={<NavigateBeforeIcon />} onClick={() => handleBack()}>
                         Nazad
                    </Button>
                    <Button className="CheckoutNextPrevButton" onClick={() => handleNext()} sx={{ maxWidth: '100px', width: { xs: '100%', sm: 'auto' } }} endIcon={<NavigateNextIcon />} disabled={!submitEnabled}>
                         Dalje
                    </Button>
               </Box>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'center', mt: '30px' }}>
                    Detalje isporuke i plaćanja možete pogledati <Link rel='canonical' href='/informacije/isporuka-i-placanje'>OVDE!</Link>
               </Typography>
               <Typography sx={{ color: Colors.primary.main, fontSize: '1.3rem', textAlign: 'justify', mt: '10px', mb: '30px', maxWidth: '500px' }}>
                    Ako je neki od proizvoda na promociji (npr. kupi 2 dobiješ 3, ili na 3 kutije dobiješ 10% popusta, itd.), popust će biti obračunat prilikom slanja paketa(ne prilikom kreiranja PORUDŽBENICE).
               </Typography>
               <ReCaptcha onValidate={() => { setSubmitEnabled(true) }} action={'form_submit'} reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
          </Container>
     )
}

export default Confirmation
