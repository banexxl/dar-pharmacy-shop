import type { NextApiRequest, NextApiResponse } from 'next';
import ICartItem from '@/interfaces/cart/cart.interface';
import { EmailData } from '@/interfaces/email/email-to-fields.interface';
import { Colors } from '@/styles/theme';
import { transporter } from '../../../services/email/email-config';

const SendConfirmMessageToUserAPI = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'POST') {
    const data: EmailData = req.body;

    if (!data || !data.name || !data.email || !data.subject || data.order.items.length <= 0) {
      return res.status(400).json({ message: 'Bad request, data missing' });
    }

    const html = `
      <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(70deg, ${Colors.primary.main}, ${Colors.primary.light}, ${Colors.primary.lighter}); border-radius: 15px; padding: 20px; margin: 50px auto; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <h1 style="margin: 0; font-size: 24px; color: rgb(151, 3, 3);">Vaša porudžbenica je primljena!</h1>
              </td>
            </tr>
            <tr>
              <td style="text-align: left; font-size: 16px; color: rgb(151, 3, 3);">
                <p>Poštovana/i ${data.name},</p>
                <p style="text-align: justify;">
                  Želimo da se zahvalimo što ste odabrali <strong>DAR apoteku</strong> za vašu kupovinu.
                  <br />Razumemo da imate mnogo opcija na raspolaganju i čast nam je što ste nam poverili svoje <em>zdravstvene potrebe</em>.
                  <br />Kao mala kompanija, zaista cenimo vašu podršku i lojalnost.
                  <br />Trudimo se da našim klijentima pružimo najbolje proizvode i izuzetnu uslugu, i nadamo se da je vaše iskustvo sa nama ispunilo ili čak premašilo vaša očekivanja.
                  <br /><br />Još jednom vam se zahvaljujemo što ste odabrali <strong>DAR apoteku.</strong>
                  <br /><br />Ukoliko imate bilo kakve pitanje, ne oklevajte da nas kontaktirate.
                  <br /><strong>Očekujte uskoro kontakt od strane našeg tima, i potvrdu statusa porudžbine.</strong>
                  <br />Radujemo se što ćemo vam i u budućnosti služiti.
                  <br />Srdačni pozdravi,
                  <br /><strong>DAR apoteka tim</strong>
                  <br />PIB: 113127282
                  <br />Adresa: Kralja Aleksandra I Karadjordjevica 102, lokal 9, 34000 Kragujevac
                </p>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <p style="font-weight: bold; color: rgb(0, 0, 0);">Vaši podaci:</p>
                  <ul style="padding-left: 20px;">
                    <li style="margin-bottom: 8px;">Ime i prezime: ${data.name}</li>
                    <li style="margin-bottom: 8px;">Email: ${data.email}</li>
                    <li style="margin-bottom: 8px;">Adresa: ${data.streetAddress}</li>
                    <li style="margin-bottom: 8px;">Grad: ${data.city}</li>
                    <li style="margin-bottom: 8px;">Država: ${data.country}</li>
                  </ul>
                </div>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <div style="font-weight: bold; color: rgb(0, 0, 0);">Broj porudžbine: </div>
                  <p style="color: rgb(151, 3, 3);">${data.order.orderNumber}</p>
                </div>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <p style="font-weight: bold; color: rgb(1, 0, 0);">Vaši proizvodi u korpi (PDV uračunat u cenu):</p>
                  <ul style="padding-left: 20px;">
                    ${data.order.items.map((cartItem: ICartItem) => `
                      <li style="margin-bottom: 8px; list-style-type: disc; color: rgb(151, 3, 3);">
                        ${cartItem._id.toString().slice(-8).toUpperCase()} ${cartItem.name} ${cartItem.quantity} * ${cartItem.count} = ${cartItem.price.toFixed(2)} RSD
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <div style="font-weight: bold; color: rgb(0, 0, 0);">Ukupno (sa PDV): </div>
                  <p style="color: rgb(151, 3, 3);">${Number(data.order.totalAmount) < 8000 ? data.order.totalAmount.toFixed(2) + 'RSD + dostava' : data.order.totalAmount.toFixed(2) + 'RSD /besplatna dostava'}</p>
                </div>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <div style="font-weight: bold; color: rgb(0, 0, 0);">Način plaćanja:</div>
                  <p style="color: rgb(151, 3, 3);">${data.order.paymentMethod === 'cash-on-delivery' ? 'Plaćanje pouzećem' : data.order.paymentMethod}</p>
                </div>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <div style="font-weight: bold; color: rgb(0, 0, 0);">Status Porudžbine:</div>
                  <p style="color: rgb(151, 3, 3);">${data.order.orderStatus === 'pending' ? 'Poručeno' : data.order.orderStatus}</p>
                </div>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <div style="font-weight: bold; color: rgb(0, 0, 0);">Status Plaćanja:</div>
                  <p style="color: rgb(151, 3, 3);">${data.order.paymentStatus === 'pending' ? 'Plaćanje pouzećem' : data.order.paymentStatus}</p>
                </div>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <div style="font-weight: bold; color: rgb(0, 0, 0);">Broj Transakcije:</div>
                  <p style="color: rgb(151, 3, 3);">${data.order.transactionNumber === 'cash-on-delivery' ? 'Plaćanje pouzećem' : data.order.transactionNumber}</p>
                </div>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <div style="font-weight: bold; color: rgb(0, 0, 0);">Datum Transakcije:</div>
                  <p style="color: rgb(151, 3, 3);">${new Date(data.order.transactionDate).toLocaleString('sr-RS', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })}</p>
                </div>

                <div style="margin-top: 20px; color: rgb(151, 3, 3);">
                  <div style="font-weight: bold; color: rgb(0, 0, 0);">Referentni ID:</div>
                  <p style="color: rgb(151, 3, 3);">${data.order.referenceId === 'cash-on-delivery' ? 'Plaćanje pouzećem' : data.order.referenceId}</p>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <a href="https://apoteka-dar.rs" style="
                    display: inline-block;
                    padding: 10px 20px;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                  ">
                    Apoteka DAR
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
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
