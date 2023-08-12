import { IContactForm } from "@/interfaces/contact/contact.interface";
import { IEmailToFields } from "@/interfaces/email/email-to-fields.interface";
import { Colors } from "@/styles/theme";
import Swal, { SweetAlertResult } from 'sweetalert2'

export const SendCheckoutConfirmationEmailToUser = async (data: IEmailToFields) => {

          fetch("/api/email/send-confirmation-email-user", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                    },
          }).then((response: Response) => {
                    if (response.ok) {
                              Swal.fire({
                                        title: 'Hvala Vam na porudžbini!',
                                        text: 'Proverite mejl i detalje porudžbenice!',
                                        icon: 'success',
                                        background: Colors.secondary,
                                        confirmButtonText: '<b >OK!</b> ',
                                        // confirmButtonAriaLabel: 'Thumbs up, great!',
                                        showCloseButton: true
                              })
                    } else {
                              Swal.fire({
                                        title: 'Eh!',
                                        text: 'Poruka iz nekog razloga nije poslata!',
                                        icon: 'error',
                                        confirmButtonText: 'OK!',
                                        confirmButtonAriaLabel: 'Thumbs down',
                                        showCloseButton: true,
                              })
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
                              Swal.fire({
                                        title: 'Hvala Vam na kontaktu!',
                                        text: 'Poruka poslata!',
                                        icon: 'success',
                                        confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK!',
                                        confirmButtonAriaLabel: 'Thumbs up, great!',
                                        showCloseButton: true,
                              }).then((result: SweetAlertResult) => {
                                        result.isConfirmed ?
                                                  window.location.href = '/'
                                                  : null
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


