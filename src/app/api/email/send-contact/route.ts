import { NextRequest, NextResponse } from 'next/server';
import { transporter } from '@/services/email/email-config';
import { logAction } from '@/services/logger';

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data || !data.name || !data.email || !data.message) {
    logAction({ action: 'email.send_contact', success: false, method: 'POST', path: '/api/email/send-contact', error_message: 'Bad request, data missing' });
    return NextResponse.json({ message: 'Bad request, data missing' }, { status: 400 });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: 'maja@apoteka-dar.rs',
      subject: `Kontakt forma - ${data.name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #EF4444;">Nova poruka sa kontakt forme</h2>
          <p><strong>Ime:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefon:</strong> ${data.phone_number || 'Nije unet'}</p>
          <p><strong>Poruka:</strong></p>
          <p>${data.message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    logAction({ action: 'email.send_contact', success: true, email: data.email, method: 'POST', path: '/api/email/send-contact', metadata: { name: data.name } });
    return NextResponse.json({ message: 'Email sent successfully!', status: 200 });
  } catch (error) {
    console.error('Contact email error:', error);
    logAction({ action: 'email.send_contact', success: false, email: data.email, method: 'POST', path: '/api/email/send-contact', error_message: 'Failed to send email' });
    return NextResponse.json({ message: 'Failed to send email', status: 500 }, { status: 500 });
  }
}
