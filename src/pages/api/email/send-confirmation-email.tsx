import ICartItem from '@/interfaces/cart/cart.interface';
import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import { cartTotalPriceSelector } from '@/store/cart/cart-selector';
import { Colors } from '@/styles/theme';
import { useSelector } from 'react-redux';
import { transporter } from '../../../services/email/email-config'

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
                                        <style>
                                                  .container {
                                                            font-family: cursive, sans-serif;
                                                            display: grid;
                                                            background-color: ${Colors.secondary};
                                                            border-radius: 15px;
                                                            width: 800px;
                                                            margin: 0 auto;
                                                            gap: 20px;
                                                  }

                                                 .list {
                                                            background-color: #f7e5e5;
                                                            border-radius: 15px;
                                                            width: 600px;
			                              margin: 0 auto;
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
                                                            text-align: center
                                                  }
                                                  h1 {
                                                            text-align: center
                                                  }

                                        </style>
                              </head>
                              <body>
                                        <div class="container">
                                                  <h1>Vaša porudžbenica je primljena!</h1>
                                                  <br>&nbsp;&nbsp;&nbsp;Poštovana/i ${data.name}, 
                                                            <br>
                                                                      <p class="message">
                                                                                <br>Želimo da se zahvalimo što ste odabrali <strong>DAR apoteku</strong> za vašu nedavnu kupovinu. <br>
                                                                                <br>Razumemo da imate mnogo opcija na raspolaganju i čast nam je što ste nam poverili svoje <em>zdravstvene potrebe</em> <br>
                                                                                <br>Kao mala kompanija, zaista cenimo vašu podršku i lojalnost. Trudimo se da našim klijentima pružimo najbolje 
                                                                                proizvode i izuzetnu uslugu, i nadamo se da je vaše iskustvo sa nama ispunilo ili čak premašilo vaša očekivanja.
                                                                                <br><br>Još jednom vam se zahvaljujemo što ste odabrali <strong>DAR apoteku</strong> 
                                                                                <br>Radujemo se što ćemo vam i u budućnosti služiti. <br>
                                                                                <br>Srdačni pozdravi,
                                                                                <br><strong>DAR apoteka tim</strong>
                                                                      </p>
                                                            <table class="list">
                                                                      <tr >
                                                                                <td>
                                                                                          <strong>Proizvodi koje ste poručili su:</strong>
                                                                                </td>
                                                                      </tr>

                                                                      <tr class="list-item">
                                                                                ${names}
                                                                      </tr>

                                                                      <tr class="list-item">
                                                                                ${quantity}
                                                                      </tr>         
                                                            </table>
                                                  <a href="apoteka-dar.rs" class="button">Apoteka DAR</a>
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