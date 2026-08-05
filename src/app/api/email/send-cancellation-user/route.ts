import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/services/email/email-config';
import { logAction } from '@/services/logger';

export interface CancellationEmailData {
  email: string;
  name: string;
  order_number: string;
  total: number;
  items: { name: string; count: number; price: number }[];
}

export async function POST(request: NextRequest) {
  const data: CancellationEmailData = await request.json();

  if (!data || !data.email || !data.order_number) {
    logAction({ action: 'email.send_user_cancellation', success: false, method: 'POST', path: '/api/email/send-cancellation-user', error_message: 'Bad request' });
    return NextResponse.json({ message: 'Bad request', status: 400 }, { status: 400 });
  }

  try {
    const itemsList = Array.isArray(data.items)
      ? data.items.map((item) => `<li>${item.name} x${item.count}</li>`).join('')
      : '';

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: `Otkazana porudžbina #${data.order_number} - Apoteka DAR`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://apoteka-dar.rs/images/home-page/apotekaDar.jpg" alt="Apoteka DAR" width="80" style="border-radius: 50%;" />
          </div>
          <h2 style="color: #EF4444; text-align: center;">Porudžbina otkazana</h2>
          <p>Poštovani/a ${data.name},</p>
          <p>Vaša porudžbina <strong>#${data.order_number}</strong> je uspešno otkazana.</p>
          ${itemsList ? `<h3>Stavke koje su bile u porudžbini:</h3><ul>${itemsList}</ul>` : ''}
          <p><strong>Iznos:</strong> ${data.total.toFixed(2)} RSD</p>
          <p>Ukoliko imate bilo kakvih pitanja, slobodno nas kontaktirajte.</p>
          <hr />
          <p style="text-align: center; color: #666;">Vaša <a href="https://apoteka-dar.rs" style="color: #EF4444;">Apoteka DAR</a></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    logAction({ action: 'email.send_user_cancellation', success: true, email: data.email, method: 'POST', path: '/api/email/send-cancellation-user', metadata: { order_number: data.order_number } });
    return NextResponse.json({ message: 'Email sent!', status: 200 });
  } catch (error) {
    console.error('User cancellation email error:', error);
    logAction({ action: 'email.send_user_cancellation', success: false, email: data.email, method: 'POST', path: '/api/email/send-cancellation-user', error_message: 'Failed to send email' });
    return NextResponse.json({ message: 'Failed', status: 500 }, { status: 500 });
  }
}
