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

export interface CancellationEmailPayload {
     email: string;
     name: string;
     order_number: string;
     total: number;
     items: { name: string; count: number; price: number }[];
}

export interface CancellationAdminEmailPayload {
     customer_name: string;
     customer_email: string;
     customer_phone: string;
     order_number: string;
     total: number;
     items: { name: string; count: number; price: number }[];
}

export const SendCancellationEmailToUser = async (
     data: CancellationEmailPayload
): Promise<{ status: number; message: string }> => {
     const response = await fetch('/api/email/send-cancellation-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
     });
     return response.json();
};

export const SendCancellationEmailToAdmin = async (
     data: CancellationAdminEmailPayload
): Promise<{ status: number; message: string }> => {
     const response = await fetch('/api/email/send-cancellation-admin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
     });
     return response.json();
};
