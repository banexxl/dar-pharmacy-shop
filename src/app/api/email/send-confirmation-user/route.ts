import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/services/email/email-config';

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data || !data.email) {
    return NextResponse.json({ message: 'Bad request', status: 400 }, { status: 400 });
  }

  try {
    const orderItems = Array.isArray(data.order?.items) ? data.order.items : [];
    const itemsList = orderItems.map((item: any) =>
      `<li>${item.name} x${item.count} - ${(item.price * item.count).toFixed(2)} RSD</li>`
    ).join('');

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: data.email,
      subject: data.subject || 'Potvrda porudžbenice - Apoteka DAR',
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://apoteka-dar.rs/images/home-page/apotekaDar.jpg" alt="Apoteka DAR" width="80" style="border-radius: 50%;" />
          </div>
          <h2 style="color: #EF4444; text-align: center;">Hvala na porudžbini!</h2>
          <p>Poštovani/a ${data.name},</p>
          <p>Vaša porudžbina <strong>#${data.order?.order_number || ''}</strong> je uspešno kreirana.</p>
          <h3>Stavke:</h3>
          <ul>${itemsList}</ul>
          <p><strong>Ukupno:</strong> ${data.order?.total?.toFixed(2) || 0} RSD</p>
          <p><strong>Dostava na:</strong> ${data.street_address}, ${data.city}</p>
          <p>Očekivana dostava: 3-5 radnih dana.</p>
          <hr />
          <p style="text-align: center; color: #666;">Vaša <a href="https://apoteka-dar.rs" style="color: #EF4444;">Apoteka DAR</a></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent!', status: 200 });
  } catch (error) {
    console.error('User confirmation email error:', error);
    return NextResponse.json({ message: 'Failed', status: 500 }, { status: 500 });
  }
}
