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
                                        title: 'Bravo!',
                                        text: 'Poruka poslata!',
                                        icon: 'success',
                                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK!',
                                        confirmButtonAriaLabel: 'Thumbs up, great!',
                                        showCloseButton: true,
                                        showClass: {
                                                  popup: 'animate__animated animate__fadeInDown'
                                        },
                                        hideClass: {
                                                  popup: 'animate__animated animate__fadeOutUp'
                                        }
                              })
                    } else {
                              throw new Error('Failed to send email');
                    }
          })
}


