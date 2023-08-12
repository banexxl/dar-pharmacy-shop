import { SubscribeClientService } from "@/services/subscribe.service"
import { NextRequest, NextResponse } from "next/server"

const SubscribeClientApi = async (request: NextRequest, response: NextResponse) => {

          let subscribed: any

          if (request.method === 'POST') {
                    try {
                              subscribed = await SubscribeClientService(request.body)

                              return subscribed === 'Email već postoji' ?
                                        new NextResponse(subscribed, { status: 200, statusText: 'Email subscription!' })
                                        :
                                        new NextResponse(subscribed, { status: 200, statusText: 'Email subscription successful!' })
                    } catch (error) {
                              new NextResponse(subscribed, { status: 500, statusText: 'ServerskInternal server error!' })
                    }
          } else {
                    new NextResponse(subscribed, { status: 405, statusText: 'Method not allowed!' })
                    return !response.ok
          }

}

export default SubscribeClientApi