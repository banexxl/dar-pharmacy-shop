import { IContactForm } from "@/interfaces/contact/contact.interface";
import { IEmailToFields } from "@/interfaces/email/email-to-fields.interface";
import Swal from 'sweetalert2'

export const SendCheckoutConfirmationEmail = async (data: IEmailToFields) => {

          fetch("/api/email/send-confirmation-email", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                    },
          }).then((res: any) => {
                    if (!res.ok) alert(`Message not sent! ${res.message}`)
                    return res.json();
          });
}

export const SendContactEmail = async (data: IContactForm) => {

          await fetch("/api/email/send-contact-email", {
                    method: "POST",
                    headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    },
                    body: JSON.stringify(data)
          }).then((response: Response) => {
                    if (response.ok) {
                              Swal.fire({
                                        title: 'Hvala Vam na kontaktu!',
                                        text: 'Poruka poslata!',
                                        icon: 'success',
                                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK!',
                                        confirmButtonAriaLabel: 'Thumbs up, great!',
                                        showCloseButton: true,
                              })
                    } else {
                              Swal.fire({
                                        title: 'Eh!',
                                        text: 'Poruka iz nekog razloga nije poslata!',
                                        icon: 'error',
                                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK!',
                                        confirmButtonAriaLabel: 'Thumbs down',
                                        showCloseButton: true,
                              })
                    }
          })
}


