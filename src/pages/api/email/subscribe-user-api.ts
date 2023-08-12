import { SubscribeClientService } from "@/services/subscribe.service"
import { NextRequest, NextResponse } from "next/server"

const SubscribeClientApi = async (request: NextRequest, response: NextResponse) => {

          if (request.method === 'POST') {
                    try {
                              await SubscribeClientService(request.body)
                              response.ok
                              return response.json()
                    } catch (error) {
                              !response.ok
                              response.json()
                    }
          } else {
                    response.json()
                    return !response.ok
          }

}

export default SubscribeClientApi