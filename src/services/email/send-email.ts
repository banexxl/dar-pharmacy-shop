import { IContactForm } from "@/interfaces/contact/contact.interface";
import { IEmailToFields } from "@/interfaces/email/email-to-fields.interface";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export const SendCheckoutConfirmationEmailToUser = async (data: IEmailToFields) => {

     fetch("/api/email/send-confirmation-email-user-api", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
          },
     }).then((response: Response) => {
          if (response.ok) {
               toast.success('Hvala Vam na porudžbini! Proverite Vaš email!')
          } else {
               toast.error('Porudžbina iz nekog razloga nije poslata!')
          }
     })
}

export const SendCheckoutConfirmationEmailToAdmin = async (data: IEmailToFields) => {

     fetch("/api/email/send-confirmation-email-admin-api", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
          },
     })
}

export const SendContactEmail = async (data: IContactForm) => {

     await fetch("/api/email/send-contact-email-api", {
          method: "POST",
          headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          },
          body: JSON.stringify(data)
     }).then((response: Response) => {
          if (response.ok) {
               toast.success('Poruka je uspešno poslata!')
               redirect('/')
          } else {
               toast.error('Poruka iz nekog razloga nije poslata!')
          }
     })
}