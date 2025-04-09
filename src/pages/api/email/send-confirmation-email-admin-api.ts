import type { NextApiRequest, NextApiResponse } from 'next';
import ICartItem from '@/interfaces/cart/cart.interface';
import { EmailData } from '@/interfaces/email/email-to-fields.interface';
import { Colors } from '@/styles/theme';
import { transporter } from '../../../services/email/email-config';

const SendConfirmMessageToAdminAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data: EmailData = req.body;

    const emailToClientSubject = 'Poruka iz naše male apoteke DAR';

    if (!data || !data.name || !data.email || !data.subject || !data.order.items || data.order.items.length <= 0) {
      return res.status(400).json({ message: 'Bad request, data missing' });
    }

    const htmlForMaja = `
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              overflow-wrap: break-word;
          ">
            <h1 style="text-align: center; width: 380px; overflow-wrap: break-word;">
              Nova porudzbenica od korisnika ${data.name}!
            </h1>

            <p>Korisnik je poručio sledeće proizvode:</p>

            <ul style="padding-left: 20px;">
              ${data.order.items.map((cartItem: ICartItem) =>
      `<li style="margin-bottom: 8px;">` +
      cartItem._id.toString().slice(-8).toUpperCase() +
      " " + cartItem.name +
      " " + cartItem.quantity +
      " * " + cartItem.count +
      `</li>`
    ).join('')}
            </ul>

            <br/>
            <p>Ove proizvode je potrebno poslati na adresu:</p>
            <br/>
            <p>${data.country}<br/>${data.city}<br/>${data.streetAddress}<br/>${data.phoneNumber}<br/>${data.customerEmail}</p>

            <button style="background-color: #ef7272; color: #05072d; padding: 10px; border-radius: 5px; cursor: pointer; border: none;">
              <a href="mailto:${data.customerEmail}?subject=${emailToClientSubject}" style="text-decoration: none;">
                Pošalji poruku kupcu
              </a>
            </button>
          </div>
        </body>
      </html>
    `;

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_SERVER_USER,
        to: data.email,
        subject: data.subject,
        html: htmlForMaja,
      });

      return res.status(200).json({ status: 200, message: 'Email sent successfully' });
    } catch (err: any) {
      return res.status(500).json({ status: 500, message: err.message || 'Failed to send email' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default SendConfirmMessageToAdminAPI;
