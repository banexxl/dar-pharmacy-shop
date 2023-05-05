import ICartItem from '@/interfaces/cart/cart.interface';
import { Colors } from '@/styles/theme';
import { transporter } from '../../../services/email/email-config'
import { IContactForm } from '@/interfaces/contact/contact.interface';

const ContactEmailHandler = async (req: any, res: any) => {

          if (req.method === "POST") {

                    const data: IContactForm = req.body;

                    if (!data || !data.name || !data.email || !data.message) {
                              return res.status(400).send({ message: "Bad request, data missing" });
                    }

                    const html =
                              `
                              <html>
                              <head>
                                        <meta charset="UTF-8">
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                        <style>
                                                  .container {
                                                            font-family: monospace, sans-serif;
                                                            display: grid;
                                                            background-color: ${Colors.secondary};
                                                            border-radius: 15px;
                                                            width: 400px;
                                                            margin: 0 auto;
                                                            gap: 20px;
                                                            overflow-wrap: break-word;
                                                  }

                                                 .list {
                                                            background-color: #f7e5e5;
                                                            border-radius: 15px;
                                                            width: 380px;
			                              margin: 5px;
                                                            align-items: center;
                                                  }

                                                  .list-item {
                                                            display: flex;
                                                            align-items: center;
                                                            padding: 12px 0;
                                                            box-sizing: border-box;
                                                  }

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

                                                  .list-item + .list-item {
                                                            border-top: 1px solid rgba(255,255,255,0.2);
                                                  }

                                                  .button {
                                                            padding: 8px 8px;
                                                            max-width: 150px;
                                                            background-color: ${Colors.primary};
                                                            font-size: 16px;
                                                            text-align: center;
                                                            text-decoration: none;
                                                            border-radius: 4px;
                                                            border: none;
                                                            cursor: pointer;
                                                            margin: 20px auto;
                                                  }

                                                  .button:hover {
                                                            background-color: ${Colors.dove_gray};
                                                  }
                                                  .message{
                                                            text-align: center;
                                                            width: 380px;
                                                            margin-right: 5px;
                                                  }
                                                  h1 {
                                                            text-align: center;
                                                            width: 380px;
                                                            overflow-wrap: break-word;
                                                  }

                                        </style>
                              </head>
                              <body>
                                        <div class="container">
                                                  <h1>Nova poruka od ${data.name}</h1>
                                                  <h3>${data.email}</h3>
                                                            <br>
                                                                      <p class="message">
                                                                                ${data.message}
                                                                      </p>
                    
                                                            </table>
                                                  <a href="apoteka-dar.rs" class="button">Apoteka DAR</a>
                                        </div>
                              </body>
                              </html>
                              `

                    try {
                              await transporter.sendMail({
                                        from: process.env.EMAIL_FROM,
                                        to: ['maja@apoteka-dar.rs', 'damjanovic.branislav@gmail.com'],
                                        subject: 'Poruka od klijenta',
                                        html
                              });


                              return res.status(200).json({ success: true });

                    } catch (err: any) {
                              return res.status(400).json({ message: err });
                    }

          }
};
export default ContactEmailHandler;