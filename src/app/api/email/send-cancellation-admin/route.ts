import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/services/email/email-config';
import { logAction } from '@/services/logger';

export interface CancellationAdminEmailData {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  order_number: string;
  total: number;
  items: { name: string; count: number; price: number }[];
}

export async function POST(request: NextRequest) {
  const data: CancellationAdminEmailData = await request.json();

  if (!data || !data.order_number) {
    logAction({ action: 'email.send_admin_cancellation', success: false, method: 'POST', path: '/api/email/send-cancellation-admin', error_message: 'Bad request' });
    return NextResponse.json({ message: 'Bad request', status: 400 }, { status: 400 });
  }

  const adminEmail = process.env.EMAIL_SERVER_USER;
  if (!adminEmail) {
    logAction({ action: 'email.send_admin_cancellation', success: false, method: 'POST', path: '/api/email/send-cancellation-admin', error_message: 'EMAIL_SERVER_USER not configured' });
    return NextResponse.json({ message: 'Admin email not configured', status: 500 }, { status: 500 });
  }

  try {
    const itemsList = Array.isArray(data.items)
      ? data.items.map((item) => `<li>${item.name} x${item.count} - ${(item.price * item.count).toFixed(2)} RSD</li>`).join('')
      : '';

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: adminEmail,
      subject: `Otkazana porudžbina #${data.order_number}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #DC2626;">Porudžbina otkazana</h2>
          <p>Kupac je otkazao porudžbinu.</p>
          <p><strong>Kupac:</strong> ${data.customer_name}</p>
          <p><strong>Email:</strong> ${data.customer_email}</p>
          <p><strong>Telefon:</strong> ${data.customer_phone || 'Nije dostupno'}</p>
          <p><strong>Broj porudžbine:</strong> #${data.order_number}</p>
          <p><strong>Ukupan iznos:</strong> ${data.total.toFixed(2)} RSD</p>
          ${itemsList ? `<h3>Stavke:</h3><ul>${itemsList}</ul>` : ''}
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    logAction({ action: 'email.send_admin_cancellation', success: true, email: data.customer_email, method: 'POST', path: '/api/email/send-cancellation-admin', metadata: { order_number: data.order_number } });
    return NextResponse.json({ message: 'Email sent!', status: 200 });
  } catch (error) {
    console.error('Admin cancellation email error:', error);
    logAction({ action: 'email.send_admin_cancellation', success: false, email: data.customer_email, method: 'POST', path: '/api/email/send-cancellation-admin', error_message: 'Failed to send email' });
    return NextResponse.json({ message: 'Failed', status: 500 }, { status: 500 });
  }
}
