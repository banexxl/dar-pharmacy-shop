import { ISubscribeEmailForm } from "@/interfaces/subscribe/subscription-interface"
import { Colors } from "@/styles/theme"
import { NextRequest, NextResponse } from "next/server"
import Swal from "sweetalert2"

export const SubscribeClientService = async (request: NextRequest) => {

          fetch("/api/email/subscribe-user", {
                    method: "POST",
                    body: request.body,
                    headers: {
                              'Content-Type': 'application/json',
                              'Access-Control-Allow-Origin': '*',
                              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                    },
          }).then((response: Response) => {
                    if (response.ok) {
                              Swal.fire({
                                        title: 'Hvala Vam puno na prijavi!',
                                        text: 'Nećemo Vas puno daviti :)',
                                        icon: 'success',
                                        background: Colors.secondary,
                                        confirmButtonText: '<b >OK!</b> ',
                                        // confirmButtonAriaLabel: 'Thumbs up, great!',
                                        showCloseButton: true
                              })
                    } else {
                              Swal.fire({
                                        title: 'Eh! Nismo uspeli da upišemo vaš email!',
                                        text: 'Probajte opet kasnije, ili nas kontaktirajete!',
                                        icon: 'error',
                                        confirmButtonText: 'OK!',
                                        confirmButtonAriaLabel: 'Thumbs down',
                                        showCloseButton: true,
                              })
                    }
          })
}