import { ISubscribeEmailForm } from "@/interfaces/subscribe/subscription-interface"
import { SubscribeClient } from "@/services/subscribe.service"
import { Colors } from "@/styles/theme"
import { NextRequest, NextResponse } from "next/server"
import Swal from "sweetalert2"

const SubscribeClientService = async (request: NextRequest, response: NextResponse) => {

          if (request.method === 'POST') {
                    try {
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
                    } catch (error) {
                              !response.ok;
                              console.log(response.json())
                    }
          } else {
                    !response.ok;
                    console.log(response.json())
          }

}

export default SubscribeClientService