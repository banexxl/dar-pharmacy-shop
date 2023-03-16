import ICartItem from '@/interfaces/cart/cart.interface';
import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import { Typography } from '@mui/material';
import { EmailBold, EmailButton, EmailCartList, EmailContainer, EmailText, EmailTitle, RootContainer } from '../../styles/email/emails'

function EmailConfirmPurchase(props: IEmailToFields) {

          const { email, subject, name, message, title, cart } = props

          console.log("cart itemi  u komponenti", cart);


          return (
                    <RootContainer>
                              <EmailContainer >
                                        <EmailTitle>
                                                  Thank You for Your Purchase!
                                        </EmailTitle>
                                        <EmailTitle>
                                                  Dear [Customer Name],
                                        </EmailTitle>
                                        <EmailText variant="body1" gutterBottom>
                                                  We are pleased to confirm your recent purchase on [Date] from our online store. Your order details are as follows:
                                        </EmailText>
                                        <EmailCartList >
                                                  {/* <ListItem>
                                                            <ListItemText primary="Order Number:" secondary="[Order Number]" />
                                                  </ListItem>
                                                  <ListItem>
                                                            <ListItemText primary="Items:" />
                                                            <List className={classes.list}>
                                                                      <ListItem className={classes.listItem}>
                                                                                <ListItemText primary="[Item 1]" />
                                                                      </ListItem>
                                                                      <ListItem className={classes.listItem}>
                                                                                <ListItemText primary="[Item 2]" />
                                                                      </ListItem>
                                                                      <ListItem className={classes.listItem}>
                                                                                <ListItemText primary="..." />
                                                                      </ListItem>
                                                            </List>
                                                  </ListItem>
                                                  <ListItem>
                                                            <ListItemText primary="Shipping Address:" secondary="[Shipping Address]" />
                                                  </ListItem>
                                                  <ListItem>
                                                            <ListItemText primary="Payment Method:" secondary="[Payment Method]" />
                                                  </ListItem>
                                                  <ListItem>
                                                            <ListItemText primary="Total Cost:" secondary="[Total Cost]" />
                                                  </ListItem> */}
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
                    </RootContainer>
          );
}

export default EmailConfirmPurchase
