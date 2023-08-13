import { SubscribeClientService } from "@/services/subscribe.service"
import { NextApiRequest, NextApiResponse } from 'next';

const SubscribeClientApi = async (request: NextApiRequest, response: NextApiResponse) => {
          if (request.method === 'POST') {
                    try {
                              const subscribed = await SubscribeClientService(request.body);
                              if (subscribed!.message === 'Email already subscribed!') {
                                        return response.status(409).json({ error: 'Email already subscribed!' });
                              } else {
                                        return response.status(200).json({ message: 'Email successfully registered!' });
                              }
                    } catch (error) {
                              return response.status(500).json({ error: 'Internal server error!' });
                    }
          } else {
                    return response.status(405).json({ error: 'Method not allowed!' });
          }
};

export default SubscribeClientApi;
