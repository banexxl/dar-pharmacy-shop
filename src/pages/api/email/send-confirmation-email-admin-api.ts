import ICartItem from '@/interfaces/cart/cart.interface';
import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import { cartTotalPriceSelector } from '@/store/cart/cart.selector';
import { Colors } from '@/styles/theme';
import { useSelector } from 'react-redux';
import { transporter } from '../../../services/email/email-config'

const SendConfirmMessageToAdminAPI = async (req: any, res: any) => {

     if (req.method === "POST") {

          const data: IEmailToFields = req.body;

          if (!data || !data.name || !data.email || !data.subject || !data.cart) {
               return res.status(400).send({ message: "Bad request, data missing" });
          }

          const htmlForMaja =
               `
                              <html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div style="
        font-family: monospace, sans-serif;
        display: grid;
        background-color: ${Colors.primary.lighter};
        border-radius: 15px;
        padding: 20px;
        height: auto;
        width: 400px;
        margin: 0 auto;
        gap: 20px;
        overflow-wrap: break-word;">
        
        <h1 style="
            text-align: center;
            width: 380px;
            overflow-wrap: break-word;">
            Nova porudzbenica od korisnika ${data.name}!
        </h1>
        
        <p>Korisnik je poručio sledeće proizvode:</p>
        
        <ul style="padding-left: 20px;">
            ${data.cart.map((cartItem: ICartItem) =>
                    `<li style="margin-bottom: 8px;">`
                    + cartItem._id.toString().slice(-8).toUpperCase()
                    + " " + cartItem.name
                    + " " + cartItem.quantity + " "
                    + "*" + " " + cartItem.count
                    + `</li>`).join('')}
        </ul>
        
        <br/>
        <p>Ove proizvode je potrebno poslati na adresu:</p>
        <br/>
        <p>${data.country}<br/>${data.city}<br/>${data.streetAddress}<br/>${data.phoneNumber}<br/>${data.email}</p>
    </div>
</body>
</html>

                              `

          try {
               await transporter.sendMail({
                    from: process.env.EMAIL_SERVER_USER,
                    to: data.email,
                    subject: data.subject,
                    html: htmlForMaja
               });

               return res.status(200).json({ success: true });

          } catch (err: any) {
               return res.status(400).json({ message: err });
          }

     }
};

export default SendConfirmMessageToAdminAPI