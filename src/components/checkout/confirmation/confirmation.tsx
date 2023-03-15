import CartItem from '@/components/cart/components/cartItem'
import ICartItem from '@/interfaces/cart/cart.interface'
import { sendForm } from '@/services/email/send-email'
import { cartTotalPriceSelector } from '@/store/cart/cart-selector'
import { CartWrapper, StyledTableCell, StyledTableHead, StyledTableRow } from '@/styles/cart'
import { Button, Paper, Table, TableBody } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Confirmation() {

          const cart: ICartItem[] = useSelector((state: any) => state.cart)
          const totalItemPrice: any = useSelector(cartTotalPriceSelector)

          return (
                    <CartWrapper component={Paper}>
                              <Table aria-label="customized table"
                              >
                                        <StyledTableHead>
                                                  <StyledTableRow>
                                                            <StyledTableCell>Slika</StyledTableCell>
                                                            <StyledTableCell align="left">Naziv</StyledTableCell>
                                                            <StyledTableCell align="left">Pakovanje</StyledTableCell>
                                                            <StyledTableCell align="left">Sifra</StyledTableCell>
                                                            <StyledTableCell align="left">Kolicina</StyledTableCell>
                                                            <StyledTableCell align="left">Cena</StyledTableCell>
                                                            <StyledTableCell align="left">Ukupno</StyledTableCell>
                                                  </StyledTableRow>
                                        </StyledTableHead>
                                        <TableBody>
                                                  {cart.map((cartItem: ICartItem) => (
                                                            <CartItem key={cartItem._id} count={cartItem.count} _id={cartItem._id}
                                                                      name={cartItem.name} description={cartItem.description} category={cartItem.category}
                                                                      availableStock={cartItem.availableStock} ingredients={cartItem.ingredients}
                                                                      instructions={cartItem.instructions} quantity={cartItem.quantity}
                                                                      warning={cartItem.warning} imageURL={cartItem.imageURL} price={cartItem.price} />
                                                  ))}
                                        </TableBody>
                              </Table>
                              Ukupno sa PDV-om: {parseFloat(totalItemPrice).toFixed(2)} RSD
                              <Button sx={{ color: 'white' }}
                                        onClick={() => sendForm({ email: 'damjanovic.branislav@gmail.com', subject: 'Potvrda porudzbine', name: 'Nesta', title: 'majaidrugari@gmail.com', message: 'majaidrugari@gmail.com' })}>
                                        Na placanje
                              </Button>
                    </CartWrapper>
          )
}

export default Confirmation