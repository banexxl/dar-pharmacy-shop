import ICartItem from '@/interfaces/cart/cart.interface';
import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import { cartTotalPriceSelector } from '@/store/cart/cart-selector';
import { Colors } from '@/styles/theme';
import { useSelector } from 'react-redux';
import { transporter } from '../../../services/email/email-config'
import ReactDOMServer from 'react-dom/server';

const ConfirmationEmailHandler = async (req: any, res: any) => {

          if (req.method === "POST") {

                    const data: IEmailToFields = req.body;

                    if (!data || !data.name || !data.email || !data.subject || !data.message || !data.cart) {
                              return res.status(400).send({ message: "Bad request, data missing" });
                    }

                    const names = data.cart.map((cartItem: ICartItem) => cartItem.name)
                    const quantity = data.cart.map((cartItem: ICartItem) => cartItem.quantity)

                    const html =
                              `
                              <html>
                              <head>
                                        <meta charset="UTF-8">
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                        <title>Postovani potrosacu</title>
                                        <style>
                                                  .container {
                                                            display: flex;
                                                            background-color: ${Colors.secondary};
                                                            border-radius: 15px;
                                                            width: 800px;
                                                            margin: 0 auto;
                                                  }
                                                 .list {
                                                            background-color: #f7e5e5;
                                                            border-radius: 15px;
                                                            width: 600px;
			                              margin: 0 auto;
                                                            align-items: center;
                                                  }

                                                  /* List element */
                                                  .list-item {
                                                  display: flex;
                                                  align-items: center;
                                                  padding: 12px 0;
                                                  box-sizing: border-box;
                                                  }


                                                  /* Element counter */
                                                  .list-item::before {
                                                  font-size: 1.5rem;
                                                  text-align: right;
                                                  font-weight: bold;
                                                  min-width: 50px;
                                                  padding-right: 12px;
                                                  align-self: flex-start;
                                                  background-image: linear-gradient(to bottom, aquamarine, orangered);
                                                  background-attachment: fixed;
                                                  
                                                  }


                                                  /* Element separation */
                                                  .list-item + .list-item {
                                                  border-top: 1px solid rgba(255,255,255,0.2);
                                                  }

                                                  .button {
                                                  display: inline-block;
                                                  padding: 12px 20px;
                                                  background-color: #007bff;
                                                  color: #fff;
                                                  font-size: 16px;
                                                  text-align: center;
                                                  text-decoration: none;
                                                  border-radius: 4px;
                                                  border: none;
                                                  cursor: pointer;
                                        }
                                        .button:hover {
                                                  background-color: #0069d9;
                                        }
                                        </style>
                              </head>
                              <body>
                                        <div class="container">
                                                  <table class="list">
                                                            <tr class="list-item">
                                                                      <td>
                                                                                <h1>Your Email Heading Here</h1>
                                                                      </td>
                                                            </tr>

                                                            <tr class="list-item">
                                                                      <td>
                                                                                <p>Your email content here.</p>
                                                                      </td>
                                                            </tr>

                                                            <tr class="list-item">
                                                                      ${names}
                                                            </tr>

                                                            <tr class="list-item">
                                                                      ${quantity}
                                                            </tr>

                                                            <tr class="list-item">
                                                                      <td>
                                                                                <p>You can use <a href="https://www.w3schools.com/html/html_entities.asp" target="_blank">HTML entities</a> for special characters like © or ™.</p>
                                                                                <a href="#" class="button">Button Text Here</a>
                                                                      </td>
                                                            </tr>
                                                            
                                                            
                                                  </table>
                                        </div>
                              </body>
                              </html>
                              `

                    try {
                              await transporter.sendMail({
                                        from: process.env.EMAIL_SERVER_USER,
                                        to: data.email,
                                        subject: data.subject,
                                        html

                              });


                              return res.status(200).json({ success: true });

                    } catch (err: any) {
                              return res.status(400).json({ message: err });
                    }

          }
};
export default ConfirmationEmailHandler;