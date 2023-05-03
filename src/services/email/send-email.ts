import { IContactForm } from "@/interfaces/contact/contact.interface";
import { IEmailToFields } from "@/interfaces/email/email-to-fields.interface";

export const SendCheckoutConfirmationEmail = async (data: IEmailToFields) => {

          fetch("/api/email/send-confirmation-email", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                    },
          }).then((res) => {
                    if (!res.ok) throw new Error("Failed to send message");
                    return res.json();
          });
}

export const SendContactEmail = async (data: IContactForm) => {

          fetch("/api/email/send-contact-email", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                    },
          }).then((res) => {
                    if (!res.ok) throw new Error("Failed to send message");
                    return res.json();
          });
}


