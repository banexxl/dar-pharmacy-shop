import { IContactForm } from "@/interfaces/contact/contact.interface";
import { EmailData } from "@/interfaces/email/email-to-fields.interface";

export const SendCheckoutConfirmationEmailToUser = async (data: EmailData): Promise<{ status: number, message: string }> => {
     const response = await fetch("/api/email/send-confirmation-email-user-api", {
          method: "POST",
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
     });

     return response.json();
};

export const SendCheckoutConfirmationEmailToAdmin = async (data: EmailData): Promise<{ status: number, message: string }> => {
     const response = await fetch("/api/email/send-confirmation-email-admin-api", {
          method: "POST",
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
     });

     return response.json();
};

export const SendContactEmail = async (data: IContactForm): Promise<Response> => {

     return await fetch("/api/email/send-contact-email-api", {
          method: "POST",
          headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          },
          body: JSON.stringify(data)
     }).then((response: Response) => {
          if (response.ok) {
               return response.json();
          } else {
               return response.json();
          }
     });
}