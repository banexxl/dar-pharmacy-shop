import { IContactForm } from '@/interfaces/contact/contact.interface';
import { EmailData } from '@/interfaces/email/email-to-fields.interface';

export const SendCheckoutConfirmationEmailToUser = async (
     data: EmailData
): Promise<{ status: number; message: string }> => {
     const response = await fetch('/api/email/send-confirmation-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
     });
     return response.json();
};

export const SendCheckoutConfirmationEmailToAdmin = async (
     data: EmailData
): Promise<{ status: number; message: string }> => {
     const response = await fetch('/api/email/send-confirmation-admin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
     });
     return response.json();
};

export const SendContactEmail = async (
     data: IContactForm
): Promise<Response> => {
     return await fetch('/api/email/send-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
     }).then((response) => response.json());
};
