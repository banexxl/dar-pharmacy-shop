import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/services/email/email-config';
import { EmailData } from '@/interfaces/email/email-to-fields.interface';

export async function POST(request: NextRequest) {
  const data: EmailData = await request.json();

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
      subject: data.subject || 'Porudžbenica - Admin',
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Nova porudžbenica</h2>
          <p><strong>Kupac:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.customer_email}</p>
          <p><strong>Telefon:</strong> ${data.phone_number}</p>
          <p><strong>Adresa:</strong> ${data.street_address}, ${data.city}, ${data.country}</p>
          <p><strong>Broj porudžbine:</strong> ${data.order?.order_number || 'N/A'}</p>
          <p><strong>Ukupno:</strong> ${data.order?.total?.toFixed(2) || 0} RSD</p>
          <h3>Stavke:</h3>
          <ul>${itemsList}</ul>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent!', status: 200 });
  } catch (error) {
    console.error('Admin confirmation email error:', error);
    return NextResponse.json({ message: 'Failed', status: 500 }, { status: 500 });
  }
}
