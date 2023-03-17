import EmailConfirmPurchase from '@/components/email/confirmed-purchase';
import ICartItem from '@/interfaces/cart/cart.interface';
import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import { cartTotalPriceSelector } from '@/store/cart/cart-selector';
import ReactDOMServer from "react-dom/server"
import { useSelector } from 'react-redux';
import { transporter } from '../../../services/email/email-config'

const ConfirmationEmailHandler = async (req: any, res: any) => {

          if (req.method === "POST") {

                    const data: IEmailToFields = req.body;

                    console.log("data u apiju: ", data);


                    if (!data || !data.name || !data.email || !data.subject || !data.message || !data.cart) {
                              return res.status(400).send({ message: "Bad request, data missing" });
                    }

                    try {
                              await transporter.sendMail({
                                        from: process.env.EMAIL_SERVER_USER,
                                        to: data.email,
                                        subject: data.subject,
                                        html: ReactDOMServer.renderToString(<EmailConfirmPurchase email={data.email} subject={data.subject} message={data.message} name={data.name} title={data.title} cart={data.cart} />)

                              });

                              return res.status(200).json({ success: true });

                    } catch (err: any) {
                              return res.status(400).json({ message: err });
                    }

          }
};
export default ConfirmationEmailHandler;