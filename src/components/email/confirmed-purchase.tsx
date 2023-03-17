import ICartItem from '@/interfaces/cart/cart.interface';
import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import { Box, ListItem, ListItemText, Typography } from '@mui/material';
import { EmailBold, EmailButton, EmailCartList, EmailCartListItem, EmailContainer, EmailText, EmailTitle, RootContainer } from '../../styles/email/emails'
import EmailProductList from './email-product-list';

function EmailConfirmPurchase(props: IEmailToFields) {

          const { email, subject, name, message, title, cart } = props

          return (
                    <RootContainer>
                              <EmailContainer >
                                        <EmailTitle>
                                                  Thank You for Your Purchase!
                                        </EmailTitle>
                                        <EmailTitle>
                                                  Dear {name},
                                        </EmailTitle>
                                        <EmailText variant="body1" gutterBottom>
                                                  We are pleased to confirm your recent purchase on datum neki from our online store. Your order details are as follows:
                                        </EmailText>
                                        <EmailCartList >
                                                  <EmailCartListItem>
                                                            <ListItemText primary="Order Number:" secondary="[Order Number]" />
                                                  </EmailCartListItem>
                                                  <EmailProductList cartItems={cart}>
                                                            {
                                                                      cart.map((cartItem: ICartItem) => {
                                                                                <div>
                                                                                          <Typography>
                                                                                                    {cartItem.name}
                                                                                          </Typography>
                                                                                          <Typography>
                                                                                                    {cartItem.price}
                                                                                          </Typography>
                                                                                          <Typography>
                                                                                                    {cartItem.quantity}
                                                                                          </Typography>
                                                                                          <Typography>
                                                                                                    {cartItem.imageURL}
                                                                                          </Typography>
                                                                                </div>
                                                                      })
                                                            }
                                                  </EmailProductList>
                                                  <EmailCartListItem>
                                                            <ListItemText primary="Shipping Address:" secondary="[Shipping Address]" />
                                                  </EmailCartListItem>
                                                  <EmailCartListItem>
                                                            <ListItemText primary="Payment Method:" secondary="[Payment Method]" />
                                                  </EmailCartListItem>
                                                  <EmailCartListItem>
                                                            <ListItemText primary="Total Cost:" secondary="[Total Cost]" />
                                                  </EmailCartListItem>
                                        </EmailCartList>
                                        <Typography variant="body1" gutterBottom>
                                                  If you have any questions or concerns regarding your order, please feel free to contact us at [Customer Service Email] or by phone at [Customer Service Phone Number].
                                        </Typography>
                                        <Typography variant="body1" gutterBottom>
                                                  Thank you for choosing our store for your shopping needs!
                                        </Typography>
                                        <EmailButton href="[Store URL]">
                                                  Shop More
                                        </EmailButton>
                              </EmailContainer>
                    </RootContainer >
          );
}

export default EmailConfirmPurchase
