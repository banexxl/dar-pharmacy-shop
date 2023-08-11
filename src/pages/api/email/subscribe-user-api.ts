import { ISubscribeEmailForm } from "@/interfaces/subscribe/subscription-interface"
import { SubscribeClient } from "@/services/subscribe.service"
import { Colors } from "@/styles/theme"
import { NextRequest, NextResponse } from "next/server"
import Swal from "sweetalert2"

export const SubscribeClientService = async (request: NextRequest, response: NextResponse) => {

          try {
                    if (request.method === 'POST') {
                              console.log(request);

                              await SubscribeClient(request.body).then(() => {
                                        Swal.fire({
                                                  title: 'Hvala Vam na prijavi!',
                                                  text: 'Nećemo Vas puno daviti :)',
                                                  icon: 'success',
                                                  background: Colors.secondary,
                                                  confirmButtonText: '<b >OK!</b> ',
                                                  // confirmButtonAriaLabel: 'Thumbs up, great!',
                                                  showCloseButton: true
                                        })
                              }).then(() => {
                                        response.ok
                              })
                    } else {
                              !response.ok;
                              console.log(response.json())
                    }
          } catch (error) {
                    !response.ok;
                    console.log(response.json())
          }
}