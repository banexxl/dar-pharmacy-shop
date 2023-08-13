import { SubscribeClientService } from "@/services/subscribe.service"
import { NextRequest, NextResponse } from "next/server"

const SubscribeClientApi = async (request: NextRequest, response: NextResponse) => {

          let subscribed: any

          if (request.method === 'POST') {
                    try {
                              subscribed = await SubscribeClientService(request.body)
                              return subscribed === 'Email already exists!' ?
                                        response.json()
                                        // new NextResponse('Email already exists!', { status: 200, statusText: 'Email already exists!' }) // ono ne radi ima bag prijavljen
                                        :
                                        response.json()
                              // new NextResponse('Email successfuly registered!', { status: 200, statusText: 'Email subscription successful!' })
                    } catch (error) {
                              response.json()
                              // new NextResponse('Internal server error!', { status: 500, statusText: 'Internal server error!' })
                    }
          } else {
                    // new NextResponse('Method not allowed!', { status: 405, statusText: 'Method not allowed!' })
                    response.json()
          }

}

export default SubscribeClientApi