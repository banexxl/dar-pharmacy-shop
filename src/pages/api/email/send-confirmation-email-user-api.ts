import type { NextApiRequest, NextApiResponse } from 'next';
import ICartItem from '@/interfaces/cart/cart.interface';
import { IEmailToFields } from '@/interfaces/email/email-to-fields.interface';
import { Colors } from '@/styles/theme';
import { transporter } from '../../../services/email/email-config';

const SendConfirmMessageToUserAPI = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const data: IEmailToFields = req.body;

        if (!data || !data.name || !data.email || !data.subject || !data.cart) {
            return res.status(400).json({ message: 'Bad request, data missing' });
        }

        const html = `
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
          <div style="
            background: linear-gradient(70deg, ${Colors.primary.main} 0%, ${Colors.primary.light} 35%, ${Colors.primary.lighter} 100%);
            border-radius: 15px;
            width: 400px;
            height: auto;
            margin: 50px auto;
            padding: 20px;
            gap: 20px;
            overflow-wrap: break-word;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
            
            <h1 style="text-align: center; width: 380px; overflow-wrap: break-word;">
              Vaša porudžbenica je primljena!
            </h1>

            <p>Poštovana/i ${data.name},</p>
            <p style="text-align: justify; width: 380px; margin-right: 5px;">
              <br>Želimo da se zahvalimo što ste odabrali <strong>DAR apoteku</strong> za vašu kupovinu.
              <br>Razumemo da imate mnogo opcija na raspolaganju i čast nam je što ste nam poverili svoje <em>zdravstvene potrebe</em>.
              <br>Kao mala kompanija, zaista cenimo vašu podršku i lojalnost. Trudimo se da našim klijentima pružimo najbolje proizvode i izuzetnu uslugu, i nadamo se da je vaše iskustvo sa nama ispunilo ili čak premašilo vaša očekivanja.
              <br><br>Još jednom vam se zahvaljujemo što ste odabrali <strong>DAR apoteku.</strong>
              <br><br>Ukoliko imate bilo kakve pitanje, ne bojte se da nas kontaktirate.
              <br><strong>Očekujte uskoro kontakt od strane našeg tima, i potvrdu tj. potvrdu statusa porudžbine.</strong>
              <br>Radujemo se što ćemo vam i u budućnosti služiti.
              <br>Srdačni pozdravi,
              <br><strong>DAR apoteka tim</strong>
            </p>

            <div style="border-radius: 15px; width: 380px; margin: 5px; align-items: center;">
              <div style="font-weight: bold; font-size: 16px;">
                Vaši proizvodi u korpi, koji će uskoro biti na putu ka vama, su:
              </div>
              <ul style="padding-left: 20px;">
                ${data.cart.map((cartItem: ICartItem) =>
            `<li style="margin-bottom: 8px;">` +
            cartItem._id.toString().slice(-8).toUpperCase() +
            " " + cartItem.name +
            " " + cartItem.quantity +
            " * " + cartItem.count +
            `</li>`
        ).join('')}
              </ul>
            </div>

            <a href="https://apoteka-dar.rs" style="
              display: block;
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
              color: white;">
              Apoteka DAR
            </a>
          </div>
        </body>
      </html>
    `;

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_SERVER_USER,
                to: data.email,
                subject: data.subject,
                html,
            });

            return res.status(200).json({ status: 200, message: 'Email sent successfully' });
        } catch (err: any) {
            return res.status(500).json({ status: 500, message: err.message || 'Failed to send email' });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
};

export default SendConfirmMessageToUserAPI;
